// 스와이퍼 컴포넌트 + 사용할 모듈
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  Parallax,
  EffectFade,
} from "swiper/modules";

// 스와이퍼 CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image1 from "../../img/slide/slide1.jpg";
import image2 from "../../img/slide/slide2.jpg";
import image3 from "../../img/slide/slide3.jpg";
import image4 from "../../img/slide/slide4.jpg";

function Swipe() {
  return (
    <Swiper
      //   className={styles.mainSwiper}
      modules={[Navigation, Pagination, A11y, Autoplay, Parallax, EffectFade]}
      slidesPerView={1}
      parallax={true}
      effect={"fade"}
      loop={true}
      speed={400}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{
        clickable: true,
      }}
      //   onActiveIndexChange={(e) => setSwiperIndex(e.realIndex)}
      //   onSwiper={(e) => {
      //     setSwiper(e);
      //   }}
    >
      <div
        slot="container-start"
        className="parallax-bg"
        style={{
          "background-image": { image1 },
        }}
        data-swiper-parallax="100%"
      ></div>
      <SwiperSlide className="flex relative overflow-hidden">
        <img
          src={image1}
          alt="Slide 1"
          className="object-cover w-full relative absolute m-auto flex items-center justify-center"
        />
        <div className="relative">
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
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
          <button>search</button>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <img src={image2} alt="Slide 1" className="object-cover w-full" />
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
          <button>search</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={image3} alt="Slide 1" className="object-cover w-full" />
        슬라이드 3
      </SwiperSlide>
      <SwiperSlide>
        <img src={image4} alt="Slide 1" className="object-cover w-full" />
        슬라이드 4
      </SwiperSlide>
    </Swiper>
  );
}

export default Swipe;
