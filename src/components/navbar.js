import React from 'react';
import { Link } from 'react-router-dom';
import DecentLogo from '../images/decentlogo.png';
/*import { InjectedConnector } from '@web3-react/injected-connector';*/

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
                <a className="p-4" href="https://mirror.xyz/0x673Fc290d919684A1B1E46AA69152f7b56FBADD8/qsvUuJOGdjj_o49zqtIaSx8wh-92usgJMkkomv-LHNs">Blog</a>
                <Link className="my-button" to="/waitlist">Join Waitlist</Link>
            </div>   
        </nav>
    );
};

/*export const injected = new InjectedConnector({
    supportedChainIds: [1,3,4,5,42],
})*/

export default navbar
