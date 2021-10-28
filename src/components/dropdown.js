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
        <Link className="p-4" to="/faq">FAQ</Link>
        <a className="p-4" href="https://mirror.xyz/0x673Fc290d919684A1B1E46AA69152f7b56FBADD8/qsvUuJOGdjj_o49zqtIaSx8wh-92usgJMkkomv-LHNs">Blog</a>
        <Link className="my-button" to="/waitlist">Join Waitlist</Link>
        <Link className="wallet-button" to="/waitlist">Connect Wallet</Link>
        </div>
    );
}

export default Dropdown
