import React from "react";
import {FaBars} from "react-icons/fa";
import {FaXMark} from "react-icons/fa";
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
				<div>
					<div className="login">Login</div>
					<hr />
					<button className="button btn-call">Register</button>
				</div>
			</ul>
			<div className="icon-bars">
				< FaBars />
			</div>
			{/*<div className="mobilenav">
				<div className="icon">
					<FaBars />
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
			</div>*/}
		</nav>
	);
}
