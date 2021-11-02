import React from 'react';

const Faq = () => {
    return (
        <div className="flex flex-col bg-purple-100 h-auto font-Headers">
            <h1 className="lg:text-8xl md:text-7xl sm:text-6xl text-6xl lg:mx-24 md:mx-20 sm:mx-16 mt-28 linear-wipe">
                FAQ
            </h1>

            <h1 className="lg:text-4xl md:text-3xl sm:text-3xl text-3xl lg:mx-24 md:mx-20 sm:mx-16 font-black">
            Why build Decent?
            </h1>

            <p className='lg:text-lg md:text-md sm:text-sm text-sm lg:mx-24 md:mx-20 sm:mx-16 mt-2 p-2'>
            It is traditionally accepted that signing with a label is a big break for an artists.  However, with social media and streaming platforms, labels are no longer gatekeepers to success.  In fact, the vast majority of artists independently create, distribute, and market their own music, somtimes without ever leaving their bedrooms. 
            <br></br>
            <br></br>
            As a byproduct of this paradigm shift, indie artists’ fanbases have grown exponetially BUT their financial condition has remained unchanged.  This dichotemy is entirely illogical and a reminent of antiquated economics.
            <br></br>
            <br></br>
            Currently, the relationship between artists and their fans is very deep but difficult to directly monetize.  Above all else, Decent promises to bridge this divide, allowing artists who SHOULD have a market, to actually have a market and capture the full value they create.
            </p>

            <h1 className="lg:text-4xl md:text-3xl sm:text-3xl text-3xl lg:mx-24 md:mx-20 sm:mx-16 font-black mt-6">
            What's in it for artists?
            </h1>

            <p className='lg:text-lg md:text-md sm:text-sm text-sm lg:mx-24 md:mx-20 sm:mx-16 mt-2 p-2'>
            Upfront capital and, more importantly, a fanbase properly incentivized to market on behalf of artists.  Your investors make money when your streams increase.
            </p>

            <h1 className="lg:text-4xl md:text-3xl sm:text-3xl text-3xl lg:mx-24 md:mx-20 sm:mx-16 font-black mt-6">
            What's in it for fans?
            </h1>

            <p className='lg:text-lg md:text-md sm:text-sm text-sm lg:mx-24 md:mx-20 sm:mx-16 mt-2 p-2'>
            The opportunity for fans to manage their own label.  Fans can discover new artists and support their favorites in a way never before possible.
            </p>

            <h1 className="lg:text-4xl md:text-3xl sm:text-3xl text-3xl lg:mx-24 md:mx-20 sm:mx-16 font-black mt-6">
            What's new about Decent?
            </h1>

            <p className='lg:text-lg md:text-md sm:text-sm text-sm lg:mx-24 md:mx-20 sm:mx-16 mt-2 p-2'>
            Two things: 
            <br></br>
            <br></br>
            1) Decent is building the first protocol to bring royalties on chain, enabling artists to batch mint NFTs that are actually collateralized by their royalties.  
            <br></br>
            <br></br>
            2) Decent is the first web3 platform offering flexible financing solutions for artists.  Decent's platform architecture allows artists to choose the percentage of their royalties that they would like to list and the amount of time for which they would like to let fans participate in their royalties.  
            <br></br>
            <br></br>
            This is a novel and uniquely strong approach to solve indie monetization, which was derived in collaboration with rising indie artists.
            </p>

        </div>
    );
}

export default Faq