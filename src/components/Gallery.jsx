import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from '../assets/images/slide1.png';
import slide2 from '../assets/images/slide1.png';
import slide3 from '../assets/images/slide1.png';
import slide4 from '../assets/images/slide1.png';
import activeIcon from '../assets/icons/activeIcon.svg';
import dotsIcon from '../assets/icons/dots.svg';

const Gallery = () => {
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
    <div className="block md:hidden w-full h-[60vh]">
      <Slider {...settings}>
        <div className="h-[60vh]">
          <img src={slide1} alt="Slide 1" className="w-full h-full object-cover" />
        </div>
        <div className="h-[60vh]">
          <img src={slide2} alt="Slide 2" className="w-full h-full object-cover" />
        </div>
        <div className="h-[60vh]">
          <img src={slide3} alt="Slide 3" className="w-full h-full object-cover" />
        </div>
        <div className="h-[60vh]">
          <img src={slide4} alt="Slide 4" className="w-full h-full object-cover" />
        </div>
      </Slider>
    </div>
  );
};

export default Gallery;
