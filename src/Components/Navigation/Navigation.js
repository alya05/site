import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className={this.props.isMenuActive ? "navigation navigation--active" : "navigation"}  >
        <div className="navigation__inner-container">
          <div className="navigation__element">
            <a className="navigation__element-name navigation__element-name_active" href="#">квартира</a>
          </div>
          <div className="navigation__element">
            <a className="navigation__element-name" href="#">коттедж</a>
          </div>
          {/*<div className="navigation__element">*/}
            {/*<a className="navigation__element-name" href="#">окна</a>*/}
          {/*</div>*/}
        </div>
      </div>
    );
  }
}

export default Navigation;
