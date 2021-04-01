import React from "react";
import "./Banner.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

function Banner() {
  return (
    <div className="App">
     <AliceCarousel autoPlay activeIndex infinite disableButtonsControls autoPlayInterval="3000">
      <img src="/images/2104007_summer-vegetables_460.jpg" className="sliderimg" alt=""/>
      <img src="images/CXPN1-1200x300-25thmar21.jpg" className="sliderimg" alt=""/>
      <img src="images/Organic-Staples-Banner-V2-1200x300.jpg" className="sliderimg" alt=""/>
      <img src="/images/Green_2104013_home-kitchen_460.jpg" className="sliderimg" alt=""/>
      <img src="/images/Green_2104015_dairy_460_SouthWest.jpg" className="sliderimg" alt=""/>
    </AliceCarousel>
    </div>
  );
}

export default Banner;
