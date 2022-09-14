import React, { useRef } from "react";

export default function Cta() {
  const formRef = useRef();
  return (
    <section className="cta">
      <div className="cta__text">
        <h4>{"Start Mining Now"}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, ipsum.
        </p>

        <p>
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, saepe.
        </p>
      </div>
      <form className="cta__form">
        <input
          ref={formRef}
          type="text"
          placeholder="enter message"
          className="button cta__input"
        />
        <button className="button cta__button"></button>
      </form>
    </section>
  );
}
