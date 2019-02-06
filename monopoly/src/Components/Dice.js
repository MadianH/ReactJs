import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../App.css';

import Button from './Button'

class Dice extends Component {

  throwing = (min, max) => {
    let newResult;
    min = Math.ceil(min);
    max = Math.floor(max);
    newResult = Math.floor(Math.random() * (max - min)) + min;
    this.props.ReduceurDice(newResult)
    this.props.ReduceurCurrentPlayer()
  }

  render() {

    return (
      <div className="">
        {this.props.dice}
        <Button link={false} type={"button"} content={"Lancer les dés"} parent={"Dice"} handleClick={this.throwing} />
      </div>
   );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ReduceurDice: function(result) {
      dispatch({type: 'throwing', result: result})
    },
    ReduceurCurrentPlayer: function() {
      dispatch({type: 'newCurrentPlayer'})
    }
  }
}

const mapStateToProps = (props) => {
  return {dice: props.Dice}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dice);
