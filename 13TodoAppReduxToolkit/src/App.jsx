import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {

	return (
		<>
			<div>Todos</div>
			<AddTodo />
			<Todos />
		</>
	);
}

export default App;
