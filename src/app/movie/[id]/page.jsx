import Image from 'next/image'

export default async function MoviePage({ params }) {
    const movieId = params.id
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)
    const movie = await res.json()
    console.log(movie)
    return (
        <div className='w-full mx-auto max-w-6xl'>
            <div className='p-4 md:pt-8 flex flex-col md:flex-row md:space-x-6'>
                <div className="overflow-hidden w-full">
                    <Image className='rounded-lg hover:opacity-75 transition-all duration-300 ease-in-out hover:scale-105' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} width={500} height={300} alt='movie image' title='movie image' style={{ maxWidth: "100%", maxHeight: "100%", display: 'block', objectFit: 'cover' }} />
                </div>
                <div className='p-2 max-w-2xl'>
                    <h2 className='text-lg mb-3 font-bold'>{movie.title || movie.name}</h2>
                    <p className='text-lg mb-3 '>{movie.overview}</p>
                    <p className='mb-3'>
                        <span className='font-semibold mr-1'>Date Released:</span>
                        {movie.release_date || movie.first_air_date}
                    </p>
                    <p className='mb-3'>
                        <span className='font-semibold mr-1'>Rating:</span>
                        {movie.vote_count}
                    </p>
                </div>
            </div>

        </div>
    )
}