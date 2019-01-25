import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';

import Jeton from './Jeton.js'


class Row extends Component {
  render(){
    var handleClick = this.props.handleClick;
    var JetonList = this.props.row.map(function(row, index) {
      return <Jeton key={index} colIndex={index} handleClick={handleClick} row={row}/>
    })
    return (<tr>{JetonList}</tr>)
  }
}

export default Row;

// function mapDispatchToProps(dispatch) {
//   return {
//     Reducer: function(plateau) {
//         dispatch( {type: 'DataPlateau', DataPlateau: plateau } )
//     }
//   }
// }
//
// function mapStateToProps(props) {
//   return { DataReducer: props.ReducPlateau }
// }
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Row);
