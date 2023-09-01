import React, { useState } from 'react';
import { GiHorseHead } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { PiDotsNineBold } from 'react-icons/pi';

import logo from '../../assets/logo.jpg';

import './Navbar.css';

function Navbar() {
	const [navbar, setNavbar] = useState('navbar');

	const showNavbar = () => setNavbar('navbar showNavbar');
	const removeNavbar = () => setNavbar('navbar');

	return (
		<div className="header">
			<div className="logoDiv flex">
				<img src={logo} alt="logo img" className="logo" />
				<span>Hor auction</span>
			</div>

			<div className={navbar}>
				<ul className="menu">
					<li className="listItem" onClick={removeNavbar}>
						<a href="/" className="link">
							Used Horses
						</a>
					</li>
					<li className="listItem" onClick={removeNavbar}>
						<a href="/" className="link">
							New Horses
						</a>
					</li>
					<li className="listItem" onClick={removeNavbar}>
						<a href="/" className="link">
							Auctions
						</a>
					</li>
					<li className="listItem" onClick={removeNavbar}>
						<a href="/" className="link">
							Sell
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
