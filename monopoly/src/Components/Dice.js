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

  throwing = (min, max) => {
    let newResult;
    min = Math.ceil(min);
    max = Math.floor(max);
    newResult = Math.floor(Math.random() * (max - min)) + min;
    this.setState({
      trow: true,
      result: newResult
    })
  }

  render() {

    return (
      <div className="">
        {this.state.result}
        <Button link={false} type={"button"} content={"Lancer les dés"} parent={"Dice"} handleClick={this.throwing} />
      </div>
   );
  }
}

export default Dice;
