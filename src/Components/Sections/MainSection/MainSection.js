import React, { Component } from 'react';
import './MainSection.css';
import Header from '../../Header/Header';
import Headlines from '../../Headlines/Headlines';
import CalculatorMini from '../../CalculatorMini/CalculatorMini';


class MainSection extends Component {
  render() {
    return (
      <section className="main-section">
        <div className="main-section__inner-container">
          <Header/>
          <Headlines/>
          <CalculatorMini  mainSectionProps={this.props}/>
        </div>
      </section>
    );
  }
}

export default MainSection;
