import React from 'react';
import TelegramLogo from '../images/telegram.png';
import TwitterLogo from '../images/twitter.png';
import DiscordLogo from '../images/discord.png';

const Footer = () => {

    return (
        <div className="flex justify-center items-center h-16 bg-purple-700 text-white space-x-9 font-Headers bottom-0 w-screen">        
            <p>
                © 2021
            </p>

            <div className='flex flex-wrap my-7 justify-items-center space-x-9 table-auto'>
                <a href='https://discord.gg/ESfB2qeTXm'>
                    <img className="w-8 h-auto" src={ DiscordLogo }/>
                </a>
                <a href='https://twitter.com/decentxyz'>
                    <img className="w-7 h-auto" src={ TwitterLogo }/>
                </a>

                <a href='https://t.me/joinchat/O4ouMcS43082NzRh'>
                    <img className="w-8 h-auto" src={ TelegramLogo }/>
                </a>

            </div>

        </div>
    );
}

export default Footer
