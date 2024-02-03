import { useState, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	// let counter = 5;  this value is not change the UI of React That why the is Hooks in React which helps to make Variable in React and for Changing value in UI

	/* ----- Generally Use Counter --- */
	const [counter, setCounter] = useState(5);
	const [text, setText] = useState('');

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

	/* -----  For Interview Question --- */
	const [inter, setInter] = useState(null);
	const [textinter, setTextinter] = useState('');
	const increaseValue = () => {
		// counter = counter +1;
		if (inter !== 100) {
			/* setInter(inter + 10);
			setInter(inter + 10);
			setInter(inter + 10); */ // in this type we can't update a value in

			setInter(previnter => previnter + 10);
			setInter(previnter => previnter + 10);
			console.log(inter);
		} else {
			setTextinter('100 is max');
		}

		console.log('Added Value ', counter, Math.random());
	};
	const decreaseValue = () => {
		if (inter !== 0) {
			setInter(inter - 10);
		} else {
			setTextinter('0 is Minimum');
		}
		console.log('Minus Value ', Math.random());
	};
	return (
		<>
			<div style={{ display: 'flex', alignItems: 'center', gap: '100px' }}>
				<div className="h-screen w-screen bg-green-200 flex items-center justify-center">
					<h1>General Way</h1>
					<h2> Numebr is :- {counter}</h2>
					<p>{counter === 20 ? text : ''}</p>
					<p>{counter === 0 ? text : ''}</p>
					<br />
					<button onClick={plusValue}>Add Value By +1</button>
					<br />
					<br />
					<button onClick={minusValue}>Add Value By -1</button>
				</div>
				<div className="h-screen w-screen bg-green-200 flex items-center justify-center">
					<h1>For Interview Way</h1>
					<h2> Numebr is :- {inter}</h2>
					<p>{inter === 100 ? textinter : ''}</p>
					<p>{inter === 0 ? textinter : ''}</p>
					<br />
					<button onClick={increaseValue}>Add Value By + 10</button>
					<br />
					<br />
					<button onClick={decreaseValue}>Add Value By - 10</button>
				</div>
			</div>
		</>
	);
}

export default App;
