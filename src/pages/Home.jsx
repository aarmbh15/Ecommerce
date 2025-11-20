// src/pages/Home.jsx

import React from 'react';
import { Zap } from 'lucide-react';
import PrimaryButton from '../components/PrimaryButton';
import ProductCard from '../components/ProductCard';

// --- COLOR PALETTE DEFINITION ---
// Primary: Bottle Green
const COLOR_PRIMARY = '#006A4E'; 
// Accent: Muted Gold/Bronze
const COLOR_ACCENT = '#CD7F32';
// Dark Text
const COLOR_TEXT = '#1F2937';

const HomeContent = ({ setPage }) => (
  <div className="text-center p-12 lg:p-24 space-y-8" style={{ color: COLOR_TEXT }}>
    <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight" style={{ color: COLOR_PRIMARY }}>
      Style Crafted. <br className="lg:hidden"/> Fit Perfected.
    </h1>
    <p className="text-xl max-w-3xl mx-auto" style={{ color: '#4B5563' }}>
      Explore our exclusive collections for the modern wardrobe, and experience the future of fitting with our Customized Try-On feature.
    </p>
    <div className="flex justify-center space-x-4">
      <PrimaryButton onClick={() => setPage('male')}>Shop Men</PrimaryButton>
      <PrimaryButton onClick={() => setPage('female')}>Shop Women</PrimaryButton>
    </div>
    <div 
        onClick={() => setPage('customized')}
        className={`inline-flex items-center space-x-2 mt-4 text-sm font-semibold cursor-pointer transition duration-300 hover:opacity-80`}
        style={{ color: COLOR_ACCENT }}
    >
      <Zap size={18} />
      <span>Try the Customized Experience</span>
    </div>

    <div className="pt-12 grid md:grid-cols-3 gap-8 text-left">
      <ProductCard title="Essential Blazer" category="Male Collection" />
      <ProductCard title="A-Line Dress" category="Female Collection" />
      <ProductCard title="The Signature Bottle Green Tee" category="Unisex" />
    </div>
  </div>
);

export default HomeContent;