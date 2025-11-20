import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './pages/Home';
// import About from './pages/About';
// import Publications from './pages/Publications';
// import HallOfHonour from './pages/HallOfHonour';
// import Roadmap from './pages/Roadmap';
// import Join from './pages/Join';
// import Testimonials from './components/Testimonials';
// import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop'; // ✅

function App() {
  return (
    <>
      <ScrollToTop /> {/* ✅ Scrolls to top on route change */}
      <div className="min-h-screen bg-dark">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/hall-of-honour" element={<HallOfHonour />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/join" element={<Join />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
