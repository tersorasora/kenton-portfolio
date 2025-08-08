import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useNavigation } from '../../NavigationContext';

const Navbar = () => {
  const { setNextIndex } = useNavigation();

  return (
    <nav className='navbar'>
      <div className='logo'>PORTFOLIO</div>
      <ul className='nav-links'>
        <li onClick={() => setNextIndex(0)}><Link to="/kenton-portfolio">Home</Link></li>
        <li onClick={() => setNextIndex(1)}><Link to="/about">About Me</Link></li>
        <li onClick={() => setNextIndex(2)}><Link to="/projects">Projects</Link></li>
        <li onClick={() => setNextIndex(3)}><Link to="/experiences">Experiences</Link></li>
        <li onClick={() => setNextIndex(4)}><Link to="/contact">Contact Me</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar