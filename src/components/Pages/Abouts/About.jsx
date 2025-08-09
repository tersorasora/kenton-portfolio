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

              </div>
          </div>
      </div>
    );
}

export default transition(About);