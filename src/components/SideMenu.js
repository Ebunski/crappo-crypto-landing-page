import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useGlobalContext from "../context";
export default function SideMenu() {
  const { isMenuOpen, setIsMenuOpen } = useGlobalContext();
  return (
    <div className={`sidemenu ${isMenuOpen ? "open" : ""}`}>
      <div onClick={() => setIsMenuOpen(false)}>
        <FontAwesomeIcon className="icon" icon={"fa-xmark"} size="lg" />
      </div>

      <ul>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
        <li>Contact</li>
        <div>
          <button className=" button login">Login</button>
          <hr />
          <button className="button btn-call">Register</button>
        </div>
      </ul>
    </div>
  );
}
