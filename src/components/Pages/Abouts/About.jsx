import React, { useState } from 'react';
import './About.css';
import transition from '../../Transition/Transition';

const About = () => {
  const [showCNName, setCNName] = useState(false);  

  return (
      <div className="about">
          <div className="about-inner">
              <div className="left-side">
                <div className="left-side-container">
                  <h1 className='nama' onClick={() => setCNName(!showCNName)}>
                    {showCNName ? '周添聪' : 'Vincentius Kenton'}
                  </h1>
                  <div className='profile'>
                    <div className="row">
                      <h3>Age: <span>22</span></h3>
                      <h3>Height: <span>170cm</span></h3>
                    </div>
                    <div className="row">
                      <h3>Education: <span>Universitas Atma Jaya Yogyakarta</span></h3>
                      <h3>Major: <span>Informatics</span></h3>
                    </div>
                    <div className="row">
                      <h3>Hobbies: <span>Gaming, Coding, Badminton</span></h3>
                      <h3>GPA: <span>3.79/4.00</span></h3>
                    </div>
                  </div>
                  <div className='caption'>
                    <h2>ABOUT ME</h2>
                    <p>Hi, I'm Kenton — a fresh Informatics graduate with a positive mindset and a laid-back yet 
                      driven personality. I'm seeking opportunities across the technology field, where I can contribute 
                      to and grow from projects in website development, mobile app development, game creation, AI 
                      engineering, and beyond. I thrive on being part of impactful IT projects and bringing ideas to life.</p>
                  </div>
                </div>
              </div>
              <div className="tear-line">
              </div>
              <div className="right-side">
                <div className="right-side-container">
                  <h1 className='skill'>ABILITIES</h1>
                  <div className="programming">
                    <h2>PROGRAMMING</h2>
                    <p>I am capable for using programming languages, including C (Native), C++, C#, Java, Python, JavaScript, PHP, and Dart.</p>
                  </div>
                  <div className="framework">
                    <h2>FRAMEWORK</h2>
                    <p>I am experienced in leveraging powerful frameworks such as Laravel, React, Bootstrap, Flutter, WinForms, and .NET Framework.</p>
                  </div>
                  <div className="others">
                    <h2>OTHERS</h2>
                    <p>I am skilled in using Unity Engine, MySQL Database Systems, Aseprite for pixel art, and Wondershare Filmora for professional video editing.</p>
                  </div>
                </div>
              </div>
          </div>
      </div>
    );
}

export default transition(About);