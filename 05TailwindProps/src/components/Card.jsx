import React from 'react';

function Card({username , profession}) {
	// console.log(props);
	return (
		<div className="flex flex-col items-center text-start">
			<div
				className="relative flex h-[300px] w-full flex-col justify-end rounded-[10px] bg-red-300"

			>
				<img
					src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBlcnNvbnxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
					alt=""
					className="z-0 h-full w-full rounded-[10px] object-cover"
				/>
				<div className="absolute bottom-4 left-4">
					<h1 className="text-2xl  font-semibold text-black">{username}</h1>
					<h6 className="text-base text-black">{profession}</h6>
				</div>
			</div>
		</div>
	);
}

export default Card;
