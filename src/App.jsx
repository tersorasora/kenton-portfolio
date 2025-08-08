import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages Components
import Home from './components/Pages/Homes/Home';
import About from './components/Pages/Abouts/About';
import Projects from './components/Pages/Projects/Projects';
import Experiences from './components/Pages/Experiences/Experiences';
import Contact from './components/Pages/Contacts/Contact';

function App() {
  const location = useLocation();

  return (
    <div className='container'>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/kenton-portfolio" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App