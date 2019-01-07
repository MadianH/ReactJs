import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';


class FormSignIn  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
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
    alert('email =' + this.state.signInEmail + 'password =' + this.state.signInPassword);
  }

  render() {



    return (
      <div>
        <form onSubmit={this.handleSubmit} className="Form-SignIn-content">
          <div className="Font-color-black">Connecte toi !</div>

          <label>
            <div className="Font-color-black">Email:</div>
            <input className="inputFormSignIn" type="email" name="signInEmail" onChange={this.handleChange}/>
          </label>

          <label>
            <div className="Font-color-black">Password:</div>
              <input className="inputFormSignIn" type="password" name="signInPassword" onChange={this.handleChange}/>
          </label>

          <input type="submit" value="Submit" />
       </form>
       <div className="Font-color-black">Inscription</div>
     </div>
    );
  }
}

export default FormSignIn;
