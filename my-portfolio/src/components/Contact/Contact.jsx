import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/react.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import mail_icon from '../../assets/mail_icon.svg';

const PUBLIC_ACCESS_KEY = import.meta.env.VITE_PUBLIC_ACCESS_KEY;

const Contact = () => {
  const [name, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', PUBLIC_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log('Success', res);
      setUserName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div id="contact" className="contact">
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

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={name}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="">Write Message</label>
          <textarea
            name="message"
            value={message}
            id=""
            rows="8"
            placeholder="Enter Your Message"
            onChange={(e) => setMessage(e.target.value)}
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
