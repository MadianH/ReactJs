import React, { Component } from 'react';
import '../App.css';


class Button  extends Component {
  render() {

    return (
      <button type={this.props.type} className={this.props.class}>{this.props.content}</button>
    );
  }
}

export default Button ;
