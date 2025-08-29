import React, { useState, useRef, useEffect } from 'react';
import Modal from 'react-modal';
import './Contact.css';
import transition from '../../Transition/Transition';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
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
        setShowEmailForm(false),
        setTimeout(() => {
          setShowNotification(true);
        }, 200)
      );
  };

  useEffect(() => {
    let timer;
    if (showNotification === true) {
      timer = setTimeout(() => {
        setShowNotification(false);
      }, 2000); // 2 seconds
    }
    return () => clearTimeout(timer);
  }, [showNotification]);

  return (
    <div className="contact-background">
      <div className="contact-area">
        <div className="contact-question">
          <h1>REACH ME ANYTIME!!</h1>
        </div>
        <div className="contact-content">
          <a onClick={() => setShowEmailForm(true)}>
            <h2 className='contact-ig'>Drop Me an&nbsp;<span style={{ color: '#fc1c0cff' }}>E-Mail<i className="fa-solid fa-envelope"></i></span></h2>
          </a>
          <a href="https://www.linkedin.com/in/vincentius-kenton" target="_blank" rel="noopener noreferrer">
            <h2>Check My Proflie on&nbsp;<span style={{ color: '#456df3ff' }}>LinkedIn<i className="fa-brands fa-linkedin"></i></span></h2>
          </a>
          <a href="https://github.com/tersorasora" target='_blank' rel="noopener noreferrer">
            <h2>Check Out My Projects on&nbsp;<span>Github<i className="fa-brands fa-square-github"></i></span></h2>
          </a>
          <a href="https://wa.me/+6281391338726" target='_blank' rel='noopener noreferrer'>
            <h2>Message Me on&nbsp;<span style={{ color: '#1fd328ff' }}>WhatsApp<i className="fa-brands fa-whatsapp"></i></span></h2>
          </a>
          <a href="https://www.instagram.com/sora_0068/" target='_blank' rel='noopener noreferrer'>
            <h2>Follow Me on&nbsp;<span style={{ color: '#f5197cff' }}>Instagram<i className="fa-brands fa-instagram"></i></span></h2>
          </a>
        </div>
      </div>

      {/* Email Form modal */}
      <AnimatePresence mode="wait">
        {showEmailForm && (
          <motion.div
            initial={{ scale: 0.5, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="email-form-modal"
          >
            <div className="email-form-content">
              <div className="form-header">
                <h2>
                  <span className='header-get'>GET</span>
                  <span className='header-in'>IN</span>
                  <span className='header-touch'>TOUCH</span>
                </h2>
                <span className="close-button" onClick={() => setShowEmailForm(false)}><i className="fa-solid fa-xmark"></i></span>
              </div>
              <form ref={form} onSubmit={sendEmail} className="email-form">
                <div className="form-body">
                  <div className="form-name-subject">
                    <div className="form-section-name">
                      <h3 className='form-name-text'>NAME</h3>
                      <input type="text" name="user_name" placeholder="Enter Your Name" required />
                    </div>
                    <div className="form-section-subject">
                      <h3 className='form-name-text'>SUBJECT</h3>
                      <input type="text" name="user_subject" placeholder="Enter Subject" required />
                    </div>
                  </div>
                  <div className="form-section-email">
                    <h3 className='form-email-text'>E-MAIL</h3>
                    <input type="email" name="user_email" placeholder="Enter Your Email" required />
                  </div>
                  <div className="form-section-message">
                    <h3 className='form-message-text'>MESSAGE</h3>
                    <textarea name="message" placeholder="Your Message" required></textarea>
                  </div>
                </div>
                <button type="submit" value="Send" className='send-button'>Send</button>
              </form>
            </div>
          </motion.div>
        )}
        {showNotification && (
          <div className="email-notification">
            <motion.div
              initial ={{ x: -800, opacitx: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 800, opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
            >
              <h3 className='notify-message'>MESSAGE</h3>
            </motion.div>
            <motion.div
              initial ={{ x: 800, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -800, opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
            >
              <h3 className='notify-sent'>SENT!</h3>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default transition(Contact);