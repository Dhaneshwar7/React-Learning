import { useState, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	let [counter, setCounter] = useState(5);
	let [text, setText] = useState('');

	// let counter = 5;  this value is not change the UI of React

	const plusValue = () => {
		// counter = counter +1;
		if (counter !== 20) {
			setCounter(counter + 1);
		} else {
			setText('20 is max');
		}

		console.log('Added Valye ', counter, Math.random());
	};
	const minusValue = () => {
		if (counter !== 0) {
			setCounter(counter - 1);
		} else {
			setText('0 is Minimum');
		}
		console.log('Minus Value ', Math.random());
	};

	return (
		<>
			<div className="h-screen w-screen bg-green-200 flex items-center justify-center">
				<h1> Numebr is :- {counter}</h1>
				<p>{counter === 20 ? text : ''}</p>
				<p>{counter === 0 ? text : ''}</p>
				<br />
				<button onClick={plusValue}>Add Value By +1</button>
				<br />
				<br />
				<button onClick={minusValue}>Add Value By -1</button>
			</div>
		</>
	);
}

export default App;
