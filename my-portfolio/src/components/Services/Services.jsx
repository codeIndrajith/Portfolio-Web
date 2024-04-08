import React from 'react';
import './Services.css';
import theme_pattern from '../../assets/react.svg';
import arrow_icon from '../../assets/arrow_icon.svg';
import servicesData from '../../data/services_data';

const Services = () => {
  return (
    <div className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      <div className="services-container">
        {servicesData.map((service) => {
          return (
            <div key={service.services_no} className="services-format">
              <h3>{service.services_no}</h3>
              <h2>{service.services_name}</h2>
              <p>{service.services_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
