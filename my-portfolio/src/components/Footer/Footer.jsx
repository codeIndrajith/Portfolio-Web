import React from 'react';
import './Footer.css';
import footer_logo from '../../assets/react.svg';
import user_icon from '../../assets/user_icon.svg';
import GoToHomePage from '../GoToHomePage/GoToHomePage';

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>I am Fullstack Developer</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div> */}
      <div className="footer-bottom">
        <hr />
        <p className="footer-bottom-left">
          Copyright &copy; 2024 {''}
          <a
            className="copyright-section"
            href="https://www.linkedin.com/in/indrajith-bodhinayaka-b5a10521b/"
          >
            Indrajith Bodhinayaka
          </a>{' '}
          {''}. All Rights Reserved
        </p>
        {/* <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div> */}
      </div>
      <GoToHomePage />
    </div>
  );
};

export default Footer;
