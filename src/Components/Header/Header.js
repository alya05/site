import React, { Component } from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import ZvyshDescription from '../ZvyshDescription/ZvyshDescription';
import Navigation from '../Navigation/Navigation';
import PhoneNumber from '../PhoneNumber/PhoneNumber';
import SignIn from '../SignIn/SignIn';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__inner-container">
          <Logo/>
          <ZvyshDescription/>
          <Navigation/>
          <PhoneNumber/>
          <SignIn/>
        </div>
      </header>
    );
  }
}

export default Header;
