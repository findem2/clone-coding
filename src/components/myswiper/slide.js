import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SlideImg1 from "../../img/slide/slide1.jpg";
import SlideImg2 from "../../img/slide/slide1.jpg";
import SlideImg3 from "../../img/slide/slide1.jpg";
import SlideImg4 from "../../img/slide/slide4.jpg";

function Slide() {
  return (
    <Swiper
      centeredSlides={true} //가운데 정렬
      slidesPerView={1} //한 슬라이드에 보여줄 갯수
      spaceBetween={50} //슬라이드간 거리
      loop={true} //슬라이드 반복 여부
      autoplay={{ delay: 5000 }} //자동 슬라이드 시간
      navigation // 이동 화살표
      pagination={{
        clickable: true,
      }} //pager여부
      modules={[Pagination, Autoplay, Navigation]}
    >
      <SwiperSlide>
        <img alt="slide1" src={SlideImg1}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img alt="slide2" src={SlideImg2}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img alt="slide3" src={SlideImg3}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img alt="slide4" src={SlideImg4}></img>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slide;
