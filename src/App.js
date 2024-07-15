// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import Services from './components/Services';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="font-poppins">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Reviews />
      
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
