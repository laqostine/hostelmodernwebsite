import React from 'react';
import RoomCard from '../components/RoomCard';

const roomsData = [
  // Hostel Section
  {
    id: 1,
    type: 'hostel',
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Hostel Bed in Shared Room",
    price: "€20/night",
    description: "Comfortable bed in our welcoming hostel, perfect for travelers",
    amenities: ["Shared Kitchen", "Free WiFi", "Shared Bathroom", "Locker Storage"]
  },
  // Apartment Section
  {
    id: 2,
    type: 'apartment',
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Entire Apartment",
    price: "€80/night",
    description: "Complete private apartment with all amenities for a comfortable stay",
    amenities: ["Full Kitchen", "Private Bathroom", "Living Room", "2 Bedrooms"]
  },
  {
    id: 3,
    type: 'apartment',
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Private Room in Apartment",
    price: "€35/night",
    description: "Private room in a shared apartment with access to all facilities",
    amenities: ["Shared Kitchen", "Shared Bathroom", "Furnished Room", "Work Desk"]
  }
];

const Rooms = () => {
  const hostelRooms = roomsData.filter(room => room.type === 'hostel');
  const apartmentRooms = roomsData.filter(room => room.type === 'apartment');

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">Our Accommodations</h1>
        
        {/* Hostel Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Hostel Accommodation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hostelRooms.map((room) => (
              <RoomCard key={room.id} {...room} />
            ))}
          </div>
        </div>

        {/* Apartment Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Apartment Accommodation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apartmentRooms.map((room) => (
              <RoomCard key={room.id} {...room} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;