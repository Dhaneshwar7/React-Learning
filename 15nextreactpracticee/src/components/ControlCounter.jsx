import React, { useState } from 'react';

const UpdateHocControlCounter = OriginalComponent => {
	const NewComponent = () => {
		const [counter, setCounter] = useState(0);

		const handleCounter = () => {
			setCounter(counter + 1);
		};
		return <OriginalComponent counter={counter} handleCounter={handleCounter} />;
	};

	return NewComponent;
};

export default UpdateHocControlCounter;
