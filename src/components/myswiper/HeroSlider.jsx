// import React, { useState } from "react";
// // import image1 from "../../img/slide/slide1.jpg";
// // import image2 from "../../img/slide/slide1.jpg";
// // import image3 from "../../img/slide/slide1.jpg";
// // import image4 from "../../img/slide/slide4.jpg";

// // react-id-swiper
// import "swiper/css/swiper.css";
// import Swiper from "react-id-swiper";
// import "./HeroSlider.css";
// //Images
// const image1 =
//   "https://images.unsplash.com/photo-1587613990051-1b291c1a7080?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80";
// const image2 =
//   "https://images.unsplash.com/photo-1587613756197-11742e6b42ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80";
// const image3 =
//   "https://images.unsplash.com/flagged/photo-1566447443462-bbd3024c9439?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

// // const image1 = "../../img/slide/slide1.jpg";
// // const image2 = "../../img/slide/slide2.jpg";
// // const image3 = "../../img/slide/slide3.jpg";
// // const image4 = "../../img/slide/slide4.jpg";

// //slider config options

// const HeroSliderConfigs = {
//   containerClass: "swiper-container hero-slider",
//   parallax: true,
//   centeredSlides: true,
//   speed: 500,
//   spaceBetween: 0,
//   effect: "slide",
// };

// //slider component
// const HeroSlider = () => {
//   const [parallaxSwiper, setParallaxSwiper] = useState(null);
//   const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
//   const parallaxOpacity = 0.5;

//   return (
//     <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
//       {/* 1 */}
//       <div className="hero-slide">
//         <div
//           className="slide-image"
//           data-swiper-parallax={parallaxAmount}
//           data-swiper-parallax-opacity={parallaxOpacity}
//         >
//           <img src={image1} alt="image1" />
//         </div>
//         <div className="col-md-6 offset-md-3 my-auto text-center text-white content">
//           <h1 className="text-uppercase mb-2 font-weight-bold"> Slide 1</h1>
//           <p className="mb-5 small">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
//             nobis sint ipsam illo atque quaerat, sed nostrum voluptates
//             asperiores hic quidem laboriosam ducimus, molestiae dicta rerum
//             necessitatibus in deserunt magni sapiente repellat, consectetur
//             dolore placeat. Minima perspiciatis cupiditate quia in.
//           </p>
//         </div>
//       </div>
//       {/* 2 */}
//       <div className="hero-slide">
//         <div
//           className="slide-image"
//           data-swiper-parallax={parallaxAmount}
//           data-swiper-parallax-opacity={parallaxOpacity}
//         >
//           <img src={image2} alt="image2" />
//         </div>
//         <div className="col-md-6 offset-md-3 my-auto text-center text-white content">
//           <h1 className="text-uppercase mb-2 font-weight-bold"> Slide 2</h1>
//           <p className="mb-5 small">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
//             nobis sint ipsam illo atque quaerat, sed nostrum voluptates
//             asperiores hic quidem laboriosam ducimus, molestiae dicta rerum
//             necessitatibus in deserunt magni sapiente repellat, consectetur
//             dolore placeat. Minima perspiciatis cupiditate quia in.
//           </p>
//         </div>
//       </div>
//       {/* 3 */}
//       <div className="hero-slide">
//         <div
//           className="slide-image"
//           data-swiper-parallax={parallaxAmount}
//           data-swiper-parallax-opacity={parallaxOpacity}
//         >
//           <img src={image3} alt="image3" />
//         </div>
//         <div className="col-md-6 offset-md-3 my-auto text-center text-white content">
//           <h1 className="text-uppercase mb-2 font-weight-bold"> Slide 3</h1>
//           <p className="mb-5 small">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
//             nobis sint ipsam illo atque quaerat, sed nostrum voluptates
//             asperiores hic quidem laboriosam ducimus, molestiae dicta rerum
//             necessitatibus in deserunt magni sapiente repellat, consectetur
//             dolore placeat. Minima perspiciatis cupiditate quia in.
//           </p>
//         </div>
//       </div>
//     </Swiper>
//   );
// };

// export default HeroSlider;
