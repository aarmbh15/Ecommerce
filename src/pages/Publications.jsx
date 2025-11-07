import React from 'react';

// --- Mock Data: 43 Journal/Article Entries ---
// Updated with actual PDF paths from your project folder
const mockJournals = [
  { 
    id: 1, 
    title: "Syed et al., 2019a-1 (Nanoparticles)", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/1. Syed et al., 2019a-1.pdf", 
    year: 2019, 
    img: "/src/assets/ResearchArticleScrolling/1. Syed et al., 2019a-1.png" 
  },
  { 
    id: 2, 
    title: "Syed et al., 2017b Nanostructure-1", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/2. Syed et al., 2017b Nanostructure-1.pdf", 
    year: 2017, 
    img: "/src/assets/ResearchArticleScrolling/2. Syed et al., 2017b Nanostructure-1.png" 
  },
  { 
    id: 3, 
    title: "Syed et al., 2016. EMT-1 (Cell Migration)", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/3. Syed et al., 2016. EMT-1.pdf", 
    year: 2016, 
    img: "/src/assets/ResearchArticleScrolling/3. Syed et al., 2016. EMT-1.png" 
  },
  { 
    id: 4, 
    title: "Mycosynthesis of silver nanoparticles bearing antibacterial activity", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/4. Mycosynthesis of silver nanoparticles bearing antibacterial activity.pdf", 
    year: 2018, 
    img: "/src/assets/ResearchArticleScrolling/4. Mycosynthesis of silver nanoparticles bearing antibacterial activity.png" 
  },
  { 
    id: 5, 
    title: "Synthesis of silver nanobactericides by A. migulanus 141", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/5. Synthesis of silver nanobactericides by A. migulanus 141.pdf", 
    year: 2019, 
    img: "/src/assets/ResearchArticleScrolling/5. Synthesis of silver nanobactericides by A. migulanus 141.png" 
  },
  { 
    id: 6, 
    title: "Endogenic mediated synthesis of gold nanoparticles", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/6. Endogenic mediated synthesis of gold nanoparticles.pdf", 
    year: 2015, 
    img: "/src/assets/ResearchArticleScrolling/6. Endogenic mediated synthesis of gold nanoparticles.png" 
  },
  { 
    id: 7, 
    title: "Biomimetic Synthesis of Silver Nanoparticles", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/7. Biomimetic Synthesis of Silver Nanoparticles.pdf", 
    year: 2016, 
    img: "/src/assets/ResearchArticleScrolling/7. Biomimetic Synthesis of Silver Nanoparticles.png" 
  },
  { 
    id: 8, 
    title: "2016 Syed Co-authored Publication A", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/8. 2016 Syed Co-authored Publication A.pdf", 
    year: 2016, 
    img: "/src/assets/ResearchArticleScrolling/8. 2016 Syed Co-authored Publication A.png" 
  },
  { 
    id: 9, 
    title: "Actinomycetic Symbionts Inhabiting Euphorbia hirta L.", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/9. Actinomycetic Symbionts Inhabiting Euphorbia hirta L.pdf", 
    year: 2017, 
    img: "/src/assets/ResearchArticleScrolling/9. Actinomycetic Symbionts Inhabiting Euphorbia hirta L.png" 
  },
  { 
    id: 10, 
    title: "Syed Co author SB.HCY. Research Paper", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/10. Syed Co author SB.HCY. Research Paper.pdf", 
    year: 2015, 
    img: "/src/assets/ResearchArticleScrolling/10. Syed Co author SB.HCY. Research Paper.png" 
  },
  { 
    id: 11, 
    title: "Bacterial Endo-Symbiont Inhabiting Tridax procumbens L.", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/11. Bacterial Endo-Symbiont Inhabiting Tridax procumbens L.pdf", 
    year: 2016, 
    img: "/src/assets/ResearchArticleScrolling/11. Bacterial Endo-Symbiont Inhabiting Tridax procumbens L.png" 
  },
  { 
    id: 12, 
    title: "Syed et al., 2019b-1 (Drug Delivery)", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/12.Syed et al., 2019b-1.pdf", 
    year: 2019, 
    img: "/src/assets/ResearchArticleScrolling/12. Syed et al., 2019b-1.png" 
  },
  { 
    id: 13, 
    title: "Biogenic nanoparticles and their synergistic effect with antibiotics", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/13. Biogenic nanoparticles and their synergistic effect with antibiotics.pdf", 
    year: 2018, 
    img: "/src/assets/ResearchArticleScrolling/13. Biogenic nanoparticles and their synergistic effect with antibiotics.png" 
  },
  { 
    id: 14, 
    title: "Biosynthesis of gold nanoparticles by Pseudomonas veronii AS41G", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/14. Biosynthesis of gold nanoparticles by Pseudomonas veronii AS41G.pdf", 
    year: 2017, 
    img: "/src/assets/ResearchArticleScrolling/14. Biosynthesis of gold nanoparticles by Pseudomonas veronii AS41G.png" 
  },
  { 
    id: 15, 
    title: "Extracellular synthesis of silver nanoparticles by P. veronii AS41G", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/15. Extracellular synthesis of silver nanoparticles by P. veronii AS41G.pdf", 
    year: 2018, 
    img: "/src/assets/ResearchArticleScrolling/15. Extracellular synthesis of silver nanoparticles by P. veronii AS41G.png" 
  },
  { 
    id: 16, 
    title: "Journal of pure and applied microbiology - Issue 1", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/16. Journal of pure and applied microbiology - Issue 1.pdf", 
    year: 2014, 
    img: "/src/assets/ResearchArticleScrolling/16. Journal of pure and applied microbiology - Issue 1.png" 
  },
  { 
    id: 17, 
    title: "Syed .Bioimpacts. Plants Emerging as Nano-1", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/17. Syed .Bioimpacts. Plants Emerging as Nano-1.pdf", 
    year: 2019, 
    img: "/src/assets/ResearchArticleScrolling/17. Syed .Bioimpacts. Plants Emerging as Nano-1.png" 
  },
  { 
    id: 18, 
    title: "Syed CFTRI.chemiluminescence research", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/18. Syed CFTRI.chemiluminescence research.pdf", 
    year: 2016, 
    img: "/src/assets/ResearchArticleScrolling/18. Syed CFTRI.chemiluminescence research.png" 
  },
  { 
    id: 19, 
    title: "Syed 2020 a-11 (Environmental Science)", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/19. Syed 2020 a-11.pdf", 
    year: 2020, 
    img: "/src/assets/ResearchArticleScrolling/19. Syed 2020 a-11.png" 
  },
  { 
    id: 20, 
    title: "Syed 2020 b-11 (Biotechnology)", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/20. Syed 2020 b-11.pdf", 
    year: 2020, 
    img: "/src/assets/ResearchArticleScrolling/20. Syed 2020 b-11.png" 
  },
  { 
    id: 21, 
    title: "Syed 2022-11 (Materials Research)", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/21. Syed 2022-11.pdf", 
    year: 2022, 
    img: "/src/assets/ResearchArticleScrolling/21. Syed 2022-11.png" 
  },
  { 
    id: 22, 
    title: "Syed co author 2020-11 (Genetics)", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/22. Syed co author 2020-11.pdf", 
    year: 2020, 
    img: "/src/assets/ResearchArticleScrolling/22. Syed co author 2020-11.png" 
  },
  { 
    id: 23, 
    title: "Syed co author 2021-11 (Biophysics)", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/23. Syed co author 2021-11.pdf", 
    year: 2021, 
    img: "/src/assets/ResearchArticleScrolling/23. Syed co author 2021-11.png" 
  },
  { 
    id: 24, 
    title: "Syed et al., 2023 nanicellulosic film", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/24. Syed et al., 2023 nanicellulosic film.pdf", 
    year: 2023, 
    img: "/src/assets/ResearchArticleScrolling/24. Syed et al., 2023 nanicellulosic film.png" 
  },
  { 
    id: 25, 
    title: "Syed et al., 2023-1 (Water Treatment)", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/25. Syed et al., 2023-1.pdf", 
    year: 2023, 
    img: "/src/assets/ResearchArticleScrolling/25. Syed et al., 2023-1.png" 
  },
  { 
    id: 26, 
    title: "Syed et al., 2023b-1 (Electrochemistry)", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/26. Syed et al., 2023b-1.pdf", 
    year: 2023, 
    img: "/src/assets/ResearchArticleScrolling/26. Syed et al., 2023b-1.png" 
  },
  { 
    id: 27, 
    title: "Syed et al., 2012 (Microbial Ecology A)", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/27. Syed et al., 2012 (Microbial Ecology A).pdf", 
    year: 2012, 
    img: "/src/assets/ResearchArticleScrolling/27. Syed et al., 2012 (Microbial Ecology A).png" 
  },
  { 
    id: 28, 
    title: "Syed et al., 2012 (Microbial Ecology B)", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/28. Syed et al., 2012 (Microbial Ecology B).pdf", 
    year: 2012, 
    img: "/src/assets/ResearchArticleScrolling/28. Syed et al., 2012 (Microbial Ecology B).png" 
  },
  { 
    id: 29, 
    title: "Syed et al., 2012 (Microbial Ecology C)", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/29. Syed et al., 2012 (Microbial Ecology C).pdf", 
    year: 2012, 
    img: "/src/assets/ResearchArticleScrolling/29. Syed et al., 2012 (Microbial Ecology C).png" 
  },
  { 
    id: 30, 
    title: "Syed et al., 2012 biodecaffeination-1", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/30. Syed et al., 2012 biodecaffeination-1.pdf", 
    year: 2012, 
    img: "/src/assets/ResearchArticleScrolling/30. Syed et al., 2012 biodecaffeination-1.png" 
  },
  { 
    id: 31, 
    title: "Syed co author 2013 (Pharmacology A)", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/31. Syed co author 2013 (Pharmacology A).pdf", 
    year: 2013, 
    img: "/src/assets/ResearchArticleScrolling/31. Syed co author 2013 (Pharmacology A).png" 
  },
  { 
    id: 32, 
    title: "Syed Co author 2013 (Pharmacology B)", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/32. Syed Co author 2013 (Pharmacology B).pdf", 
    year: 2013, 
    img: "/src/assets/ResearchArticleScrolling/32. Syed Co author 2013 (Pharmacology B).png" 
  },
  { 
    id: 33, 
    title: "Syed and Satish 2012 (Bioprocess)", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/33. Syed and Satish 2012 (Bioprocess).pdf", 
    year: 2012, 
    img: "/src/assets/ResearchArticleScrolling/33. Syed and Satish 2012 (Bioprocess).png" 
  },
  { 
    id: 34, 
    title: "Syed et al., 2015 (Immunology)", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/34. Syed et al., 2015 (Immunology).pdf", 
    year: 2015, 
    img: "/src/assets/ResearchArticleScrolling/34. Syed et al., 2015 (Immunology).png" 
  },
  { 
    id: 35, 
    title: "Syed co author (Food Science A)", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/35. Syed co author (Food Science A).pdf", 
    year: 2014, 
    img: "/src/assets/ResearchArticleScrolling/35. Syed co author (Food Science A).png" 
  },
  { 
    id: 36, 
    title: "Syed Co author (Food Science B)", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/36. Syed Co author (Food Science B).pdf", 
    year: 2014, 
    img: "/src/assets/ResearchArticleScrolling/36. Syed Co author (Food Science B).png" 
  },
  { 
    id: 37, 
    title: "Syed co author (Food Science C)", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/37. Syed co author (Food Science C).pdf", 
    year: 2014, 
    img: "/src/assets/ResearchArticleScrolling/37. Syed co author (Food Science C).png" 
  },
  { 
    id: 38, 
    title: "Syed et al., 2018 b Applied nanoscience-1", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/38. Syed et al., 2018 b Applied nanoscience-1.pdf", 
    year: 2018, 
    img: "/src/assets/ResearchArticleScrolling/38. Syed et al., 2018 b Applied nanoscience-1.png" 
  },
  { 
    id: 39, 
    title: "Syed et al., 2018c-1 (Toxicology)", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/39. Syed et al., 2018c-1.pdf", 
    year: 2018, 
    img: "/src/assets/ResearchArticleScrolling/39. Syed et al., 2018c-1.png" 
  },
  { 
    id: 40, 
    title: "2018.Syed et al., 2018_2018_2018-1", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/40. 2018.Syed et al., 2018_2018_2018-1.pdf", 
    year: 2018, 
    img: "/src/assets/ResearchArticleScrolling/40. 2018.Syed et al., 2018_2018_2018-1.png" 
  },
  { 
    id: 41, 
    title: "Syed et al., 2017 ETAP final copy-1", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/41. Syed et al., 2017 ETAP final copy-1.pdf", 
    year: 2017, 
    img: "/src/assets/ResearchArticleScrolling/41. Syed et al., 2017 ETAP final copy-1.png" 
  },
  { 
    id: 42, 
    title: "Syed et al., 2017a Nanoagroparticles-1", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/42. Syed et al., 2017a Nanoagroparticles-1.pdf", 
    year: 2017, 
    img: "/src/assets/ResearchArticleScrolling/42. Syed et al., 2017a Nanoagroparticles-1.png" 
  },
  { 
    id: 43, 
    title: "Syed et al., 2024 (Latest Research)", 
    pdfUrl: "/src/assets/ResearchArticleScrolling/43. Syed et al., 2024 (Latest Research).pdf", 
    year: 2024, 
    img: "/src/assets/ResearchArticleScrolling/43. Syed et al., 2024 (Latest Research).png" 
  },
]; // TOTAL: 43 Items

// --- Mock Data: Book Entries (No Button, Different Image Style) ---
const mockBooks = [
  { 
    id: 1, 
    title: "Basics of Microbiology Students learning Guide", 
    year: 2021, 
    publisher: "Academic Press", 
    img: "/src/assets/Scrolling Books Cover/Basics of Microbiology Students learning Guide (1).png" 
  },
  { 
    id: 2, 
    title: "Bioelectricity Microbial fuel cell", 
    year: 2022, 
    publisher: "Wiley", 
    img: "/src/assets/Scrolling Books Cover/Bioelectricity Microbial fuel cell(1).png" 
  },
  { 
    id: 3, 
    title: "Book Chapter 1: Nanotechnology in Biology", 
    year: 2020, 
    publisher: "Springer", 
    img: "/src/assets/Scrolling Books Cover/Book Chapter 1.png" 
  },
  { 
    id: 4, 
    title: "Book chapter 2: Advanced Topics", 
    year: 2021, 
    publisher: "Elsevier", 
    img: "/src/assets/Scrolling Books Cover/Book chapter 2.png" 
  },
  { 
    id: 5, 
    title: "Book chapter 3: Bioremediation", 
    year: 2022, 
    publisher: "Taylor & Francis", 
    img: "/src/assets/Scrolling Books Cover/Book chapter 3.png" 
  },
  { 
    id: 6, 
    title: "Book chapter 4: Industrial Applications", 
    year: 2023, 
    publisher: "CRC Press", 
    img: "/src/assets/Scrolling Books Cover/Book chapter 4.png" 
  },
  { 
    id: 7, 
    title: "COVID 19 2020: A Microbial Perspective", 
    year: 2020, 
    publisher: "Pandemic Insights", 
    img: "/src/assets/Scrolling Books Cover/COVID 19 2020.png" 
  },
  { 
    id: 10, 
    title: "Meet the microbes: An Introduction", 
    year: 2019, 
    publisher: "Science Ed.", 
    img: "/src/assets/Scrolling Books Cover/Meet the microbes.png" 
  },
  { 
    id: 11, 
    title: "Microbial Nanotechnology and its applications", 
    year: 2023, 
    publisher: "CRC Press", 
    img: "/src/assets/Scrolling Books Cover/Microbial Nanotechnology and its applications.png" 
  },
  { 
    id: 12, 
    title: "Vaccines and its importance in public health", 
    year: 2022, 
    publisher: "Health Today", 
    img: "/src/assets/Scrolling Books Cover/Vaccines and its importance in public health.png" 
  }
];

// Helper icon for PDF link (using lucide-react equivalent SVG structure)
const FileTextIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" x2="8" y1="13" y2="13"/>
    <line x1="16" x2="8" y1="17" y2="17"/>
    <line x1="10" x2="8" y1="9" y2="9"/>
  </svg>
);

const App = () => {

  // Component that renders a scrollable list of publications
  const PublicationList = ({ title, items, isBook }) => (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8 border-b-2 border-cyan-500/30 pb-2">{title} ({items.length} items)</h2>

      {/* Responsive, horizontally scrolling flex container */}
      <div className="flex overflow-x-auto gap-6 pb-4 -mx-6 px-6 sm:px-0 sm:mx-0 snap-x snap-mandatory">
        {items.map((item) => (
          // CARD CONTAINER: Fixed Height h-[28rem] for uniformity
          <div 
            key={item.id} 
            className="flex-shrink-0 w-64 md:w-72 lg:w-72 snap-start bg-gray-800/60 backdrop-blur-sm rounded-xl p-5 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group h-[28rem] flex flex-col"
          >
            
            {/* Image/Cover Area */}
            <div className={`
              ${isBook ? 'h-60 w-36 md:w-40 mx-auto' : 'h-48 w-full'} 
              bg-gray-700 rounded-lg mb-4 flex items-center justify-center overflow-hidden shadow-xl
            `}>
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                // Fallback for image loading error
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="text-gray-500 text-xs p-4 text-center">Image not available</div>';
                }}
              />
            </div>

            {/* Publication Details */}
            <p className="font-medium text-white group-hover:text-cyan-300 transition text-lg flex-grow overflow-hidden line-clamp-3">
              {item.title}
            </p>
            
            <p className="text-sm text-gray-400 mt-1">
              {isBook ? `Published Year: ${item.year || 'N/A'}` : `Year: ${item.year || 'N/A'}`}
            </p>
            <p className="text-xs text-gray-500 mt-1 mb-4 font-mono">
              {isBook ? item.publisher : `ID: ${item.id}`}
            </p>

            {/* ACTION: View PDF Button (Only for Journals/Articles) */}
            {!isBook && (
              <a
                href={item.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-cyan-600/90 rounded-lg shadow-lg shadow-cyan-500/20 hover:bg-cyan-500 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <FileTextIcon className="w-4 h-4 mr-2" />
                View PDF & Learn More
              </a>
            )}
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-4 italic">
        *Total items displayed: {items.length}. Scroll horizontally to view more items.*
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 font-sans text-gray-100">
      {/* Load Tailwind CSS */}
      <script src="https://cdn.tailwindcss.com"></script>
      <div className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white">
            Academic Publications Archive
          </h1>

          <div className="space-y-20">
            {/* ---------- JOURNALS / ARTICLES (with PDF Button, 43 total) ---------- */}
            <PublicationList 
              title="Journals / Research Articles" 
              items={mockJournals} 
              isBook={false} 
            />

            {/* ---------- BOOKS / BOOK CHAPTERS (Images Only, No Button) ---------- */}
            <PublicationList 
              title="Books / Book Chapters" 
              items={mockBooks} 
              isBook={true} 
            />
          </div>
        </div>
      </div>
      {/* Custom scrollbar and font configuration */}
      <style>{`
        /* Set Inter as the primary font */
        body {
            font-family: 'Inter', sans-serif;
        }
        /* Custom scrollbar for better visibility */
        .flex.overflow-x-auto::-webkit-scrollbar {
            height: 8px;
        }
        .flex.overflow-x-auto::-webkit-scrollbar-thumb {
            background-color: #06b6d4; /* cyan-500 */
            border-radius: 10px;
        }
        .flex.overflow-x-auto::-webkit-scrollbar-track {
            background: #1f2937; /* gray-800 */
        }
      `}</style>
    </div>
  );
};

export default App;
