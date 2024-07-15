import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import Services from './components/Services';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

const App = () => {
  return (
    <div className="font-poppins">
      <Header />
      <main>
        <Hero />
        <div className="md:hidden">
          <Gallery />
        </div>
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
