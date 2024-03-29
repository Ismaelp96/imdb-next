import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';

import MenuItem from './MenuItem';
import DarkMode from './DarkModeSwitch';

export default function Header() {
	return (
		<div className='flex items-center justify-between p-3 max-w-6xl mx-auto'>
			<div className='flex gap-4'>
				<MenuItem title='home' address='/' Icon={AiFillHome} />
				<MenuItem title='Sobre' address='/about' Icon={BsFillInfoCircleFill} />
			</div>
			<div className='flex gap-4 items-center'>
				<DarkMode />
				<Link href={'/'} className='flex gap-1 items-center'>
					<span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg hover:brightness-95 duration-300 ease-in-out'>
						IMDb
					</span>
					<span className='text-xl hidden sm:inline hover:text-amber-500 transition-colors duration-300 ease-linear'>
						Next
					</span>
				</Link>
			</div>
		</div>
	);
}
