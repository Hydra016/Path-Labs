import React from "react";
import Login from "./Login";
import Advertisement from "./Advertisement";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="landing-content-one">
          <p className="primary-heading">
            Medical Test Now Simplified For{" "}
            <span className="highlighted">Everyone</span>
          </p>
          <p className="text-secondary text-landing">
            it’s important to take care of your health even if you seem healthy.
            stay healthy and fit.it's time to take care of your health before
            it's too late.
          </p>
          <button className="primary-btn">List of Test Available</button>
        </div>
        <div className="advertisement-container">
          <div className="back-circle">
            <div className="inner-circle"></div>
            <div className="advertisement-img-container">
              <div className="adver-img-container">
                <Image
                  className="adver-img"
                  src="/Actor.png"
                  height={400}
                  width={350}
                />
              </div>
            </div>
            <div className="advertisement-one">
              <Image src="/Adver-1.png" width={100} height={50} />
            </div>
            <div className="advertisement-two">
              <Image src="/Adver-2.png" width={80} height={80} />
            </div>
          </div>
        </div>
        {/* <Advertisement /> */}
        <Login />
      </div>
      <div className="landing-svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,96C672,64,768,32,864,48C960,64,1056,128,1152,149.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className="extra-wave"></div>
      </div>
    </div>
  );
};

export default Landing;
