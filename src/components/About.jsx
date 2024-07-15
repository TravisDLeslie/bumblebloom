import React from 'react';
import aboutImage from '../assets/images/planting.jpg'; // Replace with the actual image path
import icon from '../assets/icons/leafplant.svg';

const About = () => {
  return (
    <section id="about" className="bg-bumbleGreen py-24 relative">
      <div className="max-w-7xl mx-auto px-4 mt-12 mb-24 text-center sm:px-6 lg:px-8">
        <h2 className="text-6xl font-bold font-ribeye text-white mb-20">About</h2>
        <div className="flex flex-col md:flex-row items-start text-left relative">
          <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-8 relative">
            <img src={icon} alt="About Us" className="absolute top-[-50px] left-[0px] md:top-[-50px] md:left-[-50px] w-24 h-24 p-6 bg-bumbleYellow border rounded-2xl" />
            <img src={aboutImage} alt="About Us" className="w-full h-[500px] object-cover rounded-2xl bg-gray-200" />
          </div>
          <div className="text-white ml-2 md:ml-8 mt-4 w-full md:w-[600px]">
            <h3 className="text-2xl font-ribeye font-bold">
              BRYNNA LESLIE
              <br className="md:hidden" />
              <span className="italic font-poppins text-xl font-normal block md:inline">- 15+ yrs experience</span>
            </h3>
            <p className="mt-4 font-normal text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.
            </p>
            <p className="mt-4 font-normal text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
