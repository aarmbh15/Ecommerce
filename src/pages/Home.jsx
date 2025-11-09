import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react'; 

// --- Import Local Images with Actual Filenames ---
import DrBaker from '../assets/Scientist community photos/1.jpeg';
import WolfgangKroutil from '../assets/Scientist community photos/2.jpeg';
import Image3 from '../assets/Scientist community photos/3.png';
import Image4 from '../assets/Scientist community photos/4.jpg';
import AllaSalmina from '../assets/Scientist community photos/5.jpeg';
import HariniMadam from '../assets/Scientist community photos/6.jpeg';
import Image7 from '../assets/Scientist community photos/7.jpeg';
import AnnaMaria from '../assets/Scientist community photos/8.png';
import Kratasuk from '../assets/Scientist community photos/9.jpg';
import Image10 from '../assets/Scientist community photos/10.png';
import Image11 from '../assets/Scientist community photos/11.jpeg'; 
import Image12 from '../assets/Scientist community photos/12.png';
import Image13 from '../assets/Scientist community photos/13.png';
import Image14 from '../assets/Scientist community photos/14.png';
import Image15 from '../assets/Scientist community photos/15.jpeg';
import Image16 from '../assets/Scientist community photos/16.jpeg';
import Image17 from '../assets/Scientist community photos/17.jpg';
import Image18 from '../assets/Scientist community photos/18.jpg';

// --- Framer Motion Variants ---
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.8, 
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.2
        } 
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
// --------------------------------------------------------

// Shared Profile Data (Not used but kept for context)
const profiles = [
    { id: 1, isHighlighted: false, url: "https://page.gensparksite.com/v1/base64_upload/1013c66df5281f7c0944e31ca5ec6058", name: "Researcher 1" },
    { id: 2, isHighlighted: false, url: "https://page.gensparksite.com/v1/base64_upload/41c27f63a216c29680e35a405ff6a5d1", name: "Researcher 2" },
    { id: 3, isHighlighted: true, url: "https://page.gensparksite.com/v1/base64_upload/79e9c7dd3c10f8ef99f5fd693ebb7802", name: "Featured PhDian" }, 
    { id: 4, isHighlighted: false, url: "https://page.gensparksite.com/v1/base64_upload/6adbd275fece7d70ceb33b8706ac90e9", name: "Researcher 4" },
    { id: 5, isHighlighted: false, url: "https://page.gensparksite.com/v1/base64_upload/ec66cd9a334b9c1edf17510c2ba8b7d5", name: "Researcher 5" },
    { id: 6, isHighlighted: false, url: "https://page.gensparksite.com/v1/base64_upload/faff5e28dc4c9e0ddaede10f0a26c4fe", name: "Researcher 6" },
    { id: 7, isHighlighted: false, url: "https://page.gensparksite.com/v1/base64_upload/5c7f41037e53d268f74c2fd044c4e3de", name: "Researcher 7" },
    { id: 8, isHighlighted: false, url: "https://page.gensparksite.com/v1/base64_upload/39ddafb753116ee914fc8d91df3ae008", name: "Researcher 8" },
    { id: 9, isHighlighted: false, url: "https://page.gensparksite.com/v1/base64_upload/e0137cd9f6b2aae94f174b08fb348296", name: "Researcher 9" },
];

// --------------------------------------------------------
// TESTIMONIALS SECTION
// --------------------------------------------------------
export const Testimonials = () => (
    <motion.section 
        className="py-24 px-6 bg-transparent"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
    >
        <div className="max-w-7xl mx-auto text-center">
            <motion.h2 variants={itemVariants} className="text-4xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white">
                Voices from the Community
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { quote: "PhDians gave my research the global visibility it deserved. The support network is invaluable.", author: "Dr. Elara Vance" },
                    { quote: "The publication process was smooth, and the peer review was incredibly insightful. Highly recommended.", author: "Professor Kenji Tanaka" },
                    { quote: "Joining the community opened doors to collaborations I never thought possible. A fantastic platform.", author: "Dr. Liana Chen" },
                ].map((testimonial, index) => (
                    <motion.div 
                        key={index} 
                        variants={itemVariants}
                        className="p-8 bg-gray-800/60 rounded-xl shadow-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <p className="text-lg italic text-gray-300 mb-4">"{testimonial.quote}"</p>
                        <p className="font-semibold text-cyan-400">— {testimonial.author}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </motion.section>
);
// --------------------------------------------------------

// FEATURED SCIENTISTS DATA
// --------------------------------------------------------
const FEATURED_SCIENTISTS_DATA = [
    // { name: "Dr. Syed Baker", title: "Biochemistry Expert", image: DrBaker },
    // { name: "Wolfgang Kroutil", title: "Artificial Intelligence", image: WolfgangKroutil },
    { name: "Alla Salmina", title: "Theoretical Physics", image: Image3 },
    { name: "Anna Maria", title: "Information Technology", image: Image4 },
    { name: "Dr. Syed Baker", title: "Organic Chemistry", image: AllaSalmina },
    // { name: "Dr. Harini", title: "Computer Science", image: HariniMadam },
    // { name: "Researcher G", title: "Molecular Biology", image: Image7 },
    { name: "Harini Madam", title: "Neuroscience", image: AnnaMaria },
    { name: "Kratasuk", title: "Biomedical Engineering", image: Kratasuk },
    { name: "MS Thakur", title: "Environmental Science", image: Image10 },
    { name: "NRS", title: "Environmental Science", image: Image11 },
    { name: "Olga Y Kohlova", title: "Environmental Science", image: Image12 },
    { name: "Olga", title: "Environmental Science", image: Image13 },
    { name: "Rangappa", title: "Environmental Science", image: Image14 },
    { name: "Satish", title: "Environmental Science", image: Image15 },
    // { name: "Researcher P", title: "Environmental Science", image: Image16 },
    // { name: "Researcher Q", title: "Environmental Science", image: Image17 },
    { name: "Wolfgang", title: "Environmental Science", image: Image18 },
];

// --------------------------------------------------------
// FEATURED SCIENTISTS SECTION (CLEANED UP FOR SYNTAX ERROR)
// --------------------------------------------------------
export const FeaturedScientists = () => {
    const controls = useAnimation();

    useEffect(() => {
        const loopScroll = async () => {
            if (FEATURED_SCIENTISTS_DATA.length === 0) return;
            
            while (true) {
                await controls.start({
                    x: ["0%", "-50%"],
                    transition: {
                        // Duration controls the speed of the loop
                        duration: 60, 
                        ease: "linear",
                    },
                });
                // Line 135: This is the line that was failing.
                // We ensure it is a clean, separate instruction.
                await controls.start({ x: "0%" }); 
            }
        };
        loopScroll();
    }, [controls]);

    // Duplicate data to create the illusion of infinite scroll
    const extendedData = [...FEATURED_SCIENTISTS_DATA, ...FEATURED_SCIENTISTS_DATA];

    const cardItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div 
            className="mt-20 max-w-7xl mx-auto overflow-hidden relative" 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">
                Featured Scientists & Publications 🧪
            </motion.h3>
            
            <div className="overflow-hidden w-full">
                <motion.div 
                    className="flex space-x-6 pb-4 md:pb-6 px-6 min-w-max" 
                    animate={controls}
                    variants={{
                        visible: { transition: { staggerChildren: 0.05 } }
                    }}
                >
                    {extendedData.map((scientist, index) => (
                        <motion.div 
                            key={index} 
                            variants={cardItemVariants}
                            className="flex-shrink-0 w-64 md:w-80 p-4 bg-gray-800/40 backdrop-blur border border-gray-700 rounded-2xl shadow-xl transition-all duration-300 hover:border-cyan-500/50 hover:bg-gray-800/60"
                        >
                            <img
                                src={scientist.image}
                                alt={scientist.name}
                                className="w-full h-48 object-cover object-top rounded-xl mb-4 border-2 border-cyan-500/20"
                            />
                            <div className="text-left">
                                <h4 className="text-xl font-semibold text-white">{scientist.name}</h4>
                                <p className="text-cyan-400 text-sm">{scientist.title}</p>
                                <p className="text-gray-400 text-xs mt-2 italic">
                                    Read their latest publication on our platform.
                                </p>
                                <Link to={`/scientist/${index % FEATURED_SCIENTISTS_DATA.length}`} className="text-xs text-cyan-500 hover:text-cyan-400 mt-2 block font-medium">
                                    View Profile →
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}

// --------------------------------------------------------
// HERO SECTION (MAINTAINING CENTERED DESKTOP VIEW)
// --------------------------------------------------------
export const ImageHeroSection = () => {
    // Array of your imported images for the grid (first 15 images)
    const profileImages = [
        DrBaker, WolfgangKroutil, Image3, Image4, AllaSalmina, 
        HariniMadam, Image7, AnnaMaria, Kratasuk, Image10, 
        Image11, Image12, Image13, Image14, Image15
    ];

    const buttonClasses = "flex items-center space-x-2 text-base font-semibold text-white hover:text-red-500 transition duration-300 p-3 rounded-full border border-red-600 hover:bg-red-900/30";
    const arrowClasses = "w-5 h-5 text-red-600 transform transition-transform duration-300 group-hover:translate-x-1";
    const customFont = { fontFamily: 'Georgia, serif' }; 
    const svgIcon = <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v1H3a1 1 0 000 2h1v1a6 6 0 0012 0v-1h1a1 1 0 100-2h-1V8a6 6 0 00-6-6zm-4 7v1h8V9a4 4 0 00-8 0z" clipRule="evenodd" fillRule="evenodd"></path></svg>;


    return (
       <motion.section 
            className="text-white min-h-screen flex items-center pt-20 md:pt-24 pb-12 px-4 sm:px-8 lg:px-12 bg-transparent"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="w-full max-w-[1600px] mx-auto flex flex-col items-center text-center">
                
                <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto mt-12 md:mt-16">
                    
                    {/* LEFT SIDE: P1000 and Circular Text */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center justify-center mb-8 md:mb-0 md:mr-16 relative">
                        <div className="relative w-44 h-44 ">
                            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-45">
                                <defs>
                                    <path id="circlePath" fill="none" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
                                </defs>
                                <text fill="#00BCD4" style={{ letterSpacing: '3px', textTransform: 'uppercase', fontSize: '12px' }}>
                                    <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                                        WORLDS TOP MOST TALENT
                                    </textPath>
                                </text>
                            </svg>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black rounded-full flex items-center justify-center border border-cyan-400/50">
                                {svgIcon}
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE: Main Text */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto">
                        <motion.h1 
                            variants={itemVariants}
                            className="text-6xl sm:text-8xl font-extrabold tracking-widest text-white mb-2" 
                            style={{ ...customFont, borderBottom: '4px solid #9A6324', paddingBottom: '5px' }}
                        >
                            PHDIANS
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-sm font-bold tracking-widest text-red-600 mb-4">
                            TOP <span className="text-lg">5%</span>
                        </motion.p>
                        <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl font-extrabold tracking-widest text-white mb-6">
                            SCIENTIST, <span className="text-lime-400">ACADEMICIAN</span>, <span className="text-lime-400">INNOVATORS</span>
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-sm sm:text-base max-w-xl md:max-w-2xl text-gray-300 font-medium leading-relaxed">
                            HONOURING, AND EMPOWERING RESEARCHERS AS THEY ADVANCE KNOWLEDGE FOR THE BETTERMENT OF SOCIETY
                        </motion.p>
                    </div>
                </div>

                {/* RESEARCHER GRID */}
                <motion.div 
                    className="w-full max-w-[1200px] mt-12 mb-8 px-4"
                    variants={{
                        visible: { transition: { staggerChildren: 0.03 } }
                    }}
                >
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 justify-center">
                        {profileImages.slice(0, 10).map((image, index) => (
                            <motion.img 
                                key={index}
                                variants={itemVariants}
                                src={image} 
                                alt={`Researcher ${index + 1}`} 
                                className="w-full aspect-square object-cover rounded-md border border-gray-600 shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:border-cyan-400"
                            />
                        ))}
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 justify-center mt-4 w-5/6 sm:w-4/6 mx-auto">
                        {profileImages.slice(10, 15).map((image, index) => (
                            <motion.img 
                                key={index + 10}
                                variants={itemVariants}
                                src={image} 
                                alt={`Researcher ${index + 11}`} 
                                className="w-full aspect-square object-cover rounded-md border border-gray-600 shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:border-cyan-400"
                            />
                        ))}
                    </div>
                </motion.div>

                {/* BOTTOM TEXT & BUTTONS */}
                <motion.p variants={itemVariants} className="text-base sm:text-lg font-extrabold tracking-wider text-white mb-8 mt-4">
                    CELEBRATING THE SPIRIT OF RESEARCH & DISCOVERY
                </motion.p>

                <motion.div 
                    className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-10"
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                >
                    <motion.div variants={itemVariants} className="group">
                        <Link to="/vision" className={buttonClasses}>
                            <svg className={arrowClasses} viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                            </svg>
                            <span className="mt-0">OUR VISION</span>
                        </Link>
                    </motion.div>
                    <motion.div variants={itemVariants} className="group">
                        <Link to="/join" className={buttonClasses}>
                            <svg className={arrowClasses} viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                            </svg>
                            <span className="mt-0">JOIN US</span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>

    );
};

// --------------------------------------------------------
// ABOUT SECTION
// --------------------------------------------------------
export const AboutSection = () => (
    <motion.section 
        className="py-24 px-6 bg-transparent" 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
    >
        <div className="max-w-7xl mx-auto">
            <motion.h2 variants={itemVariants} className="text-4xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white">
                About PhDians
            </motion.h2>

            {/* Text Block */}
            <motion.div 
                className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-5xl mx-auto"
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
                <motion.p variants={itemVariants}>
                    **PhDians** is a global platform dedicated to celebrating the scientific community and promoting research excellence across all disciplines. Our mission is to recognize outstanding contributions, provide a platform for publishing scholarly work, and foster **collaboration** among researchers worldwide.
                </motion.p>
                <motion.p variants={itemVariants}>
                    Through journals, books, mentorship programs, and international collaborations, PhDians connects scientists, academicians, and innovators, enabling them to **share knowledge**, exchange ideas, and drive meaningful impact in their fields.
                </motion.p>
                <motion.p variants={itemVariants}>
                    We believe that every discovery — whether by a student, early-career researcher, or seasoned scientist — contributes to building a **sustainable and innovative scientific future**. PhDians is committed to supporting, honouring, and empowering researchers as they advance knowledge for the betterment of society.
                </motion.p>
            </motion.div>

            {/* Key Highlights */}
            <motion.div 
                className="mt-16"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400 text-center">Key Highlights</motion.h3>
                <motion.ul 
                    className="space-y-3 text-lg text-gray-300 max-w-3xl mx-auto px-4"
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                >
                    {[
                        'A platform for global recognition of research contributions.',
                        'Publication opportunities in high-impact journals, books, and special reports.',
                        'A network of mentors and collaborators across disciplines and countries.',
                        'Promoting future-ready science, guiding innovation and research roadmaps worldwide.',
                    ].map((item, i) => (
                        <motion.li key={i} variants={itemVariants} className="flex items-start gap-3">
                            <span className="text-cyan-400 mt-1.5">◆</span>
                            <span>{item}</span>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-7xl mx-auto px-6"
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
                {[
                    { value: '1200+', label: 'Researchers' },
                    { value: '80+', label: 'Countries' },
                    { value: '1300+', label: 'Published Articles' },
                    { value: '100+', label: 'Global Partners' },
                ].map((stat) => (
                    <motion.div
                        key={stat.label}
                        variants={itemVariants}
                        className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl text-center border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group shadow-lg"
                    >
                        <div className="text-4xl font-extrabold text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                            {stat.value}
                        </div>
                        <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Featured Carousel Component Integration */}
            <FeaturedScientists />
            
        </div>
    </motion.section>
);


// --------------------------------------------------------
// MAIN HOME COMPONENT
// --------------------------------------------------------
export default function Home() {
    // Placeholder URL for a dark, abstract background texture
    const BG_IMAGE_URL = "https://images.unsplash.com/photo-1549491745-f09d29e4b7b2?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    return (
        // Global Container with Background Image and Fallback Color
        <div 
            className='min-h-screen bg-fixed bg-cover bg-center text-white' 
            style={{ 
                backgroundImage: `url(${BG_IMAGE_URL})`,
                backgroundColor: '#0A0A1F' // Dark blue/black fallback
            }}
        >
            {/* Dark Overlay for Readability (covers the entire content area) */}
            <div className="bg-black/90 min-h-screen">

                {/* 🚀 HERO SECTION 🚀 */}
                <ImageHeroSection />
                <hr className="border-gray-800/70 max-w-7xl mx-auto" />

                {/* --- ABOUT SECTION --- */}
                <AboutSection />
                <hr className="border-gray-800/70 max-w-7xl mx-auto" />

                {/* TESTIMONIALS */}
                <Testimonials />
            </div>
        </div>
    );
}