import React from "react";
import "./Banner.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './index.css';
function Banner() {
  return (
    <div className="App">
     <AliceCarousel autoPlay activeIndex infinite disableButtonsControls autoPlayInterval="3000">
      <img src="images/HP_EMF_M_Weekendallcities_460_171221.jpg" className="sliderimg" alt=""/>
      <img src="/images/2104007_summer-vegetables_460.jpg" className="sliderimg" alt=""/>
      <img src="/images/2104008_melons-mela_460.jpg" className="sliderimg" alt=""/>
      <img src="/images/Green_2104015_dairy_460_SouthWest.jpg" className="sliderimg" alt=""/>
    </AliceCarousel>
    </div>
  );
}

export default Banner;
