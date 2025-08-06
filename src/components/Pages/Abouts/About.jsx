import React from 'react';
import './About.css';
import transition from '../../Transition/Transition';

const About = () => {
  return (
    <div className="about">
      <h1>Welcome to About Me Page</h1>
      <p>This is the about me page where you can find an overview of my work and skills.</p>
    </div>
  );
}

export default transition(About);