import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import Home from './pages/Home'
import About from './pages/About'
import Roadmap from './pages/Roadmap'
import HallOfHonour from './pages/HallOfHonour'
import Publications from './pages/Publications'
import Join from './pages/Join'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/hall-of-honour" element={<HallOfHonour />} />
        <Route path="/Roadmap" element={<Roadmap />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App