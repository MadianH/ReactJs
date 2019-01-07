import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import '../../App.css';




class FormSignUp  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpPseudo: '',
      signUpEmail: '',
      signUpPassword: '',
    };
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    
    var ctx = this;
    fetch('http://localhost:3000'+'/signup', {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: "pseudo=" + ctx.state.signUpPseudo + "&email=" + ctx.state.signUpEmail + "&password=" + ctx.state.signUpPassword
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log("request failed :", error))
    event.preventDefault();
  }


  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit} className="Form-SignUp-content">
          <div className="Font-color-black">Inscription</div>

          <label>
            <div className="Font-color-black">Choisis ton pseudo :</div>
            <input className="inputFormSignUp" type="text" name="signUpPseudo" onChange={this.handleChange}/>
          </label>

          <label>
            <div className="Font-color-black">Rentre ton Email:</div>
            <input className="inputFormSignUp" type="email" name="signUpEmail" onChange={this.handleChange}/>
          </label>

          <label>
            <div className="Font-color-black">Choisis un Password:</div>
            <input className="inputFormSignUp" type="password" name="signUpPassword" onChange={this.handleChange}/>
          </label>

          <input type="submit" value="Submit" />
       </form>
     </div>
    );
  }
}

export default FormSignUp;
