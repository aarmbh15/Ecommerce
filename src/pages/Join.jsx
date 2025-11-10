export default function Join() {
    return (
      <section className="py-32 px-6 bg-gray-900 overflow-hidden">
        
        {/* --- CSS Keyframes for Animations --- */}
        <style>{`
            @keyframes headerFadeUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes formFadeIn {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-header-fade {
                animation: headerFadeUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                opacity: 0; 
            }
            .animate-form-in {
                animation: formFadeIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                opacity: 0; 
            }
        `}</style>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white animate-header-fade">
            Join PhDians
          </h1>
          <p className="text-center text-gray-400 mb-12 text-lg animate-header-fade" style={{ animationDelay: '0.3s' }}>Merit-based. No paid promotion.</p>
  
          {/* --- Eligibility Criteria Section (New) --- */}
          <div className="mb-16 p-8 bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-700 animate-form-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
              Eligibility Criteria
            </h2>
            <ul className="space-y-3 text-gray-300 list-inside">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">🎓</span> 
                <p>
                  <span className="font-semibold text-white">Educational Qualification:</span> Open to Ph.D. holders, Ph.D. scholars, postgraduates, and researchers from recognized institutions.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">🧠</span> 
                <p>
                  <span className="font-semibold text-white">Academic/Research Involvement:</span> Applicants should be actively engaged in research, teaching, innovation, or academic development.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">💡</span> 
                <p>
                  <span className="font-semibold text-white">Innovators and Professionals:</span> Individuals involved in startups, R&D, or innovation-driven projects are also eligible.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">📄</span> 
                <p>
                  <span className="font-semibold text-white">Professional Verification:</span> Must provide valid academic or institutional affiliation details (e.g., university ID, research profile, or publication link).
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">🌍</span> 
                <p>
                  <span className="font-semibold text-white">Global Membership:</span> Open to members from all disciplines and countries committed to advancing research, innovation, and academic excellence.
                </p>
              </li>
            </ul>
          </div>
          {/* --- End Eligibility Criteria Section --- */}
  
          {/* Form Container (Single Fade-in) */}
          <form 
            className="space-y-8 bg-gray-800/60 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-gray-700 animate-form-in"
            style={{ animationDelay: '0.6s' }}
          >
            {/* Responsive Check: Grid layout (2 columns on md+) is responsive. */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-300"
              />
              <input
                type="text"
                placeholder="Preferred Title"
                className="bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-300"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-300"
              />
              {/* --- New Input: Recommendation 1 --- */}
              <input
                type="text"
                placeholder="Recommendation 1 (Name & Affiliation)"
                className="bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-300"
              />
              {/* --- New Input: Recommendation 2 --- */}
              <input
                type="text"
                placeholder="Recommendation 2 (Name & Affiliation)"
                className="bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-300"
              />
            </div>
  
            <textarea
              placeholder="Statement of Purpose (max 250 words)"
              rows="6"
              className="w-full bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-300 resize-none"
            ></textarea>
  
            {/* Radio Buttons (Enhanced Hover) */}
            <div className="flex flex-wrap gap-8 text-gray-300">
              <label className="flex items-center gap-2 cursor-pointer hover:text-cyan-400 transition duration-300">
                <input type="radio" name="type" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 accent-cyan-500" />
                <span>Senior Member</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-cyan-400 transition duration-300">
                <input type="radio" name="type" className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 accent-cyan-500" />
                <span>Fellow Member</span>
              </label>
            </div>
  
            <button
              type="submit"
              className="w-full py-4 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-[1.01]"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    );
  }