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
      direction={"horizontal"}
      centeredSlides={true}
      loop={true}
      parallax={true}
      effect={"fade"}
      autoplay={{ delay: 10000, pauseOnMouseEnter: false }}
      // pagination={{
      //   el: "#containerForBullets",
      //   type: "bullets",
      //   bulletClass: "swiper-custom-bullet",
      //   bulletActiveClass: "swiper-custom-bullet-active",
      //   clickable: true,
      // }}
      pagination={{
        // el: ".swiper-pagination",

        // type: "fraction",

        bulletClass:
          "w-2 h-2 rounded-lg bg-gray-700 inline-block m-5 cursor-pointer",
        bulletActiveClass: "bg-slate-50 w-20 px-3",
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
      {/* <div
        slot="container-start"
        className="parallax-bg"
        style={{
          "background-image": image1,
        }}
        data-swiper-parallax="100%"
      ></div>
      <SwiperSlide>
        <div className="title" data-swiper-parallax="2000">
          Slide 1
        </div>
        <div className="subtitle" data-swiper-parallax="2000">
          Subtitle
        </div>
        <div className="text" data-swiper-parallax="2000">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
            velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
            libero. Aenean feugiat non eros quis feugiat.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="title" data-swiper-parallax="2000">
          Slide 2
        </div>
        <div className="subtitle" data-swiper-parallax="2000">
          Subtitle
        </div>
        <div className="text" data-swiper-parallax="2000">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
            velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
            libero. Aenean feugiat non eros quis feugiat.
          </p>
        </div>
      </SwiperSlide> */}
      <SwiperSlide className="flex items-center justify-center">
        <img src={image1} alt="Slide 1" className="object-cover w-full" />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center">
        <img src={image2} alt="Slide 2" className="object-cover w-full" />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center">
        <img src={image3} alt="Slide 3" className="object-cover w-full" />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center">
        <img src={image4} alt="Slide 4" className="object-cover w-full" />
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
