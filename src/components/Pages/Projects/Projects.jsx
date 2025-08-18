import React, {useState} from 'react';
import './Projects.css';
import transition from '../../Transition/Transition';
import { image, span } from 'framer-motion/client';
import { color } from 'framer-motion';

// IMAGES
import atmaKitchenAdmin from '../../../assets/Image/projects/atma-kitchen admin page.png';
import atmaKitchenCart from '../../../assets/Image/projects/atma-kitchen cart page.png';
import atmaKitchenLanding from '../../../assets/Image/projects/atma-kitchen landing page.png';
import atmaKitchenLogin from '../../../assets/Image/projects/atma-kitchen login page.png';

import myTicketLogin from '../../../assets/Image/projects/My-Ticketz login.png';
import myTicketTicket from '../../../assets/Image/projects/My-Ticketz Ticket.png';

import soulmerge1 from '../../../assets/Image/projects/soul-merge main menu.png';
import soulmerge2 from '../../../assets/Image/projects/soul-merge exploration.png';

import IOS1 from '../../../assets/Image/projects/IOS map.png';
import IOS2 from '../../../assets/Image/projects/IOS recorder.png';

import this1 from '../../../assets/Image/projects/this 1.png';
import this2 from '../../../assets/Image/projects/this 2.png';

const projectList = [
  {
    name: "ATMA",
    nameSecond: "KITCHEN",
    description: "A web-based platform for online food ordering, integrated with a smart system to manage food expiration and reduce waste.",
    techStack: "Laravel, Bootstrap, MySQL Database, HTML, CSS, JavaSCript, PHP",
    projectType: "WEBSITE",
    dificulty: "4",
    images: [
      atmaKitchenLogin,
      atmaKitchenCart,
    ],
  },
  {
    name: "SOULS",
    nameSecond: "MERGE",
    description: "A 2D pixel art game featuring souls-like open-world exploration and core RPG mechanics.",
    techStack: "Unity, C#, Aseprite",
    projectType: "DESKTOP GAME",
    dificulty: "7",
    images: [
      soulmerge1,
      soulmerge2,
    ],
  },
  {
    name: "MY",
    nameSecond: "TICKETZ",
    description: "A web-based train ticketing system. It allows users to book tickets, claim vouchers, and manage their bookings.",
    techStack: "Laravel, Bootstrap, MySQL Database, HTML, CSS, JavaSCript, PHP",
    projectType: "WEBSITE",
    dificulty: "2",
    images: [
      myTicketLogin,
      myTicketTicket,
    ],
  },
  {
    name: "INSTRUMENT",
    nameSecond: "OPERATING",
    nameThird: "SYSTEM",
    description: "UI control system for the Indonesian Air Force flight simulation, integrated with X-Plane 12 DataRef.",
    techStack: "Windows Forms, C#, C++, .Net Framework, X-Plane SDK",
    projectType: "WINDOWS APPLICATION",
    dificulty: "8",
    images: [
      IOS1,
      IOS2,
    ],
  },
  {
    name: "THIS",
    nameSecond: "PORTFOLIO",
    nameThird: "WEBSITE",
    description: "A personal portfolio website showcasing my projects and skills. Highly influenced by the design of Persona 5 UI Style",
    techStack: "React, CSS, HTML, JavaScript",
    projectType: "WEBSITE",
    dificulty: "1",
    images: [
      this1,
      this2,
    ],
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
          <button className={currentIndex <= 0 ? "arrow-btn-disabled left" : "arrow-btn left"} onClick={prevProject}><i className="fas fa-caret-left"></i></button>
          <h2>
            <span className='name-first'>{projectList[currentIndex].name}</span>
            <span className='name-second'>{projectList[currentIndex].nameSecond}</span>
            {projectList[currentIndex].nameThird && (
              <span className="name-third">{projectList[currentIndex].nameThird}</span>
            )}
          </h2>
          <button className={currentIndex >= projectList.length - 1 ? "arrow-btn-disabled right" : "arrow-btn right"} onClick={nextProject}><i className="fas fa-caret-right"></i></button>
        </div>
        <div className="project-content">
          <div className="project-images">
            {projectList[currentIndex].images.length > 0 ? (
              projectList[currentIndex].images.map((image, index) => (
                <img className={index % 2 === 0 ? 'image-1' : 'image-2'} key={index} src={image} alt='test'/>
              ))
            ) : (
              <span className="no-image">No images available</span>
            )}
          </div>
          <div className="project-texts">
            <div className="project-type">
              <h3>{projectList[currentIndex].projectType}</h3>
            </div>
            <div className="project-dificulty">
              <h3>DIFFICULTIES</h3>
              <div className="stars">
                {Array.from({ length: 10 }).map((_, index) => (
                  <span key={index} className={index < projectList[currentIndex].dificulty ? "star-filled" : "star-empty"}>  
                    &#9733;
                  </span>  
                ))}
              </div>
            </div>
            <div className="project-description">
              <p>{projectList[currentIndex].description}</p>
            </div>
            <div className="project-tech">
              <h3>TECH STACK</h3>
              <div className="tech-stack">
                {projectList[currentIndex].techStack.split(', ').map((tech, index) => (
                  <span key={index} className="tech-item">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default transition(Projects);