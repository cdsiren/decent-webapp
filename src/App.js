import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Dropdown from './components/dropdown';
import Home from './pages';
import Faq from './pages/faq';
import waitlist from './pages/waitlist';
import Footer from './components/footer';
import { Switch, Route } from 'react-router-dom';

//MetaMask Connection
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';

function getLibrary(provider) {
  return new Web3(provider)
}

function WalletConnect ({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  )
}

function App() {
 
  //Menu Toggle
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 700 && isOpen) {
        setIsOpen(false)
        console.log('u resized')
      }
    }

    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }

  })

  return (
    <>
      <Navbar toggle={ toggle }/>
      <Dropdown isOpen={isOpen} toggle={ toggle }/>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/faq" exact component={ Faq } />
        <Route path="/waitlist" exact component={ waitlist } />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
