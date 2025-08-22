import React from 'react';
import './Contact.css';
import transition from '../../Transition/Transition';

const Contact = () => {
  return (
    <div className="contact-background">
      <div className="contact-area">
        <div className="contact-question">
          <h1>GET IN TOUCH WITH ME??</h1>
        </div>
        <div className="contact-content">
          <h2 className='contact-linkedIn'>Touch me On LinkedIn</h2>
          <h2 className='contact-email'>Touch me On Email</h2>
          <h2 className='contact-wa'>Touch me On WA</h2>
          <h2 className='contact-ig'>Touch me On Instagram</h2>
        </div>
      </div>
    </div>
  );
}

export default transition(Contact);