// src/components/Hero.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from '../assets/images/slide1.png'; // Replace with your images
import slide2 from '../assets/images/slide1.png';
import slide3 from '../assets/images/slide1.png';
import slide4 from '../assets/images/slide1.png';
import activeIcon from '../assets/icons/activeIcon.svg'; // Replace with your active icon
import dotsIcon from '../assets/icons/dots.svg'; // Replace with your dots icon
import starsIcon from '../assets/icons/fivestars.svg'; // Replace with your stars icon
import underlineIcon from '../assets/icons/underlineIcon.svg'; // Replace with your underline icon
import bumbleIcon from '../assets/icons/bumbleIcon.svg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
    customPaging: (i) => (
      <div className="flex items-center justify-center h-full">
        <img
          src={i === currentSlide ? activeIcon : dotsIcon}
          alt={i === currentSlide ? 'active icon' : 'dot icon'}
          className={i === currentSlide ? 'w-6 h-6' : 'w-3 h-3'}
        />
      </div>
    ),
    appendDots: (dots) => (
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ul style={{ margin: '0px', padding: '20px', display: 'flex', alignItems: 'center', height: '100%' }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <section className="relative h-[90vh] bg-white text-white flex mb-24 items-start">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center h-[90vh]">
        <img src={bumbleIcon} className="absolute bottom-0 left-0 h-24 md:h-48" />
        <div className="w-full md:w-1/2 p-4 md:p-8">
          <p className="font-ribeye text-bumbleGreen text-xl md:text-lg md:text-xl mt-12 md:mt-24 mb-6 md:mb-12">Serving the Boise Area</p>
          <h1 className="text-5xl md:text-7xl text-bumbleGreen font-bold mb-4 md:mb-8">FROM WEEDS TO WONDERS</h1>
          <h2 className="text-2xl md:text-2xl text-bumbleGreen font-semibold mb-8 md:mb-8">Exceptional Garden Care & Design</h2>
          <p className="text-xl md:text-lg leading-8 text-bumbleGreen mb-8 md:mb-16">
            We offer comprehensive flower bed care, expert weeding, precise planting, and bespoke garden design services
            to enhance the beauty of your outdoor space.
          </p>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer">
            <button className="bg-bumbleYellow font-ribeye text-xl text-bumbleBlack mb-12 hover:bg-bumbleGreen hover:text-white font-bold px-6 md:px-8 py-2 md:py-3 rounded">
              CONTACT
            </button>
          </Link>
          <div className="flex flex-col items-center mt-12 md:mt-12 relative">
            <img src={starsIcon} alt="Stars" className="mb-2" />
            <p className="font-ribeye text-bumbleGreen uppercase text-sm md:text-lg mb-2">Five Star Rating</p>
            <img src={underlineIcon} alt="Underline" className="absolute bottom-[-10px]" />
          </div>
        </div>
        <div className="w-full md:w-[680px] absolute top-0 right-0 h-[60vh] md:h-[90vh] hidden md:block">
          <Slider {...settings}>
            <div className="h-[60vh] md:h-[90vh]">
              <img src={slide1} alt="Slide 1" className="w-full h-full object-cover" />
            </div>
            <div className="h-[60vh] md:h-[90vh]">
              <img src={slide2} alt="Slide 2" className="w-full h-full object-cover" />
            </div>
            <div className="h-[60vh] md:h-[90vh]">
              <img src={slide3} alt="Slide 3" className="w-full h-full object-cover" />
            </div>
            <div className="h-[60vh] md:h-[90vh]">
              <img src={slide4} alt="Slide 4" className="w-full h-full object-cover" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
