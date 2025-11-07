import React from 'react';

// NOTE: You must place your image files in your project and update the 
// 'image' value with the correct file path (e.g., /assets/images/apj_kalam.jpg) 
// or an external URL for each person.

const legends = [
  // Indian Visionaries & Scientists
  { person: "Dr. A.P.J. Abdul Kalam", title: "“Missile Man of India”; former President; visionary behind India’s space and defence technology revolution", image: "apj_kalam.jpg" },
  { person: "Dr. C.V. Raman", title: "Nobel Laureate in Physics (1930) for discovering the Raman Effect", image: "cv_raman.jpg" },
  { person: "Dr. Homi J. Bhabha", title: "Architect of India’s nuclear programme and founder of BARC and TIFR", image: "homi_bhabha.jpg" },
  { person: "Dr. Vikram A. Sarabhai", title: "Father of the Indian Space Programme; established ISRO and promoted space applications for development", image: "vikram_sarabhai.jpg" },
  { person: "Dr. S. Chandrasekhar", title: "Nobel Laureate in Physics (1983); known for the Chandrasekhar Limit in stellar evolution", image: "s_chandrasekhar.jpg" },
  { person: "Dr. M.S. Swaminathan", title: "Father of the Green Revolution in India; champion of agricultural sustainability and food security", image: "ms_swaminathan.jpg" },
  { person: "Dr. K. Kasturirangan", title: "Space scientist; led ISRO’s scientific missions and national education policy reforms", image: "k_kasturirangan.jpg" },
  { person: "Dr. R. A. Mashelkar", title: "Chemical engineer; global leader in innovation policy, intellectual property, and sustainable technologies", image: "ra_mashelkar.jpg" },
  { person: "Dr. Tessy Thomas", title: "“Missile Woman of India”; key DRDO scientist behind Agni missile systems", image: "tessy_thomas.jpg" },
  { person: "Dr. Gagandeep Kang", title: "Leading microbiologist; expert in infectious diseases and vaccine research", image: "gagandeep_kang.jpg" },

  // Global Titans
  { person: "Albert Einstein", title: "Theoretical physicist; father of relativity; symbol of intellectual brilliance and humanism", image: "albert_einstein.jpg" },
  { person: "Marie Curie", title: "Pioneer in radioactivity; first person to win two Nobel Prizes in Physics and Chemistry", image: "marie_curie.jpg" },
  { person: "Stephen Hawking", title: "Theoretical physicist; advanced our understanding of black holes and cosmology despite physical adversity", image: "stephen_hawking.jpg" },
  { person: "Isaac Newton", title: "Mathematician and physicist; formulated laws of motion and universal gravitation", image: "isaac_newton.jpg" },
  { person: "Charles Darwin", title: "Naturalist; proposed the theory of evolution by natural selection", image: "charles_darwin.jpg" },
  { person: "Nikola Tesla", title: "Inventor and engineer; laid foundations for AC electricity, wireless energy, and modern electrical systems", image: "nikola_tesla.jpg" },
  { person: "Rosalind Franklin", title: "Molecular biophysicist; provided key X-ray data for discovery of DNA structure", image: "rosalind_franklin.jpg" },
  { person: "Carl Sagan", title: "Astrophysicist and communicator; popularized science and cosmic exploration", image: "carl_sagan.jpg" },
  { person: "Jane Goodall", title: "Primatologist; transformed our understanding of animal behaviour and conservation", image: "jane_goodall.jpg" },
  { person: "Elon Musk", title: "Entrepreneur-engineer; leading innovations in electric vehicles, space technology, and sustainable energy", image: "elon_musk.jpg" },
];

const members = [
  { person: "Dr. Sonam Wangchuk", title: "Promoting sustainable innovation and environmental engineering for Himalayan communities", image: "sonam_wangchuk_innovator.jpg" },
  { person: "Mr. Samba Siva Rao Madamanchi", title: "Innovator in AI-driven robotics and intelligent infrastructure systems; developing automation frameworks for enterprise governance and cybersecurity", image: "samba_siva_rao_madamanchi.jpg" },
  { person: "Dr. Allison Koenecke", title: "Researching algorithmic fairness and bias mitigation in speech and AI systems", image: "allison_koenecke.jpg" },
  // Dr. Gagandeep Kang is in Legends, so omitted here to avoid duplication
  { person: "Dr. Catherine Dulac", title: "Studying neural circuits that control social behaviour and brain mechanisms behind emotion and identity", image: "catherine_dulac.jpg" },
  { person: "Dr. Shweta Singh", title: "Developing carbon-neutral technologies and circular economy models in clean manufacturing", image: "shweta_singh.jpg" },
  { person: "Mr. Lakshmi Kalyani Chinthala", title: "AI-driven healthcare analytics and sustainable business intelligence; creator of the HIVSense-Econ model integrating diagnostics with economic forecasting for public health equity", image: "lakshmi_kalyani_chinthala.jpg" },
  { person: "Dr. Wen Sun", title: "Advancing reinforcement learning and safe autonomous decision-making frameworks", image: "wen_sun.jpg" },
  { person: "Dr. Melissa J. Moore", title: "Investigating RNA biology and therapeutic applications in precision medicine", image: "melissa_j_moore.jpg" },
  { person: "Dr. Ying Yang", title: "Creating recyclable polymers and sustainable materials for environmentally friendly industries", image: "ying_yang.jpg" },
  { person: "Dr. Deepa Khosla", title: "Investigating sustainable agriculture and carbon-capture potential of regenerative soil systems", image: "deepa_khosla.jpg" },
  { person: "Dr. Amruta Gadre", title: "Contributing to gravitational-wave detection and signal modelling at the LIGO Laboratory", image: "amruta_gadre.jpg" },
  { person: "Mr. Ravichandra Mulpuri", title: "Specialist in AI-integrated enterprise solutions and health-tech innovation; works on predictive analytics and wearable cardiac monitoring systems", image: "ravichandra_mulpuri.jpg" },
  { person: "Dr. Siddharth Mishra-Sharma", title: "Conducting research on dark matter, cosmic radiation, and astrophysical particle physics", image: "siddharth_mishra_sharma.jpg" },
  { person: "Dr. Sara Hooker", title: "Leading research in efficient and responsible machine learning for sustainable AI", image: "sara_hooker.jpg" },
  { person: "Dr. Marion Villenave", title: "Investigating how planets form from dust in protoplanetary disks using high-resolution telescope data", image: "marion_villenave.jpg" },
  { person: "Dr. Sara Mascia", title: "Studying the earliest galaxies and sources of cosmic reionization with JWST observations", image: "sara_mascia.jpg" },
  { person: "Mr. Veerendra Batulla", title: "Technologist and global innovator; leading work on “Pupil DX”, a system combining hardware for eye-tracking with AI analytics for healthcare, education, and behavioral sciences", image: "veerendra_batulla.jpg" },
  { person: "Dr. Ilaria Caiazzo", title: "Studying magnetic white dwarfs and exotic stellar remnants in nearby galaxies", image: "ilaria_caiazzo.jpg" },
  { person: "Dr. Shailesh Acharya", title: "Developing deep learning tools for AI-based medical diagnostics and data analysis", image: "shailesh_acharya.jpg" },
  { person: "Dr. Catriona Nguyen-Robertson", title: "Researching microbial ecosystems and engaging in global environmental science outreach", image: "catriona_nguyen_robertson.jpg" },
  { person: "Mr. Ajay Kumar Kota", title: "BI & Data Intelligence architect; builds enterprise BI ecosystems with interactive dashboards, predictive analytics, and strong data governance for sectors like healthcare, finance, and manufacturing", image: "ajay_kumar_kota.jpg" },
  { person: "Dr. Syed Baker", title: "Research Scientist, expert in Microbiology, Bioprospecting, and Nanotechnology", image: "syed_baker.jpg" },
  { person: "Dr. Kanishka Biswas", title: "Awarded the 2025 TWAS-CAS Young Scientists Award for Frontier Science in Physical Sciences by UNESCO for his pioneering work in developing high-performance thermoelectric materials capable of converting waste heat into clean electricity", image: "kanishka_biswas.jpg" },
  { person: "Dr. Garima Raheja", title: "Recipient of the 2025 Inflection Award for climate research, focusing on sustainable energy solutions", image: "garima_raheja.jpg" },
  { person: "Dr. Vikas Dhamu", title: "Ph.D. candidate at the National University of Singapore, developing novel methods to store CO₂ in deep-sea sediments as clathrate hydrates, contributing to climate change mitigation", image: "vikas_dhamu.jpg" },
  { person: "Dr. Monali Priyadarshini", title: "Awarded the 2025 Inflection Award for her research in environmental sustainability, focusing on innovative approaches to waste management", image: "monali_priyadarshini.jpg" },
  { person: "Dr. Mahendra Patel", title: "Recipient of the 2025 Inflection Award for his work in developing biodegradable materials to reduce plastic pollution", image: "mahendra_patel.jpg" },
  { person: "Dr. Eshaan Patheria", title: "Ph.D. candidate at Caltech, working on developing high-energy-density lithium-ion battery cathodes using inexpensive, scalable raw materials for affordable clean energy storage", image: "eshaan_patheria.jpg" },
  { person: "Mr. Harish Govinda Gowda", title: "Infrastructure & DevOps specialist; expert in cloud-native transformation, SRE, and automated self-healing systems", image: "harish_govinda_gowda.jpg" },
  { person: "Dr. Neveen S. Gadallah", title: "Contributed to the discovery of a new wasp species, Nesolynx banabitanae, in Kolkata, enhancing understanding of urban biodiversity", image: "neveen_s_gadallah.jpg" },
  { person: "Dr. Tanima Dudani", title: "Gold medalist in Medicinal Chemistry at NIPER Rae Bareli's 2025 convocation, recognized for excellence in pharmaceutical research", image: "tanima_dudani.jpg" },
  { person: "Dr. Harshita Sadhana", title: "Gold medalist in Pharmaceutics at NIPER Rae Bareli's 2025 convocation, honored for outstanding contributions to pharmaceutical sciences", image: "harshita_sadhana.jpg" },
  { person: "Dr. Tejas Kumar", title: "Gold medalist in Pharmacology & Toxicology at NIPER Rae Bareli's 2025 convocation, acknowledged for excellence in pharmacological research", image: "tejas_kumar.jpg" },
  { person: "Dr. Ghume Prajakta Chandrakant", title: "Gold medalist in Regulatory Toxicology at NIPER Rae Bareli's 2025 convocation, celebrated for contributions to toxicological research", image: "ghume_prajakta_chandrakant.jpg" },
  { person: "Dr. Gokul G Nair", title: "Gold medalist in Biotechnology at NIPER Rae Bareli's 2025 convocation, recognized for excellence in biotechnological research", image: "gokul_g_nair.jpg" },
  { person: "Mr. Santhosh Kumar Maddineni", title: "Developer of AI-powered HR/Workday architecture tools: predictive dashboards, payroll intelligence, leave optimization, and global compensation solutions that fuse automation with human centricity", image: "santhosh_kumar_maddineni.jpg" },
  { person: "Dr. Arnob Chakrovorty", title: "Lead researcher in the discovery of a new wasp species, Nesolynx banabitanae, contributing to entomological studies in urban ecosystems", image: "arnob_chakrovorty.jpg" },
  { person: "Dr. Banani Bhattacharjee", title: "Co-researcher in the identification of a new wasp species in Kolkata, enhancing biodiversity knowledge in urban areas", image: "banani_bhattacharjee.jpg" },
];

export default function HallOfHonour() {
  return (
    <section className="py-32 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white">
          Hall of Honour
        </h1>
        <p className="text-center text-gray-400 mb-16 text-lg">Who Changed the World</p>

        {/* Legends */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {legends.map((personData) => (
            <div
              key={personData.person}
              className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl hover:border-cyan-500/50 transition-all duration-300 group text-center border-2 border-transparent"
            >
              {/* Image Container */}
              <div className="w-32 h-32 mx-auto mb-5 rounded-full overflow-hidden border-4 border-cyan-500/50 flex items-center justify-center">
                <img
                  // The 'image' property is now the source path
                  src={personData.image} 
                  alt={personData.person}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder icon if the image fails to load
                    e.target.style.display = 'none'; // Hide the broken image
                    e.target.parentNode.innerHTML = `
                      <svg class="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>`;
                  }}
                />
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">{personData.person}</h4>
              <p className="text-sm text-gray-400 mt-1">{personData.title}</p>
            </div>
          ))}
        </div>

        {/* Members */}
        <h2 className="text-3xl font-bold text-white mb-8">Senior & Fellow Members</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {members.map((personData) => (
            <div
              key={personData.person}
              className="p-4 bg-gray-800 rounded-lg shadow hover:shadow-xl hover:border-cyan-500/50 transition-all duration-300 group text-center border border-gray-700"
            >
              {/* Image Container (Smaller size for members) */}
              <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-cyan-500/50 flex items-center justify-center">
                <img
                  src={personData.image} 
                  alt={personData.person}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <svg class="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>`;
                  }}
                />
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition">{personData.person}</h4>
              <p className="text-xs text-gray-400 mt-1 truncate" title={personData.title}>{personData.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}