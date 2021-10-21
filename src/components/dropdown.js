import React from 'react';
import {Link} from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div className={
            isOpen 
                ? "grid grid-rows-4 text-center items-center bg-white text-purple-700 font-Headers z-50 relative" : "hidden"
        }
        onClick={toggle}
        >
            <Link className="p-4 font-Headers" to="/">Home</Link>
            <Link className="p-4 font-Headers" to="/faq">FAQ</Link>
            <Link className="p-4 font-Headers" to="/blog">Artist Blog</Link>
            <a className="my-button font-Headers" href="https://form.typeform.com/to/Xkh00RVd">Join Waitlist</a>
        </div>
    );
}

export default Dropdown
