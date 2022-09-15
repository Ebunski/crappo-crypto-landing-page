import React from "react";
import featuresData from "../utils/featuresData";

export default function Statistics() {
  const featureSections = featuresData.map((x, index) => {
    const { left, img, title, subtext } = x;

    return (
      <section key={index} className={`feature ${left ? "left" : ""}`}>
        <div className="feature__content">
          <h3 className="feature__title">{title}</h3>
          <p className="feature__text">{subtext}</p>
          <button className="button feature__button">learn more</button>
        </div>
        <div className={`feature__image--container`}>
          {" "}
          <img className={`feature__image`} src={img} alt={title} />
        </div>
      </section>
    );
  });

  /*
  ==================
 LAYOUT
  ==================
  */

  return (
    <div className="features">
      <h3 className="features__headline">
        Market Sentiments, Portfolio, And Run The Infrastructure Of Your Choice
      </h3>
      {featureSections}
    </div>
  );
}
