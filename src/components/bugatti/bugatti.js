import bugatti from "../../img/main/bugatti.jpg";

const Bugatti = () => {
  return (
    <div>
      <div className=" ">
        <img src={bugatti} alt="" className="relative"></img>
        <div className=" absolute">
          <div>BUGATTI</div>
          <div>Uniting performance And Luxury</div>
          <button className="cursor-pointer bg-white text-blacktext-base hover:bg-gray-200 px-8 py-4 text-sm font-semibold text-gray-700">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bugatti;
