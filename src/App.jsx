import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import Auction from './components/Auction/Auction';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Review from './components/Review/Review';
import Search from './components/Search/Search';
import Sellers from './components/Sellers/Sellers';
import Trending from './components/Trending/Trending';
import Questions from './components/Questions/Questions';
import Middle from './components/Middle/Middle';
import AboutPage from './pages/AboutPage';
import LandingPage from './pages/LandingPage';
import BlogPage from './pages/BlogPage';

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigate to="/auction" replace />} />
					<Route path="/auction" element={<LandingPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/blog" element={<BlogPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
