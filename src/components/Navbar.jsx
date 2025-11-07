import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../assets/Logo.jpeg'; // ✅ Correct path to your logo image

// === Inline SVG Icon Component ===
const Icon = ({ path }) => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
  </svg>
);

// === Navigation Links ===
const navLinks = [
  { to: '/', label: 'Home', icon: <Icon path="M3 12l9-9 9 9M5 10v7a2 2 0 002 2h10a2 2 0 002-2v-7M10 17l2 2m0-7v7" /> },
  { to: '/about', label: 'About', icon: <Icon path="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
  { to: '/publications', label: 'Publications', icon: <Icon path="M12 6.253v13m0-13C10.832 5.467 9.244 5 7.5 5 5.757 5 4.168 5.467 3 6.253v13C4.168 18.467 5.757 18 7.5 18s3.332.467 4.5 1.253m0-13C13.168 5.467 14.757 5 16.5 5 18.243 5 19.832 5.467 21 6.253v13C19.832 18.467 18.243 18 16.5 18s-3.332.467-4.5 1.253" /> },
  { to: '/hall-of-honour', label: 'Hall of Honour', icon: <Icon path="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.973 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.539 1.118l-3.973-2.888a1 1 0 00-1.176 0l-3.973 2.888c-.784.57-1.838-.196-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.973-2.888c-.783-.57-.381-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z" /> },
  { to: '/Roadmap', label: 'Roadmap', icon: <Icon path="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /> },
  { to: '/join', label: 'Join', icon: <Icon path="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20v-2c0-.594-.237-1.168-.659-1.588M12 18V6m-1-5h2M7 16h10a2 2 0 002-2V8a2 2 0 00-2-2H7a2 2 0 00-2 2v6a2 2 0 002 2z" /> },
  { to: '/testimonials', label: 'Testimonials', icon: <Icon path="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.805A7.94 7.94 0 015 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /> },
  { to: '/contact', label: 'Contact', icon: <Icon path="M3 5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-1.558M16 16.5h.01M16 12a4 4 0 00-4-4v4l-3-3m0 0l-3 3M4 14.5l3-3m0 0l3 3m-3-3v4a4 4 0 004 4h4" /> },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black backdrop-blur-md z-50 border-t border-gray-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* === Logo === */}
        <Link
          to="/"
          className="flex items-center focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg"
        >
          <img
            src={Logo}
            alt="PhDians Logo"
            className="h-12 w-auto object-contain shadow-md transition transform hover:scale-105 duration-200"
          />
        </Link>

        {/* === Desktop Menu === */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative flex items-center gap-2 text-sm font-medium transition-all duration-300 after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 after:transition-all after:duration-300
                ${
                  location.pathname === link.to
                    ? 'text-cyan-400 after:w-full'
                    : 'text-gray-200 hover:text-cyan-300 hover:after:w-full'
                }`}
            >
              <span className="text-lg">{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </div>

        {/* === Mobile Toggle Button === */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-200 hover:text-cyan-400 transition focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-md p-1"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* === Mobile Menu === */}
      {mobileOpen && (
        <div className="md:hidden bg-blue-900/90 backdrop-blur-sm border-t border-blue-700">
          <div className="px-6 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 py-3 px-2 text-base font-medium rounded-lg transition-all duration-200
                  ${
                    location.pathname === link.to
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-200 hover:text-cyan-300 hover:bg-blue-800/50'
                  }`}
              >
                <span className="text-lg">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
