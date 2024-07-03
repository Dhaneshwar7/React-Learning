import { useState, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import { Link } from 'react-router-dom';
import ErrorBoundary from '../src/components/ErrorBoundary.jsx';

function App() {
	return (
		<>
			<ErrorBoundary fallback={<p>Something went wrong</p>}>
				{/* Create Nav to see Counter practice by Hitesh Choudhary */}
				{/* <Header />  */}
				<ClickCounter />
				<HoverCounter />
			</ErrorBoundary>
		</>
	);
}

export default App;
