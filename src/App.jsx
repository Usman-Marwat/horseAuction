import React from 'react';

import './App.css';
import Auction from './components/Auction/Auction';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Review from './components/Review/Review';
import Search from './components/Search/Search';
import Sellers from './components/Sellers/Sellers';
import Trending from './components/Trending/Trending';

function App() {
	return (
		<div>
			<Navbar />
			<Home />
			{/* <Search />
			<Trending />
			<Trending />
			<Sellers />
			<Auction />
			<Review />
			<Footer /> */}
		</div>
	);
}

export default App;
