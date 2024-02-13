import React from 'react';
import { useParams  } from 'react-router-dom';

const User = () => {
	const { userId } = useParams();
	return (
		<div className="bg-slate-600 p-5 w-full text-3xl">
			<p className="text-3xl bg-orange-400  text-center">User : {userId}</p>
		</div>
	);
};

export default User;
