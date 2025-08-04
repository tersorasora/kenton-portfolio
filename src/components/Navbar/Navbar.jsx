import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>PORTFOLIO</div>
      <ul className='nav-links'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/experiences">Experiences</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar