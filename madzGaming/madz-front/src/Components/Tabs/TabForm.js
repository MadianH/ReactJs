import React from "react";
import {connect} from 'react-redux';

import FormSignIn from '../Forms/FormSignIn.js';
import FormSignUp from '../Forms/FormSignUp.js';


class TabsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }


  handleTab = (tab) =>{
    let result = false;

    if(tab === true){
      result = true
    }else if(tab === false){
      result = false
    }
    this.props.functionTabIsOpen(result)
  }


render() {
  let titleCoClass = ["Margin-xxs title-tab-form"]
  let titleSubClass = ["Margin-xxs title-tab-form"]
    if(this.props.PropsTabIsOpen.result){
      titleCoClass.push("Font-color-black Underline")
      titleSubClass.push("Font-color-pink")
    }else if(!this.props.PropsTabIsOpen.result){
      titleSubClass.push("Font-color-black Underline")
      titleCoClass.push("Font-color-pink")
    }
  return (
    <div>
      <div>
        {this.props.PropsTabIsOpen.result ?(
          <div className="Font-color-black Font-bold Flex-row Justify-content-center Sign-form-title">Se connecter à Madz Company</div>
        ) : (
          <div className="Font-color-black Font-bold Flex-row Justify-content-center Sign-form-title">Rejoins Madz Company aujourd'hui</div>
        )
        }
      </div>
      <div>
        <span className={titleCoClass.join(" ")} onClick={() => this.handleTab(true)}>Se connecter</span>
        <span className={titleSubClass.join(" ")} onClick={() => this.handleTab(false)}>S'inscrire</span>
      </div>
      {this.props.PropsTabIsOpen.result ?(
        <FormSignIn />
      ) : (
        <FormSignUp/>
      )
      }
    </div>

    );
  }
}

function mapStateToProps(state) {
  return { PropsTabIsOpen: state.TabForm }
}

function mapDispatchToProps(dispatch) {
  return {
    functionTabIsOpen: function(result) {
        dispatch( {type: 'TabIsOpen', result: result} )
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TabsForm);
