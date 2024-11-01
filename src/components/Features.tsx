import React from 'react';
import { Bed, Home, MapPin, Euro } from 'lucide-react';

const Feature = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
    <Icon className="w-12 h-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const Features = () => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Feature 
          icon={Bed} 
          title="Hostel Beds" 
          description="Affordable and comfortable hostel beds for travelers"
        />
        <Feature 
          icon={Home} 
          title="Private Apartment" 
          description="Complete apartment or private rooms for a homely stay"
        />
        <Feature 
          icon={MapPin} 
          title="Prime Location" 
          description="Centrally located in Prague with easy access to attractions"
        />
        <Feature 
          icon={Euro} 
          title="Flexible Options" 
          description="Choose between hostel beds or private accommodations"
        />
      </div>
    </div>
  </section>
);

export default Features;