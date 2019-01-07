import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';





class CardLanding  extends Component {
  render() {


    return (
      <div className="CardLandingContent">
        <Link className="btn" to={this.props.link}>
          <img className="img-cent-pourcent img-game-landing" src={this.props.background} />
        </Link>
      </div>
    );
  }
}

export default CardLanding;
