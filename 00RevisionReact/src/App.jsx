import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
	const [numberAllowed, setNumberAllowed] = useState(false);
	const [charAllowed, setCharAllowed] = useState(false);
	const [randomCode, setRandomCode] = useState('');
	const [range, setRange] = useState(5);
	const randomRef = useRef(null);

	const RandomCodeGenerator = useCallback(() => {
		let randomGeneratedCode = '';
		let str = 'ABCDEFGHIJKLMNOPQRSTUMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		if (numberAllowed) str += '1234567890';
		if (charAllowed) str += '!@#$%^&*-_+=[]{}~`';
		for (let i = 0; i < range; i++) {
			let char = Math.floor(Math.random() * str.length + 1);
			randomGeneratedCode += str.charAt(char);
		}
		setRandomCode(randomGeneratedCode);
	}, [numberAllowed, charAllowed, range]);
	useEffect(() => {
		RandomCodeGenerator();
	}, [numberAllowed, charAllowed, range, RandomCodeGenerator]);

	const CopyRandomCode = useCallback(() => {
		console.log(randomRef.current);
		randomRef.current?.select();
		window.navigator.clipboard.writeText(randomCode);
	}, [randomCode]);

	return (
		<>
			<div>
				<input type="text" ref={randomRef} readOnly value={randomCode} />
				<br />
				<button onClick={CopyRandomCode}>Copyy</button>
				<div className="flex">
					<input
						type="range"
						min={5}
						max={40}
						onChange={e => setRange(e.target.value)}
						value={range}
						className="cursor-pointer"
					/>
					<label htmlFor="range">{range}</label>
				</div>
				<div className="flex">
					<input
						type="checkbox"
						defaultChecked={numberAllowed}
						onChange={() => {
							setNumberAllowed(prev => !prev);
						}}
						className="cursor-pointer"
					/>
					<label htmlFor="">numbers</label>
				</div>
				<div className="flex">
					<input
						type="checkbox"
						defaultChecked={charAllowed}
						onChange={() => {
							setCharAllowed(prev => !prev);
						}}
						className="cursor-pointer"
					/>
					<label htmlFor="">Characters</label>
				</div>
			</div>
		</>
	);
}

export default App;
