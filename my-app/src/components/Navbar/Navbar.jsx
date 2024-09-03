"use client";

import React from 'react';
import Link from 'next/link';
import DarkMode from '../DarkMode';
import { HiMenuAlt3, HiMenuAlt1 } from 'react-icons/hi';
import ResponsiveMenu from './ResponsiveMenu';

export const Navlinks = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'About', link: '/about' },
  { id: 3, name: 'Services', link: '/services' },
  { id: 4, name: 'Contact', link: '/contact' },
  // Add more links as needed
];

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

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
                <li key={id} className="py-4">
                  <Link href={link} className={`text-lg font-medium text-black dark:text-white py-2 px-4 rounded-full hover:bg-primary duration-300`}>
                    {name}
                  </Link>
                </li>
              ))}
              {/* Dark Mode feature */}
              <DarkMode />
            </ul>
          </div>
          {/* Mobile Menu Section */}
          <div className='md:hidden flex items-center gap-4'>
            <DarkMode />
            {showMenu ? (
              <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
            ) : (
              <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu}/>
    </nav>
  );
};

export default Navbar;
