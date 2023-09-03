import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AiFillCloseCircle } from 'react-icons/ai';
import { PiDotsNineBold } from 'react-icons/pi';

import logo from '../../assets/logo.jpg';

import './Navbar.css';

function Navbar() {
	const [navbar, setNavbar] = useState('navbar');
	const [header, setHeader] = useState('header');
	const navigate = useNavigate();

	const showNavbar = () => setNavbar('navbar showNavbar');
	const removeNavbar = () => setNavbar('navbar');

	const addBg = () => {
		if (window.screenY >= 20) setHeader('header addBg');
	};
	window.addEventListener('scroll', addBg);

	return (
		<div className={header}>
			<div className="logoDiv flex" onClick={() => navigate('/')}>
				<img src={logo} alt="logo img" className="logo" />
				<span>Horse Auction</span>
			</div>

			<div className={navbar}>
				<ul className="menu" onClick={() => navigate(`/about`)}>
					<li className="listItem" onClick={removeNavbar}>
						<a className="link">About Us</a>
					</li>
					<li className="listItem" onClick={removeNavbar}>
						<a className="link">Racing</a>
					</li>
					<li className="listItem" onClick={removeNavbar}>
						<a className="link">Auctions</a>
					</li>
					<li className="listItem" onClick={removeNavbar}>
						<a className="link">Merchant</a>
					</li>
					<li className="listItem" onClick={removeNavbar}>
						<a className="link">GSB</a>
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
