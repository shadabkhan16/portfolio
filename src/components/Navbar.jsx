import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
            <div className="container py-2 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold hidden md:inline cursor-pointer">Shadab Khan</div>

                {/* Links - Hidden on small screens */}
                <div className="hidden md:flex space-x-6">
                    <a href="#home" className="hover:text-gray-400">Home</a>
                    <a href="#service" className="hover:text-gray-400">Services</a>
                    <a href="#project" className="hover:text-gray-400">Projects</a>
                    <a href="#about" className="hover:text-gray-400">About</a>
                    <a href="#contact" className="hover:text-gray-400">Contact</a>
                </div>

                {/* Connect Me Button - Hidden on small screens */}
                <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-500 hover:scale-100 px-4 py-2 rounded-full">
                    Connect Me
                </button>

                {/* Hamburger Menu Icon - Visible on small screens */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Visible when hamburger is clicked */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
                    <a href="#home" className="hover:text-gray-400">Home</a>
                    <a href="#service" className="hover:text-gray-400">Services</a>
                    <a href="#project" className="hover:text-gray-400">Projects</a>
                    <a href="#about" className="hover:text-gray-400">About</a>
                    <a href="#contact" className="hover:text-gray-400">Contact</a>
                    <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full">
                        Connect Me
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
