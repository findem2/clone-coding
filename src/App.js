import NavbarBlack from "./components/navbar/navbarBlack";
import NavbarFix from "./components/navbar/navbarFix";
import logo from "./img/svg/logo.svg";
import MySwiper from "./components/myswiper/myswiper";
// import Swipe from "./components/myswiper/swiper";
// import HeroSlider from "./components/myswiper/HeroSlider";
// import Slide from "./components/myswiper/slide";
import Trinity from "./components/trinity/trinity";
import Crafts from "./components/craftsmanship/crafts";
import Bugatti from "./components/bugatti/bugatti";

import "swiper/css";
import "swiper/css/pagination";
import ProdectLine from "./components/products/productsline";
import Connect from "./components/M&D Connect/connect";

function App() {
  return (
    <div>
      <NavbarBlack></NavbarBlack>
      <NavbarFix></NavbarFix>
      <MySwiper></MySwiper>
      {/* <Swipe></Swipe> */}
      {/* <HeroSlider></HeroSlider> */}
      {/* <Slide></Slide> */}
      <ProdectLine></ProdectLine>
      <Trinity></Trinity>
      <Crafts></Crafts>
      <div className="h-6"></div>
      <Bugatti></Bugatti>
      <Connect></Connect>
      <img alt="배경" src={logo}></img>
      <img alt="배경" src={logo}></img>
      <img alt="배경" src={logo}></img>
      <img alt="배경" src={logo}></img>
      <img alt="배경" src={logo}></img>
      <img alt="배경" src={logo}></img>
      <img alt="배경" src={logo}></img>
      <img alt="배경" src={logo}></img>
      <img alt="배경" src={logo}></img>
      <img alt="배경" src={logo}></img>
      <img alt="배경" src={logo}></img>
      <img alt="배경" src={logo}></img>
    </div>
  );
}

export default App;
