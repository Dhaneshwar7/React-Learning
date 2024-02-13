import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
	// const [data, setData] = useState([]);
	const data = useLoaderData();
	// useEffect(() => {
	// 	fetch('https://api.github.com/users/Dhaneshwar7')
	// 		.then(res => res.json())
	// 		.then(res => {
	// 			console.log(res);
	// 			setData(res);
	// 		});
	// }, []);

	return (
		<>
			<div className="w-full bg-teal-500 py-5 px-20">
				<h1 className="text-center text-2xl mb-5">
					Github Followers : {data ? data.followers : '0'}
				</h1>
				<div className="flex justify-center gap-10 w-2/3">
					<img src={data.avatar_url} alt="Github Picture" />
					<div>
						<h1>3gjdf</h1>
						<p>djfl</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Github;

export const githubInfoLoader = async () => {
	const res = await fetch('https://api.github.com/users/Dhaneshwar7');
	return res.json();
};
