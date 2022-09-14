import React, { useRef } from "react";
import etherum from "../assets/mask-etherum.png";
import btc from "../assets/mask-btc.png";

export default function Cta() {
  const formRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    formRef.current.value = "";
  }
  return (
    <section className="cta">
      <img
        className="cta__bg etherum"
        src={etherum}
        alt=""
        aria-hidden="true"
      />
      <img className="cta__bg btc" src={btc} alt="" aria-hidden="true" />
      <div className="cta__wrapper">
        <h4 className="cta__title">{"Start Mining Now"}</h4>
        <div className="cta__content">
          <div className="cta__text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste,
              ipsum.
            </p>

            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
              saepe.
            </p>
          </div>
          <form className="cta__form" onSubmit={handleSubmit}>
            <input
              ref={formRef}
              type="text"
              placeholder="enter message"
              className="button cta__input"
            />
            <button className="button-white cta__button">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}
