import sound from "../../img/crafts/sound.jpg";
import materials from "../../img/crafts/materials.jpg";
import design from "../../img/crafts/design.jpg";

const Craftsmanship = () => {
  return (
    <div className="bg-zinc-900 px-12 Craftsmanship: py-24 ">
      <div className="pb-11 mx-10">
        <div className=" text-white w-1/2 float-end text-right font-extralight text-opacity-85">
          Introduce yourself to a world of immersive sound and
          <p>unrivalled design, where every detail is thoughtfully</p>
          <p>considered to enhance your listening experience</p>
        </div>
        <div className="text-white text-5xl w-1/2 after:content-['_Craftsmanship'] after:block">
          The Finest Sound and
        </div>
      </div>
      <div className="flex max-h-72 ">
        <div className="flex relative w-1/3 pr-6">
          <img src={sound} alt="" className="w-s"></img>
          {/* <div className=" absolute text-3xl right-20 bottom-16 text-white">
            SOUND
          </div> */}
        </div>
        <div className="flex relative w-1/3 pr-6">
          <img src={materials} alt="" className=""></img>
          {/* <div className=" absolute text-3xl right-20 bottom-16 text-white">
            MATERIALS
          </div> */}
        </div>
        <div className="flex relative w-1/3">
          <img src={design} alt="" className=""></img>
          {/* <div className=" absolute text-3xl right-20 bottom-16 text-white">
            DESIGN
          </div> */}
        </div>
      </div>
      <div className="pt-11">
        <button className="cursor-pointer bg-white text-blacktext-base hover:bg-gray-200 px-8 py-4 text-sm font-semibold text-gray-700 block float-end">
          Learn More
        </button>
        <div className="text-white font-extralight text-opacity-85">
          We bring an uncompromising approach to the design and
          <p>performance of our products</p>
        </div>
      </div>
    </div>
  );
};

export default Craftsmanship;
// export { Craftsmanship };

// 반응형 여백 줄어드는거
// 700 이하일때 모양바뀌는거
// 호버시 호버한건 커지고 옆에건 작아지는거
