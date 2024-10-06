import React from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center ">
        <a href="/" className="text-lg font-bold text-gray-800 hover:text-gray-600">
          <img src="src\assets\Logo.png" alt=""  className='w-32 h-16 bg-transparent drop-shadow-md'/>
        </a>
      </div>
      <ul className="hidden md:flex justify-between items-center solway">
        <li className="mr-6">
          <Link to="/" className="text-gray-800 font-medium hover:text-gray-600">
            Home
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/about" className="text-gray-800 font-medium hover:text-gray-600">
            About
          </Link>
        </li>
        <Dropdown />
      </ul>
      <button className="md:hidden flex justify-center w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;