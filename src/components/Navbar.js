import React from "react";
import useGlobalContext from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../assets/Logo.png";

export default function Navbar() {
  const { setIsMenuOpen } = useGlobalContext();
  return (
    <nav>
      <div className="brand">
        <img src={logo} alt="Logo" />
      </div>
      <ul>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
        <li>Contact</li>
        <div>
          <div className="login">Login</div>
          <hr />
          <button className="button btn-call">Register</button>
        </div>
      </ul>
      <div className={"icon-bars"} onClick={() => setIsMenuOpen(true)}>
        <FontAwesomeIcon icon="fa-bars" size="lg" />
      </div>
    </nav>
  );
}
