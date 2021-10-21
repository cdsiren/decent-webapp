import React from 'react';
import { Link } from 'react-router-dom';
import DecentLogo from '../images/decentlogo.png';
import { PopupButton } from '@typeform/embed-react';

const Popup = () => {
  return (
    <PopupButton id="Xkh00RVd" className="my-button">click to open form in popup 
    </PopupButton>
  );
}

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
                <a className="p-4" href="https://www.notion.so/51c89a40c7d048f389336b8512846cf0?v=bfb0a35383544bd9bc945bada65d17b7">Artist Blog</a>
                <PopupButton className="my-button" onClick={ Popup }>Join Waitlist</PopupButton>
            </div>   
        </nav>
    );
};

export default navbar