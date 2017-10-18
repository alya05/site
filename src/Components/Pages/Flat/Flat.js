import React, { Component } from 'react';
import './Flat.css';
import MainSection from '../../Sections/MainSection/MainSection';
import RelaxSection from '../../Sections/RelaxSection/RelaxSection';
import TrustSection from '../../Sections/TrustSection/TrustSection';
import DescriptionSection from '../../Sections/DescriptionSection/DescriptionSection';
import CleanersSection from '../../Sections/CleanersSection/CleanersSection';
import FAQSection from '../../Sections/FAQSection/FAQSection';
import ProcessingSection from '../../Sections/ProcessingSection/ProcessingSection';
import Calculator from '../../Calculator/Calculator';

import * as PRICES from '../../../constants/price';

class Flat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bathroomCount: 1,
      roomCount: 1,
      price: PRICES.BASE_PRICE
    }
  }

  addRoom = () => {
    if (this.state.roomCount === 5) {
      return;
    }
    this.setState({
      roomCount: ++this.state.roomCount
    })
  };

  removeRoom = () => {
    if (this.state.roomCount === 1) {
      return;
    } else {
      this.setState({
        roomCount: --this.state.roomCount
      })
    }
  };

  addBathRoom = () => {
    if (this.state.bathroomCount === 2) {
      return;
    }
    this.setState({
      bathroomCount: ++this.state.bathroomCount
    })


  };

  removeBathRoom = () => {
    if (this.state.bathroomCount === 1) {
      return;
    } else {
      this.setState({
        bathroomCount: --this.state.bathroomCount
      })
    }
  };

  countPrice = () => {
    let price = 0;
    price += PRICES.BASE_PRICE
      + (this.state.roomCount-1)*PRICES.ROOM_PRICE
      + (this.state.bathroomCount-1)*PRICES.BATHROOM_PRICE;

    return price;
  };

  render() {

    const price = this.countPrice();
    return (
      <div className="flat">
        {/*<MainSection addRoom={this.addRoom}*/}
                     {/*addBathRoom={this.addBathRoom}*/}
                     {/*removeRoom={this.removeRoom}*/}
                     {/*removeBathRoom={this.removeBathRoom}*/}
                     {/*roomCount={this.state.roomCount}*/}
                     {/*bathroomCount={this.state.bathroomCount}*/}
                     {/*price={price}/>*/}
        {/*<RelaxSection/>*/}
        {/*<TrustSection/>*/}
        {/*<DescriptionSection/>*/}
        {/*<CleanersSection/>*/}
        {/*<FAQSection/>*/}
        {/*<ProcessingSection/>*/}
        <Calculator/>
      </div>
    );
  }
}

export default Flat;
