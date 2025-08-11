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
                </div>
              </div>
              <div className="tear-line">
              </div>
              <div className="right-side">
                <div className="right-side-container">
                  <h1 className='skill'>ABILITIES</h1>
                  <div className="programming">
                    <h2>PROGRAMMING</h2>
                    <p>I am capable of using : C (Native), C++, C#, Java, Python, Javascript, PHP, and Dart.</p>
                  </div>
                  <div className="framework">
                    <h2>FRAMEWORK</h2>
                    <p>I am capable of using : Laravel, React, Bootstrap, Flutter, WinForm, .NET Framework, Unity Framework.</p>
                  </div>
                  <div className="others">
                    <h2>OTHERS</h2>
                    <p>I am capable of using : Unity Engine, MySQL Database System, Aseprite, and Wondershare Filmora.</p>
                  </div>
                </div>
              </div>
          </div>
      </div>
    );
}

export default transition(About);