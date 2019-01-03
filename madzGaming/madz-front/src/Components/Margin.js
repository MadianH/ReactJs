import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
