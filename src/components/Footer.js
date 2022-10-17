import React from "react";
import footerData from "../utils/footerData";
import logo from "../assets/Logo.png";

export default function Footer() {
  const textLinks = footerData.info.map((x, index) => (
    <ul key={index} className="footer__links">
      <h5 className="footer__links--title">{x.title}</h5>
      {x.links.map((item, id) => (
        <li key={id}>{item}</li>
      ))}
    </ul>
  ));

  const paymentLinks = (
    <div className="footer__payment">
      <span className="footer__payment--title">{footerData.payment.title}</span>
      <ul className="footer__payment--icons">
        {footerData.payment.icons.map((x, index) => (
          <li key={index}>
            <img src={x.src} alt={x.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
  const bottomRowLinks = (
    <div className="footer--bottom">
      <span className="footer__copyright">{footerData.socials.title} </span>
      <ul className="footer__socials">
        {footerData.socials.icons.map((x, index) => (
          <li key={index}>
            <img src={x.src} alt={x.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
  /*
  ==================
 LAYOUT
  ==================
  */
  return (
    <section className="footer">
      <div className="footer--top">
        <img src={logo} alt="crappo" />
        {textLinks}
        {paymentLinks}
      </div>
      {bottomRowLinks}
    </section>
  );
}
