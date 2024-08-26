import ColorDot from "./colordot";
import img1 from "../../img/feature/MW09.png";
import HoverImg1 from "../../img/feature/MW09BL4-PDP_1350x1350_Angle_Right (2).png";

function Items() {
  return (
    <div>
      <picture>
        <source srcset={HoverImg1} media="hover: display: block" />
        <img
          src={img1}
          alt="사진설명"
          className="ProductImg w-[319px] h-[319px]"
        />
      </picture>
      <div>
        <div>
          <div className="ModelName"></div>
          <div className="Price"></div>
        </div>
        <div className="Explain"></div>
      </div>
      <ColorDot></ColorDot>
    </div>
  );
}

export default Items;
