import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoomCard = ({ image, title, price, description, amenities, type }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    if (type === 'hostel') {
      navigate('/hostel');
    } else {
      // Handle apartment booking differently if needed
      console.log('Booking apartment');
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="mb-4">
          {amenities.map((amenity, index) => (
            <li key={index} className="text-sm text-gray-500">• {amenity}</li>
          ))}
        </ul>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold">{price}</span>
          <button 
            onClick={handleBookNow}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;