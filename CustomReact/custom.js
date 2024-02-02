const customRender = (createElement, mainContainer) => {
	/*
     //Version 01 Type
	const domElement = document.createElement(createElement.type);
	domElement.innerHTML = createElement.children;
	domElement.setAttribute("href",createElement.props.href);
	domElement.setAttribute("target",createElement.target);
	mainContainer.appendChild(domElement);
    */

	//Version 02 Type
	const domElement = document.createElement(createElement.type);
	domElement.innerHTML = createElement.children;
	for (const attri in createElement.props) {
		if (attri == 'children') continue;
		domElement.setAttribute(attri, createElement.props[attri]);
	}
	mainContainer.appendChild(domElement);
};

const mainContainer = document.getElementById('root');
const createElement = {
	type: 'a',
	props: {
		href: 'https://www.google.com',
		target: '_blank',
	},
	children: 'hello React Bc hello',
};

customRender(createElement, mainContainer);
