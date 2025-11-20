// src/App.jsx

import React, { useState } from 'react';
import Header from './components/Header';
import HomeContent from './pages/Home';
import AboutContent from './pages/About';
import CartContent from './pages/Cart';
import ProductList from './pages/ProductList';
import CustomizedContent from './pages/CustomizedTryOn';

// --- COLOR PALETTE DEFINITION ---
// Neutral Background
const COLOR_BG = '#F5F5F5';
// Primary: Bottle Green (for Footer)
const COLOR_PRIMARY = '#006A4E'; 
// Dark Text
const COLOR_TEXT = '#1F2937';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomeContent setPage={setCurrentPage} />;
      case 'about':
        return <AboutContent />;
      case 'cart':
        return <CartContent />;
      case 'male':
        return <ProductList category="Male" />;
      case 'female':
        return <ProductList category="Female" />;
      case 'customized':
        return <CustomizedContent />;
      default:
        return <HomeContent setPage={setCurrentPage} />;
    }
  };

  return (
    <div 
      className="min-h-screen font-sans antialiased"
      style={{ backgroundColor: COLOR_BG, color: COLOR_TEXT }}
    >
      <Header currentPage={currentPage} setPage={setCurrentPage} />
      <main className="py-8">
        {renderPage()}
      </main>
      <footer 
        className="p-6 text-center text-sm" 
        style={{ backgroundColor: COLOR_PRIMARY, color: 'white' }}
      >
        © 2025 VERDANT Threads. All rights reserved.
      </footer>
    </div>
  );
};

export default App;