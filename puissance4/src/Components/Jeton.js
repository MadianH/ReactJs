import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';


class Jeton extends Component {
  handleClick= (colIndex) =>{
    this.props.reducerCurrentTurn(this.props.currentTurn)
    this.props.reduceurIndex(colIndex)
  }

  render() {
    // console.log("jeton",this.props.currentTurn);

    let couleur = [""]
    if(this.props.currentTurn === 1){
      couleur.push("Joueur1")
    }else if(this.props.currentTurn === 2){
      couleur.push("Joueur2")
    }
    return (
      <td className={couleur.join(" ")} onClick={() => this.handleClick(this.props.colIndex)}></td>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    reducerCurrentTurn: function(currentTurn) {
        dispatch( {type: 'newTurn', currentTurn: currentTurn} )
    },
    reduceurIndex: function(colIndex) {
        dispatch( {type: 'colIndex', colIndex: colIndex} )
    }
  }
}

function mapStateToProps(props) {
  return { currentTurn: props.TurnReduceur }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Jeton);
