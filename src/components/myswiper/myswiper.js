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
import PlayIcon from "../icon/play";
import PauseIcon from "../icon/pause";

const MySwiper = () => {
  // const pagination = {
  //   clickable: true,
  //   bulletClass: "w-4 h-4 rounded-lg bg-black inline-block",
  //   bulletActiveClass: "bg-red-500 w-20",
  // };
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
    <Swiper
      modules={[Pagination, Autoplay, EffectFade, Parallax]}
      // dir="rtl"
      ref={swiperRef}
      autoplayPause={true}
      autoplayResume={true}
      allowTouchMove={false}
      direction={"horizontal"}
      centeredSlides={true}
      loop={true}
      parallax={true}
      effect={"fade"}
      autoplay={{
        delay: 600000,
        disableOnInteraction: false,
      }}
      pagination={{
        bulletClass:
          " pr-auto w-2 h-2 rounded-lg bg-gray-700 inline-block m-3 mt-0 cursor-pointer mb-16 z-20",
        bulletActiveClass: "bg-slate-50 w-10 px-3",
        // horizontalClass: "!absolute",
        el: ".swiper-pagination-custom", // 커스텀 클래스를 지정
        clickable: true,
        // bulletClass: "swiper-pagination-bullet",
        // bulletActiveClass: "swiper-pagination-bullet-active",
      }}
      // navigation={
      //   {
      //     // nextEl: ".swiper-button-next",
      //     // prevEl: ".swiper-button-prev",
      //     // pasueEl: ".swiper-button-pasue",
      //     // resumeEl: ".swiper-button-resume",
      //   }
      // }
      className="w-full relative"
    >
      <SwiperSlide className="flex items-center justify-center relative">
        <img
          src={image1}
          alt="Slide 1"
          className="object-cover w-full  min-h-full"
        />
        <div className=" absolute bottom-0 p-8 lg:p-12  " effect="fade">
          <div
            className="title lg:text-5xl text-white mb-7 text-4xl"
            data-swiper-parallax="2000"
          >
            MW09 True Wireless Earphones
          </div>
          <div className="text-white mb-7" data-swiper-parallax="2000">
            Our newest active noise-cancelling earphones
          </div>
          <button
            className="cursor-pointer bg-white text-blacktext-base hover:bg-gray-700 px-8 py-4"
            data-swiper-parallax="2000"
          >
            Shop Now
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center relative">
        <div className=" absolute bottom-0 p-8 lg:p-12 " effect="fade">
          <div
            className="lg:text-5xl text-white mb-7 text-4xl"
            data-swiper-parallax="2000"
          >
            MG20 Wireless Gaming
            <p>Headphones</p>
          </div>
          <div className="text-white mb-7" data-swiper-parallax="2000">
            Never Play the Same
          </div>
          <button
            className="cursor-pointer bg-white text-blacktext-base hover:bg-gray-700 px-8 py-4"
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
        <div className=" absolute bottom-0 p-8 lg:p-12 " effect="fade">
          <div
            className="lg:text-5xl text-white mb-7 text-4xl"
            data-swiper-parallax="2000"
          >
            MW75 Active Noise-Cancelling
            <p>Wireless Headphones</p>
          </div>
          <div className="text-white mb-7" data-swiper-parallax="2000">
            Perfect silence, perfect sound
          </div>
          <button
            className="cursor-pointer bg-white text-blacktext-base hover:bg-gray-700 px-8 py-4"
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
        <div className=" absolute bottom-0 p-8 lg:p-12 " effect="fade" ㄴㄴ>
          <div
            className="lg:text-5xl text-white mb-7 text-4xl"
            data-swiper-parallax="2000"
          >
            MH40 Wireless Headphones
          </div>
          <div className="text-white mb-7" data-swiper-parallax="2000">
            Iconic design and brilliant acoustics
          </div>
          <button
            className="cursor-pointer bg-white text-blacktext-base hover:bg-gray-700 px-8 py-4"
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
      <div className="swiper-pagination-custom flex justify-end pr-60 ml-40 absolute z-20 md:h-12 lg:h-[4rem] xxl:h-[4.5rem]">
        {/* <div className="absolute">
          <div className="swiper-pagination-bullet pr-auto w-2 h-2 rounded-lg text-orange-800 inline-block m-5 mt-0 cursor-pointer mb-20 z-20"></div>
        </div> */}
      </div>
      <div className="absolute bottom-8 right-10 z-50 lg:bottom-12 xxl:bottom-[3.5rem]">
        <button onClick={toggleAutoplay} className="focus:outline-none">
          {isPlaying ? (
            <PauseIcon className="w-20 h-20" /> // 정지 아이콘
          ) : (
            <PlayIcon className="w-20 h-20" /> // 재생 아이콘
          )}
        </button>
      </div>

      {/* Navigation buttons */}
      {/* <div className="swiper-button-next text-white bg-black p-2 rounded-full"></div>
      <div className="swiper-button-prev text-white bg-black p-2 rounded-full"></div> */}
      {/* <div className="swiper-button-pasue text-white bg-black p-2 rounded-full"></div>
      <div className="swiper-button-resume text-white bg-red-700 p-2 rounded-full"></div> */}

      {/* <button class="autoplayPause ">정지</button>
      <button class="autoplayResume">시작</button> */}
    </Swiper>
  );
};

export default MySwiper;
