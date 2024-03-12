'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MdSearch } from 'react-icons/md';

export default function SearchBox() {
	const [search, setSearch] = useState('');
	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		router.push(`/search/${search}`);
	};

	return (
		<form
			className='flex items-center justify-between px-5 mx-auto max-w-6xl'
			onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Procure por palavras-chaves...'
				className='w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button
				className='text-amber-600 cursor-pointer disabled:text-gray-400 flex items-center hover:opacity-75 transition-opacity duration-200 ease-linear'
				disabled={!search === ''}>
				<MdSearch className='mr-1 h-5 w-5' />
				Pesquisar
			</button>
		</form>
	);
}
