import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../App.css';

import Row from './Row'
import Dashboard from './Dashboard'

const initBoard = () => {
  let row = 4;
  let square;
  let board = []
  for(let r = 0; r < row; r++){
    board[r] = []
    if(r === 0 || r === 2){
      square = 10
    } else {
      square = 9
    }
    for(let s = 0; s < square; s++){
      board[r][s] = [s]
    }
  }
  return board
}

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: initBoard()
    };
  }

  render() {
    console.log(this.state.board);
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
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
