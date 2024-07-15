import React from 'react';
import quoteIcon from '../assets/icons/quote.svg'; // Adjust the path to your quote icon

const ReviewCard = ({ reviewText, author, location }) => {
  return (
    <div className="bg-white rounded-2xl border p-6 md:p-12 w-full h-full relative">
      <div className="absolute top-4 left-4 flex items-center w-full pr-4">
        <img src={quoteIcon} alt="Quote Icon" className="w-6 h-6 md:w-8 md:h-8 mr-2" />
        <hr className="border-t-2 ml-2 border-bumbleYellow flex-grow" />
      </div>
      <p className="text-black text-sm md:text-base mt-12">{reviewText}</p>
      <div className="mt-4">
        <p className="text-bumbleGreen font-bold">{author}</p>
        <p className="text-gray-500">{location}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
