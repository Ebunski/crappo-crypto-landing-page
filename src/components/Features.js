import React from "react";
import featuresData from "../utils/featuresData";

export default function Statistics() {
  const featureSections = featuresData.map((x) => {
    const { left, img, title, subtext } = x;
    return (
      <section className={`feature ${left && "left"}`}>
        <div className="feature__content">
          <h4 className="feature__title">{title}</h4>
          <p className="feature__text">{subtext}</p>
          <button className="button feature__button">learn more</button>
        </div>
        <img className={`feature__image}`} src={img} alt={title} />
      </section>
    );
  });

  /*
  ==================
  ACTUAL RETURN
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
