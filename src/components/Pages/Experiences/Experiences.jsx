import React, {useState} from 'react';
import './Experiences.css';
import transition from '../../Transition/Transition';

const experienceList = [
  {
    name: "SOFTWARE DEVELOPER INTERN",
    description: "Worked as a software developer intern at PT Wahana Kreasi Teknologi. I help contributing to development of Instrument Operating System Application for Air Force Flight Simulation and Flight Management System.",
    period: "SEP 2024 - FEB 2025",
  },
  {
    name: "DATABASE ASSISTANT LECTURER",
    description: "Served as a Database Teaching Assistant, supporting lecturers in delivering course material to junior students. Assisted in explaining core database concepts, guiding students through practical exercises, and providing academic support to enhance their understanding of database systems.",
    period: "SEP 2023 - DEC 2023",
  },
  {
    name: "UNITY GAME DEVELOPER 2D COURSE",
    description: "Completed a comprehensive Unity Game Development course on Udemy, specializing in 2D game creation. Acquired practical experience in game design, programming, asset integration, and successfully developed a fully functional 2D game as the final project.",
    period: "DEC 2023 - FEB 2024",
  },
  {
    name: "IAESTE INDONESIA",
    description: "Participated in IAESTE Indonesia as a member of the Public Relations and Online Media division. Contributed to event promotion by designing posters, assisting in event preparation, and managing social media content.",
    period: "SEP 2022 - SEP 2024",
  }
];

const Experiences = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPage = () => {
    setCurrentIndex((prev) => 
      prev === experienceList.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="background-experience">
      <div className="experiences">
        <div className="header">
          <h1>EXPERIENCES</h1>
          <h2>{experienceList[currentIndex].period}</h2>
        </div>
        <div className='content'>
          <div className="experience-name">
            <h2>{experienceList[currentIndex].name}</h2>
          </div>
          <div className="experience-description">
            <p>{experienceList[currentIndex].description}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="page-count">
            <h3>
                <span className='index-count'>{currentIndex+1}/{experienceList.length}</span>
                <span className='page-word'>PAGE</span>
              </h3>
          </div>
          <button className='button-page' onClick={nextPage}></button>
        </div>
      </div>
    </div>
  );
}

export default transition(Experiences);