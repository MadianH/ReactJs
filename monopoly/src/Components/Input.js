import React, {Component} from 'react';
import {BrowserRouter as Link} from 'react-router-dom';
import '../App.css';

class Input extends Component {


  render() {

    return (
      <label>
        <div>Joueur {this.props.index}</div>
        <input className="" type="text" name={"player"+this.props.index} onChange={this.props.handleChange}/>
      </label>
   );
  }
}

export default Input;
