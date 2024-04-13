import React from 'react';
import './GoToHomePage.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaArrowAltCircleUp } from 'react-icons/fa';

const GoToHomePage = () => {
  return (
    <div className="goHomePage">
      <AnchorLink className="arrowLink" href="#home">
        <FaArrowAltCircleUp />
      </AnchorLink>
    </div>
  );
};

export default GoToHomePage;
