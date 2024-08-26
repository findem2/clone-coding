import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {
  // Navigation,
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
import slice1 from "../../img/slide/700-1.webp";
import slice2 from "../../img/slide/700-2.webp";
import slice3 from "../../img/slide/700-3.webp";
import slice4 from "../../img/slide/700-4.webp";

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
        delay: 2000,
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
      <SwiperSlide
        className="flex items-center justify-center relative"
        effect="fade"
      >
        <div>
          <picture>
            <source srcset={slice1} media="(max-width: 699px)" />
            <img
              src={image1}
              alt="사진설명"
              className="object-cover w-full  min-h-full "
            />
          </picture>
          {/* <img
          src={image1}
          alt="Slide 1"
          className="object-cover w-full  min-h-full h-[1200px] rotate-45 scale-100 md:rotate-0 md:scale-100"
        /> */}
          <div className=" absolute bottom-0 pb-16 pl-5 md:p-8 lg:p-12  ">
            <div
              className="title lg:text-5xl text-white mb-7 text-4xl"
              data-swiper-parallax=" "
            >
              MW09 True Wireless Earphones
            </div>
            <div className="text-white mb-7" data-swiper-parallax=" ">
              Our newest active noise-cancelling earphones
            </div>
            <button
              className="cursor-pointer bg-white text-blacktext-base hover:bg-gray-700 px-8 py-4 text-sm font-semibold"
              data-swiper-parallax=" "
            >
              Shop Now
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center relative">
        <div
          className=" absolute bottom-0 pb-16 pl-5 md:p-8 lg:p-12 "
          effect="fade"
        >
          <div
            className="lg:text-5xl text-white mb-7 text-4xl"
            data-swiper-parallax=" "
          >
            MG20 Wireless Gaming
            <p>Headphones</p>
          </div>
          <div className="text-white mb-7" data-swiper-parallax=" ">
            Never Play the Same
          </div>
          <button
            className="cursor-pointer bg-white text-blacktext-base hover:bg-gray-700 px-8 py-4 text-sm font-semibold"
            data-swiper-parallax=" "
          >
            Shop Now
          </button>
        </div>
        <picture>
          <source srcset={slice2} media="(max-width: 699px)" />
          <img
            src={image2}
            alt="사진설명"
            className="object-cover w-full  min-h-full "
          />
        </picture>
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center relative">
        <div
          className=" absolute bottom-0 pb-16 pl-5 md:p-8 lg:p-12 "
          effect="fade"
        >
          <div
            className="lg:text-5xl text-white mb-7 text-4xl"
            data-swiper-parallax=" "
          >
            MW75 Active Noise-Cancelling
            <p>Wireless Headphones</p>
          </div>
          <div className="text-white mb-7" data-swiper-parallax=" ">
            Perfect silence, perfect sound
          </div>
          <button
            className="cursor-pointer bg-white text-blacktext-base hover:bg-gray-700 px-8 py-4 text-sm font-semibold"
            data-swiper-parallax=" "
          >
            Shop Now
          </button>
        </div>
        <picture>
          <source srcset={slice3} media="(max-width: 699px)" />
          <img
            src={image3}
            alt="사진설명"
            className="object-cover w-full  min-h-full "
          />
        </picture>
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center relative">
        <div
          className=" absolute bottom-0 pb-16 pl-5 md:p-8 lg:p-12 "
          effect="fade"
          ㄴㄴ
        >
          <div
            className="lg:text-5xl text-white mb-7 text-4xl"
            data-swiper-parallax=" "
          >
            MH40 Wireless Headphones
          </div>
          <div className="text-white mb-7" data-swiper-parallax=" ">
            Iconic design and brilliant acoustics
          </div>
          <button
            className="cursor-pointer bg-white  text-blacktext-base hover:bg-gray-700 px-8 py-4 text-sm font-semibold"
            data-swiper-parallax=" "
          >
            Shop Now
          </button>
        </div>
        <picture>
          <source srcset={slice4} media="(max-width: 699px)" />
          <img
            src={image4}
            alt="사진설명"
            className="object-cover w-full  min-h-full "
          />
        </picture>
      </SwiperSlide>
      <div className="swiper-pagination-custom flex justify-end pr-60 ml-40 absolute z-20 h-10 md:h-12 lg:h-[4rem] xxl:h-[4.5rem]">
        {/* <div className="absolute">
          <div className="swiper-pagination-bullet pr-auto w-2 h-2 rounded-lg text-orange-800 inline-block m-5 mt-0 cursor-pointer mb-20 z-20"></div>
        </div> */}
      </div>
      <div className="absolute bottom-4 right-10 z-50 md:bottom-8 lg:bottom-12 xxl:bottom-[3.5rem]">
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
