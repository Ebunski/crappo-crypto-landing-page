import React from 'react';
import heroImage from '../assets/Illustration.svg';
const Hero = () => {
	return (
		<div className="hero">
			<div className="words">
				<div className="before-h1"></div>
				<h1>Fastest &deg; secure platform to trade crypto</h1>
			</div>
			<div className="image">
				<img src={heroImage} alt="" />
			</div>
		</div>
	);
};

export default Hero;
