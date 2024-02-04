import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('rgb(66, 135, 135)');

  return (
		<>
			<div className="w-screen h-screen bg-slate-400 flex flex-wrap " style={{backgroundColor:color}}>
				<div className='fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2'>
					<div className="flex justify-center flex-wrap px-3 py-2 gap-4 bottom-12">
						<button onClick={()=>setColor("red")} className="bg-red-600  text-white px-4 py-1 rounded-full">Red</button>
						<button onClick={()=>setColor("green")} className="bg-green-500 text-white px-4 py-1 rounded-full">Green</button>
						<button onClick={()=>setColor("Blue")} className="bg-blue-500 text-white px-4 py-1 rounded-full">Blue</button>
						<button onClick={()=>setColor("Yellow")} className="bg-yellow-500 text-white px-4 py-1 rounded-full">Yellow</button>
						<button onClick={()=>setColor("Orange")} className="bg-orange-500 text-white px-4 py-1 rounded-full">Orange</button>
						<button onClick={()=>setColor("White")} className="bg-white text-black px-4 py-1 rounded-full">White</button>
						<button onClick={()=>setColor("Brown")} className="bg-amber-800 text-white px-4 py-1 rounded-full">Brown</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App
