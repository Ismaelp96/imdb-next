import Link from 'next/link';

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link
      href={address}
      className='hover:text-amber-500 transition-colors duration-300 ease-linear'
    >
      <Icon className='text-2xl sm:hidden' />
      <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  );
}
