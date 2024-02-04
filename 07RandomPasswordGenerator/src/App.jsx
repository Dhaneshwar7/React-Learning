import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
	const [password, setPassword] = useState('');
	const [length, setLength] = useState(5);
	const [characterAllowed, setCharacterAllowed] = useState(false);
	const [numbersAllowed, setNumbersAllowed] = useState(false);
	const [copycolor, setCopycolor] = useState(false);

	const passwordGenerator = useCallback(() => {
		let pass = '';
		let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		if (characterAllowed) str += '!@#$%^&*-_+=[]{}~`';
		if (numbersAllowed) str += '0123456789';

		for (let i = 1; i <= length; i++) {
			let char = Math.floor(Math.random() * str.length + 1);
			pass += str.charAt(char);
		}
		setPassword(pass);
	}, [length, characterAllowed, numbersAllowed, setPassword]);

	/* -- useRef Hook for Password Copy on ClipBoard -- */
	const passRef = useRef(null);
	const copyBtn = useRef(null);
	const copyPasswordOnClipboard = useCallback(() => {
    passRef.current?.select()
    setCopycolor(true);
    // passRef.current?.setSelectionRange(0,12 )
    if(copycolor){
      copyBtn.current.style.backgroundColor = 'green';
    }
		window.navigator.clipboard.writeText(password);
	}, [password]);
  
	useEffect(() => {
		passwordGenerator();
    setCopycolor(false);



	}, [length, characterAllowed, numbersAllowed, passwordGenerator]);
	return (
		<>
			<div className="passContainer w-screen h-screen bg-gray-500 flex flex-wrap justify-center items-center">
				<div className="passCard w-3/4 h-1/2 bg-white rounded-2xl overflow-hidden">
					<div className="text text-3xl text-center py-4 font-semibold">
						RANDOM  PASSWORD/TOKEN  GENERATOR
					</div>
					<div className="passGenrator  bg-slate-900 text-white h-[85%] flex flex-col items-center justify-center">
						<div className="flex w-[80%]">
							<input
								type="text"
								readOnly
								className="outline-none w-full py-3 px-4 text-xl rounded-md text-black"
								value={password}
								placeholder="Password"
								ref={passRef}
							/>
							<button
								onClick={copyPasswordOnClipboard}
                ref={copyBtn}
                style={{backgroundColor: copycolor? "green":"gray"}}
								className=" px-5 py-2 text-white rounded-md"
							>
								Copy
							</button>
						</div>
						<div className="flex w-[80%] md:flex-row flex-col mt-5 bg-slate-500 items-center justify-evenly">
							<div className="flex items-center gap-x-2">
								<input
									type="range"
									className="cursor-pointer"
									min={5}
									max={50}
									value={length}
									onChange={e => setLength(e.target.value)}
								/>
								<label htmlFor="rangeInput" className="text-xl">
									{length}
								</label>
							</div>
							<div className="flex items-center gap-x-2 px-5">
								<input
									type="checkbox"
									className="cursor-pointer"
									id="numberInput"
									defaultChecked={numbersAllowed}
									onChange={() => {
										setNumbersAllowed(prev => !prev);
									}}
								/>
								<label htmlFor="numberInput" className="text-xl">
									Numbers
								</label>
							</div>
							<div className="flex items-center gap-x-2 px-5">
								<input
									type="checkbox"
									className="cursor-pointer "
									id="characterInput"
									defaultChecked={characterAllowed}
									onChange={() => {
										setCharacterAllowed(prev => !prev);
									}}
								/>
								<label htmlFor="characterInput" className="text-xl">
									Characters
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
