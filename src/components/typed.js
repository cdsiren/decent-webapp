import React, { Component } from 'react';
import Typical from 'react-typical';
 
class Typed extends React.Component {
  render () {
    return (
        <div className='flex flex-wrap items-center mb-12'>
            <p className='lg:text-3xl md:text-2xl sm:text-xl text-xl bg-white p-2 text-center'> {' '}
                <Typical
                steps={["a decentralized label", 1000,"putting artists and fans on the same team", 1000,"a dapp enabling fans to invest in artists", 1000, "an NFT platform where fans can earn artists' royalties", 1000, "a new protocol bringing streaming royalties on chain", 1000]}
                loop={ Infinity }
                wrapper="b"
                />
            </p>
      </div>
    )
  }
}

export default Typed