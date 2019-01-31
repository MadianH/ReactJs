import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../App.css';

import Square from './Square'

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    let rowClass = [""]
    if(this.props.index === 0) {
      rowClass.push("top width-hp")
    } else if (this.props.index === 1) {
      rowClass.push("right")
    } else if (this.props.index === 2) {
      rowClass.push("bottom width-hp")
    } else if (this.props.index === 3) {
      rowClass.push("left")
    }
    let squareList = this.props.row.map((square, index) => {
      return <Square key={index} square={square} rowIndex={this.props.index}/>
    })
    return (
      <div className={rowClass.join(" ")}>{squareList}</div>
   );
  }
}

export default Row;
