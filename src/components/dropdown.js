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
            <Link className="p-4" to="/faq">FAQ</Link>
            <Link className="p-4" to="/blog">Artist Blog</Link>
            <a className="my-button" href="https://form.typeform.com/to/Xkh00RVd">Join Waitlist</a>  
        </div>
    );
}

export default Dropdown