// src/pages/Cart.jsx

import React, { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';

// --- COLOR PALETTE DEFINITION ---
// Primary: Bottle Green
const COLOR_PRIMARY = '#006A4E'; 
// Accent: Muted Gold/Bronze
const COLOR_ACCENT = '#CD7F32';
// Dark Text
const COLOR_TEXT = '#1F2937';

const CartContent = () => {
  const [items] = useState([
    { id: 1, name: 'Bottle Green Hoodie', price: 65.00, qty: 1 },
    { id: 2, name: 'Gold Accent Scarf', price: 25.00, qty: 1 },
  ]);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="max-w-4xl mx-auto p-8 lg:p-12 space-y-6" style={{ color: COLOR_TEXT }}>
      <h2 className="text-4xl font-bold" style={{ color: COLOR_PRIMARY }}>Your Shopping Cart</h2>
      
      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {items.map(item => (
            <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm" style={{ color: COLOR_ACCENT }}>Qty: {item.qty}</p>
              </div>
              <div className="text-lg font-bold">${(item.price * item.qty).toFixed(2)}</div>
            </div>
          ))}

          <div className="border-t pt-4 mt-6 flex justify-between items-center text-xl font-bold">
            <span>Subtotal:</span>
            <span style={{ color: COLOR_PRIMARY }}>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-end pt-4">
            <PrimaryButton>Proceed to Checkout</PrimaryButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContent;