import React, { useState } from "react";
import Link from "next/link";
import Review from "./Review";
import Image from "next/image";
import SwiperCore, { Navigation, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

SwiperCore.use([Navigation]);

const Reviews = () => {
  const [data, setData] = useState([
    {
      message:
        "Cpathlabs gave me best service  ...home collection  and with in time reports my doctor is also told reports  are very accurate.",
      name: "Naufal Hidayat",
      name: "Mikhail Uraslov",
      icon: "/google.png",
      image: "/review1.png",
    },
    {
      message:
        "Cpathlabs provided excellent service with home collection and timely and accurate reports, as confirmed by my doctor.",
      name: "Jasmin Brown",
      icon: "/google.png",
      image: "/review2.jpg",
    },
    {
      message:
        "Cpathlabs delivered outstanding service, including home collection and on-time, highly accurate reports, as commended by my doctor.",
      name: "Jacob Smith",
      icon: "/google.png",
      image: "/review3.jpg",
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
    <div>
      <div className="reviews-container">
        <div className="center">
          <span className="test-heading">Our patients feedback about us</span>
        </div>
        <span className="test-text-top center">
          their impression after using our service
        </span>
      </div>

      <div className="review-stuff">
        <div className="background"></div>
        <div className="review-main">
          <div className="swiper-container-reviews">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              effect="fade"
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              onSwiper={(s) => (swiper = s)}
            >
              {data.map((review) => {
                return (
                  <SwiperSlide className="swiper-slide">
                    <Review review={review} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="review-btns-container">
              <div className="arrow-review">
                <Image
                  src="/left-arrow.png"
                  onClick={goPrev}
                  width={30}
                  height={25}
                />
              </div>
              <div className="arrow-review">
                <Image
                  src="/right-arrow.png"
                  onClick={goNext}
                  width={30}
                  height={25}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
