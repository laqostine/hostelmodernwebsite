import React from 'react';
import { Wifi, Coffee, Utensils, Dumbbell, Tv, Users, MapPin, Shirt } from 'lucide-react';

const amenities = [
  { icon: Wifi, name: 'Free Wi-Fi', description: 'High-speed internet throughout the hostel' },
  { icon: Coffee, name: 'Communal Kitchen', description: 'Fully equipped kitchen for guest use' },
  { icon: Utensils, name: 'Breakfast Included', description: 'Complimentary continental breakfast' },
  { icon: Dumbbell, name: 'Fitness Center', description: 'Small gym with basic equipment' },
  { icon: Tv, name: 'Common Room', description: 'Lounge area with TV and games' },
  { icon: Users, name: 'Social Events', description: 'Regular events for guests to mingle' },
  { icon: MapPin, name: 'Tour Desk', description: 'Information and booking for local tours' },
  { icon: Shirt, name: 'Laundry Facilities', description: 'Self-service laundry room' },
];

const AmenityCard = ({ icon: Icon, name, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <Icon className="w-12 h-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Amenities = () => (
  <div className="container mx-auto py-16">
    <h1 className="text-4xl font-bold text-center mb-12">Our Amenities</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {amenities.map((amenity, index) => (
        <AmenityCard key={index} {...amenity} />
      ))}
    </div>
  </div>
);

export default Amenities;