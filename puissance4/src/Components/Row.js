import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';

import Jeton from './Jeton.js'


class Row extends Component {
  render(){
    var JetonList = this.props.row.map(function(i, index) {
      return <Jeton key={index} colIndex={index} />
    })
    return (<tr>{JetonList}</tr>)
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
  return { DataReducer: props.ReducPlateau }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Row);
