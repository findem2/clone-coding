import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Parallax,
} from "swiper/modules";

// 이미지 경로를 import
import image1 from "../../img/slide/slide1.jpg";
import image2 from "../../img/slide/slide2.jpg";
import image3 from "../../img/slide/slide3.jpg";
import image4 from "../../img/slide/slide4.jpg";

// Play/Pause 아이콘 import
import PlayIcon from "../icon/play";
import PauseIcon from "../icon/pause";

const MySwiper = () => {
  const swiperRef = useRef(null);

  // 슬라이드 재생/정지 상태를 관리하는 state
  const [isPlaying, setIsPlaying] = useState(true);

  // 재생/정지 상태를 전환하는 함수
  const toggleAutoplay = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (isPlaying) {
        swiperRef.current.swiper.autoplay.stop(); // 슬라이드 정지
      } else {
        swiperRef.current.swiper.autoplay.start(); // 슬라이드 재생
      }
      setIsPlaying(!isPlaying); // 재생/정지 상태 토글
    }
  };

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        modules={[Pagination, Autoplay, EffectFade, Parallax]}
        direction={"horizontal"}
        centeredSlides={true}
        loop={true}
        parallax={true}
        effect={"fade"}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          bulletClass:
            "pr-auto w-2 h-2 rounded-lg bg-gray-700 inline-block m-5 mt-0 cursor-pointer mb-20 z-20",
          bulletActiveClass: "bg-slate-50 w-10 px-3",
          horizontalClass: "!absolute",
          el: ".swiper-pagination-custom", // 커스텀 클래스를 지정
          clickable: true,
        }}
        className="w-full relative"
      >
        <SwiperSlide className="flex items-center justify-center relative">
          <img
            src={image1}
            alt="Slide 1"
            className="object-cover w-full min-h-full"
          />
          <div className="absolute bottom-0 p-16" effect="fade">
            <div className="title text-5xl" data-swiper-parallax="2000">
              MW09 True Wireless Earphones
            </div>
            <div className="text" data-swiper-parallax="2000">
              Our newest active noise-cancelling earphones
            </div>
            <button
              className="cursor-pointer bg-black text-white w-24 h-10 text-base hover:bg-gray-700 z-50"
              data-swiper-parallax="2000"
            >
              Shop Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center relative">
          <div className="absolute bottom-0 p-16" effect="fade">
            <div className="title text-5xl" data-swiper-parallax="2000">
              MG20 Wireless Gaming
              <p>Headphones</p>
            </div>
            <div className="text" data-swiper-parallax="2000">
              Never Play the Same
            </div>
            <button
              className="cursor-pointer bg-black text-white w-24 h-10 text-base hover:bg-gray-700 z-50"
              data-swiper-parallax="2000"
            >
              Shop Now
            </button>
          </div>
          <img
            src={image2}
            alt="Slide 2"
            className="object-cover w-full min-h-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center relative">
          <div className="absolute bottom-0 p-16" effect="fade">
            <div className="title text-5xl" data-swiper-parallax="2000">
              MW75 Active Noise-Cancelling
              <p>Wireless Headphones</p>
            </div>
            <div className="text" data-swiper-parallax="2000">
              Perfect silence, perfect sound
            </div>
            <button
              className="cursor-pointer bg-black text-white w-24 h-10 text-base hover:bg-gray-700 z-50"
              data-swiper-parallax="2000"
            >
              Shop Now
            </button>
          </div>
          <img
            src={image3}
            alt="Slide 3"
            className="object-cover w-full min-h-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center relative">
          <div className="absolute bottom-0 p-16" effect="fade">
            <div className="title text-5xl" data-swiper-parallax="2000">
              MH40 Wireless Headphones
            </div>
            <div className="text" data-swiper-parallax="2000">
              Iconic design and brilliant acoustics
            </div>
            <button
              className="cursor-pointer bg-black text-white w-24 h-10 text-base hover:bg-gray-700 z-50"
              data-swiper-parallax="2000"
            >
              Shop Now
            </button>
          </div>
          <img
            src={image4}
            alt="Slide 4"
            className="object-cover w-full min-h-full"
          />
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination-custom flex justify-end pr-5 absolute z-20 relative">
        {/* <div className="absolute">
          <div className="swiper-pagination-bullet pr-auto w-2 h-2 rounded-lg text-orange-800 inline-block m-5 mt-0 cursor-pointer mb-20 z-20"></div>
        </div> */}
      </div>
      {/* 재생/정지 토글 버튼 */}
      <div className="absolute top-4 right-4 z-50">
        <button onClick={toggleAutoplay} className="focus:outline-none">
          {isPlaying ? (
            <PauseIcon className="w-10 h-10" /> // 정지 아이콘
          ) : (
            <PlayIcon className="w-10 h-10" /> // 재생 아이콘
          )}
        </button>
      </div>
    </div>
  );
};

export default MySwiper;
