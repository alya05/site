import React, { Component } from 'react';
import './Logo.css';
import logo from '../../images/main_logo_colorfull.png';

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <div className="logo__inner-container">
          <img src={logo} alt="Логотип сервиса Звыш"/>
        </div>
      </div>
    );
  }
}

export default Logo;
