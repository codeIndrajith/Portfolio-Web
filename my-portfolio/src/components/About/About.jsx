import React from 'react';
import './About.css';
import theme_pattern from '../../assets/react.svg';
import profileImage from '../../assets/react.svg';

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profileImage} alt="My image" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am experienced Full stack Developer with over 3 years</p>
            <p>Coding is my passion</p>
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
            <div className="about-skill">
              <p>Laravel</p> <hr style={{ width: '40%' }} />
            </div>
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
          <p>PROJECTs COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
