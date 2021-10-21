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
            <a className="p-4" href="https://www.notion.so/51c89a40c7d048f389336b8512846cf0?v=bfb0a35383544bd9bc945bada65d17b7">Artist Blog</a>
            <a className="my-button" href="https://form.typeform.com/to/Xkh00RVd">Join Waitlist</a>   
        </div>
    );
}

export default Dropdown
