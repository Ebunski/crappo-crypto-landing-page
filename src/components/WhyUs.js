import React from "react";
import U from "../assets/u-why-us.png";
import D from "../assets/D-why-us.png";
import Rect from "../assets/rect-why-us.png";
import Illus2 from "../assets/Illustration2.svg";

const WhyUs = () => {
  return (
    <div className="why-us">
      <img src={U} className="bg-tile-1" alt="U" />
      <img src={D} className="bg-tile-2" alt="D" />
      <img src={Rect} className="bg-tile-3" alt="Rect" />
      <div className="image" data-aos="zoom-in">
        <img src={Illus2} alt="Illus2" />
      </div>
      <div data-aos="fade-up" className="words">
        <h2>
          Why should you choose <br />
          CRAPPO
        </h2>
        <p>
          Experience the next generation cryptocurrency platform. No financial
          borders, extra fees, an fake reviews.
        </p>
        <button className="btn-why">Learn more</button>
      </div>
    </div>
  );
};

export default WhyUs;
