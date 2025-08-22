import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useNavigation } from '../../NavigationContext';

const Navbar = () => {
  const { currentIndex, setNextIndex } = useNavigation();

  return (
    <nav className='navbar'>
      <div className='logo'>
        {/* PORTFOLIO */}
        <h1>
          <span className='P'>P</span>
          <span className='O'>O</span>
          <span className='R'>R</span>
          <span className='T'>T</span>
          <span className='F'>F</span>
          <span className='O'>O</span>
          <span className='L'>L</span>
          <span className='I'>I</span>
          <span className='O2'>O</span>
        </h1>
      </div>
      <ul className='nav-links'>
        <li className={currentIndex === 0 ? 'active' : ''}><Link to="/kenton-portfolio/" onClick={() => setNextIndex(0)}>HOME</Link></li>
        <li className={currentIndex === 1 ? 'active' : ''} ><Link to="/kenton-portfolio/about" onClick={() => setNextIndex(1)}>ABOUT ME</Link></li>
        <li className={currentIndex === 2 ? 'active' : ''} ><Link to="/kenton-portfolio/projects" onClick={() => setNextIndex(2)}>PROJECTS</Link></li>
        <li className={currentIndex === 3 ? 'active' : ''} ><Link to="/kenton-portfolio/experiences" onClick={() => setNextIndex(3)}>EXPERIENCES</Link></li>
        <li className={currentIndex === 4 ? 'active' : ''} ><Link to="/kenton-portfolio/contact" onClick={() => setNextIndex(4)}>CONTACT ME</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar