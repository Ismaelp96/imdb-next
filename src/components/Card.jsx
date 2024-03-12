import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';

export default function CardComponent({ result }) {
    return (
        <div className='group cursor-pointer sm:hover:shadow-slate-600 sm:shadow-md rounded-lg sm:border sm: border-slate-500 sm:m-2 sm:transition-shadow sm:duration-300 sm:ease-in-out'>
            <Link href={`/movie/${result.id}`}>
                <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} alt='image movie' title='image movie' height={300} width={500} className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300' />
                <div className='p-2'>
                    <h2 className='text-lg font-bold truncate mb-1'>{result.title || result.name}</h2>
                    <p className='line-clamp-2 mb-2'>{result.overview}</p>
                    <div className='flex items-center '>
                        <p>
                            {result.release_date || result.first_air_date}
                        </p>
                        <p className='flex items-center hover:text-amber-500 transition-colors duration-300 ease-linear'>

                            <FiThumbsUp className='h-5 w-5 mr-1 ml-3 ' />
                            {result.vote_count}
                        </p>
                    </div>
                </div>

            </Link>
        </div>
    )
}