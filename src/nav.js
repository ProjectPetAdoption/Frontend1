import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        Adopt<span>Me</span>
      </div>
      <div className="menu">
        <a href="#">Pets</a>
        <a href="#">Pet Services</a>
        <a href="#">About Us</a>
        <a href="#">Join us</a>
        <a href="#">Contact</a>
        <a href="#">FAQs</a>
      </div>
      <div className="icon">
        <i className="fa fa-search"></i>
        <a href="#">Login</a>
      </div>

      <div className="home-container">
        <a href="/">
            <FontAwesomeIcon icon={faHome}   className="home-icon" />
        </a>
          </div>
    </nav>
  );
};

export default Nav;
