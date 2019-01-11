import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import '../../App.css';

import Button from '../Button.js';
import Margin from '../Margin.js';

class FormSignIn  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
      readyToClick: false,
    };
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

    this.setState({
      [event.target.name]: event.target.value
    });

    if(this.state.signInEmail.length > 1){
      this.setState({
        readyToClick: true
      });
    }
    else if( this.state.signInEmail.length < 2){
      this.setState({
        readyToClick: false
      });
    }

  }

  handleSubmit(event) {
    alert('email =' + this.state.signInEmail + 'password =' + this.state.signInPassword);
  }


  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit} className="Flex-column Justify-content-center Align-items-center">

          <Margin size="Margin-xl"/>
          <label className="Width-full">
            <div className="Font-color-black Font-bold">Email:</div>
            <input className="Width-full Input-setting" type="email" name="signInEmail" onChange={this.handleChange}/>
          </label>

          <Margin size="Margin-xs"/>

          <label className="Width-full">
            <div className="Font-color-black Font-bold">Password:</div>
              <input className="Width-full" type="password" name="signInPassword" autocomplete="new-password" onChange={this.handleChange}/>
          </label>

          <Margin size="Margin-xl"/>

          {this.state.readyToClick ? (
            <input type="submit" value="Se connecter" className="Btn-form Width-full Btn-ok-sub Background-pink Font-color-white" />
            ) : (
            <Button type="button" class="Btn-no-sub Btn-block Btn-form Width-full Background-pink Font-color-white" content="Se connecter"/>
            )
          }
       </form>
     </div>
    );
  }
}

function mapStateToProps(state) {
  return { PropsModalIsOpen: state }
}

function mapDispatchToProps(dispatch) {
  return {
    ModalIsOpen: function() {
        dispatch( {type: 'OpenModalSignUp', boolean: true} )
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormSignIn);
