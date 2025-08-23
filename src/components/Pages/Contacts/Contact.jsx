import React, { useState, useRef } from 'react';
import Modal from 'react-modal';
import './Contact.css';
import transition from '../../Transition/Transition';
import emailjs from '@emailjs/browser';

const Contact = () => {
const [showEmailForm, setShowEmailForm] = useState(false);
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_c610xjn', 'template_ta89zx1', form.current, {
        publicKey: 'RmlL9btaInJD4B3It',
      })
      .then(
        () => {
          console.log('SUCCESS! Message Sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact-background">
      <div className="contact-area">
        <div className="contact-question">
          <h1>REACH ME ANYTIME!!</h1>
        </div>
        <div className="contact-content">
          <a onClick={() => setShowEmailForm(!showEmailForm)}>
            <h2 className='contact-ig'>Send Me an&nbsp;<span style={{color: '#fc1c0cff'}}>E-Mail<i className="fa-solid fa-envelope"></i></span></h2>
          </a>
          <a href="https://www.linkedin.com/in/vincentius-kenton" target="_blank" rel="noopener noreferrer">
            <h2>Check My Proflie on&nbsp;<span style={{color: '#456df3ff'}}>LinkedIn<i className="fa-brands fa-linkedin"></i></span></h2>
          </a>
          <a href="https://github.com/tersorasora" target='_blank' rel="noopener noreferrer">
            <h2>Check Out My Projects on&nbsp;<span>Github<i className="fa-brands fa-square-github"></i></span></h2>
          </a>
          <a href="https://wa.me/+6281391338726" target='_blank' rel='noopener noreferrer'>
            <h2>Message Me on&nbsp;<span style={{color: '#1fd328ff'}}>WhatsApp<i className="fa-brands fa-whatsapp"></i></span></h2>
          </a>
          <a href="https://www.instagram.com/sora_0068/" target='_blank' rel='noopener noreferrer'>
            <h2>Follow Me on&nbsp;<span style={{color: '#f5197cff'}}>Instagram<i className="fa-brands fa-instagram"></i></span></h2>
          </a>
        </div>
      </div>

      {/* Email Form modal */}
      {showEmailForm && (
        <div className="email-form-modal">
          <div className="email-form-content">
            <div className="form-header">
              <h2>SEND ME AN E-MAIL</h2>
              <span className="close-button" onClick={() => setShowEmailForm(false)}><i class="fa-solid fa-xmark"></i></span>
            </div>
            <form ref={form} onSubmit={sendEmail} className="email-form">
              <div className="form-body">
                <div className="form-section">
                  <h3 className='form-name-text'>NAME</h3>
                  <input type="text" name="user_name" placeholder="Hanegawa Sora" required />
                </div>
                <div className="form-section">
                  <h3 className='form-email-text'>E-MAIL</h3>
                  <input type="email" name="user_email" placeholder="SoraH@gmail.com" required />
                </div>
                <div className="form-section-message">
                  <h3 className='form-message-text'>MESSAGE</h3>
                  <textarea name="message" placeholder="Your Message" required></textarea>
                </div>
              </div>
              <button type="submit" value="Send" className='send-button'>Send</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default transition(Contact);