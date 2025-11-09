import React from 'react';

// --- Mock Data: Journal/Article Entries (43 total) ---
const mockJournals = [
  // Updated all 'img' paths to use '.jpeg' extension
  { id: 1, title: "Syed et al., 2019a-1 (Nanoparticles)", pdfUrl: "/src/assets/ResearchArticleScrolling/1.pdf", year: 2019, img: "/src/assets/ResearchArticleScrolling/1.jpeg" },
  { id: 2, title: "Syed et al., 2017b Nanostructure-1", pdfUrl: "/src/assets/ResearchArticleScrolling/2.pdf", year: 2017, img: "/src/assets/ResearchArticleScrolling/2.jpeg" },
  { id: 3, title: "Syed et al., 2016. EMT-1 (Cell Migration)", pdfUrl: "/src/assets/ResearchArticleScrolling/3.pdf", year: 2016, img: "/src/assets/ResearchArticleScrolling/3.jpeg" },
  { id: 4, title: "Mycosynthesis of silver nanoparticles bearing antibacterial activity", pdfUrl: "/src/assets/ResearchArticleScrolling/4.pdf", year: 2018, img: "/src/assets/ResearchArticleScrolling/4.jpeg" },
  { id: 5, title: "Synthesis of silver nanobactericides by A. migulanus 141", pdfUrl: "/src/assets/ResearchArticleScrolling/5.pdf", year: 2019, img: "/src/assets/ResearchArticleScrolling/5.jpeg" },
  { id: 6, title: "Endogenic mediated synthesis of gold nanoparticles", pdfUrl: "/src/assets/ResearchArticleScrolling/6.pdf", year: 2015, img: "/src/assets/ResearchArticleScrolling/6.jpeg" },
  { id: 7, title: "Biomimetic Synthesis of Silver Nanoparticles", pdfUrl: "/src/assets/ResearchArticleScrolling/7.pdf", year: 2016, img: "/src/assets/ResearchArticleScrolling/7.jpeg" },
  { id: 8, title: "2016 Syed Co-authored Publication A", pdfUrl: "/src/assets/ResearchArticleScrolling/8.pdf", year: 2016, img: "/src/assets/ResearchArticleScrolling/8.jpeg" },
  { id: 9, title: "Actinomycetic Symbionts Inhabiting Euphorbia hirta L.", pdfUrl: "/src/assets/ResearchArticleScrolling/9.pdf", year: 2017, img: "/src/assets/ResearchArticleScrolling/9.jpeg" },
  { id: 10, title: "Syed Co author SB.HCY. Research Paper", pdfUrl: "/src/assets/ResearchArticleScrolling/10.pdf", year: 2015, img: "/src/assets/ResearchArticleScrolling/10.jpeg" },
  { id: 11, title: "Bacterial Endo-Symbiont Inhabiting Tridax procumbens L.", pdfUrl: "/src/assets/ResearchArticleScrolling/11.pdf", year: 2016, img: "/src/assets/ResearchArticleScrolling/11.jpeg" },
  { id: 12, title: "Syed et al., 2019b-1 (Drug Delivery)", pdfUrl: "/src/assets/ResearchArticleScrolling/12.pdf", year: 2019, img: "/src/assets/ResearchArticleScrolling/12.jpeg" },
  { id: 13, title: "Biogenic nanoparticles and their synergistic effect with antibiotics", pdfUrl: "/src/assets/ResearchArticleScrolling/13.pdf", year: 2018, img: "/src/assets/ResearchArticleScrolling/13.jpeg" },
  { id: 14, title: "Biosynthesis of gold nanoparticles by Pseudomonas veronii AS41G", pdfUrl: "/src/assets/ResearchArticleScrolling/14.pdf", year: 2017, img: "/src/assets/ResearchArticleScrolling/14.jpeg" },
  { id: 15, title: "Extracellular synthesis of silver nanoparticles by P. veronii AS41G", pdfUrl: "/src/assets/ResearchArticleScrolling/15.pdf", year: 2018, img: "/src/assets/ResearchArticleScrolling/15.jpeg" },
  { id: 16, title: "Journal of pure and applied microbiology - Issue 1", pdfUrl: "/src/assets/ResearchArticleScrolling/16.pdf", year: 2014, img: "/src/assets/ResearchArticleScrolling/16.jpeg" },
  { id: 17, title: "Syed .Bioimpacts. Plants Emerging as Nano-1", pdfUrl: "/src/assets/ResearchArticleScrolling/17.pdf", year: 2019, img: "/src/assets/ResearchArticleScrolling/17.jpeg" },
  { id: 18, title: "Syed CFTRI.chemiluminescence research", pdfUrl: "/src/assets/ResearchArticleScrolling/18.pdf", year: 2016, img: "/src/assets/ResearchArticleScrolling/18.jpeg" },
  { id: 19, title: "Syed 2020 a-11 (Environmental Science)", pdfUrl: "/src/assets/ResearchArticleScrolling/19.pdf", year: 2020, img: "/src/assets/ResearchArticleScrolling/19.jpeg" },
  { id: 20, title: "Syed 2020 b-11 (Biotechnology)", pdfUrl: "/src/assets/ResearchArticleScrolling/20.pdf", year: 2020, img: "/src/assets/ResearchArticleScrolling/20.jpeg" },
  { id: 21, title: "Syed 2022-11 (Materials Research)", pdfUrl: "/src/assets/ResearchArticleScrolling/21.pdf", year: 2022, img: "/src/assets/ResearchArticleScrolling/21.jpeg" },
  { id: 22, title: "Syed co author 2020-11 (Genetics)", pdfUrl: "/src/assets/ResearchArticleScrolling/22.pdf", year: 2020, img: "/src/assets/ResearchArticleScrolling/22.jpeg" },
  { id: 23, title: "Syed co author 2021-11 (Biophysics)", pdfUrl: "/src/assets/ResearchArticleScrolling/23.pdf", year: 2021, img: "/src/assets/ResearchArticleScrolling/23.jpeg" },
  { id: 24, title: "Syed et al., 2023 nanicellulosic film", pdfUrl: "/src/assets/ResearchArticleScrolling/24.pdf", year: 2023, img: "/src/assets/ResearchArticleScrolling/24.jpeg" },
  { id: 25, title: "Syed et al., 2023-1 (Water Treatment)", pdfUrl: "/src/assets/ResearchArticleScrolling/25.pdf", year: 2023, img: "/src/assets/ResearchArticleScrolling/25.jpeg" },
  { id: 26, title: "Syed et al., 2023b-1 (Electrochemistry)", pdfUrl: "/src/assets/ResearchArticleScrolling/26.pdf", year: 2023, img: "/src/assets/ResearchArticleScrolling/26.jpeg" },
  { id: 27, title: "Syed et al., 2012 (Microbial Ecology A)", pdfUrl: "/src/assets/ResearchArticleScrolling/27.pdf", year: 2012, img: "/src/assets/ResearchArticleScrolling/27.jpeg" },
  { id: 28, title: "Syed et al., 2012 (Microbial Ecology B)", pdfUrl: "/src/assets/ResearchArticleScrolling/28.pdf", year: 2012, img: "/src/assets/ResearchArticleScrolling/28.jpeg" },
  { id: 29, title: "Syed et al., 2012 (Microbial Ecology C)", pdfUrl: "/src/assets/ResearchArticleScrolling/29.pdf", year: 2012, img: "/src/assets/ResearchArticleScrolling/29.jpeg" },
  { id: 30, title: "Syed et al., 2012 biodecaffeination-1", pdfUrl: "/src/assets/ResearchArticleScrolling/30.pdf", year: 2012, img: "/src/assets/ResearchArticleScrolling/30.jpeg" },
  { id: 31, title: "Syed co author 2013 (Pharmacology A)", pdfUrl: "/src/assets/ResearchArticleScrolling/31.pdf", year: 2013, img: "/src/assets/ResearchArticleScrolling/31.jpeg" },
  { id: 32, title: "Syed Co author 2013 (Pharmacology B)", pdfUrl: "/src/assets/ResearchArticleScrolling/32.pdf", year: 2013, img: "/src/assets/ResearchArticleScrolling/32.jpeg" },
  { id: 33, title: "Syed and Satish 2012 (Bioprocess)", pdfUrl: "/src/assets/ResearchArticleScrolling/33.pdf", year: 2012, img: "/src/assets/ResearchArticleScrolling/33.jpeg" },
  { id: 34, title: "Syed et al., 2015 (Immunology)", pdfUrl: "/src/assets/ResearchArticleScrolling/34.pdf", year: 2015, img: "/src/assets/ResearchArticleScrolling/34.jpeg" },
  { id: 35, title: "Syed co author (Food Science A)", pdfUrl: "/src/assets/ResearchArticleScrolling/35.pdf", year: 2014, img: "/src/assets/ResearchArticleScrolling/35.jpeg" },
  { id: 36, title: "Syed Co author (Food Science B)", pdfUrl: "/src/assets/ResearchArticleScrolling/36.pdf", year: 2014, img: "/src/assets/ResearchArticleScrolling/36.jpeg" },
  { id: 37, title: "Syed co author (Food Science C)", pdfUrl: "/src/assets/ResearchArticleScrolling/37.pdf", year: 2014, img: "/src/assets/ResearchArticleScrolling/37.jpeg" },
  { id: 38, title: "Syed et al., 2018 b Applied nanoscience-1", pdfUrl: "/src/assets/ResearchArticleScrolling/38.pdf", year: 2018, img: "/src/assets/ResearchArticleScrolling/38.jpeg" },
  { id: 39, title: "Syed et al., 2018c-1 (Toxicology)", pdfUrl: "/src/assets/ResearchArticleScrolling/39.pdf", year: 2018, img: "/src/assets/ResearchArticleScrolling/39.jpeg" },
  { id: 40, title: "2018.Syed et al., 2018_2018_2018-1", pdfUrl: "/src/assets/ResearchArticleScrolling/40.pdf", year: 2018, img: "/src/assets/ResearchArticleScrolling/40.jpeg" },
  { id: 41, title: "Syed et al., 2017 ETAP final copy-1", pdfUrl: "/src/assets/ResearchArticleScrolling/41.pdf", year: 2017, img: "/src/assets/ResearchArticleScrolling/41.jpeg" },
  { id: 42, title: "Syed et al., 2017a Nanoagroparticles-1", pdfUrl: "/src/assets/ResearchArticleScrolling/42.pdf", year: 2017, img: "/src/assets/ResearchArticleScrolling/42.jpeg" },
  { id: 43, title: "Syed et al., 2024 (Latest Research)", pdfUrl: "/src/assets/ResearchArticleScrolling/43.pdf", year: 2024, img: "/src/assets/ResearchArticleScrolling/43.jpeg" },
]; 

// --- Mock Data: Book Entries (10 total) ---
const mockBooks = [
  // 1.jpg
  { id: 1, title: "Basics of Microbiology Students learning Guide", year: 2021, publisher: "Academic Press", img: "/src/assets/Scrolling Books Cover/1.jpg" },
  // 2.jpg
  { id: 2, title: "Bioelectricity Microbial fuel cell", year: 2022, publisher: "Wiley", img: "/src/assets/Scrolling Books Cover/2.jpg" },
  // 3.png
  { id: 3, title: "Book Chapter 1: Nanotechnology in Biology", year: 2020, publisher: "Springer", img: "/src/assets/Scrolling Books Cover/3.png" },
  // 4.jpg
  { id: 4, title: "Book chapter 2: Advanced Topics", year: 2021, publisher: "Elsevier", img: "/src/assets/Scrolling Books Cover/4.jpg" },
  // 5.jpg
  { id: 5, title: "Book chapter 3: Bioremediation", year: 2022, publisher: "Taylor & Francis", img: "/src/assets/Scrolling Books Cover/5.jpg" },
  // 6.png
  { id: 6, title: "Book chapter 4: Industrial Applications", year: 2023, publisher: "CRC Press", img: "/src/assets/Scrolling Books Cover/6.png" },
  // 7.jpg
  { id: 7, title: "COVID 19 2020: A Microbial Perspective", year: 2020, publisher: "Pandemic Insights", img: "/src/assets/Scrolling Books Cover/7.jpg" },
  // 8.png
  { id: 8, title: "Meet the microbes: An Introduction", year: 2019, publisher: "Science Ed.", img: "/src/assets/Scrolling Books Cover/8.png" }, 
  // 9.png
  { id: 9, title: "Microbial Nanotechnology and its applications", year: 2023, publisher: "CRC Press", img: "/src/assets/Scrolling Books Cover/9.png" }, 
  // 10.png
  { id: 10, title: "Vaccines and its importance in public health", year: 2022, publisher: "Health Today", img: "/src/assets/Scrolling Books Cover/10.png" },
  // 11.png
  { id: 11, title: "Placeholder Title for Book 11", year: 2024, publisher: "New Publisher", img: "/src/assets/Scrolling Books Cover/11.png" } 
];
// Helper icon for PDF link 
const FileTextIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" x2="8" y1="13" y2="13" />
    <line x1="16" x2="8" y1="17" y2="17" />
    <line x1="10" x2="8" y1="9" y2="9" />
  </svg>
);

// --- Component that renders a scrollable list of publications ---
const PublicationList = ({ title, items, isBook, duration = '120s' }) => {
  // Duplicate the items for the seamless auto-scroll effect
  const doubledItems = [...items, ...items];

  return (
    <div className="animate-slide-up-fade" style={{ animationDelay: isBook ? '1.5s' : '0.8s' }}>
      <h2 className="text-3xl font-bold text-white mb-8 border-b-2 border-cyan-500/30 pb-2">{title} ({items.length} items)</h2>

      {/* Wrapper to clip the overflow and apply padding/margins */}
      <div className="overflow-x-hidden publication-scroll-container-wrapper group">
        {/* Inner container that holds the duplicated content and gets the animation */}
        <div 
          className="flex gap-6 publication-scroll-content"
          style={{ animationDuration: duration }} // Set scroll speed dynamically
        >
          {doubledItems.map((item, index) => (
            // CARD CONTAINER: Fixed Height h-[28rem] for uniformity
            <div
              key={`${item.id}-${index}`} // Use a combined key for duplicates
              className="flex-shrink-0 w-64 md:w-72 lg:w-72 bg-gray-800/60 backdrop-blur-sm rounded-xl p-5 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-cyan-500/20 shadow-xl h-[28rem] flex flex-col hover:scale-[1.03] transform"
            >
              {/* Image/Cover Area */}
              <div className={`
                ${isBook ? 'h-60 w-36 md:w-40 mx-auto' : 'h-48 w-full'}
                bg-gray-700 rounded-lg mb-4 flex items-center justify-center overflow-hidden shadow-2xl 
                ${!isBook ? 'border border-cyan-500/50' : 'shadow-inner shadow-gray-900'} 
              `}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" // Enhanced zoom
                  // Fallback for image loading error
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="text-gray-500 text-xs p-4 text-center">Image not available</div>';
                  }}
                />
              </div>

              {/* Publication Details */}
              <p className="font-medium text-white hover:text-cyan-300 transition text-lg flex-grow overflow-hidden line-clamp-3">
                {item.title}
              </p>

              <p className="text-sm text-gray-400 mt-1">
                {isBook ? `Publisher: ${item.publisher || 'N/A'}` : `Year: ${item.year || 'N/A'}`}
              </p>
              <p className="text-xs text-gray-500 mt-1 mb-4 font-mono">
                {isBook ? `Year: ${item.year || 'N/A'}` : `ID: ${item.id}`}
              </p>

              {/* ACTION: View PDF Button (Only for Journals/Articles) */}
              {/* {!isBook && (
                <a
                  href={item.pdfUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center px-4 py-2 text-sm font-semibold text-black bg-cyan-500 rounded-lg shadow-xl shadow-cyan-500/30 hover:bg-cyan-400 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-cyan-400/50"
                >
                  <FileTextIcon className="w-4 h-4 mr-2" />
                  View PDF & Learn More
                </a>
              )} */}
            </div>
          ))}
        </div>
      </div>
      {/* <p className="text-xs text-gray-500 mt-4 italic">
        *Scroll is auto-animated. Hover over the section to pause the scroll.*
      </p> */}
    </div>
  );
};

// --- Main Component ---
const Publications = () => {

  return (
    <div className="min-h-screen bg-gray-900 font-sans text-gray-100 overflow-hidden">
      
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
        /* Keyframes for the continuous horizontal scroll */
        @keyframes autoScroll {
            /* Start at 0% translation */
            from { transform: translateX(0%); }
            /* Translate 50% of the content width (since the list is duplicated) to create a seamless loop */
            to { transform: translateX(-50%); } 
        }
        
        .animate-header-fade {
            animation: headerFadeUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            opacity: 0; 
        }
        .animate-slide-up-fade {
            animation: slideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            opacity: 0; 
        }

        /* Styles for the auto-scrolling container */
        .publication-scroll-content {
            display: flex; /* Must be a flex container */
            width: max-content; /* Must be wide enough to hold all content (including duplicates) */
            /* Apply the continuous scroll animation */
            animation-name: autoScroll;
            animation-timing-function: linear;
            animation-iteration-count: infinite; 
        }

        /* Pause animation on hover */
        .publication-scroll-container-wrapper:hover .publication-scroll-content {
            animation-play-state: paused;
        }

        /* Hide the manual scrollbar, as the movement is animated */
        .publication-scroll-container-wrapper {
             /* Use padding-bottom for the gap where the scrollbar would be */
             padding-bottom: 1rem; 
        }

        /* You can uncomment this section if you still want a visual manual scrollbar as a fallback */
        /*
        .publication-scroll-container-wrapper::-webkit-scrollbar {
            height: 8px;
        }
        .publication-scroll-container-wrapper::-webkit-scrollbar-thumb {
            background-color: #06b6d4; 
            border-radius: 10px;
        }
        .publication-scroll-container-wrapper::-webkit-scrollbar-track {
            background: #1f2937;
        }
        */
      `}</style>
      
      <div className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white animate-header-fade">
            Academic Publications Archive 
          </h1>

          <div className="space-y-24">
            {/* ---------- JOURNALS / RESEARCH ARTICLES (Slow Scroll) ---------- */}
            <PublicationList
              title="Journals / Research Articles"
              items={mockJournals}
              isBook={false}
              duration='120s' // Slower scroll for a larger list
            />

            {/* ---------- BOOKS / BOOK CHAPTERS (Faster Scroll) ---------- */}
            <PublicationList
              title="Books / Book Cover"
              items={mockBooks}
              isBook={true}
              duration='45s' // Faster scroll for a smaller list
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;