import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Dropdown from './components/dropdown';
import Home from './pages';
import Faq from './pages/faq';
import blog from './pages/blog';
import Footer from './components/footer';
import { Switch, Route } from 'react-router-dom';

function App() {
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
      </Switch>
      <Footer />
    </>
  );
}

export default App;
