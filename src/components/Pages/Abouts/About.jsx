import React from 'react';
import './About.css';
import transition from '../../Transition/Transition';

const About = () => {
    return (
        <div className="about">
            <div className="about-inner">
                <div className="left-side">
                  <h1 className='nama'>Vincentius Kenton</h1>
                  <h2 className='test'>Battle Result</h2>
                  <h3>Age : <span>22</span></h3>
                  <h3>Height : <span>170cm</span></h3>
                  <h3>Nickname : <span>Kenton</span></h3>
                </div>
                <div className="tear-line"></div>
                <div className="right-side"></div>
            </div>
        </div>
    );
}

export default transition(About);