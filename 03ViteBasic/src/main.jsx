import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

function MyText() {
	return (
		<div>
			<a href="www.google.com">Google SEArch</a>
		</div>
	);
}
const createElement = {
	type: 'a',
	props: {
		href: 'https://www.google.com',
		target: '_blank',
	},
	children: 'hello React Bc hello',
};

const anotherElement = (
	<a href="www.google.com" target="_blank">
		Seach karo
	</a>
);

const username = 'jojo mike';
const reactElement = React.createElement(
	'a',
	{ href: 'www.facebook.com', target: '_blank' },
	'ha new click fb',
	username
);
ReactDOM.createRoot(document.getElementById('root')).render(
	/* anotherElement */
	// reactElement
	<React.StrictMode>
		<App />
		{/*  createElement   */}
		{/*  anotherElement */}
		{/* <MyText /> */}
	</React.StrictMode>
);
