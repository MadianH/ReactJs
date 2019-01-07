import React, { Component } from 'react';
import '../App.css';


class Margin  extends Component {
  render() {

    let marginClass=["Container-margin"]
    marginClass.push(this.props.size)

    return (
      <div className={marginClass.join(" ")}></div>
    );
  }
}

export default Margin;
