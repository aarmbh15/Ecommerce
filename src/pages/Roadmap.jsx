import { useState } from 'react';

// --- Image Imports ---
import img1 from '../assets/Training Session/1.png';
import img2 from '../assets/Training Session/2.png';
import img3 from '../assets/Training Session/3.png';
import img4 from '../assets/Training Session/4.png';
import img5 from '../assets/Training Session/5.png';
import img6 from '../assets/Training Session/6.png';
import img7 from '../assets/Training Session/7.png';
import img8 from '../assets/Training Session/8.png';

// --- Inline SVG Icons ---
const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
  </svg>
);

// --- Component Data ---
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
    description: 'Facilitating partnerships between researchers across the globe, including joint projects, MoUs, and managing cross-border logistics.',
    iconPath: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM2.5 10H21.5M12 2.5V21.5',
  },
  {
    title: 'Conferences and Trainings',
    description: 'Organizing specialized conferences, workshops, and training sessions to enhance research skills and professional networking.',
    iconPath: 'M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v2',
  },
];

const trainingImages = [
  { src: img1, alt: 'Students in a laboratory workshop' },
  { src: img2, alt: 'Research students working on petri dishes' },
  { src: img3, alt: 'Group photo receiving awards at a conference' },
  { src: img4, alt: 'Group photo for National Science Day' },
  { src: img5, alt: 'Large group of scholars in a hospital or university hallway' },
  { src: img6, alt: 'Small group photo at Karnataka State Open University' },
  { src: img7, alt: 'Research team collaboration session' },
  { src: img8, alt: 'Microbiology work under a laminar flow hood' },
];

const ImageComponent = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="w-full h-48 object-cover rounded-xl shadow-lg transition duration-300 hover:shadow-2xl hover:scale-[1.02] transform"
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
    <div className="min-h-screen bg-gray-900 text-gray-100 font-inter pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">
            Our Core <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Empowering PhD scholars and academics through specialized support across the entire research lifecycle.
          </p>
        </header>

        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-gray-800 border border-cyan-400 p-8 rounded-xl shadow-2xl hover:shadow-cyan-500/30 transition duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-cyan-400 rounded-full text-gray-800 shadow-lg">
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

        <section className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            <span className="text-cyan-400">Training</span> and Event Highlights
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-10">
            A glimpse into our dynamic workshops, conferences, and collaborative training sessions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingImages.slice(0, 3).map((img, index) => (
              <ImageComponent key={index} src={img.src} alt={img.alt} />
            ))}
          </div>

          {trainingImages.length > 3 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
              {trainingImages.slice(3).map((img, index) => (
                <ImageComponent key={index + 3} src={img.src} alt={img.alt} />
              ))}
            </div>
          )}

          <div className="mt-10">
            <button
              className="mt-8 px-8 py-3 bg-cyan-500 text-blue-950 font-semibold text-lg rounded-full shadow-lg transition duration-300 transform hover:bg-cyan-400 hover:scale-[1.05]"
            >
              Get Details on Upcoming Trainings
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ServicesPage;
