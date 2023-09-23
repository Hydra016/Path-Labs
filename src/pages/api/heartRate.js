const tf = require("@tensorflow/tfjs");
const loadCSV = require("./load-csv");
const LogisticRegression = require("./logistic-regression");
const _ = require("lodash");

const { features, testFeatures, testLabels, labels } = loadCSV(
  "Heart_Disease_Prediction.csv",
  {
    dataColumns: ["Age", "BP", "Cholesterol", "Max_HR"],
    labelColumns: ["Disease"],
    shuffle: true,
    splitTest: 50,
  }
);

const regression = new LogisticRegression(features, labels, {
  learningRage: 0.5,
  iterations: 100,
  batchSize: 50,
  decisionBoundary: 0.5,
});

regression.train();
console.log(`accuracy: ${regression.test(testFeatures, testLabels)}`);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { age, blood_pressure, cholesterol, heart_rate } = req.body;
    const value = regression.predict([
      [
        parseInt(age),
        parseInt(blood_pressure),
        parseInt(cholesterol),
        parseInt(heart_rate),
      ],
    ]);
    res
      .status(200)
      .json({ success: true, prediction: value ? value[0][0] : 0 });
  } else {
    res.status(405).json({ success: false, message: "you are stupid" });
  }
}
