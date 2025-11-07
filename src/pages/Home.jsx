import { Link } from 'react-router-dom';

// --- Import Local Images with Actual Filenames ---
// 
// IMPORTANT: Ensure the path './assets/Scientist community photos/' 
// is correct relative to the location of this Home.jsx file.
// 
import DrBaker from '../assets/Scientist community photos/Dr. Syed Baker.jpeg';
import WolfgangKroutil from '../assets/Scientist community photos/wolfgang_kroutil.jpg';
import Image3 from '../assets/Scientist community photos/6e929066-eebd-4612-9643-a501028ed5d5.jpeg';
import Image4 from '../assets/Scientist community photos/e130e928-28f7-4cee-bfbf-643744886511.jpeg';
import AllaSalmina from '../assets/Scientist community photos/Alla Salmina.png';
import HariniMadam from '../assets/Scientist community photos/Harini Madam.png';
import Image7 from '../assets/Scientist community photos/9d238b63-5bc5-454f-a907-cfd1a12790db.jpeg';
import AnnaMaria from '../assets/Scientist community photos/Anna Maria.jpg';
import Kratasuk from '../assets/Scientist community photos/kratasuk-800.jpg';
import Image10 from '../assets/Scientist community photos/f491e54f-3011-4af1-8074-b6386f3f1d8c.jpeg';


// --- Mock Component to resolve the compilation error ---
const Testimonials = () => (
    <section className="py-24 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white">
                Voices from the Community
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { quote: "PhDians gave my research the global visibility it deserved. The support network is invaluable.", author: "Dr. Elara Vance" },
                    { quote: "The publication process was smooth, and the peer review was incredibly insightful. Highly recommended.", author: "Professor Kenji Tanaka" },
                    { quote: "Joining the community opened doors to collaborations I never thought possible. A fantastic platform.", author: "Dr. Liana Chen" },
                ].map((testimonial, index) => (
                    <div key={index} className="p-8 bg-gray-800/60 rounded-xl shadow-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1">
                        <p className="text-lg italic text-gray-300 mb-4">"{testimonial.quote}"</p>
                        <p className="font-semibold text-cyan-400">— {testimonial.author}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
// --------------------------------------------------------

// Shared Profile Data (Kept from previous update)
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

const ProfileAvatar = ({ profile }) => {
    // ... (ProfileAvatar component remains the same)
    const baseClasses = 'w-16 h-16 md:w-20 md:h-20 rounded-full border-4 flex items-center justify-center p-0.5 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 shadow-xl';
    
    const borderClasses = profile.isHighlighted 
      ? 'border-red-500 bg-red-800/30 shadow-red-500/50' 
      : 'border-white/10 bg-gray-700/50 hover:border-white/30'; 

    const imageClasses = profile.isHighlighted
      ? 'object-cover w-full h-full rounded-full'
      : 'grayscale hover:grayscale-0 object-cover w-full h-full rounded-full transition-filter duration-300';

    return (
        <div className={`${baseClasses} ${borderClasses}`} title={profile.name}>
            <img
                src={profile.url}
                alt={profile.name}
                className={imageClasses}
            />
        </div>
    );
};

const PhdiansShowcase = () => {
    // ... (PhdiansShowcase component remains the same)
    return (
        <div className="w-full flex flex-col items-center mt-20">
            {/* Avatar Grid */}
            <div className="flex justify-center flex-wrap gap-3 md:gap-5 max-w-4xl px-4">
                {profiles.map((profile) => (
                    <ProfileAvatar key={profile.id} profile={profile} />
                ))}
            </div>
            
            {/* Spotlight Line/Divider */}
            <div className="w-4/5 max-w-2xl mt-10">
                <div className="h-0.5 bg-gray-800 relative rounded-full">
                    {/* Simulated center glow */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-1 bg-red-600 blur-md opacity-70"></div>
                </div>
            </div>
        </div>
    );
}

// --------------------------------------------------------
// FEATURED SCIENTISTS COMPONENT (UPDATED WITH NEW IMAGE IMPORTS)
// --------------------------------------------------------

const FEATURED_SCIENTISTS_DATA = [
    { name: "Dr. Syed Baker", title: "Biochemistry Expert", image: DrBaker },
    { name: "Wolfgang Kroutil", title: "Artificial Intelligence", image: WolfgangKroutil },
    { name: "Researcher C", title: "Theoretical Physics", image: Image3 },
    { name: "Researcher D", title: "Information Technology", image: Image4 },
    { name: "Alla Salmina", title: "Organic Chemistry", image: AllaSalmina },
    { name: "Dr. Harini", title: "Computer Science", image: HariniMadam },
    { name: "Researcher G", title: "Molecular Biology", image: Image7 },
    { name: "Anna Maria", title: "Neuroscience", image: AnnaMaria },
    { name: "Kratasuk", title: "Biomedical Engineering", image: Kratasuk },
    { name: "Researcher J", title: "Environmental Science", image: Image10 }, 
];

const FeaturedScientists = () => {
    return (
        <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">
                Featured Scientists & Publications
            </h3>
            
            {/* Horizontal Scroll Container (Simulated Carousel) */}
            <div className="flex overflow-x-scroll snap-x snap-mandatory space-x-6 pb-4 md:pb-6 scrollbar-hide">
                {FEATURED_SCIENTISTS_DATA.map((scientist, index) => (
                    <div 
                        key={index}
                        className="flex-shrink-0 w-64 md:w-80 snap-center p-4 bg-gray-800/40 backdrop-blur border border-gray-700 rounded-2xl shadow-xl transition-all duration-300 hover:border-cyan-500/50 hover:bg-gray-800/60"
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
                            <Link to={`/scientist/${index}`} className="text-xs text-cyan-500 hover:text-cyan-400 mt-2 block font-medium">
                                View Profile →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Note about horizontal scrolling */}
            <p className="text-gray-500 text-center text-sm mt-4">
                ← Scroll horizontally to see more featured scientists →
            </p>

            {/* Custom CSS to hide the scrollbar (if needed, depending on your environment) */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
            `}</style>
        </div>
    );
}


export default function Home() {
    // A reliable test video URL (a free stock video of a university campus)
    const videoSourceUrl = "https://cdn.coverr.co/videos/coverr-a-drone-flying-over-a-university-campus-2997/1080p.mp4";
    
    return (
        <>
            {/* HERO SECTION - Updated with VIDEO background and animation */}
            <section className="relative pt-32 pb-24 px-6 overflow-hidden">
                {/* Animated Background Video Container */}
                <div className="absolute inset-0 z-0">
                    {/* Background Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-800/90 to-gray-900/95 z-10"></div>
                    
                    {/* Video Element */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070" // Fallback image if video fails
                        className="w-full h-full object-cover animate-slow-zoom"
                    >
                        <source src={videoSourceUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Content */}
                <div className="relative z-20 max-w-7xl mx-auto text-center">
                    
                    {/* Main Title */}
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 mt-30 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-300 to-white leading-tight animate-fade-in">
                        PhDians – Celebrating the Spirit of Research & Discovery
                    </h1>
                    
                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 animate-fade-in-delay">
                        A global platform honoring research excellence, publishing groundbreaking work, and connecting scientists worldwide.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in-delay-2">
                        <Link
                            to="/join"
                            className="px-8 py-3.5 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-0.5"
                        >
                            Submit Your Work
                        </Link>
                        <Link
                            to="/join"
                            className="px-8 py-3.5 border-2 border-cyan-500 text-cyan-400 font-bold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/20"
                        >
                            Join the Community
                        </Link>
                    </div>

                    {/* PHDIANS Profile Showcase Component */}
                    <PhdiansShowcase />

                </div>

                {/* Add custom CSS for animations */}
                <style jsx>{`
                    @keyframes slow-zoom {
                        0%, 100% {
                            transform: scale(1);
                        }
                        50% {
                            transform: scale(1.1);
                        }
                    }

                    @keyframes fade-in {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    .animate-slow-zoom {
                        animation: slow-zoom 20s ease-in-out infinite;
                    }

                    .animate-fade-in {
                        animation: fade-in 1s ease-out forwards;
                    }

                    .animate-fade-in-delay {
                        opacity: 0;
                        animation: fade-in 1s ease-out 0.3s forwards;
                    }

                    .animate-fade-in-delay-2 {
                        opacity: 0;
                        animation: fade-in 1s ease-out 0.6s forwards;
                    }
                `}</style>
            </section>

            {/* ABOUT SECTION (Remains the same) */}
            <section className="py-24 px-6 bg-gray-900 ">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-extrabold mb-8 mt-30 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white">
                        About PhDians
                    </h2>

                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                        <p>
                            PhDians is a global platform dedicated to celebrating the scientific community and promoting research excellence across all disciplines. Our mission is to recognize outstanding contributions, provide a platform for publishing scholarly work, and foster collaboration among researchers worldwide.
                        </p>
                        <p>
                            Through journals, books, mentorship programs, and international collaborations, PhDians connects scientists, academicians, and innovators, enabling them to share knowledge, exchange ideas, and drive meaningful impact in their fields.
                        </p>
                        <p>
                            We believe that every discovery — whether by a student, early-career researcher, or seasoned scientist — contributes to building a sustainable and innovative scientific future. PhDians is committed to supporting, honouring, and empowering researchers as they advance knowledge for the betterment of society.
                        </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="mt-16">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400">Key Highlights</h3>
                        <ul className="space-y-3 text-lg text-gray-300">
                            {[
                                'A platform for global recognition of research contributions.',
                                'Publication opportunities in journals, books, and special reports.',
                                'A network of mentors and collaborators across disciplines and countries.',
                                'Promoting future-ready science, guiding innovation and research roadmaps worldwide.',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-cyan-400 mt-1.5">◆</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                        {[
                            { value: '1200+', label: 'Researchers' },
                            { value: '80+', label: 'Countries' },
                            { value: '1300+', label: 'Published Articles' },
                            { value: '100+', label: 'Global Partners' },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl text-center border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
                            >
                                <div className="text-4xl font-extrabold text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Featured Carousel Component Integration */}
                    <FeaturedScientists />
                    
                </div>
            </section>

            {/* TESTIMONIALS */}
            <Testimonials />
        </>
    );
}