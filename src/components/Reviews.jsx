// src/components/Reviews.jsx
import React from 'react';
import ReviewCard from './ReviewCard';
import starsIcon from '../assets/icons/fivestars.svg'; // Adjust the path to your stars icon
import underlineIcon from '../assets/icons/underlineIcon.svg'; // Adjust the path to your underline icon

const reviews = [
  { reviewText: 'Travis is an exceptional designer! He worked quickly and efficiently to deliver a stunning logo and landing page for my commercial real estate lead generation company. His attention to detail was impressive and he was able to understand my exact wants and needs.', author: 'Tyler Randal', location: 'Boise Northend' },
  { reviewText: 'Travis is an exceptional designer! He worked quickly and efficiently to deliver a stunning logo and landing page for my commercial real estate lead generation company. His attention to detail was impressive and he was able to understand my exact wants and needs.', author: 'Tyler Randal', location: 'Boise Northend' },
  { reviewText: 'Travis is an exceptional designer! He worked quickly and efficiently to deliver a stunning logo and landing page for my commercial real estate lead generation company. His attention to detail was impressive and he was able to understand my exact wants and needs.', author: 'Tyler Randal', location: 'Boise Northend' },
  { reviewText: 'Travis is an exceptional designer! He worked quickly and efficiently to deliver a stunning logo and landing page for my commercial real estate lead generation company. His attention to detail was impressive and he was able to understand my exact wants and needs.', author: 'Tyler Randal', location: 'Boise Northend' },
  { reviewText: 'Travis is an exceptional designer! He worked quickly and efficiently to deliver a stunning logo and landing page for my commercial real estate lead generation company. His attention to detail was impressive and he was able to understand my exact wants and needs.', author: 'Tyler Randal', location: 'Boise Northend' },
  { reviewText: 'Travis is an exceptional designer! He worked quickly and efficiently to deliver a stunning logo and landing page for my commercial real estate lead generation company. His attention to detail was impressive and he was able to understand my exact wants and needs.', author: 'Tyler Randal', location: 'Boise Northend' },
];

const Reviews = () => {
  return (
    <section id="reviews" className="bg-white py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-6xl font-bold font-ribeye mt-12 text-bumbleGreen mb-12">REVIEWS</h2>
          <div className="flex flex-col items-center relative">
            <img src={starsIcon} alt="Five Star Rating" className="mb-2" />
            <p className="font-ribeye text-bumbleGreen uppercase text-lg">5 STAR RATING</p>
            <img src={underlineIcon} alt="Underline" className="relative mb-12" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
