import logo from "../../img/svg/logo.svg";

function NavbarFix() {
  return (
    <div className="z-50 flex min-h-14 justify-between py-2  sticky top-0 bg-white w-full sm:bg-red-500 sm:px-5 md:bg-gray-500 md:px-10 lg:bg-blue-500  xl:bg-orange-500 xxl:bg-pink-500 custom:flex">
      <div className="flex items-center justify-center xl:hidden sm:inline-flex ">
        <div className="flex items-center justify-center  xl:hidden mr-1 cursor-pointer">
          <svg
            className="flex items-center justify-center cursor-pointer"
            role="presentation"
            stroke-width="2"
            focusable="false"
            width="22"
            height="22"
            class="icon icon-hamburger"
            viewBox="0 0 22 22"
          >
            <path
              d="M1 5h20M1 11h20M1 17h20"
              stroke="currentColor"
              stroke-linecap="round"
            ></path>
          </svg>
        </div>
        <div className="flex items-center justify-center  md:hidden cursor-pointer">
          <svg
            className="sm:inline-flex  items-center justify-center cursor-pointer"
            role="presentation"
            focusable="false"
            width="30"
            height="30"
            class="icon icon-search"
            viewBox="0 0 30 30"
          >
            <circle
              cx="13.125"
              cy="13.125"
              r="7.5"
              stroke="#4A4A4A"
              fill="none"
              stroke-width="1.25"
            ></circle>
            <path
              d="M24.5581 25.4419C24.8021 25.686 25.1979 25.686 25.4419 25.4419C25.686 25.1979 25.686 24.8021 25.4419 24.5581L24.5581 25.4419ZM25.4419 24.5581L19.1919 18.3081L18.3081 19.1919L24.5581 25.4419L25.4419 24.5581Z"
              fill="#4A4A4A"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex items-center justify-center cursor-pointer">
        <img
          alt="logo"
          class="logo"
          className="md:min-w-56 max-w-56 min-h-8 max-h-8 sm:max-w-40 max-h-6"
          src={logo}
        ></img>
      </div>
      <div className="items-center justify-center sm:hidden xl:inline-flex ">
        <div className="flex items-center justify-center ">
          <div className="flex items-center justify-center ">
            <div className="mx-5 cursor-pointer hover:text-gray-700">
              HEADPHONES^{" "}
            </div>
            <div className="mx-5 cursor-pointer hover:text-gray-700">
              EARPHONES^{" "}
            </div>
            <div className="mx-5 cursor-pointer hover:text-gray-700">
              ACCESSORIES^{" "}
            </div>
            <div className="mx-5 cursor-pointer hover:text-gray-700">
              COLLABORATIONS
            </div>
            <div className="mx-5 cursor-pointer hover:text-gray-700">BLOG</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center cursor-pointer">
        <div className="min-w-8 cursor-pointer hidden md:inline">
          <svg
            role="presentation"
            focusable="false"
            width="30"
            height="30"
            class="icon icon-search"
            viewBox="0 0 30 30"
          >
            <circle
              cx="13.125"
              cy="13.125"
              r="7.5"
              stroke="#4A4A4A"
              fill="none"
              stroke-width="1.25"
            ></circle>
            <path
              d="M24.5581 25.4419C24.8021 25.686 25.1979 25.686 25.4419 25.4419C25.686 25.1979 25.686 24.8021 25.4419 24.5581L24.5581 25.4419ZM25.4419 24.5581L19.1919 18.3081L18.3081 19.1919L24.5581 25.4419L25.4419 24.5581Z"
              fill="#4A4A4A"
            ></path>
          </svg>
        </div>
        <svg
          className="mr-3 min-w-8 cursor-pointer"
          role="presentation"
          focusable="false"
          width="30"
          height="30"
          class="icon icon-account"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.25 13.75C18.3211 13.75 20 12.0711 20 10C20 7.92893 18.3211 6.25 16.25 6.25C14.1789 6.25 12.5 7.92893 12.5 10C12.5 12.0711 14.1789 13.75 16.25 13.75ZM21.25 10C21.25 12.7614 19.0114 15 16.25 15C13.4886 15 11.25 12.7614 11.25 10C11.25 7.23858 13.4886 5 16.25 5C19.0114 5 21.25 7.23858 21.25 10Z"
            fill="#4A4A4A"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25 23.75V20.0855C25 19.1198 24.4641 18.3584 23.7023 18.105C21.9877 17.5349 19.3332 17.5 16.25 17.5C13.1668 17.5 10.5123 17.5349 8.79775 18.105C8.03589 18.3584 7.5 19.1198 7.5 20.0855V23.75L25 23.75ZM8.40332 16.9189C7.05549 17.3671 6.25 18.6651 6.25 20.0855L6.25 23.75C6.25 24.4404 6.80964 25 7.5 25H25C25.6904 25 26.25 24.4404 26.25 23.75V20.0855C26.25 18.6651 25.4445 17.3671 24.0967 16.9189C22.2968 16.3204 19.5052 16.25 16.25 16.25C12.9948 16.25 10.2032 16.3204 8.40332 16.9189Z"
            fill="#4A4A4A"
          ></path>
        </svg>
        <svg
          className="mr-3 cursor-pointer"
          role="presentation"
          focusable="false"
          width="28"
          height="28"
          class="icon icon-cart"
          viewBox="0 0 30 30"
          fill="none"
        >
          <rect
            x="6.875"
            y="9.375"
            width="16.25"
            height="16.25"
            stroke="#4A4A4A"
            stroke-width="1.25"
            stroke-linejoin="round"
          ></rect>
          <path
            d="M10 11.25V8.4375C10 5.84867 12.2386 3.75 15 3.75C17.7614 3.75 20 5.84867 20 8.4375V11.25"
            stroke="#4A4A4A"
            stroke-width="1.25"
            stroke-linecap="round"
          ></path>
        </svg>
        <div className="hidden lg:inline mr-3 cursor-pointer">AT^</div>
        <div className="">
          <button className="hidden xxl:inline bg-black text-white w-24 h-10 text-base hover:bg-gray-700 ">
            support
          </button>
          {/* <input
            className="justify-center items-center text-white"
            type="button"
            placeholder="support"
          ></input> */}
        </div>
      </div>
    </div>
  );
}

export default NavbarFix;
