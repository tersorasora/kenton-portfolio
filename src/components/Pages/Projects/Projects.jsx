import React, {useState} from 'react';
import './Projects.css';
import transition from '../../Transition/Transition';

const projectList = [
  {
    name: "ATMA KITCHEN",
    description: "A web-based platform for online food ordering, integrated with a smart system to manage food expiration and reduce waste.",
    buildTech: "Laravel, Bootstrap, MySQL Database, HTML, CSS, JavaSCript, PHP",
  },
  {
    name: "SOULS MERGE",
    description: "A 2D pixel art game featuring souls-like open-world exploration and core RPG mechanics.",
    buildTech: "Unity, C#, Aseprite",
  },
  {
    name: "INSTRUMENT OPERATING SYSTEM",
    description: "UI control system for the Indonesian Air Force flight simulation, integrated with X-Plane 12 DataRef.",
    buildTech: "Windows Forms, C#, C++, .Net Framework, X-Plane SDK",
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? 0 : prev - 1
    );
  };

  const nextProject = () => {
    setCurrentIndex((prev) => 
      prev === projectList.length - 1 ? projectList.length - 1  : prev + 1
    );
  };

  return (
    <div className="background-project">
      <div className="project">
        <div className="project-name">
          <button className="arrow-btn" onClick={prevProject}><i className="fas fa-caret-left"></i></button>
          <h2>{projectList[currentIndex].name}</h2>
          <button className="arrow-btn" onClick={nextProject}><i className="fas fa-caret-right"></i></button>
        </div>
        <div className="project-content">
          
        </div>
      </div>
    </div>
  );
}

export default transition(Projects);