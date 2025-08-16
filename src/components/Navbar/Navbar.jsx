import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useNavigation } from '../../NavigationContext';

const Navbar = () => {
  const { currentIndex, setNextIndex } = useNavigation();

  return (
    <nav className='navbar'>
      <div className='logo'>PORTFOLIO</div>
      <ul className='nav-links'>
        <li className={currentIndex === 0 ? 'active' : ''}><Link to="/kenton-portfolio/" onClick={() => setNextIndex(0)}>Home</Link></li>
        <li className={currentIndex === 1 ? 'active' : ''} ><Link to="/kenton-portfolio/about" onClick={() => setNextIndex(1)}>About Me</Link></li>
        <li className={currentIndex === 2 ? 'active' : ''} ><Link to="/kenton-portfolio/projects" onClick={() => setNextIndex(2)}>Projects</Link></li>
        <li className={currentIndex === 3 ? 'active' : ''} ><Link to="/kenton-portfolio/experiences" onClick={() => setNextIndex(3)}>Experiences</Link></li>
        <li className={currentIndex === 4 ? 'active' : ''} ><Link to="/kenton-portfolio/contact" onClick={() => setNextIndex(4)}>Contact Me</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar