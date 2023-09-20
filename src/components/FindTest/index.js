import Image from "next/image";
import React from "react";
import CheckHeartRate from "./CheckHeartRate";

const index = () => {
  return (
    <div className="findTest-container">
      <div>
        <div>
          <p className="test-text-top">Find Test</p>
          <p className="findtest-heading">
            With more than 80+ tests covered and reliable results, you can be
            sure that your health is in the best hands.
          </p>
          <p className="findtest-text">
            With medical professionals in more than 100+ countries and a 98%
            customer satisfaction rate, Doctoralia offers reliable health
            information. With an extensive network of doctors, we are able to
            offer a wide range of high quality medical tests. What's more, our
            prices are up to 70% cheaper than other online providers.
          </p>
        </div>
        <div className="findtest-check">
          <Image src="/check.png" width={20} height={20} />
          <span className="findtest-check-test">
            100% free app designed to help you find the right Test for you.{" "}
          </span>
        </div>
        <div className="findtest-check">
          <Image src="/check.png" width={20} height={20} />
          <span className="findtest-check-test">
            Available 900+ Labs with specialists
          </span>
        </div>
        <div className="findTest-btn-container">
          <button className="primary-btn">See the test list</button>
        </div>
      </div>
      <CheckHeartRate />
    </div>
  );
};

export default index;
