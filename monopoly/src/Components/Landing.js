import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App.css';


import Button from './Button'
import Form from './Form'


const nbPlayer = ["2 joueurs", "3 joueurs", "4 joueurs", "5 joueurs"];

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: false,
    };
  }

  handleClick = (index) => {
    this.props.ReduceurPlayers(index + 2)
    this.setState({step: true})
  }

  render() {
    let nbPlayerButton = nbPlayer.map((player, index) => {
      return <Button key={index} index={index} link={false} type={"button"} content={player} parent={"Landing"} handleClick={this.handleClick} />
    })
    return (
      <div id="landing">
        {this.state.step
          ?(
            <div>
              <h3>Entrez vos prénoms :</h3>
              <Form />
            </div>
          )
          :(
            <div>
              <h1>Bienvenue sur Monopoly online</h1>
              <h3> A combien de joueurs voulez vous jouer ?</h3>
              {nbPlayerButton}
            </div>
          )
        }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ReduceurPlayers: function(nbPlayer) {
      dispatch({type: 'nbPlayer', nbPlayer: nbPlayer})
    }
  }
}

export default connect(null, mapDispatchToProps)(Landing);
