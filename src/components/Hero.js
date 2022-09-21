import React from "react";
import heroImage from "../assets/Illustration.svg";
import arrowRight from "../assets/Vector-right.png";

import heroBar1 from "../assets/hero-bar-1.png";
import heroBar2 from "../assets/hero-bar-2.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="words">
        <div className="info">
          <div className="white" data-aos="zoom-in">
            75% SAVE
          </div>
          <div>For the black friday weekend</div>
        </div>
        <h1 data-aos="fade-up">
          Fastest & secure platform to invest in crypto
        </h1>
        <p data-aos="fade-up">
          Buy and sell cryptocurrencies rom 10M wallets with over $30 billion in
          transactions
        </p>
        <button
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-mirror="false"
        >
          <div className="text">Try for FREE</div>
          <div
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-mirror="false"
            className="button-img"
          >
            <img src={arrowRight} alt="arrowRight" />
          </div>
        </button>
      </div>
      <div data-aos="zoom-in" className="image">
        <img src={heroImage} alt="" />
      </div>
      <img src={heroBar1} alt="" data-aos="zoom-in" className="hero-bar-1" />
      <img src={heroBar2} alt="" data-aos="zoom-in" className="hero-bar-2" />
    </div>
  );
};

export default Hero;
