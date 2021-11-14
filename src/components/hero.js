import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../images/background-resized.PNG';
import TelegramLogo from '../images/telegram.png';
import TwitterLogo from '../images/twitter.png';
import DiscordLogo from '../images/discord.png';

const Hero = () => {
    return (
        <div style = {{ backgroundImage:`url(${ Background })`}} className="bg-cover homepage-div bg-fixed">
                <h1 className="linear-wipe my-48">
                    decent
                </h1>
                <Link className="hero-button" to="/waitlist">
                    Join Waitlist 
                    <svg 
                    className="w-6 h-6 ml-2" 
                    fill="currentColor" 
                    viewBox="0 0 25 25" 
                    xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                        d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" 
                        />
                        <path 
                        fillRule="evenodd" 
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" 
                        clipRule="evenodd" 
                        />
                    </svg>
                </Link>

                <div className='flex flex-wrap my-7 justify-items-center space-x-9 table-auto'>
                    <a href='https://discord.gg/ESfB2qeTXm'>
                        <img className="w-10 h-auto" src={ DiscordLogo }/>
                    </a>
                    <a href='https://twitter.com/decentdotxyz'>
                        <img className="w-9 h-auto" src={ TwitterLogo }/>
                    </a>

                    <a href='https://t.me/joinchat/O4ouMcS43082NzRh'>
                        <img className="w-10 h-auto" src={ TelegramLogo }/>
                    </a>
                </div>
        </div>
    );
}

export default Hero