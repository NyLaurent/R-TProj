import React from 'react';
import logo from '../assets/logo.png';
import { MdLanguage } from "react-icons/md";

const Navbar = () => {
    const navItems = [
        { link: "Overview", path: "home" },
        { link: "Feature", path: "feature" },
        { link: "About", path: "about" },
        { link: "Pricing", path: "pricing" },
    ];

    return (
        <nav>
            <div className='text-x1'>
                <div>
                    <a href="/" className='text-3xl font-semibold flex items-center space-x-3 text-primary'>
                        <img src={logo} alt="" className='w-12 inline-block items-center' />
                        <span>Umukoro</span>
                    </a>
                    <ul className='md: flex space-x-12'>
                        {navItems.map(({ link, path }) => (
                        <a className='block hover:text-gray-300' key={link} href={path}>{link}</a>
                        ))}
                    </ul>
                </div>


<div className='space-x-12 hidden md:flex items-center'>
    <a href="/" className='hidden lg:flex items-center hover:text-secondary'> <MdLanguage className='mr-2'/>Langauge</a>
    <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>Sign Up</button>
</div>


            </div>
        </nav>
    );
}

export default Navbar;
