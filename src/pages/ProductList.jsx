// src/pages/ProductList.jsx

import React from 'react';
import ProductCard from '../components/ProductCard';

// --- COLOR PALETTE DEFINITION ---
// Primary: Bottle Green
const COLOR_PRIMARY = '#006A4E'; 

const ProductList = ({ category }) => (
  <div className="max-w-7xl mx-auto p-8 lg:p-12 space-y-8">
    <h2 className="text-4xl font-bold text-center" style={{ color: COLOR_PRIMARY }}>{category} Collection</h2>
    <p className="text-center text-lg" style={{ color: '#4B5563' }}>Discover our curated selection of {category.toLowerCase()} apparel.</p>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProductCard title={`${category} Shirt`} category={category} />
      <ProductCard title={`${category} Trousers`} category={category} />
      <ProductCard title={`Bottle Green ${category} Jumper`} category={category} />
      <ProductCard title={`Accent ${category} Watch`} category={category} />
    </div>
  </div>
);

export default ProductList;