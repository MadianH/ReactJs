export default function(Turn = null, action) {
  if(action.type === 'currentTurn') {
    let currentTurn = action.currentTurn
    console.log("current",currentTurn);
    return currentTurn
  }
  else if(action.type === 'newTurn') {
    let turnUpdate= action.currentTurn

    if(turnUpdate === 1){
      turnUpdate++
    }
    else if(turnUpdate === 2){
      turnUpdate--
    }
    let currentTurn = turnUpdate
    return currentTurn;
  }
  else{
    return Turn;
  }
}
