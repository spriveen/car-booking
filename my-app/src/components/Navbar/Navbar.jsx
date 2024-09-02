import Link from 'next/link';
import React from 'react';

const Navlinks = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'About', link: '/about' },
  { id: 3, name: 'Services', link: '/services' },
  { id: 4, name: 'Contact', link: '/contact' },
  // Add more links as needed
];

const Navbar = () => {
  return (
    <nav className='relative z-10 shadow-md w-full dark:bg-dark dark:text-white duration-300'>
      <div className='container py-2 md:py-0'>
        <div className='flex items-center justify-between'>
          {/* Logo section */}
          <Link href="/" className='text-3xl font-bold'>
            <span>Cab</span>
            <span className='text-primary'>Hub</span>
          </Link>
          {/* Desktop Menu section */}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-6'>
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="">
                  <Link href={link} className=''>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
