import NavbarItem from './NavbarItem';

export default function Navbar() {
	return (
		<div className='max-w-6xl mx-auto flex justify-center items-center flex-row gap-4 dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg'>
			<NavbarItem title='Em Alta' param='fetchTrending' />
			<NavbarItem title='Top Filmes' param='fetchTopRated' />
		</div>
	);
}
