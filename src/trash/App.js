import "./App.css";
import logo from "./img/svg/logo.svg";
import search from "./img/svg/search.svg";
import myinfo from "./img/svg/myinfo.svg";
import cart from "./img/svg/cart.svg";
import slide1 from "./img/slide/slide1.jpg";
import slide2 from "./img/slide/slide2.jpg";
import slide3 from "./img/slide/slide3.jpg";
import slide4 from "./img/slide/slide4.jpg";
import MW09 from "./img/feature/MW09.png";

function App() {
  return (
    <div className="App">
      <header>
        <div id="header">
          FREE US GROUND SHIPPING ON ORDERS OF $99 OR MORE. FREE GROUND SHIPPING
          IN CANADA ON ORDERS OF $250 OR MORE
        </div>
        <div class="navbar">
          <div class="logo">
            <img class="logo_svg" src={logo}></img>
          </div>
          <div class="menu menu1">
            <div>HEADPHONES 🔽</div>
            <div>EARPHONES 🔽</div>
            <div>ACCESSORIES 🔽</div>
            <div>COLLABORATIONS</div>
            <div>BLOG</div>
          </div>
          <div class="icon">
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
            <img src={myinfo} />
            <img src={cart} />
            <div>US</div>
            <div>
              <button class="support">support</button>
            </div>
          </div>
        </div>
      </header>
      <body>
        <div class="slide">
          <img src={slide1}></img>
          <img src={slide2}></img>
          <img src={slide3}></img>
          <img src={slide4}></img>
        </div>
        <div class="FeaturedProducts">
          <div>Featured Products</div>
          <div>
            <img src={MW09}></img>
            <div>
              <div></div>
              <div></div>
            </div>
            <div></div>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div></div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </body>
      <footer></footer>
    </div>
  );
}

export default App;
