import React, { useState } from 'react';
import UpdateHocControlCounter from './ControlCounter';

const ClickCounter = ({ counter, handleCounter }) => {
	return (
		<>
			<div
				onClick={handleCounter}
				style={{
					backgroundColor: 'gray',
					padding: '20px 400px',
					marginTop: '100px',
				}}
			>
				" " ClickCounter
			</div>
			<div style={{ fontSize: '30px' }}>{counter}</div>
		</>
	);
};

export default UpdateHocControlCounter(ClickCounter);
