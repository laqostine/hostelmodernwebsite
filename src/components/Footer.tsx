import React from 'react';
import { MapPin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <h2 className="text-2xl font-bold">Comfort Hotel</h2>
        <p className="flex items-center mt-2">
          <MapPin className="w-4 h-4 mr-2" />
          123 Traveler's Street, Adventure City
        </p>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-blue-400">Facebook</a>
        <a href="#" className="hover:text-blue-400">Instagram</a>
        <a href="#" className="hover:text-blue-400">Twitter</a>
      </div>
    </div>
    <div className="text-center mt-8">
      <p>&copy; 2024 Comfort Hotel. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;