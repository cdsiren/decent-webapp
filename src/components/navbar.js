import React from 'react';
import { Link } from 'react-router-dom';
import DecentLogo from '../images/decentlogo.png';

const navbar = ({ toggle }) => {

    return (
        <nav className='navbar' role="navigation">

            <Link to="/" className='pl-10'>
                <img className="logo w-24 h-auto" src={ DecentLogo } 
                /> 
            </Link>
            
            <div className='px-4 cursor-pointer md:hidden' onClick={ toggle }>
                <svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 6h16M4 12h16M4 18h16" 
                    />
                </svg>
            </div>

            <div className="pr-10 space-x-2 md:block hidden">
                <Link className="p-4" to="/faq">FAQ</Link>
                <Link className="p-4" to="/blog">Artist Blog</Link>
                <a className="my-button" href="https://form.typeform.com/to/Xkh00RVd">Join Waitlist</a>
            </div>   
        </nav>
    );
};

export default navbar
