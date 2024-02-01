import { useEffect, useRef, useState } from 'react';
import { animate, motion } from 'framer-motion';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="bg-slate-700 w-full h-screen ">
				{[null, null, null, null, null].map(i => (
					<motion.span
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, dealy: 0.5 }}
						className="inline-block w-full h-1 bg-slate-50"
					></motion.span>
				))}
				<h1>dd</h1>
			</div>
		</>
	);
}

export default App;
