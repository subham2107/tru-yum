import React from "react";
import "./Banner.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

function Banner() {
  return (
    <div className="App">
     <AliceCarousel autoPlay activeIndex infinite disableButtonsControls autoPlayInterval="3000">
      <img src="./images/HP_EP_Summer-Store_1130x400_26thMar21.jpg" className="sliderimg" alt=""/>
      <img src="./images/Green_BakeryStore_DT_4_1130x400_25thMar21.jpg" className="sliderimg" alt=""/>
      <img src="./images/Green_2104013_home-kitchen_460.jpg" className="sliderimg" alt=""/>
      <img src="./images/Green_2104015_dairy_460_SouthWest.jpg" className="sliderimg" alt=""/>
    </AliceCarousel>
    </div>
  );
}

export default Banner;
