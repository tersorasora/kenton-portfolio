import React, {useState} from 'react';
import './Projects.css';
import transition from '../../Transition/Transition';

const projectList = [
  {
    name: "ATMA",
    nameSecond: "KITCHEN",
    description: "A web-based platform for online food ordering, integrated with a smart system to manage food expiration and reduce waste.",
    buildTech: "Laravel, Bootstrap, MySQL Database, HTML, CSS, JavaSCript, PHP",
    projectType: "WEBSITE",
    dificulty: "4",
  },
  {
    name: "SOULS",
    nameSecond: "MERGE",
    description: "A 2D pixel art game featuring souls-like open-world exploration and core RPG mechanics.",
    buildTech: "Unity, C#, Aseprite",
    projectType: "DESKTOP GAME",
    dificulty: "6",
  },
  {
    name: "INSTRUMENT",
    nameSecond: "OPERATING",
    nameThird: "SYSTEM",
    description: "UI control system for the Indonesian Air Force flight simulation, integrated with X-Plane 12 DataRef.",
    buildTech: "Windows Forms, C#, C++, .Net Framework, X-Plane SDK",
    projectType: "WINDOWS APPLICATION",
    dificulty: "7",
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
          <h2>
            <span className='name-first'>{projectList[currentIndex].name}</span>
            <span className='name-second'>{projectList[currentIndex].nameSecond}</span>
            {projectList[currentIndex].nameThird && (
              <span className="name-third">{projectList[currentIndex].nameThird}</span>
            )}
          </h2>
          <button className="arrow-btn" onClick={nextProject}><i className="fas fa-caret-right"></i></button>
        </div>
        <div className="project-content">
          <div className="project-images">

          </div>
          <div className="project-texts">
            <div className="project-type">
              <h3>{projectList[currentIndex].projectType}</h3>
            </div>
            <div className="project-dificulty">
              <h3>Dificulties : {projectList[currentIndex].dificulty} &#9733;&#9733;&#9733;&#9734;&#9734;</h3>
            </div>
            <div className="project-description">
              <p>{projectList[currentIndex].description}</p>
            </div>
            <div className="project-build-tech">
              <h3>Build with:</h3>
              <p>{projectList[currentIndex].buildTech}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default transition(Projects);