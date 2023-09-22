import React from "react";
import Image from "next/image";
import { useMobileDetection } from "@/hooks/useMobile";

const Review = ({ review }) => {
  const { message, name, icon, image } = review;
  const isMobile = useMobileDetection();

  return (
    <div className="review-container">
      <div className="review-img-container">
        <div className="review-img-box"></div>
        <Image
          className="review-img"
          src={image}
          objectFit="contain"
          width={isMobile ? 150 : 300}
          height={isMobile ? 150 : 250}
        />
      </div>
      <div className="review-content">
        <div>
          <span>{message}</span>
          <p>Thanks Cpathlabs</p>
        </div>
        <div className="review-content-sub">
          <span>{name}</span>
          <Image src={icon} width={77} height={32} />
        </div>
      </div>
    </div>
  );
};

export default Review;
