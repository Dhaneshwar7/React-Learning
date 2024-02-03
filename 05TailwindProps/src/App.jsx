import { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {

	return (
		<>
			<div>
				<h1>Let Learn || Tailwind and Props || use</h1>
			</div>
			<br />
			<Card username={'Jojo Mike'} profession={'Java Developer'} />
      <br />
			<Card username={'November Mike'} profession={'Video Editor'} />
		</>
	);
}

export default App;
