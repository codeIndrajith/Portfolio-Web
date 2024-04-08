import React from 'react';
import './Hero.css';
import profileImage from '../../assets/react.svg';

const Hero = () => {
  return (
    <div className="hero">
      <img src={profileImage} alt="My image" />
      <h1>
        <span>I'm Indrajith Bodhinayaka</span>, Software Engineer
      </h1>
      <p>I have a experience 3 years to Fullstack development</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
