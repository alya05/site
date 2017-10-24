import React, { Component } from 'react';
import './Bottom-Calculator.less';

class CleanersSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cleaner1: false,
      cleaner2: false,
      cleaner3: false,
    }
  }

  mouseOut = (prop) => {
    this.setState({[prop]: false});
  };

  mouseOver = (prop) =>{
    this.setState({[prop]: true});
  };

  render() {
    return (
        <section class="bottom-calculator-section">
          <div class="bottom-calculator-section__inner-container">
            <div class="ncalculator">
              <div class="calculator__button calculator__button_makeorder-style">
                <div class="calculator__text calculator__text_makeorder-style">Уборка квартиры от 28 рублей</div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default CleanersSection;
