import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.jpeg';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* === Brand Section with Logo === */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center justify-center md:justify-start gap-3 mb-3"
            >
              <img
                src={Logo}
                alt="PhDians Logo"
                className="h-20 w-20 object-contain shadow-md hover:scale-105 transition-transform duration-300"
              />
              {/* <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white">
                PhDians
              </span> */}
            </Link>
         <p className="text-sm text-gray-400">
  Celebrating research, connecting minds,
  <br />
  advancing science.
</p>
          </div>

          {/* === Quick Links === */}
          <div>
            <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              {[
                { to: '/about', label: 'About' },
                { to: '/hall-of-honour', label: 'Hall of Honour' },
                { to: '/publications', label: 'Publications' },
                { to: '/join', label: 'Join' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-cyan-400 transition duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* === Contact & Social === */}
          <div>
            <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>
                Email:{' '}
                <a
                  href="mailto:phdians@gmail.com"
                  className="text-cyan-400 hover:text-cyan-300 transition font-medium"
                >
                  phdians@gmail.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <span className="text-cyan-400 font-medium">+91 9538354137</span>
              </p>
              <p>
                Instagram:{' '}
                <a
                  href="https://instagram.com/phdians"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition font-medium"
                >
                  @phdians
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* === Bottom Bar === */}
        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} PhDians. All rights reserved.</p>
          <p className="mt-1">Empowering researchers worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
