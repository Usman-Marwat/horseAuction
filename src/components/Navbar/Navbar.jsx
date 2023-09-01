import React, { useState } from 'react';
import { GiHorseHead } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { PiDotsNineBold } from 'react-icons/pi';

import logo from '../../assets/logo.jpg';

import './Navbar.css';

function Navbar() {
	const [navbar, setNavbar] = useState('navbar');
	const [header, setHeader] = useState('header');

	const showNavbar = () => setNavbar('navbar showNavbar');
	const removeNavbar = () => setNavbar('navbar');

	const addBg = () => {
		if (window.screenY >= 20) setHeader('header addBg');
	};
	window.addEventListener('scroll', addBg);

	return (
		<div className={header}>
			<div className="logoDiv flex">
				<img src={logo} alt="logo img" className="logo" />
				<span>Hor auction</span>
			</div>

			<div className={navbar}>
				<ul className="menu">
					<li className="listItem" onClick={removeNavbar}>
						<a href="/" className="link">
							Racing
						</a>
					</li>
					<li className="listItem" onClick={removeNavbar}>
						<a href="/" className="link">
							Auctions
						</a>
					</li>
					<li className="listItem" onClick={removeNavbar}>
						<a href="/" className="link">
							Merchant
						</a>
					</li>
					<li className="listItem" onClick={removeNavbar}>
						<a href="/" className="link">
							GSB
						</a>
					</li>
				</ul>
				<AiFillCloseCircle className="icon closeIcon" onClick={removeNavbar} />
			</div>

			{/* <button className="btn signUpBtn">Sign Up</button> */}
			<div className="signUp flex">
				<div className="text">Sign Up</div>
				<PiDotsNineBold
					className="icon toggleNavbarIcon"
					onClick={showNavbar}
				/>
			</div>
		</div>
	);
}

export default Navbar;
