export default function(players = {nbPlayer: 0, name:""}, action) {
  if(action.type === 'nbPlayer') {
    let newNbPlayer = {...players}
    newNbPlayer.nbPlayer = action.nbPlayer
    return newNbPlayer
  } else if (action.type === 'newPlayers') {
    let newPlayers = {...players}
    newPlayers.name = action.players
    return newPlayers
  } else {
    return players;
  }
}
