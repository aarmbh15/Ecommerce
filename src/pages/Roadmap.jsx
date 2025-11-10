import { useState } from 'react';
import { Link } from "react-router-dom";

// --- Image Imports (29 Images) ---
import img1 from '../assets/Training Session/1.png';
import img2 from '../assets/Training Session/2.png';
import img3 from '../assets/Training Session/3.png';
import img4 from '../assets/Training Session/4.png';
import img5 from '../assets/Training Session/5.png';
import img6 from '../assets/Training Session/6.png';
import img7 from '../assets/Training Session/7.png';
import img8 from '../assets/Training Session/8.png';
import img9 from '../assets/Training Session/9.jpeg';

import img10 from '../assets/Training Session/10.jpeg';
import img11 from '../assets/Training Session/11.jpeg';
import img12 from '../assets/Training Session/12.jpeg';
import img13 from '../assets/Training Session/13.jpeg';
import img14 from '../assets/Training Session/14.jpeg';
import img15 from '../assets/Training Session/15.jpeg';
import img16 from '../assets/Training Session/16.jpeg';
import img17 from '../assets/Training Session/17.jpeg';
import img18 from '../assets/Training Session/18.jpeg';
import img19 from '../assets/Training Session/19.jpeg';
import img20 from '../assets/Training Session/20.jpeg';
import img21 from '../assets/Training Session/21.jpeg';
import img22 from '../assets/Training Session/22.jpeg';
import img23 from '../assets/Training Session/23.jpeg';
import img24 from '../assets/Training Session/24.jpeg';
import img25 from '../assets/Training Session/25.jpeg';
import img26 from '../assets/Training Session/26.jpeg';
import img27 from '../assets/Training Session/27.jpeg';
import img28 from '../assets/Training Session/28.jpeg';
import img29 from '../assets/Training Session/29.jpeg';


// --- Inline SVG Icons ---
const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
  </svg>
);

// --- Component Data (Unchanged) ---
const services = [
  {
    title: 'Scientific Publication Assistance',
    description: 'Comprehensive support from manuscript preparation and journal selection to submission and revision handling for high-impact factor journals.',
    iconPath: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7L15 2zM10 16H8M16 12H8M16 8H8',
  },
  {
    title: 'Book Publication Services',
    description: 'Guidance through the entire process of writing, editing, formatting, and publishing academic or professional books with reputable publishers.',
    iconPath: 'M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z',
  },
  {
    title: 'Grant Application Support',
    description: 'Expert consultation on identifying funding opportunities, proposal writing, budgeting, and strategic alignment for securing research grants.',
    iconPath: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h1a3.5 3.5 0 0 1 0 7H6',
  },
  {
    title: 'International Research Collaboration',
    description: 'Facilitating partnerships between s across the globe, including joint projects, MoUs, and managing cross-border logistics.',
    iconPath: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM2.5 10H21.5M12 2.5V21.5',
  },
  {
    title: 'Conferences and Trainings',
    description: 'Organizing specialized conferences, workshops, and training sessions to enhance research skills and professional networking.',
    iconPath: 'M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v2',
  },
];

// --- Updated Training Images Array with all 29 imports ---
const trainingImages = [
  { src: img1, alt: 'Students in a laboratory workshop' },
  { src: img2, alt: 'Research students working on petri dishes' },
  { src: img3, alt: 'Group photo receiving awards at a conference' },
  { src: img4, alt: 'Group photo for National Science Day' },
  { src: img5, alt: 'Large group of scholars in a hospital or university hallway' },
  { src: img6, alt: 'Small group photo at Karnataka State Open University' },
  { src: img7, alt: 'Research team collaboration session' },
  { src: img8, alt: 'Microbiology work under a laminar flow hood' },
  { src: img9, alt: 'Training event photo 9' }, // New images with placeholder alt text
  { src: img10, alt: 'Training event photo 10' },
  { src: img11, alt: 'Training event photo 11' },
  { src: img12, alt: 'Training event photo 12' },
  { src: img13, alt: 'Training event photo 13' },
  { src: img14, alt: 'Training event photo 14' },
  { src: img15, alt: 'Training event photo 15' },
  { src: img16, alt: 'Training event photo 16' },
  { src: img17, alt: 'Training event photo 17' },
  { src: img18, alt: 'Training event photo 18' },
  { src: img19, alt: 'Training event photo 19' },
  { src: img20, alt: 'Training event photo 20' },
  { src: img21, alt: 'Training event photo 21' },
  { src: img22, alt: 'Training event photo 22' },
  { src: img23, alt: 'Training event photo 23' },
  { src: img24, alt: 'Training event photo 24' },
  { src: img25, alt: 'Training event photo 25' },
  { src: img26, alt: 'Training event photo 26' },
  { src: img27, alt: 'Training event photo 27' },
  { src: img28, alt: 'Training event photo 28' },
  { src: img29, alt: 'Training event photo 29' },
];

const ImageComponent = ({ src, alt, delay }) => (
  <img
    src={src}
    alt={alt}
    className="w-full h-48 object-cover rounded-xl shadow-lg transition duration-300 hover:shadow-2xl hover:scale-[1.02] transform animate-slide-up-fade"
    style={{ animationDelay: `${delay}s` }}
    onError={(e) => {
      e.target.onerror = null;
      e.target.src = "https://placehold.co/600x400/082f49/e0f7fa?text=Image+Load+Error";
      console.error(`Failed to load image: ${alt}`);
    }}
  />
);

const ServicesPage = () => {
  const [loading] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-inter pt-24 pb-12 overflow-hidden">

      {/* --- CSS Keyframes for Animations --- */}
      <style>{`
        @keyframes headerFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-header-fade {
          animation: headerFadeUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0; 
        }
        .animate-slide-up-fade {
          animation: slideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0; 
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white animate-header-fade">
            Our Core <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-header-fade" style={{ animationDelay: '0.3s' }}>
            Empowering PhD scholars and academics through specialized support across the entire research lifecycle.
          </p>
        </header>

        {/* Services Cards Section (Staggered Animation) */}
        <section className="mb-20">
          {/* Responsive Check: The grid layout (1, 2, 3 columns) is inherently responsive. */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-gray-800 border border-cyan-400 p-8 rounded-xl shadow-2xl hover:shadow-cyan-500/30 transition duration-300 transform hover:-translate-y-1 animate-slide-up-fade"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }} // Staggered delay
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-cyan-400 rounded-full text-gray-800 shadow-lg transition duration-300 group-hover:bg-cyan-300">
                    <Icon path={service.iconPath} className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold ml-4 text-white">{service.title}</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Training & Events Section (Staggered Animation) - UPDATED TO INCLUDE ALL IMAGES */}
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-white animate-slide-up-fade" style={{ animationDelay: `${0.5 + services.length * 0.1 + 0.2}s` }}>
            <span className="text-cyan-400">Training</span> and Event Highlights
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-10 animate-slide-up-fade" style={{ animationDelay: `${0.5 + services.length * 0.1 + 0.4}s` }}>
            A glimpse into our dynamic workshops, conferences, and collaborative training sessions.
          </p>

          {/* Displaying the first 3 images in a 3-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingImages.slice(0, 3).map((img, index) => (
              <ImageComponent key={index} src={img.src} alt={img.alt} delay={1.4 + index * 0.1} />
            ))}
          </div>

          {/* Displaying the remaining images in a 4-column grid (or as many as available) */}
          {trainingImages.length > 3 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
              {trainingImages.slice(3).map((img, index) => (
                <ImageComponent key={index + 3} src={img.src} alt={img.alt} delay={1.7 + index * 0.1} />
              ))}
            </div>
          )}

          <div className="mt-10">
            <Link
              to="/contact"
              className="mt-8 inline-block px-8 py-3 bg-cyan-500 text-blue-950 font-semibold text-lg rounded-full shadow-lg transition duration-300 transform hover:bg-cyan-400 hover:scale-[1.08] animate-slide-up-fade"
              style={{ animationDelay: `${2.1 + trainingImages.length * 0.1}s` }}
            >
              Get Details on Upcoming Trainings
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ServicesPage;