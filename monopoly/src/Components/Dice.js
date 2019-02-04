import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../App.css';

import Button from './Button'

class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      throw: false,
      result: null,
    };
  }

  throwing = getRandomInt(max) => {
    let newResult = Math.floor(Math.random() * Math.floor(max));
    this.setState({
      trow: true,
      result: newResult
    })
  }

  render() {

    return (
      <div className="">
        {this.state.result}
        <button onClick={() => this.throwing(12)}>random</button>
      </div>
   );
  }
}

export default Dice;
