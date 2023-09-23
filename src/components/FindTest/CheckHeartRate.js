import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { fetchHeartAttack } from "@/features/medicalSlice";
import { MoonLoader } from "react-spinners";

const CheckHeartRate = () => {
  const [data, setData] = useState({
    age: "",
    blood_pressure: "",
    cholesterol: "",
    heart_rate: "",
  });
  const [checked, setChecked] = useState(false);
  const [err, setErr] = useState(false);
  const dispatch = useDispatch();
  const { heartRate, isLoading } = useSelector(
    (state) => state.heartRatePrediction
  );

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  useEffect(() => {
    const values = Object.values(data);
    const hasEmptyValue = values.some((value) => !value);

    if (hasEmptyValue || !checked) {
      setErr(true);
    } else {
      setErr(false);
    }
  }, [data, checked]);

  const resetValues = () => {
    setData({
      age: "",
      blood_pressure: "",
      cholesterol: "",
      heart_rate: "",
    });
  };

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
          onChange={(e) =>
            setData({
              ...data,
              age: e.target.value,
            })
          }
        />
        <input
          className="heart-rate-input login-input"
          type="number"
          placeholder="Blood Pressure"
          onChange={(e) =>
            setData({
              ...data,
              blood_pressure: e.target.value,
            })
          }
        />
        <input
          className="heart-rate-input login-input"
          type="number"
          placeholder="Cholesterol"
          onChange={(e) =>
            setData({
              ...data,
              cholesterol: e.target.value,
            })
          }
        />
        <input
          className="heart-rate-input login-input"
          type="number"
          placeholder="Heart Rate"
          onChange={(e) =>
            setData({
              ...data,
              heart_rate: e.target.value,
            })
          }
        />
      </div>
      <div class="checkbox-wrapper">
        <input
          onChange={() => setChecked(!checked)}
          id="check1-61"
          class="check"
          type="checkbox"
        />
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
          <span className="checkbox-text">
            Agree{" "}
            <Link className="terms" href="/">
              Terms and Conditions
            </Link>
          </span>
        </label>
      </div>
      <div className="heart-rate-btn">
        <button
          disabled={err}
          onClick={() => {
            dispatch(fetchHeartAttack(data));
          }}
          className="primary-btn"
        >
          Check
        </button>
      </div>
      <div className="results-container">
        {isLoading ? (
          <MoonLoader
            color="#8F3E97"
            loading={isLoading}
            cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
          />
        ) : heartRate ? (
          <span>
            You are{" "}
            <span className="result">{Math.floor(heartRate * 100)}%</span> prone
            to a heart attack
          </span>
        ) : (
          <span>
            Get your results by filling in the valid data and checking the
            checkbox
          </span>
        )}
      </div>
    </div>
  );
};

export default CheckHeartRate;
