import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const navItems = [
        { link: "Overview", path: "home" },
        { link: "Feature", path: "feature" },
        { link: "About", path: "about" },
        { link: "Pricing", path: "pricing" },
    ];

    return (
        <nav>
            <div>
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
            </div>
        </nav>
    );
}

export default Navbar;
