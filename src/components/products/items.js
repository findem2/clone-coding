import ColorDot from "./colordot";
import img1 from "../../img/feature/MW09.png";
import HoverImg1 from "../../img/feature/MW09BL4-PDP_1350x1350_Angle_Right (2).png";

function Items() {
  return (
    <div className="custom:w-1/4">
      <div className="relative opacity-100 ">
        <img src={img1} alt="before" />
        <img
          src={HoverImg1}
          alt="after"
          className="absolute bottom-0 opacity-0 hover:opacity-100 hover:animate-fadein animate-fadeout  bg-white"
        />
      </div>
      <div>
        <div>
          <div className="ModelName">MW09</div>
          <div className="Price">From €399,00</div>
        </div>
        <div className="Explain">
          Active Noise-Cancelling True Wireless Earphones
        </div>
      </div>
      <div className="flex">
        <ColorDot></ColorDot>
        <ColorDot></ColorDot>
        <ColorDot></ColorDot>
        <ColorDot></ColorDot>
        <ColorDot></ColorDot>
      </div>
    </div>
  );
}

export default Items;
