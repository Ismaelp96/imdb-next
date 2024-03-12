'use client';

import { useEffect } from 'react';

export default function Error({ err, reset }) {
	useEffect(() => {
		console.log(err);
	}, [err]);
	return (
		<div className='text-center mt-10'>
			<h1>Something went wrong. Please try again later.</h1>
			<button
				onClick={() => reset()}
				className='hover:text-amber-600 transition-colors duration-300 ease-linear'>
				Try Again
			</button>
		</div>
	);
}
