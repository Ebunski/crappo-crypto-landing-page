import React from "react";
import Statistic from "../assets/Bar Chart.png";
import Person from "../assets/Person.svg";
import World from "../assets/world.svg";
const Specs = () => {
  return (
    <div className="specs" data-aos="fade-up">
      <div className="spec">
        <div className="image">
          <img src={Statistic} alt="Statistic" />
        </div>
        <div>
          <div>
            <h2>$30B</h2>
          </div>
          <div>
            <p>Digital Currency Exchanged</p>
          </div>
        </div>
      </div>
      <div className="spec">
        <div className="image">
          <img src={Person} alt="Person" />
        </div>
        <div>
          <div>
            <h2>10M+</h2>
          </div>
          <div>
            <p>Trusted wallets investor</p>
          </div>
        </div>
      </div>
      <div className="spec">
        <div className="image">
          <img src={World} alt="World" />
        </div>
        <div>
          <div>
            <h2>195</h2>
          </div>
          <div>
            <p>Countries Supported</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specs;
