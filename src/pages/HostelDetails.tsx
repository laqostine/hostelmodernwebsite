import React, { useState } from 'react';
import { Calendar, Users, Clock, Check } from 'lucide-react';

const hostelPhotos = [
  '/photos/rooms/hostel/WhatsApp Image 2024-10-15 at 10.52.04.jpeg',
  '/photos/rooms/hostel/WhatsApp Image 2024-10-15 at 10.52.06.jpeg',
  '/photos/rooms/hostel/WhatsApp Image 2024-10-15 at 10.52.11.jpeg',
  '/photos/rooms/hostel/WhatsApp Image 2024-10-15 at 10.52.12.jpeg',
  '/photos/rooms/hostel/WhatsApp Image 2024-10-15 at 10.52.13.jpeg',
  '/photos/rooms/hostel/WhatsApp Image 2024-10-15 at 10.52.14.jpeg',
  '/photos/rooms/hostel/WhatsApp Image 2024-10-15 at 10.52.15.jpeg',
  '/photos/rooms/hostel/WhatsApp Image 2024-10-15 at 10.52.16.jpeg',
  '/photos/rooms/hostel/WhatsApp Image 2024-10-15 at 10.52.17.jpeg',
  '/photos/rooms/hostel/WhatsApp Image 2024-10-15 at 10.53.19.jpeg'
];

const features = [
  { icon: Calendar, text: 'Flexible check-in/check-out' },
  { icon: Users, text: 'Social common areas' },
  { icon: Clock, text: '24/7 reception' },
  { icon: Check, text: 'Clean and comfortable beds' }
];

const BOOKING_URL = 'https://www.booking.com/hotel/cz/hostel-comfort.tr.html?label=gog235jc-1DCAsoOkIOaG9zdGVsLWNvbWZvcnRIKFgDaOQBiAEBmAEouAEXyAEV2AED6AEB-AECiAIBqAIDuALTtYO5BsACAdICJGU3OTIxNjFmLTk4OTUtNDU0Ni05ZWE4LTNhNDZiNTBlN2NhMtgCBOACAQ&sid=c9f7b4ad6800e7aa6472429254984e26&aid=356980&ucfs=1&arphpl=1&checkin=2024-10-29&checkout=2024-10-30&dest_id=-553173&dest_type=city&group_adults=1&req_adults=1&no_rooms=1&group_children=2&req_children=2&age=10&req_age=10&age=16&req_age=16&hpos=1&hapos=1&sr_order=popularity&srpvid=f8b05aaa987702e8&srepoch=1730206427&soh=1&from=searchresults#no_availability_msg';

const HostelDetails = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(hostelPhotos[0]);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(BOOKING_URL, '_blank');
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8">Hostel Accommodation</h1>

      {/* Photo Gallery */}
      <div className="mb-12">
        <div className="mb-4">
          <img 
            src={selectedPhoto} 
            alt="Selected hostel view" 
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="grid grid-cols-5 gap-2">
          {hostelPhotos.slice(0, 5).map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Hostel view ${index + 1}`}
              className={`w-full h-24 object-cover rounded cursor-pointer ${
                selectedPhoto === photo ? 'ring-2 ring-blue-600' : ''
              }`}
              onClick={() => setSelectedPhoto(photo)}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Details Section */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">About Our Hostel</h2>
          <p className="text-gray-600 mb-6">
            Experience the perfect blend of comfort and community in our modern hostel. 
            Our carefully designed spaces offer both privacy and opportunities to connect 
            with fellow travelers from around the world.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <feature.icon className="w-5 h-5 text-blue-600 mr-2" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-4">Amenities</h3>
          <ul className="grid grid-cols-2 gap-2 text-gray-600">
            <li>• Free Wi-Fi</li>
            <li>• Shared Kitchen</li>
            <li>• Lockers</li>
            <li>• Common Room</li>
            <li>• Laundry Facilities</li>
            <li>• 24/7 Security</li>
          </ul>
        </div>

        {/* Booking Form */}
        <div className="bg-white p-6 rounded-lg shadow-md h-fit">
          <h3 className="text-xl font-bold mb-4">Book Your Stay</h3>
          <form onSubmit={handleBooking}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Check-in Date</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Check-out Date</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Number of Guests</label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full p-2 border rounded"
              >
                {[1, 2, 3, 4].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
            <div className="text-xl font-bold mb-4">
              €20 <span className="text-gray-500 text-base">/ night</span>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-300"
            >
              Book on Booking.com
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HostelDetails;