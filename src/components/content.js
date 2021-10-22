import React from 'react';
import Typed from './typed';

const Content = () => {
    return (
        <>
        <div className='flex flex-col bg-purple-100 h-auto font-Headers items-center'>

            <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-4xl text-purple-700 font-extrabold bg-white p-2 mt-36">Meet Decent
            </h1>

            <Typed />

            <div className='content-blocks mx-4 mb-6'> 
                            
                <h2 className="inline-block w-2/5 lg:text-7xl md:text-6xl sm:text-5xl text-5xl text-purple-700 font-extrabold align-center">How it <br></br>Works</h2>
             
                <a className='inline-block w-2/5'>
                    <h3 className='font-extrabold lg:text-3xl md:text-2xl sm:text-2xl'>1. Artists List Royalties
                    </h3>
                    <p className='p-2 mb-2'>
                        <b>Musicians</b>: select the % of your royalties that you would like to make available to fans AND the time for which you would like to list that % <br></br>
                        <i><b>Most Importantly:</b></i> Decent <u><b>always</b></u> lets you retain 100% of your IP - join our waitlist to receive more info
                    </p>
                </a>

            </div>
            <div className='content-blocks mx-4 mb-4'>

                <a className='inline-block w-2/5'>
                    <h3 className='font-extrabold lg:text-3xl md:text-2xl sm:text-2xl'>2. Purchase Royalty-Collateralized NFTs
                    </h3>
                    <p className='p-2'>
                        <b>Fans</b>: support and earn alongside your favorite artists by purchasing NFTs that unlock a % of those artists' royalties.  You can trade artists' NFTs on Decent & all exchanges supporting <a href="https://polygon.technology/" className='text-purple-700'><b><u>Polygon</u></b>
                        </a>
                    </p>
                </a>

                <a className='inline-block w-2/5 align-top'>
                    <h3 className='font-extrabold lg:text-3xl md:text-2xl sm:text-2xl'>3. Unlock Access to Artists' Communities
                    </h3>
                    <p className='p-2'>
                        <b>Fans</b>: engage with artits and trade NFTs to build your reputation on Decent.  Most active fans can unlock exclusive experiences and become eligible for Decent airdrops  
                    </p>
                </a>

            </div>
        </div>
    </>
    );
}

export default Content