// src/components/ProductCard.jsx

import PrimaryButton from './PrimaryButton';

// --- COLOR PALETTE DEFINITION ---
// Primary: Bottle Green
const COLOR_PRIMARY = '#006A4E'; 
// Accent: Muted Gold/Bronze
const COLOR_ACCENT = '#CD7F32';
// Dark Text
const COLOR_TEXT = '#1F2937';

const ProductCard = ({ title, category }) => (
  <div 
    className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    style={{ color: COLOR_TEXT }}
  >
    <div className="h-48 rounded-lg mb-4 flex items-center justify-center bg-gray-100 border border-gray-200">
      <div className="text-xl font-bold" style={{ color: COLOR_PRIMARY }}>
        {title}
      </div>
    </div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm" style={{ color: COLOR_ACCENT }}>{category}</p>
    <div className="flex justify-between items-center mt-3">
      <span className="text-xl font-bold">$99.99</span>
      <PrimaryButton onClick={() => console.log(`Added ${title} to cart`)}>
        Add to Cart
      </PrimaryButton>
    </div>
  </div>
);

export default ProductCard;