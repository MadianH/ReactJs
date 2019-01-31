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
    if(this.props.index === 0 || this.props.index === 2) {
      rowClass.push("row-top-bottom flex flex-row")
    } else if (this.props.index === 1 || this.props.index === 3) {
      rowClass.push("row-right-left flex flex-column")
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
