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
    let classSquare = ["square"]
    if(this.props.rowIndex === 0 || this.props.rowIndex === 2) {
      if(this.props.index === 0 || this.props.index === 9){
        classSquare.push("square-corner")
      } else {
        classSquare.push("square-top-bottom")
      }
    } else if(this.props.rowIndex === 1) {
      classSquare.push("square-right")
    } else if(this.props.rowIndex === 3){
      classSquare.push("square-left")
    }

    return (
      <div className={classSquare.join(" ")}>
        {this.props.index}
        {this.props.square.join(" ")}
      </div>
   );
  }
}

export default Square;
