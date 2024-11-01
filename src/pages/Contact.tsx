import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactInfo = ({ icon: Icon, title, content }) => (
  <div className="flex items-center mb-4">
    <Icon className="w-6 h-6 text-blue-600 mr-2" />
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p>{content}</p>
    </div>
  </div>
);

const Contact = () => (
  <div className="container mx-auto py-16">
    <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <ContactInfo icon={MapPin} title="Address" content="123 Traveler's Street, Adventure City, AC 12345" />
        <ContactInfo icon={Phone} title="Phone" content="+1 (555) 123-4567" />
        <ContactInfo icon={Mail} title="Email" content="info@cozyhostel.com" />
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Opening Hours</h2>
        <p>Reception: 24/7</p>
        <p>Check-in: 2:00 PM - 10:00 PM</p>
        <p>Check-out: 11:00 AM</p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">Send Message</button>
        </form>
      </div>
    </div>
  </div>
);

export default Contact;