import React from 'react';
import {Link} from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div className={
            isOpen 
                ? "grid grid-rows-4 text-center items-center bg-purple-700 text-white" : "hidden"
        }
        onClick={toggle}
        >
            <Link className="p-4" to="/">Home</Link>
            <Link className="p-4" to="/menu">FAQ</Link>
            <Link className="p-4" to="/about">Blog</Link>
            <Link className="py-1 px-3 bg-purple-700 rounded-full lg:text-p-4 md:text-p-2 sm:text-p-1 hover:bg-green-200 transition duration-300 ease-in-out text-white">Join Waitlist</Link>   
        </div>
    );
}

export default Dropdown