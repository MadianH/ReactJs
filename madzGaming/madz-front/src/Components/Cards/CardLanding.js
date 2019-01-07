import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';





class CardLanding  extends Component {
  render() {


    return (
      <div className="CardLandingContent">
        <Link className="btn" to={this.props.link}>
          <img className="img-cent-pourcent img-game-landing" src={this.props.background} alt={this.props.name} />
        </Link>
      </div>
    );
  }
}

export default CardLanding;
