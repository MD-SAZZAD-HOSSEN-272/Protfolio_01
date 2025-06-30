import React from 'react';
import logoImage from './assets/logo1.png'
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className=' py-1 top-0 mx-auto left-0 px-5 rounded-2xl right-0 fixed bg-[#0f0f23]/80 backdrop-blur-md shadow-md z-50 text-white'>
            <div className="max-w-7xl flex justify-between items-center mx-auto px-4 py-3">
            <img className='w-16 h-16' src={logoImage} alt="" />
            <div className='flex items-center gap-8'>
                <Link to='home' smooth={true} duration={1000} offset={-200} className="hover:text-purple-400 transition">Home</Link>
                <Link to='about' smooth={true} duration={1000} offset={-100} className="hover:text-purple-400 transition">About</Link>
                <Link to='skill' smooth={true} duration={1000} offset={-100} className="hover:text-purple-400 transition">Skill</Link>
                <Link to='project' smooth={true} duration={1000} offset={-300} className="hover:text-purple-400 transition">Project</Link>
                <Link to='contact' smooth={true} duration={1000} offset={-100} className="hover:text-purple-400 transition">Contact</Link>
            </div>
            <button>Resume</button>
        </div>
        </nav>
    );
};

export default Navbar;