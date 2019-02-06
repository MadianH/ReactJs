export default function(turnPlayer = {currentPlayer: 1, nbPlayer: null}, action) {
  if(action.type === 'newCurrentPlayer') {
    let newCurrentPlayer = {...turnPlayer}
    if(newCurrentPlayer.currentPlayer === newCurrentPlayer.nbPlayer) {
      newCurrentPlayer.currentPlayer = 1
    } else {
      newCurrentPlayer.currentPlayer = newCurrentPlayer.currentPlayer + 1
    }
    return newCurrentPlayer
  } else if(action.type === 'nbPlayer') {
    let newNbPlayer = {...turnPlayer}
    newNbPlayer.nbPlayer = action.nbPlayer
    return newNbPlayer;
  } else{
    return turnPlayer ;
  }
}
