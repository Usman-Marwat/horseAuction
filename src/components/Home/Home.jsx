import React from 'react';

import './Home.css';
import homeImage from '../../assets/homeImage.png';
import aboutHorse from '../../assets/aboutHorse.png';

function Home({ about }) {
	return (
		<div className="home">
			<div className="secContainer">
				<div className="homeText flex">
					<span className="homeSpan">Meet The Horse Up For Bidding Now!</span>
					<h1 className="homeTitle">Arabian Horse</h1>
					<div className="btns flex">
						<button className="btn">More Details</button>
						<button className="btn primaryBtn">Test Ride</button>
					</div>
				</div>
			</div>
			<div className="homeImage">
				<img src={about ? aboutHorse : homeImage} alt="Home Image" />
			</div>
		</div>
	);
}

export default Home;
