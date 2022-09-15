import React from "react";

const ProfitCalc = () => {
  return (
    <div className="profit-calc">
      <h2 data-aos="fade-up">Check how much you can earn</h2>
      <p data-aos="fade-up">
        Let's check your hash rate to see how much you will earn today.
        <br />
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <div className="calc" data-aos="zoom-in">
        <div className="calculator">
          <input
            type="text"
            id="hash-rate"
            placeholder="Enter your hash rate"
          />
          <select name="" id="rates">
            <option value="0">TH/s</option>
            <option value="1">H/s</option>
            <option value="2">KH/s</option>
            <option value="3">MH/s</option>
          </select>
          <button>Calculate</button>
        </div>
        <div className="result">
          <div className="result-header">ESTIMATED 24 HOUR REVENUE:</div>
          <h2>
            0.055 130 59 ETH <span>{"($1275)"}</span>
          </h2>
          <p>
            Revenue will change based on mining difficulty and Ethereum price.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfitCalc;
