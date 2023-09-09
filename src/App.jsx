import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import AboutPage from './pages/AboutPage';
import LandingPage from './pages/LandingPage';
import BlogPage from './pages/BlogPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigate to="/auction" replace />} />
					<Route path="/auction" element={<LandingPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/blog" element={<BlogPage />} />
					<Route path="/products" element={<ProductsPage />} />
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
