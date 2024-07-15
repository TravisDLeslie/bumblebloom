// src/components/Contact.jsx
import React from 'react';
import flowerIcon from '../assets/icons/bumbleIcon.svg'; // Adjust the path to your icon
import happyBee from '../assets/icons/happy.svg'; // Adjust the path to your icon


const Contact = () => {
  return (
    <section id="contact" className="bg-bumbleYellow justify-center items-center py-24 relative">
        <img src={happyBee} className='absolute right-[600px] w-36 h-36' />
      <div className="max-w-7xl justify-center items-center mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold font-ribeye text-bumbleGreen mb-6">Your Details</h2>
        <p className="text-lg text-bumbleGreen mb-12">Please fill out the form</p>
        <form className="grid w-[800px] grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 rounded-lg p-4"
          />
          <input
            type="text"
            placeholder="Phone #"
            className="border border-gray-300 rounded-lg p-4"
          />
          <input
            type="text"
            placeholder="Address/Location"
            className="border border-gray-300 rounded-lg p-4"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg p-4"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 rounded-lg p-4 md:col-span-2"
          />
          <textarea
            placeholder="Details"
            className="border border-gray-300 rounded-lg p-4 h-32 md:col-span-2"
          ></textarea>
          <button
            type="submit"
            className="bg-bumbleGreen text-white font-bold px-8 py-4 rounded-md md:col-span-2 hover:bg-bumbleGreen-dark"
          >
            SEND MESSAGE
          </button>
        </form>
        <img
          src={flowerIcon}
          alt="Flower"
          className="absolute bottom-0 right-0 w-48 h-48 mt-8"
        />
      </div>
    </section>
  );
};

export default Contact;
