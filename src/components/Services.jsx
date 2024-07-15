import React from 'react';
import ServiceCard from './ServiceCard';
import flowerBedIcon from '../assets/icons/flowerbedcare.svg';
import plantingIcon from '../assets/icons/planting.svg';
import weedingIcon from '../assets/icons/weeding.svg';
import designIcon from '../assets/icons/design.svg';
import monthlyMaintenanceIcon from '../assets/icons/monthlymaintenance.svg';
import leaf from '../assets/icons/leaf.svg';

import flowerBedImage from '../assets/images/planting.jpg'; // Replace with your images
import plantingImage from '../assets/images/planting.jpg';
import weedingImage from '../assets/images/planting.jpg';
import designImage from '../assets/images/planting.jpg';
import monthlyMaintenanceImage from '../assets/images/planting.jpg';

const services = [
  {
    icon: flowerBedIcon,
    title: 'Flower Bed Care',
    price: '$50/hr',
    description: [
      {
        title: 'Comprehensive Maintenance',
        details: 'Regular upkeep to ensure your flower beds remain healthy and vibrant.',
      },
      {
        title: 'Seasonal Cleanup',
        details: 'Preparing your garden for changing seasons to keep it looking its best year-round.',
      },
    ],
    additionalInfo: '*$50 charge will be added to all dump fees',
    image: flowerBedImage,
  },
  {
    icon: weedingIcon,
    title: 'Deep Weeding',
    price: '$50/hr',
    description: [
      {
        title: 'Manual Weeding',
        details: 'Expert removal of weeds by hand to maintain the integrity of your garden.',
      },
      {
        title: 'Seasonal Cleanup',
        details: 'Preparing your garden for changing seasons to keep it looking its best year-round.',
      },
    ],
    additionalInfo: '*$50 charge will be added to all dump fees',
    image: weedingImage,
  },
  {
    icon: plantingIcon,
    title: 'Planting',
    price: '$50/hr',
    description: [
      {
        title: 'New Plant Installations',
        details: 'Adding new plants to enhance the beauty and diversity of your garden.',
      },
      {
        title: 'Transplanting',
        details: 'Carefully relocating existing plants to optimize garden design and health.',
      },
      {
        title: 'Seasonal Planting',
        details: 'Introducing seasonal flowers and plants to keep your garden looking fresh and colorful.',
      },
    ],
    additionalInfo: '*$50 charge will be added to all dump fees',
    image: plantingImage,
  },
  {
    icon: designIcon,
    title: 'Design',
    price: '$50/hr',
    description: [
      {
        title: 'Custom Garden Plans',
        details: 'Tailored garden designs to suit your space, style, and preferences.',
      },
      {
        title: 'Landscape Design',
        details: 'Comprehensive landscape solutions, including layout planning and plant selection.',
      },
      {
        title: 'Selection & Pickup/Delivery',
        details: 'We will hand select the plants from the local garden store and deliver them to your location. *We do charge for the time to select, pickup & deliver the plants. $50/hr',
      },
    ],
    additionalInfo: '*$50 charge will be added to all dump fees',
    image: designImage,
  },
  {
    icon: monthlyMaintenanceIcon,
    title: 'Monthly Maintenance',
    price: '6hrs - $280/mo',
    description: [
      {
        title: 'Regular Maintenance',
        details: '3 hours every 2 weeks to keep your garden looking its best.',
      },
      {
        title: 'Flexible Hours',
        details: 'For larger yards or multiple flower beds, additional hours can be arranged.',
      },
      {
        title: 'Selection & Pickup/Delivery',
        details: 'We will hand select the plants from the local garden store and deliver them to your location. Pricing: 3hrs every 2 weeks or 6hrs a month.',
      },
      {
        title: 'Benefits',
        details: 'Your beds and yard will never have looked this good!',
      },
    ],
    additionalInfo: '*$50 charge will be added to all dump fees',
    image: monthlyMaintenanceImage,
    isMonthly: true,
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white mt-24 py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-6xl font-bold font-ribeye text-bumbleGreen mb-12 md:mb-24">Services</h2>
        <img src={leaf} className="absolute top-[20px] right-[20px] md:top-[50px] md:right-[300px] w-24 h-24 md:w-36 md:h-36" alt="Leaf" />
        <div className="grid grid-cols-1 gap-12 md:gap-20">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
