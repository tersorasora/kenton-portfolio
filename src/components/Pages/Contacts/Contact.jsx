import React from 'react';
import './Contact.css';
import transition from '../../Transition/Transition';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Welcome to My Contact Page</h1>
      <p>This is the contact page where you can find an overview of my work and skills.</p>
    </div>
  );
}

export default transition(Contact);