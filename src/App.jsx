import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom';

// Pages Components
import Home from './components/Pages/Homes/Home';
import About from './components/Pages/Abouts/About';
import Projects from './components/Pages/Projects/Projects';
import Experiences from './components/Pages/Experiences/Experiences';
import Contact from './components/Pages/Contacts/Contact';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
