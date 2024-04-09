import React from 'react';
import './Hero.css';
import profileImage from '../../assets/react.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profileImage} alt="My image" />
      <h1>
        <span>I'm Indrajith Bodhinayaka</span>, Software Engineer
      </h1>
      <p>I have a experience 3 years to Fullstack development</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink
            className="anchor-link"
            style={{ color: 'black', fontWeight: '600' }}
            href="#contact"
          >
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
