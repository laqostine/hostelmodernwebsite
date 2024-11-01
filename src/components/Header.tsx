import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Prague Stays</Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/rooms" className="hover:text-blue-200">Accommodations</Link></li>
            <li><Link to="/amenities" className="hover:text-blue-200">Amenities</Link></li>
            <li><Link to="/contact" className="hover:text-blue-200">Contact</Link></li>
          </ul>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="absolute top-16 left-0 right-0 bg-blue-600 md:hidden">
            <ul className="flex flex-col items-center py-4">
              <li className="py-2"><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li className="py-2"><Link to="/rooms" onClick={() => setIsMenuOpen(false)}>Accommodations</Link></li>
              <li className="py-2"><Link to="/amenities" onClick={() => setIsMenuOpen(false)}>Amenities</Link></li>
              <li className="py-2"><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;