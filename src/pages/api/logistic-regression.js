const tf = require("@tensorflow/tfjs");
const _ = require("lodash");

class LogisticRegression {
  constructor(features, labels, options) {
    this.features = this.processFeatures(features);
    this.labels = tf.tensor(labels);
    this.costHistory = [];

    this.options = Object.assign(
      { learningRate: 0.1, iterations: 1000, decisionBoundary: 0.2 },
      options
    );
    this.weights = tf.zeros([this.features.shape[1], 1]);
  }

  gradientDescent(features, labels) {

    const currentGuesses = features.matMul(this.weights).sigmoid();

    const differences = currentGuesses.sub(labels);

    const slopes = features
      .transpose()
      .matMul(differences)
      .div(features.shape[0]);

    this.weights = this.weights.sub(slopes.mul(this.options.learningRate));
  }

  train() {
    const batchQuantity = Math.floor(
      this.features.shape[0] / this.options.batchSize
    );

    for (let i = 0; i < this.options.iterations; i++) {
      for (let j = 0; j < batchQuantity; j++) {
        const startIndex = j * this.options.batchSize;
        const featureSlice = this.features.slice(
          [startIndex, 0],
          [this.options.batchSize, -1]
        );
        const labelSlice = this.labels.slice(
          [startIndex, 0],
          [this.options.batchSize, -1]
        );
        this.gradientDescent(featureSlice, labelSlice);
      }
      this.recordCost();
      this.updateLearningRate();
    }
  }

  standardize(features) {
    const min = features.min();
    const max = features.max();

    this.min = min;
    this.max = max;

    return features.sub(min).div(max.sub(min));
  }
  predict(observations) {
    const prediction = this.processFeatures(observations)
      .matMul(this.weights)
      .sigmoid();

    return prediction.arraySync();
  }

  test(testFeatures, testLabels) {
    const predictionValues = this.processFeatures(testFeatures)
      .matMul(this.weights)
      .sigmoid();

    const predictions = predictionValues
      .greater(this.options.decisionBoundary)
      .cast("float32");

    testLabels = tf.tensor(testLabels);
    const incorrect = predictions.sub(testLabels).abs().sum().arraySync();
    return (predictions.shape[0] - incorrect) / predictions.shape[0];
  }

  processFeatures(features) {
    features = tf.tensor(features);

    if (this.mean && this.variance) {
      features = features.sub(this.mean).div(this.variance.pow(0.5));
    } else {
      features = this.standardize(features);
    }

    features = tf.ones([features.shape[0], 1]).concat(features, 1);

    return features;
  }

  recordCost() {
    const guesses = this.features.matMul(this.weights).sigmoid();
    const termOne = this.labels.transpose().matMul(guesses.log());
    const termTwo = this.labels
      .mul(-1)
      .add(1)
      .transpose()
      .matMul(guesses.mul(-1).add(1).log());

    const cost = termOne
      .add(termTwo)
      .div(this.features.shape[0])
      .mul(-1)
      .arraySync();
    this.costHistory.unshift(cost);
  }

  updateLearningRate() {
    if (this.costHistory.length < 2) {
      return;
    }

    if (this.costHistory[0] > this.costHistory[1]) {
      this.options.learningRate /= 2;
    } else {
      this.options.learningRate *= 1.05;
    }
  }
}

module.exports = LogisticRegression;
