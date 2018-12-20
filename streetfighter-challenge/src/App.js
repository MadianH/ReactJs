import React, { Component } from 'react';

class App extends Component {

  constructor(){
    super();
    this.playerSelected= this.playerSelected.bind(this)
    this.state = {currentPlayer: 1, playerOneSelected:null,  playerTwoSelected:null}
  }

  playerSelected(perso) {
    if(this.state.currentPlayer == 1) {
      this.setState({
        currentPlayer : 2,
        playerOneSelected: perso,
      })
    } else if(this.state.currentPlayer == 2){
      this.setState({
        currentPlayer : null,
        playerTwoSelected: perso,
      })
    }
  }

  render() {


    var playerOne;
    if(this.state.playerOneSelected) {
      console.log("@@@@@",this.state.playerOneSelected.name);
      playerOne = <Player name={this.state.playerOneSelected.name} player={this.state.currentPlayer} url={this.state.playerOneSelected.urlL} picto='../images/1p.jpg'  />
    }

    var playerTwo;
    if(this.state.playerTwoSelected) {
      console.log("@@@@@",this.state.playerTwoSelected.name);
      playerTwo = <Player name={this.state.playerTwoSelected.name} player={this.state.currentPlayer} url={this.state.playerTwoSelected.urlL} picto='../images/2p.jpg'/>
    }

    var dataPlayer = [{name: 'Blanka', url: '../images/players/tiny/blanka.jpg', urlL: '../images/players/large/blanka.jpg'},
                      {name: 'Chun-li', url:'../images/players/tiny/chun-li.jpg', urlL: '../images/players/large/chun-li.jpg'},
                      {name: 'Dhalsim', url:'../images/players/tiny/dhalsim.jpg', urlL: '../images/players/large/dhalsim.jpg'},
                      {name: 'Guile', url:'../images/players/tiny/guile.jpg', urlL: '../images/players/large/guile.jpg'},
                      {name: 'Honda', url:'../images/players/tiny/honda.jpg', urlL: '../images/players/large/honda.jpg'},
                      {name: 'Ken', url:'../images/players/tiny/ken.jpg', urlL: '../images/players/large/ken.jpg'},
                      {name: 'Ryu', url:'../images/players/tiny/ryu.jpg', urlL: '../images/players/large/ryu.jpg'},
                      {name: 'Zangief', url:'../images/players/tiny/zangief.jpg', urlL: '../images/players/large/zangief.jpg'},
                     ]
    var playerSelected = this.playerSelected
    var playerList = dataPlayer.map(function(player, i){
      return <PlayerPicto playerSelectedParent={playerSelected} name={player.name} img={player.url} imgL={player.urlL} />
    })
    return (

      <div style={{marginTop:'50px', display:'flex', justifyContent:'center'}}>

        <div style={{width:'200px'}}>
          {playerOne}
        </div>
        <div style={{width:'200px', marginLeft:'50px', marginRight:'50px', display:'flex', alignItems: 'center', flexDirection: 'column'}}>
          <img style={{width: '100%', paddingBottom: '50px'}} src="./images/player-select.jpg" />

          <div style={{cursor: 'pointer', width: '100%', display:'flex', flexDirection: 'column'}}>
            <div style={{display:'flex', height: '53px'}}>
              {playerList}
            </div>
            <div style={{display:'flex', height: '53px'}}>

            </div>
          </div>
        </div>
        <div style={{width:'200px'}}>
          {playerTwo}
        </div>
      </div>
    );
  }
}

class PlayerPicto extends Component {
  constructor(){
    super();
    this.clickSelected=this.clickSelected.bind(this)
    this.state = {selected: null}
  }


  clickSelected(){
    this.setState({
      selected: true,
    })
    var perso = {name: this.props.name, url: this.props.img, urlL: this.props.imgL}
    this.props.playerSelectedParent(perso)
  }

  render() {

    return (
      <div style={{width: '25%', position:'relative'}}>
        <img style={{width: '101%', position:'absolute', top:'-5px'}} src="" />
        <img onClick={this.clickSelected} style={{width: '100%'}} src={this.props.img} />
      </div>
    )
  }
}

class Player extends Component {

  render() {

    return (
      <div style={{display:'flex', alignItems: 'center', flexDirection: 'column'}}>
        <img style={{width: '40%'}} src={this.props.picto} />
        <img style={{width: '100%'}} src={this.props.url} />
      </div>
    )
  }
}


export default App;
