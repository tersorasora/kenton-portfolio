import React from 'react';
import './Contact.css';
import transition from '../../Transition/Transition';

const Contact = () => {
  return (
    <div className="contact-background">
      <div className="contact-area">
        <div className="contact-question">
          <h1>REACH ME ANYTIME!!</h1>
        </div>
        <div className="contact-content">
          <a href="https://www.linkedin.com/in/vincentius-kenton" target="_blank" rel="noopener noreferrer">
            <h2 className='contact-linkedIn'>Check My Proflie on&nbsp;<span style={{color: '#456df3ff'}}>LinkedIn<i class="fa-brands fa-linkedin"></i></span></h2>
          </a>
          <a href="https://github.com/tersorasora" target='_blank' rel="noopener noreferrer">
            <h2 className='contact-email'>Check Out My Projects on&nbsp;<span>Github<i class="fa-brands fa-square-github"></i></span></h2>
          </a>
          <a href="https://wa.me/+6281391338726" target='_blank' rel='noopener noreferrer'>
            <h2 className='contact-wa'>Message Me on&nbsp;<span style={{color: '#1fd328ff'}}>WhatsApp<i class="fa-brands fa-whatsapp"></i></span></h2>
          </a>
          <a href="https://www.instagram.com/sora_0068/" target='_blank' rel='noopener noreferrer'>
            <h2 className='contact-ig'>Follow Me on&nbsp;<span style={{color: '#f5197cff'}}>Instagram<i class="fa-brands fa-instagram"></i></span></h2>
          </a>
        </div>
      </div>
    </div>
  );
}

export default transition(Contact);