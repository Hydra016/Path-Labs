import React from "react";
import Image from "next/image";

const SingleTest = ({ data }) => {
  return (
    <div className="singleTest">
      <Image src={data.icon} width={50} height={50} />
      <div className="test-desc-container">
        <span className="single-test-heading">{data.heading}</span>
        <span>{data.description}</span>
      </div>
    </div>
  );
};

export default SingleTest;
