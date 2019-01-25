import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';

import Row from './Row.js'

var initPlateau = (row, col) =>{
  let plateau = []
  for (var r = 0; r < row; r++) {
    plateau[r] = [];
    for (var c = 0; c < col; c++) {
      plateau[r][c] = 0;
    }
  }
  return plateau
}


class Plateau extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plateau: initPlateau(this.props.row, this.props.col),
      turn: 1,
     };
   }


   play = (columnIndex) => {

        for (var r = 0; r < this.props.row; r++) {
            if (this.state.plateau[r][columnIndex] == 0) {
              console.log(this.state.plateau[r][columnIndex]);
                // On construit une copie (deep copy) de la variable `plateau`.
                // Cette façon de copier est correcte car on sait qu'il s'agit
                // d'une liste de listes.
                var newPlateau = this.state.plateau.map(function (x) {
                    return x.slice();
                });
                // On met à jour l'état.
                newPlateau[r][columnIndex] = this.state.turn
                this.setState({
                  plateau: newPlateau,
                  turn: 3 - this.state.turn,
               });
               // console.log(r);
               // return r;
           }
       }
       // return false;
   }


  render() {

    var handleClick = this.play
    var rowList = this.state.plateau.map(function(row, index){
      return <Row key={index} row={row} rowIndex={index} handleClick={handleClick} />
    })
    return (
     <table className="Plateau">
       <tbody>
        {rowList}
       </tbody>
     </table>
    );
  }
}

Plateau.defaultProps = {
  row: 6,
  col: 7,
  };

export default Plateau;


// function mapDispatchToProps(dispatch) {
//   return {
//     Reducer: function(turn) {
//         dispatch( {type: 'currentTurn', currentTurn: turn} )
//     }
//   }
// }
//
// function mapStateToProps(props) {
//   return { newTurn: props.TurnReduceur, colIndex: props.IndexReduceur }
// }
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Plateau);
