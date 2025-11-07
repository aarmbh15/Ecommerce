import React from 'react';

// --- Image Imports ---
import authorImg1 from '../assets/Author Gallary/author 1.jpg';
import authorImg3 from '../assets/Author Gallary/author 3.jpg';
import authorImg4 from '../assets/Author Gallary/author 4.jpg';
import authorImg5 from '../assets/Author Gallary/Author 5.jpg';
import authorImg6 from '../assets/Author Gallary/Author 6.jpg';
import authorImg7 from '../assets/Author Gallary/Author 7.jpg';
import authorImg8 from '../assets/Author Gallary/Author 8.jpg';
import authorImg9 from '../assets/Author Gallary/author 9.jpg';
import authorImg0 from '../assets/Author Gallary/author.jpg';

const authorProfiles = [
  { src: authorImg0, name: 'Author Name 1', title: 'Title/Role' },
  { src: authorImg1, name: 'Author Name 2', title: 'Title/Role' },
  { src: authorImg3, name: 'Author Name 3', title: 'Title/Role' },
  { src: authorImg4, name: 'Author Name 4', title: 'Title/Role' },
  { src: authorImg5, name: 'Author Name 5', title: 'Title/Role' },
  { src: authorImg6, name: 'Author Name 6', title: 'Title/Role' },
  { src: authorImg7, name: 'Author Name 7', title: 'Title/Role' },
  { src: authorImg8, name: 'Author Name 8', title: 'Title/Role' },
  { src: authorImg9, name: 'Author Name 9', title: 'Title/Role' },
];

const AuthorCard = ({ src, name, title }) => (
  <div className="text-center p-4 bg-gray-800 rounded-lg shadow-xl hover:shadow-cyan-500/20 transition duration-300">
    <img
      src={src}
      alt={name}
      className="w-24 h-24 object-cover rounded-full mx-auto mb-3 border-4 border-cyan-400/50"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://placehold.co/100x100/374151/FFFFFF?text=P";
      }}
    />
    <h4 className="text-lg font-semibold text-white truncate">{name}</h4>
    <p className="text-sm text-gray-400">{title}</p>
  </div>
);

export default function About() {
  return (
    <section className="py-32 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Header */}
        <header className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white">
            About PhDians
          </h1>
          <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
            A global platform dedicated to celebrating the scientific community and promoting research excellence across all disciplines.
          </p>
        </header>

        {/* Authors Section */}
        <div className="space-y-12">
          <h2 className="text-4xl font-bold text-white text-center">
            Featured <span className="text-cyan-400">Authors & Scholars</span>
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-4">
            {authorProfiles.map((author, index) => (
              <AuthorCard key={index} src={author.src} name={author.name} title={author.title} />
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm italic">
            (Detailed profiles available in the Complete Authors Profile document)
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800/60 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 shadow-lg transition group">
            <h3 className="text-3xl font-bold text-cyan-400 mb-4 group-hover:text-cyan-300 transition">
              Mission
            </h3>
            <p className="text-gray-300 leading-relaxed">
              PhDians is committed to honouring scientific excellence, empowering researchers, and fostering a global community of scholars.
            </p>
          </div>

          <div className="bg-gray-800/60 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 shadow-lg transition group">
            <h3 className="text-3xl font-bold text-cyan-400 mb-4 group-hover:text-cyan-300 transition">
              Vision
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To create a world where scientific discovery knows no boundaries and collaboration drives innovation.
            </p>
          </div>
        </div>

        {/* Initiative */}
        <div className="max-w-5xl mx-auto space-y-6 pt-10">
          <h2 className="text-4xl font-bold text-white">
            The PhDians <span className="text-cyan-400">Initiative</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            PhDians was founded to address the growing need...
          </p>
          <p className="text-lg text-gray-300 leading-relaxed border-l-4 border-cyan-400 pl-4 italic">
            Over the years, PhDians has grown into a thriving international network...
          </p>
        </div>

        {/* Board & Mentors */}
        <div className="grid md:grid-cols-3 gap-8 pt-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white flex items-center">
              <span className="text-cyan-400 mr-2 text-3xl">★</span> Advisory Board / Founders
            </h3>
            <p className="text-gray-300">
              Our advisory board is composed of distinguished academicians and leaders.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white flex items-center">
              <span className="text-cyan-400 mr-2 text-3xl">🎓</span> Our Mentors
            </h3>
            <p className="text-gray-300">
              PhDians mentors are leaders with 25+ years of experience.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white flex items-center">
              <span className="text-cyan-400 mr-2 text-3xl">🌐</span> Global Collaborations
            </h3>
            <p className="text-gray-300">
              Collaborations with research institutes and universities worldwide.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
