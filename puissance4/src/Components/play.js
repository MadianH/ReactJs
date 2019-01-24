import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';

// play: function(columnIndex) {
//     for (var r = 0; r < this.props.height; r++) {
//       if (this.state.plateau[r][columnIndex] == 0) {
//         // On construit une copie (deep copy) de la variable `plateau`.
//         // Cette façon de copier est correcte car on sait qu'il s'agit
//         // d'une liste de listes.
//         var newPlateau = this.state.plateau.map(function(x) {
//           return x.slice();
//         });
//         // On met à jour l'état.
//         newPlateau[r][columnIndex] = this.state.turn,
//         this.setState({
//           plateau: newPlateau,
//           turn: 3 - this.state.turn,
//         });
//         return r;
//       }
//     }
//     return false;
//   },


class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {

     };
  }



  render() {

    return (

    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    Reducer: function(plateau) {
        dispatch( {type: 'DataPlateau', DataPlateau: plateau } )
    }
  }
}

function mapStateToProps(props) {
  return { DataReducer: props }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Play);
