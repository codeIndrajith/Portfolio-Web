import React from 'react';
import './About.css';
// import theme_pattern from '../../assets/theme_pattern.svg';
import profileImage from '../../assets/profileImage2.png';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        {/* <img src={theme_pattern} alt="theme pattern" /> */}
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profileImage} alt="My image" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a skilled Full Stack Developer with over 3 years of
              experience.
            </p>
            <span>Coding is my passion</span>
            <p className="skill-para">
              I have a more Skills for Full Stack Development.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML, CSS, PHP, C++, Java</p> <hr style={{ width: '70%' }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: '65%' }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: '65%' }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p> <hr style={{ width: '60%' }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p> <hr style={{ width: '50%' }} />
            </div>
            {/* <div className="about-skill">
              <p>Laravel</p> <hr style={{ width: '40%' }} />
            </div> */}
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
