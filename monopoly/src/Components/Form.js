import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';

import Input from './Input';
import Button from './Button'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: '',
      player2: '',
      player3: '',
      player4: '',
      player5: '',
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
    let stateMirror = []
    let players = []
    for(var property in this.state){
      stateMirror.push(this.state[property])
    }

    for(let i = 0; i < this.props.nbPlayer; i++){
      players.push(stateMirror[i])
    }
    this.props.ReduceurPlayers(players)
  }

  createTab = (integer) => {
    let tab = []
    for(let i = 0; i < integer; i++){
      tab.push("")
    }
    return tab
  }

  render() {

    let tab = this.createTab(this.props.nbPlayer)
    let inputList = tab.map((item, index) => {
      return <Input key={index} index={index + 1} handleChange={this.handleChange}/>
    })
    return (
      <div>
      <form className="">
        {inputList}
      </form>

      <Link to="/Board"><Button link={false} type={"button"} content={"Valider"} parent={"Form"} handleSubmit={this.handleSubmit} /></Link>
      </div>
   );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ReduceurPlayers: function(players) {
      dispatch({type: 'newPlayers', players: players})
    },
  }
}

const mapStateToProps = (props) => {
  return {nbPlayer: props.CurrentPlayer.nbPlayer}
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
