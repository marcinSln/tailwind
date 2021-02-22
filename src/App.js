import React from 'react';
import { Header } from './Components/Header';
import { Baner } from './Components/Baner';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
	return (
		<BrowserRouter>
			<div className="bg-blue-dark  min-h-screen">
				<Header />
				<Baner />
			</div>
		</BrowserRouter>
	);
}
