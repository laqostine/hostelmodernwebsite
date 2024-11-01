import React from 'react';
import { Link } from 'react-router-dom';
import RoomCard from './RoomCard';

const roomsPreviewData = [
  {
    id: 1,
    type: 'hostel',
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Hostel Bed",
    price: "€20/night",
    description: "Comfortable bed in our welcoming hostel",
    amenities: ["Shared Kitchen", "Free WiFi"]
  },
  {
    id: 2,
    type: 'apartment',
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Entire Apartment",
    price: "€80/night",
    description: "Complete private apartment for your stay",
    amenities: ["Full Kitchen", "Private Bathroom"]
  }
];

const RoomPreview = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Accommodations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {roomsPreviewData.map((room) => (
          <RoomCard key={room.id} {...room} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/rooms" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
          View All Options
        </Link>
      </div>
    </div>
  </section>
);

export default RoomPreview;