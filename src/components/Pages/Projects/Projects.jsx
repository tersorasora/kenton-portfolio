import React, {useState} from 'react';
import './Projects.css';
import transition from '../../Transition/Transition';

const Projects = () => {
  const projectNames = [
    "ATMA KITCHEN",
    "SOULS MERGE",
    "INSTRUMENT OPERATING SYSTEM",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? 0 : prev - 1
    );
  };

  const nextProject = () => {
    setCurrentIndex((prev) => 
      prev === projectNames.length - 1 ? projectNames.length - 1  : prev + 1
    );
  };

  return (
    <div className="background-project">
      <div className="project">
        <div className="project-name">
          <button className="arrow-btn" onClick={prevProject}><i className="fas fa-caret-left"></i></button>
          <h2>{projectNames[currentIndex]}</h2>
          <button className="arrow-btn" onClick={nextProject}><i className="fas fa-caret-right"></i></button>
        </div>
      </div>
    </div>
  );
}

export default transition(Projects);