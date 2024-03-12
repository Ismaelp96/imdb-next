import Image from 'next/image';
import { FiThumbsUp } from 'react-icons/fi';

export default async function MoviePage({ params }) {
	const movieId = params.id;
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=pt-BR`,
	);
	const movie = await res.json();
	console.log(movie);
	return (
		<div className='w-full mx-auto max-w-6xl'>
			<div className='p-4 md:pt-8 flex flex-col md:flex-row md:space-x-6'>
				<div className='overflow-hidden w-full'>
					<Image
						className='rounded-lg hover:opacity-75 transition-all duration-300 ease-in-out hover:scale-105'
						src={`https://image.tmdb.org/t/p/original/${
							movie.backdrop_path || movie.poster_path
						}`}
						width={500}
						height={300}
						alt='movie image'
						title='movie image'
						style={{
							maxWidth: '100%',
							maxHeight: '100%',
							display: 'block',
							objectFit: 'cover',
						}}
					/>
				</div>
				<div className='p-2 max-w-2xl'>
					<h2 className='text-lg mb-3 font-bold'>
						{movie.title || movie.name}
					</h2>
					<p className='text-lg mb-4 '>{movie.overview}</p>
					<p className='mb-1 flex justify-end'>
						<span className='font-semibold mr-1'>Data de Lançamento:</span>
						{movie.release_date || movie.first_air_date}
					</p>
					<div className='flex items-center justify-end'>
						<span className='font-semibold mr-1'>Avaliações:</span>
						<p>{movie.vote_count}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
