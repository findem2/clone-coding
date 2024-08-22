import React from "react";
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

const MySwiper = () => {
  // const pagination = {
  //   clickable: true,
  //   bulletClass: "w-4 h-4 rounded-lg bg-black inline-block",
  //   bulletActiveClass: "bg-red-500 w-20",
  // };

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade, Parallax]}
      allowTouchMove={false}
      direction={"horizontal"}
      centeredSlides={true}
      loop={true}
      parallax={true}
      effect={"fade"}
      autoplay={{ delay: 10000, pauseOnMouseEnter: false }}
      pagination={{
        bulletClass:
          "float-end w-2 h-2 rounded-lg bg-gray-700 inline-block m-5 cursor-pointer mb-24",
        bulletActiveClass: "bg-slate-50 w-10 px-3",
        clickable: true,
      }}
      navigation={
        {
          // nextEl: ".swiper-button-next",
          // prevEl: ".swiper-button-prev",
          // pasueEl: ".swiper-button-pasue",
          // resumeEl: ".swiper-button-resume",
        }
      }
      className="w-full"
    >
      <SwiperSlide className="flex items-center justify-center relative">
        <div className=" absolute bottom-0 p-16  ">
          <div className="title text-5xl" data-swiper-parallax="2000">
            MW09 True Wireless Earphones
          </div>
          <div className="text" data-swiper-parallax="2000">
            Our newest active noise-cancelling earphones
          </div>
          <button
            className="cursor-pointer bg-black text-white w-24 h-10 text-base hover:bg-gray-700 "
            data-swiper-parallax="2000"
          >
            Shop Now
          </button>
        </div>
        <img
          src={image1}
          alt="Slide 1"
          className="object-cover w-full  min-h-full"
        />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center relative">
        <div className="absolute bottom-0 p-16 ">
          <div className="title text-5xl" data-swiper-parallax="2000">
            MG20 Wireless Gaming
            <p>Headphones</p>
          </div>
          <div className="text" data-swiper-parallax="2000">
            Never Play the Same
          </div>
          <button
            className="cursor-pointer bg-black text-white w-24 h-10 text-base hover:bg-gray-700 "
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
        <div className="absolute bottom-0 p-16 ">
          <div className="title text-5xl" data-swiper-parallax="2000">
            MW75 Active Noise-Cancelling
            <p>Wireless Headphones</p>
          </div>
          <div className="text" data-swiper-parallax="2000">
            Perfect silence, perfect sound
          </div>
          <button
            className="cursor-pointer bg-black text-white w-24 h-10 text-base hover:bg-gray-700 "
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
        <div className="absolute bottom-0 p-16 ">
          <div className="title text-5xl" data-swiper-parallax="2000">
            MH40 Wireless Headphones
          </div>
          <div className="text" data-swiper-parallax="2000">
            Iconic design and brilliant acoustics
          </div>
          <button
            className="cursor-pointer bg-black text-white w-24 h-10 text-base hover:bg-gray-700 "
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
      {/* Navigation buttons */}
      {/* <div className="swiper-button-next text-white bg-black p-2 rounded-full"></div>
      <div className="swiper-button-prev text-white bg-black p-2 rounded-full"></div> */}
      <div className="swiper-button-pasue text-white bg-black p-2 rounded-full"></div>
      <div className="swiper-button-resume text-white bg-red-700 p-2 rounded-full"></div>
      {/* <button class="autoplayPause ">정지</button>
      <button class="autoplayResume">시작</button> */}
    </Swiper>
  );
};

export default MySwiper;
