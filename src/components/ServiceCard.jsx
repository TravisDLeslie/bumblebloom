import React from 'react';
import happyBeeIcon from '../assets/icons/happy.svg'; // Adjust the path to your icon

const ServiceCard = ({ icon, title, price, description, additionalInfo, isMonthly, image }) => {
  return (
    <div className="relative bg-white rounded-2xl border border-bumbleGreen-opacity-50 p-6 md:p-8 hover:bg-bumbleGreen group grid grid-cols-1 md:grid-cols-[auto,1fr,auto] gap-6 items-start">
      <div className="flex items-start">
        <img src={icon} alt={`${title} icon`} className="w-12 h-12 md:w-16 md:h-16 group-hover:text-white" />
      </div>
      <div className="flex mt-4 flex-col">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl md:text-3xl font-bold font-ribeye text-bumbleGreen group-hover:text-white">{title}</h3>
          <span className="text-lg md:text-xl font-regular text-bumbleGreen group-hover:text-white">{price}</span>
        </div>
        <ul className="mt-4 md:mt-8 space-y-2 md:space-y-4 text-bumbleGreen group-hover:text-white list-disc list-inside">
          {description.map((desc, index) => (
            <li key={index}>
              <strong className='font-semibold text-base'>{desc.title}</strong>: {desc.details}
            </li>
          ))}
        </ul>
        {additionalInfo && <p className="mt-4 text-sm italic text-gray-600 group-hover:text-gray-200">{additionalInfo}</p>}
      </div>
      <div className="flex-shrink-0 mt-4 md:mt-0">
        <img src={image} alt={`${title}`} className="w-full md:w-[460px] h-full object-cover rounded-md" />
      </div>
      <img src={happyBeeIcon} alt="Happy Bee" className="absolute hidden group-hover:block top-0 right-[16px]  md:right-0 md:top-0 w-24 h-24 md:w-36 md:h-36" />
    </div>
  );
};

export default ServiceCard;
