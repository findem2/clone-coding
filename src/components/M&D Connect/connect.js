import img from "../../img/main/phone.jpg";
import img2 from "../../img/main/earphone.jpg";

const Connect = () => {
  return (
    <div className="bg-white">
      <div className="p-12 pb-0">
        <div className="lg:flex items-center">
          <div className="hidden w-1/2 p-12 xl:p-20">
            <div className="text-4xl text-gray-600 pb-5">
              Get The Most Out Of Your Sound with M&D Connect
            </div>
            <div className="font-extralight pb-8">
              The M&D Connect App lets you download firmware updates, adjust
              settings, and change default preferences for your headset, all
              from your mobile device
            </div>
            <button className="cursor-pointer bg-zinc-700 text-blacktext-base hover:bg-gray-200 px-8 py-4 text-sm font-semibold text-white">
              Learn More
            </button>
          </div>
          <img src={img} alt="" className="w-full lg:w-1/2"></img>
          <div className="p-12 xl:p-20">
            <div className="text-4xl text-gray-600 pb-5">
              Get The Most Out Of Your Sound with M&D Connect
            </div>
            <div className="font-extralight pb-8">
              The M&D Connect App lets you download firmware updates, adjust
              settings, and change default preferences for your headset, all
              from your mobile device
            </div>
            <button className="cursor-pointer bg-zinc-700 text-blacktext-base hover:bg-gray-200 px-8 py-4 text-sm font-semibold text-white">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex text-center p-16">
          <div className="w-1/3 mr-24">
            <div className="text-lg text-gray-600 pb-4">
              Free Premium Shipping
            </div>
            <div className="font-extralight">
              Free ground shipping on orders of €99 or more
            </div>
          </div>
          <div className="w-1/3 mr-24">
            <div className="text-lg text-gray-600 pb-4">
              Free Returns in 14 Days
            </div>
            <div className="font-extralight">
              We offer a generous 14-day return policy, allowing you to shop
              with confidence
            </div>
          </div>
          <div className="w-1/3">
            <div className="text-lg text-gray-600 pb-4 ">
              Product Protection
            </div>
            <div className="font-extralight overflow-hidden">
              Rest easy with our
              <div className="font-extralight overflow-hidden relative cursor-pointer after:block after:absolute after:w-full after:bg-black after:left-0 after:h-0.5 hover:after:transition-transform hover:after:scale inline">
                manufacturer warranty,
                {/* <p className="bg-black pb-[1px]"></p> */}
              </div>
              ensuring that your product is protected against any manufacturing
              defects or issues
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex mx-12 pb-6 ">
        <img src={img2} alt="" className="w-full lg:w-1/2"></img>
        <div className="flex items-center  bg-slate-100">
          <div className="p-12 xl:p-20">
            <div className="text-4xl text-gray-600 pb-5">
              Need support? We're here to assist you every step of the way
            </div>
            <div className="font-extralight pb-8">
              Access product support and frequently asked questions in our
              Support Center
            </div>
            <button className="cursor-pointer bg-zinc-700 text-blacktext-base hover:bg-gray-200 px-8 py-4 text-sm font-semibold text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
