import ColorDot from "./colordot";
import img1 from "../../img/feature/MW09.png";

function Items() {
  return (
    <div>
      <img className="ProductImg w-[319px] h-[319px]" src={img1} alt="사진" />
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
