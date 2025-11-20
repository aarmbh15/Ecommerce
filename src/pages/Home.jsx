import React, { useState } from 'react';
import { ShoppingCart, Home, Info, User, Zap } from 'lucide-react';

// --- COLOR PALETTE DEFINITION ---
// Primary: Bottle Green
const COLOR_PRIMARY = '#006A4E'; 
// Accent: Muted Gold/Bronze
const COLOR_ACCENT = '#CD7F32';
// Neutral Background
const COLOR_BG = '#F5F5F5';
// Dark Text
const COLOR_TEXT = '#1F2937';

// Helper component for styled buttons
const PrimaryButton = ({ children, onClick, disabled = false }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      px-6 py-2 rounded-lg font-semibold transition duration-300 transform 
      ${disabled ? 'bg-gray-400 cursor-not-allowed' : `bg-[${COLOR_PRIMARY}] text-white hover:bg-opacity-90 active:scale-95 shadow-lg hover:shadow-xl`}
    `}
    style={{ backgroundColor: disabled ? '#9CA3AF' : COLOR_PRIMARY }}
  >
    {children}
  </button>
);

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

// --- PRODUCT CARD COMPONENT ---
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

// --- PAGE COMPONENTS ---

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

const AboutContent = () => (
  <div className="max-w-4xl mx-auto p-8 lg:p-12 space-y-6" style={{ color: COLOR_TEXT }}>
    <h2 className="text-4xl font-bold" style={{ color: COLOR_PRIMARY }}>Our Vision in Green</h2>
    <p>
      VERDANT Threads was founded on the principle of sustainable, quality fashion that doesn't compromise on personal style. We believe that clothing should fit not just your body, but your personality and lifestyle. Our name, derived from the rich green of the natural world, reflects our commitment to eco-conscious practices and timeless designs.
    </p>
    <p className="p-4 rounded-lg border-l-4 font-semibold" style={{ borderColor: COLOR_ACCENT, backgroundColor: '#FEF3C7' }}>
      **Innovation in Fit:** Our journey led us to develop the customized 'Visual Fit' technology. This unique tool in our customized section allows you to visually test how colors and patterns interact with your complexion and features before you buy, ensuring every piece you purchase is a perfect match.
    </p>
    <h3 className="text-2xl font-bold mt-8" style={{ color: COLOR_PRIMARY }}>Quality & Commitment</h3>
    <ul className="list-disc list-inside space-y-2 pl-4">
      <li>**Sustainable Fabrics:** Prioritizing organic cottons and recycled materials.</li>
      <li>**Ethical Sourcing:** Ensuring fair wages and safe working conditions globally.</li>
      <li>**Customer Focus:** Dedicated to a seamless shopping experience, from browsing to delivery.</li>
    </ul>
  </div>
);

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

const CustomizedContent = () => {
    const [image, setImage] = useState(null);
    const [clothColor, setClothColor] = useState(COLOR_PRIMARY);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const colors = [
        { name: 'Bottle Green', hex: COLOR_PRIMARY },
        { name: 'Muted Gold', hex: COLOR_ACCENT },
        { name: 'Navy Blue', hex: '#000080' },
        { name: 'Charcoal Grey', hex: '#36454F' },
    ];

    return (
        <div className="max-w-5xl mx-auto p-8 lg:p-12 space-y-8" style={{ color: COLOR_TEXT }}>
            <h2 className="text-4xl font-bold text-center" style={{ color: COLOR_PRIMARY }}>
                Customized Visual Try-On
            </h2>
            <p className="text-center text-lg max-w-3xl mx-auto" style={{ color: '#4B5563' }}>
                Upload a picture of your face/upper body to see how different colors and styles interact with your natural features and skin tone.
            </p>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* 1. Control Panel */}
                <div className="lg:w-1/3 bg-white p-6 rounded-xl shadow-lg space-y-6 border border-gray-100">
                    <h3 className="text-xl font-semibold border-b pb-3" style={{ color: COLOR_PRIMARY }}>
                        Step 1: Upload Your Image
                    </h3>
                    
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageUpload} 
                        className="w-full text-sm file:mr-4 file:py-2 file:px-4 
                                    file:rounded-full file:border-0 file:text-sm file:font-semibold"
                        style={{
                            '--file-bg': COLOR_PRIMARY,
                            '--file-text': 'white',
                            '--file-hover': '#008060'
                        }}
                    />

                    <h3 className="text-xl font-semibold border-b pb-3 pt-4" style={{ color: COLOR_PRIMARY }}>
                        Step 2: Choose Garment Color
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {colors.map(color => (
                            <div 
                                key={color.name}
                                onClick={() => setClothColor(color.hex)}
                                title={color.name}
                                className={`w-10 h-10 rounded-full cursor-pointer transition transform hover:scale-110 shadow-md border-2`}
                                style={{ 
                                    backgroundColor: color.hex,
                                    borderColor: clothColor === color.hex ? COLOR_ACCENT : 'transparent',
                                    borderWidth: clothColor === color.hex ? '3px' : '2px'
                                }}
                            ></div>
                        ))}
                    </div>
                    <p className="text-sm pt-2">Current Color: <span style={{ color: clothColor }}>{colors.find(c => c.hex === clothColor)?.name || 'Custom'}</span></p>

                    <PrimaryButton disabled={!image} onClick={() => alert('Analyzing fit for selected color...')}>
                        Analyze Fit
                    </PrimaryButton>
                </div>

                {/* 2. Visualizer */}
                <div className="lg:w-2/3 bg-white p-6 rounded-xl shadow-lg border-4 border-dashed flex flex-col items-center justify-center relative"
                     style={{ 
                         borderColor: COLOR_ACCENT, 
                         minHeight: '500px'
                     }}>
                    
                    {image ? (
                        <>
                            <div className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm" style={{ backgroundImage: `url(${image})` }}></div>
                            <div className="relative z-10 p-4 border-4 rounded-xl" style={{ borderColor: clothColor }}>
                                <img src={image} alt="User Face" className="max-h-80 w-auto rounded-lg shadow-2xl" />
                                <div 
                                    className="w-full h-12 mt-4 rounded-lg flex items-center justify-center font-bold text-white text-lg"
                                    style={{ backgroundColor: clothColor }}
                                >
                                    Virtual Garment ({clothColor})
                                </div>
                            </div>
                            <p className="mt-4 text-center text-sm italic">
                                *In a full application, the garment would be digitally layered over the image here.*
                            </p>
                        </>
                    ) : (
                        <div className="text-center space-y-4">
                            <Zap size={64} className="mx-auto" style={{ color: COLOR_ACCENT }} />
                            <p className="text-xl font-medium" style={{ color: COLOR_PRIMARY }}>
                                Upload your image to begin the Visual Try-On experience.
                            </p>
                            <p className="text-sm text-gray-500">
                                This feature helps you judge how colors and tones complement your complexion.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// --- MAIN APPLICATION COMPONENT ---
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
        © 2024 VERDANT Threads. All rights reserved.
      </footer>
    </div>
  );
};

export default App;