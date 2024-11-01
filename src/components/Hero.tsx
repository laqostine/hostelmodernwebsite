import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <div className="relative h-[600px] bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")'}}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center text-white px-4">
        <h2 className="text-5xl font-bold mb-6">Your Home in Prague</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Choose between our comfortable hostel beds or private apartment accommodations in the heart of Prague</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/rooms" className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300">
            View Hostel Beds
          </Link>
          <Link to="/rooms" className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300">
            View Apartment
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;