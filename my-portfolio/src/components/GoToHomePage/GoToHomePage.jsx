import React from 'react';
import './GoToHomePage.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const GoToHomePage = () => {
  return (
    <div className="goHomePage">
      <AnchorLink className="arrowLink" href="#home">
        &#11014;
      </AnchorLink>
    </div>
  );
};

export default GoToHomePage;
