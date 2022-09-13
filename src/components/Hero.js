import React from 'react';
import heroImage from '../assets/Illustration.svg';
const Hero = () => {
	return (
		<div className="hero">
			<div className="words">
				<div className="info">
					<div className="white">75% SAVE</div>
					<div>For the black friday weekend</div>
				</div>
				<h1>Fastest & secure platform to invest in crypto</h1>
        <p>Buy and sell cryptocurrencies rom 10M wallets with over $30 billion in transactions</p>

			</div>
			<div className="image">
				<img src={heroImage} alt="" />
			</div>
		</div>
	);
};

export default Hero;
