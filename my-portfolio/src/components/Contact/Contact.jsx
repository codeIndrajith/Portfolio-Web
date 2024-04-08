import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/react.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import mail_icon from '../../assets/mail_icon.svg';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />{' '}
              <p>indrajith.bodinayaka352@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+94714085650</p>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Kandy, Sri Lanka</p>
            </div>
          </div>
        </div>

        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter Your Email" />
          <label htmlFor="">Write Message</label>
          <textarea
            name="message"
            id=""
            rows="8"
            placeholder="Enter Your Message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
