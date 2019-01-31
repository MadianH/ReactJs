export default function(currentPlayer = {currentPlayer: 1, name:""}, action) {
  if(action.type === 'newGame') {
    console.log(action);
    return currentPlayer
  }
  else{
    return currentPlayer;
  }
}
