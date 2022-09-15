import React from 'react';
import ArrowRight from '../assets/Vector-right.png';
import Bitcoin from '../assets/bitcoin.svg';
import Ethereum from '../assets/etherum.svg';
import Litecoin from '../assets/litecoin.svg';


const Services = () => {
	return (
		<div className="services" >
			<div className="content">
				<h2 data-aos="fade-in">Trade securely and market the high growth cryptocurrencies</h2>
				<div className="currencies">
					<div className="bitcoin ready">
						<div className="image">
							<img src={Bitcoin} alt="" />
						</div>
						<div className="name">
							<h3>Bitcoin</h3>
							<div>BTC</div>
						</div>
						<p>
							Digital currency in which a record of transactions is maintained.
						</p>
						<button className="actionCall">
							<div className="button-img">
								<img src={ArrowRight} alt="" />
							</div>
						</button>
					</div>
					<div className="ethereum">
						<div className="image">
							<img src={Ethereum} alt="" />
						</div>
						<div className="name">
							<h3>Ethereum</h3>
							<div>ETH</div>
						</div>
						<p>
							Blockchain technology to create and run decetralized digital
							applications.
						</p>
						<button className="actionCall">
							<div className="button-img">
								<img src={ArrowRight} alt="" />
							</div>
						</button>
					</div>
					<div className="litecoin">
						<div className="image">
							<img src={Litecoin} alt="" />
						</div>
						<div className="name">
							<h3>Litecoin</h3>
							<div>LTC</div>
						</div>
						<p>
							Cryptocurrency that enables instant payment to anyone in the
							world.
						</p>
						<button className="actionCall">
							<div className="button-img">
								<img src={ArrowRight} alt="" />
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
