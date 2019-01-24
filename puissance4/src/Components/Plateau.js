import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';

import Row from './Row.js'

class Plateau extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plateau: [],
      row: 6,
      col: 7,
     };
  }

  componentWillMount(){
    for (var l = 0; l< this.state.row; l++) {
      this.state.plateau[l] = [];
      for (var c = 0; c < this.state.col; c++) {
        this.state.plateau[l][c] = 0;
      }
    }
    this.props.Reducer(this.state.plateau)
   }

  render() {
    var rowList = this.state.plateau.map(function(row, index){
      return <Row key={index} row={row} rowIndex={index} />
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
)(Plateau);
