import React from 'react';
import './Hero.css';
import profileImage from '../../assets/profileImage2.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const resumeLink =
  'https://drive.google.com/file/d/1ObW2Vm9pZlCQShYp3jHz6JW0wBdepcms/view?usp=drive_link';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profileImage} alt="My image" />
      <h1>
        Hi, <span>I'm Indrajith Bodhinayaka</span>, A Full Stack Developer From
        Sri Lanka
      </h1>
      <p>I have 3 years of experience in Full Stack Development.</p>
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
        <div className="hero-resume">
          <a href={resumeLink}>My resume</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
