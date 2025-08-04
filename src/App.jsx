import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className='container'>
      <Navbar />
    </div>
    // <>
    //   <Navbar />
    //   <main className="container">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/projects" element={<Projects />} />
    //       <Route path="/experiences" element={<Experiences />} />
    //       <Route path="/contact" element={<Contact />} />
    //     </Routes>
    //   </main>
    // </>
  )
}

export default App
