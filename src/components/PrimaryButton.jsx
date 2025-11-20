// src/components/PrimaryButton.jsx

// --- COLOR PALETTE DEFINITION ---
// Primary: Bottle Green
const COLOR_PRIMARY = '#006A4E'; 

const PrimaryButton = ({ children, onClick, disabled = false, className = '' }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      px-6 py-2 rounded-lg font-semibold transition duration-300 transform 
      ${className}
      ${disabled ? 'bg-gray-400 cursor-not-allowed' : `text-white hover:bg-opacity-90 active:scale-95 shadow-lg hover:shadow-xl`}
    `}
    style={{ backgroundColor: disabled ? '#9CA3AF' : COLOR_PRIMARY }}
  >
    {children}
  </button>
);

export default PrimaryButton;