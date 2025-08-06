import React from 'react';
import './Home.css';
import transition from '../../Transition/Transition';
import profile from '../../../assets/Image/profile.jpg';

const Home = () => {
  return (
    <div className="persona-intro">
      <div className="intro-text">
        <h1>Hi there,</h1>
        <h2>I am <span className="name">Vincentius Kenton</span></h2>
      </div>
      <div className="intro-image">
        <img src={profile} alt="Vincentius Kenton" />
      </div>
    </div>
  );
}

export default transition(Home);