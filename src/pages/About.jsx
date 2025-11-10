import React from 'react';

// --- Image Imports (Expanded to 56) ---
// Note: Assumes files are named 'author 1.jpg', 'author 2.jpg', ..., 'author 56.jpg'
// in the '../assets/Author Gallary/' directory.
import authorImg1 from '../assets/Author Gallary/1.jpg';
import authorImg2 from '../assets/Author Gallary/2.jpeg';
import authorImg3 from '../assets/Author Gallary/3.jpeg';
import authorImg4 from '../assets/Author Gallary/4.jpeg';
import authorImg5 from '../assets/Author Gallary/5.jpeg';
import authorImg6 from '../assets/Author Gallary/6.jpeg';
import authorImg7 from '../assets/Author Gallary/7.jpeg';
import authorImg8 from '../assets/Author Gallary/8.jpeg';
import authorImg9 from '../assets/Author Gallary/9.jpeg';
import authorImg10 from '../assets/Author Gallary/10.jpeg';
import authorImg11 from '../assets/Author Gallary/11.jpeg';
import authorImg12 from '../assets/Author Gallary/12.jpeg';
import authorImg13 from '../assets/Author Gallary/13.jpeg';
import authorImg14 from '../assets/Author Gallary/14.jpeg';
import authorImg15 from '../assets/Author Gallary/15.jpeg';
import authorImg16 from '../assets/Author Gallary/16.jpeg';
import authorImg17 from '../assets/Author Gallary/17.jpeg';
import authorImg18 from '../assets/Author Gallary/18.jpeg';
import authorImg19 from '../assets/Author Gallary/19.jpeg';
import authorImg20 from '../assets/Author Gallary/20.jpeg';
import authorImg21 from '../assets/Author Gallary/21.jpeg';
import authorImg22 from '../assets/Author Gallary/22.jpeg';
import authorImg23 from '../assets/Author Gallary/23.jpeg';
import authorImg24 from '../assets/Author Gallary/24.jpeg';
import authorImg25 from '../assets/Author Gallary/25.jpeg';
import authorImg26 from '../assets/Author Gallary/26.jpg';
import authorImg27 from '../assets/Author Gallary/27.jpeg';
import authorImg28 from '../assets/Author Gallary/28.jpeg';
import authorImg29 from '../assets/Author Gallary/29.jpeg';
import authorImg30 from '../assets/Author Gallary/30.jpeg';
import authorImg31 from '../assets/Author Gallary/31.jpeg';
import authorImg32 from '../assets/Author Gallary/32.jpeg';
import authorImg33 from '../assets/Author Gallary/33.jpeg';
import authorImg34 from '../assets/Author Gallary/34.jpeg';
import authorImg35 from '../assets/Author Gallary/35.jpeg';
import authorImg36 from '../assets/Author Gallary/36.jpeg';
import authorImg37 from '../assets/Author Gallary/37.jpeg';
import authorImg38 from '../assets/Author Gallary/38.jpeg';
import authorImg39 from '../assets/Author Gallary/39.jpeg';
import authorImg40 from '../assets/Author Gallary/40.jpeg';
import authorImg41 from '../assets/Author Gallary/41.jpeg';
import authorImg42 from '../assets/Author Gallary/42.jpeg';
import authorImg43 from '../assets/Author Gallary/43.jpeg';
import authorImg44 from '../assets/Author Gallary/44.jpeg';
import authorImg45 from '../assets/Author Gallary/45.jpeg';
import authorImg46 from '../assets/Author Gallary/46.jpeg';
import authorImg47 from '../assets/Author Gallary/47.jpeg';
import authorImg48 from '../assets/Author Gallary/48.jpeg';
import authorImg49 from '../assets/Author Gallary/49.jpeg';
import authorImg50 from '../assets/Author Gallary/50.jpeg';
import authorImg51 from '../assets/Author Gallary/51.jpeg';
import authorImg52 from '../assets/Author Gallary/52.jpeg';
import authorImg53 from '../assets/Author Gallary/53.jpeg';
import authorImg54 from '../assets/Author Gallary/54.jpeg';
import authorImg55 from '../assets/Author Gallary/55.jpeg';
import authorImg56 from '../assets/Author Gallary/56.jpeg';


// --- Data for Author Cards (Updated to use 56 profiles) ---
const authorProfiles = [
  { src: authorImg1, name: 'Mr. Abhisek Rath ' },
  { src: authorImg2, name: ' Devayani Sarmah' },
  { src: authorImg3, name: 'Dr. Popy Bora' },
  { src: authorImg4, name: 'Ms. Shruti Krishnan ' },
  { src: authorImg5, name: 'Ms. Keerthana Raghuthaman' },
  { src: authorImg6, name: 'Ms.KarthikaSuresh' },
  { src: authorImg7, name: 'Dr.AmarchandChordiaMurugan' },
  { src: authorImg8, name: 'Dr. Rajeev Ranjan' },
  { src: authorImg9, name: 'Dr. Valentina A. Kratasyuk' },
  { src: authorImg10, name: 'Dr. Biplab Mandal' },
  { src: authorImg11, name: 'Dr. Bidhan Chandra Patra ' },
  { src: authorImg12, name: ' Dr. Debabrata Senapati' },
  { src: authorImg13, name: 'Mr. Sapam Riches Singh' },
  { src: authorImg14, name: ' Ms. Pooja Joshi ' },
  { src: authorImg15, name: 'Mr. Santosh Mallikarjun Bhavi ' },
  { src: authorImg16, name: 'Mr. Bothe Thokchom' },
  { src: authorImg17, name: ' Ms. Megha B. Abbigeri' },
  { src: authorImg18, name: 'Dr.MosesShalini' },
  { src: authorImg19, name: 'Dr. B. P. Harini ' },
  { src: authorImg20, name: ' Dr. Ramesh Babu Yarajarla' },
  { src: authorImg21, name: ' Dr. Mamatha Bhanu L.S' },
  { src: authorImg22, name: 'Mr.Manju K' },
  { src: authorImg23, name: ' Dr.RaghurajSChouhan' },
  { src: authorImg24, name: 'Mr. Pavan T.K' },
  { src: authorImg25, name: ' Ms. Supritha S.K' },
  { src: authorImg26, name: ' Ms. Simran. I' },
  { src: authorImg27, name: ' Dr. Navyashree B' },
  { src: authorImg28, name: ' Dr. Chandan S' },
  { src: authorImg29, name: 'Dr. Layeeqa Banu ' },
  { src: authorImg30, name: ' Ms. Shayista. H' },
  { src: authorImg31, name: ' Dr. M. N. Nagendra Prasad' },
  { src: authorImg32, name: ' Dr. Kanthesh M Basalingappa' },
  { src: authorImg33, name: ' Dr. Nandini G' },
  { src: authorImg34, name: ' Dr. Vasantha Kumar. S' },
  { src: authorImg35, name: 'Dr. Umashankara. M' },
  { src: authorImg36, name: ' Dr. Arjun H.A ' },
  { src: authorImg37, name: ' Dr. Ashwini Prasad. P' },
  { src: authorImg38, name: ' Ms. Ranjini H. K' },
  { src: authorImg39, name: 'Ms. Apeksha. V' },
  { src: authorImg40, name: 'Ms. Akhila ' },
  { src: authorImg41, name: 'Ms. Kripali K.P' },
  { src: authorImg42, name: ' Ms. Shreya Vinayak Hegde' },
  { src: authorImg43, name: 'Dr. R.Kavitha ' },
  { src: authorImg44, name: 'Mrs. Amalthi. P' },
  { src: authorImg45, name: 'Dr. S. Satish' },
  { src: authorImg46, name: 'Mr.Sandesh. P ' },
  { src: authorImg47, name: 'Ms. Sahana M.S.' },
  { src: authorImg48, name: ' Dr. Qais Aslam' },
  { src: authorImg49, name: 'Dr. Hemalatha M.S' },
  { src: authorImg50, name: ' Prof. Dr. Sikander Ali' },
  { src: authorImg51, name: ' Ms. Aqsa Iqbal' },
  { src: authorImg52, name: ' Ms. Rukhma, a distinguished' },
  { src: authorImg53, name: ' Prof. Ratnesh Das' },
  { src: authorImg54, name: 'Mr. Atish Roy' },
  { src: authorImg55, name: 'Dr. Elizaveta Mukhanova' },
  { src: authorImg56, name: 'Dr. Nutan Shukla' },
];

// --- Author Card Component (Title removed) ---
const AuthorCard = ({ src, name, delay }) => (
  <div
    className={`flex-shrink-0 min-w-32 text-center p-3 sm:p-4 bg-gray-800 rounded-lg shadow-xl hover:shadow-cyan-500/50 transition duration-500 ease-in-out transform hover:scale-105 mx-2 sm:mx-3`}
    style={{
      // Re-using the slideIn animation for a staggered effect
      animation: `slideIn 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
      animationDelay: `${delay}ms`,
      opacity: 0, 
      transform: 'translateY(15px)', // Increased initial translateY for more impact
    }}
  >
    <img
      src={src}
      alt={name}
      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full mx-auto mb-2 border-3 border-cyan-400/50 transition duration-300 transform group-hover:rotate-6" // Added a subtle rotate on hover
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://placehold.co/80x80/374151/FFFFFF?text=P";
      }}
    />
    <h4 className="text-sm font-semibold text-white truncate">{name}</h4>
    {/* Removed: <p className="text-xs text-gray-400 truncate">{title}</p> */}
  </div>
);

// --- About Page Component ---
export default function About() {
  return (
    <section className="min-h-screen py-20 lg:py-32 px-4 sm:px-6 bg-gray-900 relative overflow-hidden">
      
      {/* Background Glow Effect - New Addition */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400 opacity-10 blur-3xl rounded-full animate-slow-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 opacity-10 blur-3xl rounded-full animate-slow-pulse-delay" />

      <style>{`
        /* Keyframes for the AuthorCard slideIn animation */
        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        /* Keyframes for the Header fade-up animation */
        @keyframes headerFadeUp {
            from {
                opacity: 0;
                transform: translateY(30px); /* More aggressive initial move */
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .animate-header-fade {
            animation: headerFadeUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        /* Keyframes for the Section fade-in animation (for content further down) */
        @keyframes sectionFadeIn {
            from { 
              opacity: 0; 
              transform: translateY(20px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
        }
        .animate-section-fade {
            animation: sectionFadeIn 1s ease-out forwards;
            opacity: 0; /* Start hidden */
            transform: translateY(20px); /* Start slightly below */
        }
        /* Keyframes for the subtle background glow */
        @keyframes slowPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
            opacity: 0.15;
          }
        }
        .animate-slow-pulse {
            animation: slowPulse 10s infinite ease-in-out;
        }
        .animate-slow-pulse-delay {
            animation: slowPulse 10s infinite ease-in-out 5s; /* 5 second delay to offset the pulse */
        }
      `}</style>
      
      {/* Ensure all content is above the background effects */}
      <div className="max-w-7xl mx-auto space-y-20 relative z-10"> 

        {/* Header - Added Initial Animation */}
        <header className="text-center animate-header-fade">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white transition duration-700 ease-out">
            About PhDians
          </h1>
          <p className="text-base sm:text-xl text-gray-400 mt-4 max-w-3xl mx-auto px-2 transition duration-700 delay-300 ease-out">
            A global platform dedicated to celebrating the scientific community and promoting research excellence across all disciplines.
          </p>
        </header>

        {/* Authors Section - Staggered Animation */}
        <div className="space-y-8 sm:space-y-12 animate-section-fade" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
            Featured <span className="text-cyan-400">Authors & Scholars</span>
          </h2>
          
          {/* SCROLLING CONTAINER */}
          <div className="flex overflow-x-scroll pb-4 -mx-4 sm:-mx-6 lg:-mx-8 cursor-grab scrollbar-thin scrollbar-thumb-cyan-500/50 hover:scrollbar-thumb-cyan-300 scrollbar-track-gray-800 transition duration-300">
            {authorProfiles.map((author, index) => (
              // Staggered slide-in effect
              <AuthorCard 
                key={index} 
                src={author.src} 
                name={author.name} 
                delay={20 * index + 600} // Small stagger for a ripple effect
              />
            ))}
          </div>
        </div>
        
        {/* --- Horizontal Rule for separation --- */}
        <hr className="border-gray-700 max-w-4xl mx-auto transition duration-1000 transform hover:scale-x-105" />

        {/* Mission & Vision - Enhanced Hover/Transition */}
        <div className="space-y-12 animate-section-fade" style={{ animationDelay: '1.2s' }}>
            <h2 className="text-4xl font-bold text-white text-center">
                Our <span className="text-cyan-400">Core Values</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {/* Vision Card - Added Subtle Shadow Pulse */}
                <div className="bg-gray-800/60 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 shadow-lg transition duration-500 group transform hover:scale-[1.03] hover:shadow-cyan-500/20">
                    <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4 group-hover:text-cyan-300 transition duration-300">
                        Vision
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                        To create a world where scientific discovery knows no boundaries and collaboration drives innovation.
                    </p>
                </div>

                {/* Mission Card - Added Subtle Shadow Pulse */}
                <div className="bg-gray-800/60 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 shadow-lg transition duration-500 group transform hover:scale-[1.03] hover:shadow-cyan-500/20">
                    <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4 group-hover:text-cyan-300 transition duration-300">
                        Mission
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                        PhDians is committed to honouring scientific excellence, empowering researchers, and fostering a global community of scholars.
                    </p>
                </div>
            </div>
        </div>

        {/* --- Horizontal Rule for separation --- */}
        <hr className="border-gray-700 max-w-4xl mx-auto transition duration-1000 transform hover:scale-x-105" />


        {/* Initiative - Added Simple Fade-in/up */}
        <div className="max-w-5xl mx-auto space-y-6 pt-10 animate-section-fade" style={{ animationDelay: '1.8s' }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center sm:text-left">
            The PhDians <span className="text-cyan-400">Initiative</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            PhDians was founded to address the growing need for a centralized, supportive, and international platform that not only showcases high-impact research but also connects scholars across various disciplines and geographies.
          </p>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed border-l-4 border-cyan-400 pl-4 italic transition duration-500 hover:border-cyan-200">
            Over the years, PhDians has grown into a thriving international network that champions open science, mentorship, and cross-cultural academic exchange, empowering the next generation of thought leaders.
          </p>
        </div>
        
        {/* --- Horizontal Rule for separation --- */}
        <hr className="border-gray-700 max-w-4xl mx-auto transition duration-1000 transform hover:scale-x-105" />

        {/* Board & Mentors - Enhanced Transition on Hover */}
        <div className="pt-10 animate-section-fade" style={{ animationDelay: '2.4s' }}>
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
                Leadership & <span className="text-cyan-400">Support</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {/* Advisory Board / Founders Card */}
                <div className="space-y-4 p-6 rounded-lg border border-gray-800 hover:border-cyan-500 transition duration-500 transform hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-cyan-500/20">
                    <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center">
                        <span className="text-cyan-400 mr-3 text-3xl transition duration-300">★</span> Advisory Board / Founders
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                        Our advisory board is composed of distinguished academicians and leaders from top institutions worldwide, guiding our strategic direction.
                    </p>
                </div>

                {/* Our Mentors Card */}
                <div className="space-y-4 p-6 rounded-lg border border-gray-800 hover:border-cyan-500 transition duration-500 transform hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-cyan-500/20">
                    <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center">
                        <span className="text-cyan-400 mr-3 text-3xl transition duration-300">🎓</span> Our Mentors
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                        PhDians mentors are leaders with 25+ years of experience in research, industry, and academia, providing invaluable career guidance.
                    </p>
                </div>

                {/* Global Collaborations Card */}
                <div className="space-y-4 p-6 rounded-lg border border-gray-800 hover:border-cyan-500 transition duration-500 transform hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-cyan-500/20">
                    <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center">
                        <span className="text-cyan-400 mr-3 text-3xl transition duration-300">🌐</span> Global Collaborations
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                        We foster active collaborations with research institutes and universities worldwide to maximize our collective scientific impact.
                    </p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}