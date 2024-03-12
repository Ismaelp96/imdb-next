'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function NavbarItem({ title, param }) {
	const searchParams = useSearchParams();
	const genre = searchParams.get('genre');

	return (
		<div
			className={`font-semibold hover:text-amber-600 transition-all duration-200 ease-linear ${
				genre === param
					? 'underline underline-offset-8 decoration-4 decoration-amber-600 rounded-lg'
					: ''
			}`}>
			<Link href={`/?genre=${param}`}>{title}</Link>
		</div>
	);
}
