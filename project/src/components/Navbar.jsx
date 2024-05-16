import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { MdLanguage } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        { link: "Overview", path: "home" },
        { link: "Feature", path: "feature" },
        { link: "About", path: "about" },
        { link: "Pricing", path: "pricing" },
    ];

    return (
        <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0 z-50'>
            <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
                <div className='flex space-x-14 items-center'>
                    <a href="/" className='text-3xl font-semibold flex items-center space-x-3 text-primary'>
                        <img src={logo} alt="" className='w-12 inline-block items-center' />
                        <span>Umukoro</span>
                    </a>
                    <ul className='md:flex space-x-12 hidden'>
                        {navItems.map(({ link, path }) => (
                            <li key={link}>
                                <a className='block hover:text-gray-300' href={path}>{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='space-x-12 hidden md:flex items-center'>
                    <a href="/" className='hidden lg:flex items-center hover:text-secondary'>
                        <MdLanguage className='mr-2' />Language
                    </a>
                    <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>Sign Up</button>
                </div>

                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-white  text-xl focus:outline-none focus:text-gray-300'>
                        {isMenuOpen ? <FaXmark className='w-6 h-6 text-primary ' /> : <FaBars className='w-6 h-6 text-primary' />}
                    </button>
                </div>
            </div>

            {/* Responsive Menu */}
            <div className={`md:hidden ${isMenuOpen ? 'block fixed top-16 right-0 left-0 z-50' : 'hidden space-y-4 px-4 pt-24 pb-5 bg-secondary'}`}>
                <ul className='flex flex-col space-y-4 px-4 pt-24 pb-5 bg-secondary'>
                    {navItems.map(({ link, path }) => (
                        <li key={link}>
                            <a className='block hover:text-gray-300' href={path}>{link}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
