import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../App.css';


class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    let classSquare = ""
    if(this.props.rowIndex === 0 || this.props.rowIndex === 2) {
      if(this.props.square[0] === 0 || this.props.square[0] === 9){
        classSquare = "square-corner"
      } else {
        classSquare = "square-top-bottom"
      }
    } else if(this.props.rowIndex === 1) {
      classSquare = "square-right"
    } else if(this.props.rowIndex === 3){
      classSquare = "square-left"
    }

    return (
      <div className={classSquare}>{this.props.square[0]}</div>
   );
  }
}

export default Square;
