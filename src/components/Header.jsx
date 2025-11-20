// src/Header.jsx

import React from 'react';
import { ShoppingCart, Home, Info, User, Zap } from 'lucide-react';

// --- COLOR PALETTE DEFINITION ---
// Primary: Bottle Green
const COLOR_PRIMARY = '#006A4E'; 
// Dark Text
const COLOR_TEXT = '#1F2937';

// --- NAVIGATION COMPONENT ---
const Header = ({ currentPage, setPage }) => {
  const navItems = [
    { name: 'Home', icon: Home, page: 'home' },
    { name: 'About', icon: Info, page: 'about' },
    { name: 'Cart', icon: ShoppingCart, page: 'cart' },
  ];

  const sectionItems = [
    { name: 'Male', icon: User, page: 'male' },
    { name: 'Female', icon: User, page: 'female' },
    { name: 'Customized Try-On', icon: Zap, page: 'customized' },
  ];

  const NavLink = ({ item }) => (
    <div
      onClick={() => setPage(item.page)}
      className={`
        flex items-center space-x-2 p-3 cursor-pointer rounded-lg transition-colors
        ${currentPage === item.page 
          ? 'bg-opacity-10 font-bold'
          : 'hover:bg-gray-100'
        }
      `}
      style={{ 
        color: currentPage === item.page ? COLOR_PRIMARY : COLOR_TEXT,
        backgroundColor: currentPage === item.page ? COLOR_PRIMARY + '1A' : 'transparent' // 1A is ~10% opacity
      }}
    >
      <item.icon size={20} />
      <span>{item.name}</span>
    </div>
  );

  return (
    <header 
      className="shadow-md sticky top-0 z-10"
      style={{ backgroundColor: 'white' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div 
            className="text-2xl font-extrabold cursor-pointer" 
            style={{ color: COLOR_PRIMARY }}
            onClick={() => setPage('home')}
          >
            VERDANT Threads
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(item => <NavLink key={item.page} item={item} />)}
            <div className="h-6 w-px" style={{ backgroundColor: '#D1D5DB' }} /> {/* Divider */}
            {sectionItems.map(item => <NavLink key={item.page} item={item} />)}
          </div>

          <div className="md:hidden">
            <NavLink item={navItems.find(i => i.page === 'cart')} />
          </div>
        </div>
        
        {/* Mobile Section Links */}
        <div className="md:hidden flex justify-around py-2 border-t border-gray-100">
            {sectionItems.map(item => (
                <div key={item.page} className="w-1/3">
                    <NavLink item={item} />
                </div>
            ))}
        </div>
      </div>
    </header>
  );
};

export default Header;