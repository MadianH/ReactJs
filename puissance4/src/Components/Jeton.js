import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';


class Jeton extends Component {
  handleClick= (index) =>{
  console.log(index);
  }

  render() {
    let couleur = [""]
    if(this.props.DataReducer.turn === 1){
      couleur.push("Joueur1")
    }else if(this.props.DataReducer.turn === 2){
      couleur.push("Joueur2")
    }
    return (
      <td className={couleur} onClick={() => this.handleClick(this.props.colIndex)}></td>
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
)(Jeton);
