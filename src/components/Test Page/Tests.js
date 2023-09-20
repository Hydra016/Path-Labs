import React, { useState } from "react";
import SingleTest from "./SingleTest";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import SwiperCore, { Navigation } from "swiper";
import { useMobileDetection } from "@/hooks/useMobile";

// Initialize Swiper's navigation module
SwiperCore.use([Navigation]);

const Tests = () => {
  const isMobile = useMobileDetection();
  const [data, setData] = useState([
    {
      icon: "/test1.png",
      heading: "Disorder of Growth",
      description: 'Showing 1- 1 of 1 result for " Disorder Of Growth "',
    },
    {
      icon: "/test2.png",
      heading: "Bone",
      description: 'Showing 1- 1 of 1 result for " Bone "',
    },
    {
      icon: "/test3.png",
      heading: "AIDS",
      description: 'Showing 1- 4 of 4 results for " AIDS "',
    },
    {
      icon: "/test4.png",
      heading: "Allergy",
      description: 'Showing 1- 32 of 32 results for " Allergy "',
    },
    {
      icon: "/test2.png",
      heading: "Disorder of Growth",
      description: 'Showing 1- 1 of 1 result for " Disorder Of Growth " ',
    },
  ]);

  let swiper;

  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <div className="tests-container">
      <div className="arrow" onClick={goPrev}>
        <Image src="/prev.png" width={20} height={15} />
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={isMobile ? 1 : 4}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSwiper={(s) => (swiper = s)}
      >
        {data.map((test) => {
          return (
            <SwiperSlide key={test.heading}>
              <SingleTest data={test} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="arrow" onClick={goNext}>
        <Image src="/next.png" width={20} height={15} />
      </div>
    </div>
  );
};

export default Tests;
