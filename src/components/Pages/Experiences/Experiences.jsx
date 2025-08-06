import React from 'react';
import './Experiences.css';
import transition from '../../Transition/Transition';

const Experiences = () => {
  return (
    <div className="experience">
      <h1>Welcome to My Experiences Page</h1>
      <p>This is the experience page where you can find an overview of my work and skills.</p>
    </div>
  );
}

export default transition(Experiences);