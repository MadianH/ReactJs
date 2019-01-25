import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';


class Jeton extends Component {
  handleClick= (colIndex) =>{
    this.props.handleClick(colIndex)
  }

  render() {


    let couleur = ""
    if(this.props.row === 0){
      couleur = "vide"
    }else if(this.props.row === 1){
      couleur = "joueur1"
    }else if(this.props.row === 2){
      couleur = "joueur2"
    }
    
    return (
      <td className={couleur} onClick={() => this.handleClick(this.props.colIndex)}></td>
    );
  }
}

export default Jeton;
// function mapDispatchToProps(dispatch) {
//   return {
//     reducerCurrentTurn: function(currentTurn) {
//         dispatch( {type: 'newTurn', currentTurn: currentTurn} )
//     },
//     reduceurIndex: function(colIndex) {
//         dispatch( {type: 'colIndex', colIndex: colIndex} )
//     }
//   }
// }
//
// function mapStateToProps(props) {
//   return { currentTurn: props.TurnReduceur }
// }
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Jeton);
