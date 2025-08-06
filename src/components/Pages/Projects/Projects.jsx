import React from 'react';
import './Projects.css';
import transition from '../../Transition/Transition';

const Projects = () => {
  return (
    <div className="project">
      <h1>Welcome to My Project Portfolio Page</h1>
      <p>This is the project page where you can find an overview of my work and skills.</p>
    </div>
  );
}

export default transition(Projects);