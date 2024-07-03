import React, { useState } from 'react';
import UpdateHocControlCounter from './ControlCounter';

const HoverCounter = ({ counter, handleCounter }) => {
	return (
		<>
			<div
				onMouseMove={handleCounter}
				style={{
					backgroundColor: 'gray',
					padding: '20px 400px',
					marginTop: '100px',
				}}
			>
				' ' HoverCounter
			</div>
			<div style={{ fontSize: '30px' }}>{counter}</div>
		</>
	);
};

export default UpdateHocControlCounter(HoverCounter);
