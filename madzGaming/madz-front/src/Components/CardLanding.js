import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';





class CardLanding  extends Component {
  render() {


    return (
      <div className="LandingContent">
        <img className="img-cent-pourcent" src={this.props.background} />
      </div>
    );
  }
}

export default CardLanding;
