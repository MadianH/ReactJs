import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';


class CardLanding  extends Component {
  render() {

    return (
      <div className="Margin-xxl">
        <Link to={this.props.link}>
          <img className="Img-game-landing" src={this.props.background} alt={this.props.name} />
        </Link>
      </div>
    );
  }
}

export default CardLanding;
