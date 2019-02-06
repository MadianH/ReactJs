import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../App.css';

import Row from './Row'
import Dashboard from './Dashboard'

const initBoard = (players) => {
  let row = 4;
  let square;
  let board = []
  let nbPlayers = players.length
  for(let r = 0; r < row; r++){
    board[r] = []
    if(r === 0 || r === 2){
      square = 10
    } else {
      square = 9
    }
    for(let s = 0; s < square; s++){
      board[r][s] = []
      if(r === 2 && s === 9) {
        for(let p = 0; p < nbPlayers; p++) {
          board[r][s].push(`p${p+1}`)
        }
      }
    }
  }
  return board
}

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: initBoard(this.props.players)
    };
  }

  componentDidUpdate(prevProps) {
    if(this.props.dice != prevProps.dice) {
      let result = this.props.dice
      let newBoard = [...this.state.board]


        for(let r = 0; r < 4; r++) {
          for(let s = 0; s < newBoard[r].length; s++) {
            console.log(newBoard[r][s].length);

          }
        }

    }
  }

  render() {
    return(
      <div className="board">
        <Row row={this.state.board[0]} index={0}/>
        <div className="middleBoard flex flex-row justify-spaceBetween">
          <Row row={this.state.board[3]} index={3}/>
          <div className="dashboard"><Dashboard /></div>
          <Row row={this.state.board[1]} index={1}/>
        </div>
        <Row row={this.state.board[2]} index={2}/>
      </div>
   );
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    ReduceurNbPlayer: function(nbPlayer) {
      dispatch({type: 'nbPlayer', nbPlayer: nbPlayer})
    }
  }
}

const mapStateToProps = (props) => {
  return {
    players: props.Players.players,
    dice: props.Dice,
    currentPlayer: props.CurrentPlayer.currentPlayer
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
