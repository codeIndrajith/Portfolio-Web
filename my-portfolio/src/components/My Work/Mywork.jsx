import React from 'react';
import './Mywork.css';
import theme_pattern from '../../assets/react.svg';
import arrow_icon from '../../assets/arrow_icon.svg';
import myWorks from '../../data/myWork';
import GoToHomePage from '../GoToHomePage/GoToHomePage';

const Mywork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="theme-pattern" />
      </div>
      <div className="mywork-container">
        {myWorks.map((myWork) => {
          return (
            <img
              key={myWork.workNo}
              src={myWork.workImage}
              alt={myWork.workName}
            />
          );
        })}
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
      <GoToHomePage />
    </div>
  );
};

export default Mywork;
