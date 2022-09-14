import React from "react";
import logo from "../assets/Logo.png";

export default function Navbar() {
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
        <li>Login</li>
        <hr />
        <button className="button btn-call">Register</button>
      </ul>
    </nav>
  );
}
