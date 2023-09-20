import React from "react";
import Link from "next/link";

const CheckHeartRate = () => {
  return (
    <div className="heart-rate-container">
      <span>
        <b>How much are you prone to a heart attack?</b>
      </span>
      <span className="heart-rate-text">Take a simple test and find out!</span>
      <div className="heart-rate-inputs">
        <input
          className="heart-rate-input login-input"
          type="number"
          placeholder="Age"
        />
        <input
          className="heart-rate-input login-input"
          type="number"
          placeholder="Blood Pressure"
        />
        <input
          className="heart-rate-input login-input"
          type="number"
          placeholder="Cholesterol"
        />
        <input
          className="heart-rate-input login-input"
          type="number"
          placeholder="Heart Rate"
        />
      </div>
      <div class="checkbox-wrapper">
        <input id="check1-61" class="check" type="checkbox" />
        <label class="label" for="check1-61">
          <svg viewBox="0 0 95 95" height="25" width="25">
            <rect
              fill="none"
              stroke="black"
              height="50"
              width="50"
              y="20"
              x="30"
            ></rect>
            <g transform="translate(0,-952.36222)">
              <path
                class="path1"
                fill="none"
                stroke-width="3"
                stroke="black"
                d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4"
              ></path>
            </g>
          </svg>
          <span className="checkbox-text">Agree <Link className="terms" href="/">Terms and Conditions</Link></span>
        </label>
      </div>
      <div className="heart-rate-btn">
        <button className="primary-btn">
            Check
        </button>
      </div>
      <div className="results-container">
        <span>You are <span className="result">50%</span> prone to a heart attack</span>
      </div>
    </div>
  );
};

export default CheckHeartRate;
