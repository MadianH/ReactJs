import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import '../../App.css';

import Button from '../Button.js';
import Margin from '../Margin.js';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


class FormSignUp  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpPseudo: '',
      signUpEmail: '',
      signUpPassword: '',
      emailExist: false,
      pseudoError: false,
      passwordError: false,
      readyToFetch: false,
      signUpValidate: false,
      signUpError: false,
    };
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {

    this.setState({
      [event.target.name]: event.target.value
    });

    if(this.state.signUpEmail.length > 1){
      this.setState({
        readyToFetch: true
      });
    }
    else if( this.state.signUpEmail.length < 2){
      this.setState({
        readyToFetch: false
      });
    }
  }

  handleSubmit(event) {

    var ctx = this;
    fetch("http://127.0.0.1:3000/signup", {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: "pseudo=" + ctx.state.signUpPseudo + "&email=" + ctx.state.signUpEmail + "&password=" + ctx.state.signUpPassword
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

         if(data.pseudoValid === false){
           console.log("pseudo");
            this.setState({
              pseudoError: true,
              emailExist: false,
              passwordError: false,
              signUpError: false,
            });
          }
           else if(data.isExist === true){
             console.log("isexist");
             this.setState({
               emailExist: true,
               pseudoError: false,
               passwordError: false,
               signUpError: false,
             });
           }
           else if(data.passwordValid === false){
             console.log("password");
               this.setState({
                 passwordError: true,
                 pseudoError: false,
                 emailExist: false,
                 signUpError: false,
               });
            }
           else if(data.signup === true){
             console.log("signup");
             this.setState({
               signUpValidate: true
             });
           }
           else{
             console.log("else");
             this.setState({
               signUpError: true,
               emailExist: false,
               pseudoError: false,
               passwordError: false,
             });
           }
      })
      .catch((error) => console.log("request failed :", error))
    event.preventDefault();
  }


  render() {

    return (
      <div>
        {this.state.signUpValidate ?(
          <div className="Height-xl Flex-column Justify-content-center Align-items-center">
            <span className="Font-color-green Font-bold Font-size-xl">Inscription validée</span>
            <FontAwesomeIcon icon={faCheckCircle} className="Font-color-green Font-size-xxl"/>
          </div>
          ) : (
           <form onSubmit={this.handleSubmit} className="Flex-column Justify-content-center Align-items-center">

             {this.state.signUpError ? (
               <div className="Font-color-red">
                  Oups ! erreur détecté lors de l'inscription !!
               </div>
               ) : (
                 <div></div>

               )
             }

             <Margin size="Margin-xl"/>

             <label className="Width-full">
               <div className="Font-color-black Font-bold">Pseudo :</div>
               <input className="Width-full" type="text" name="signUpPseudo" onChange={this.handleChange}/>
               {this.state.pseudoError ? (
                 <div className="Font-color-red">Le pseudo doit contenir entre 2 et 20 caractères !</div>
                 ) :(
                 <div></div>
                 )
               }
             </label>

             <Margin size="Margin-xs"/>

             <label className="Width-full">
               <div className="Font-color-black Font-bold">Adresse e-mail</div>
               <input className="Width-full" type="email" name="signUpEmail" onChange={this.handleChange}/>
               {this.state.emailExist ? (
                 <div className="Font-color-red">Email déjà utilisé !!</div>
                 ) : (
                 <div></div>
                 )
               }
             </label>

             <Margin size="Margin-xs"/>

             <label className="Width-full">
               <div className="Font-color-black Font-bold">Password:</div>
               <input className="Width-full" type="password" name="signUpPassword" autocomplete="new-password" onChange={this.handleChange}/>
               {this.state.passwordError ? (
                 <div className="Font-color-red">Le password doit contenir entre 4 et 15 caractères !</div>
                 ) :(
                 <div></div>
                 )
               }
             </label>

             <Margin size="Margin-xl"/>

             {this.state.readyToFetch ? (
               <input type="submit" value="S'inscrire" className="Btn-form Width-full Btn-ok-sub Background-pink Font-color-white" />
               ) : (
               <Button type="button" class="Btn-no-sub Btn-block Btn-form Width-full Background-pink Font-color-white" content="S'inscrire"/>
               )
             }

          </form>
         )
       }
     </div>
    );
  }
}

export default FormSignUp;
