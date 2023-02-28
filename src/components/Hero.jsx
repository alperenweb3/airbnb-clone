import React from "react";
import "./styles/Hero.css";
import hero from "../images/hero_img.png";

function Hero() {
  return (
    <div className="container lr-pad--none">
      <div className="hero">
        <img className="hero__img" src={hero} alt="Hero Img" />
      </div>
    </div>
  );
}

export default Hero;
