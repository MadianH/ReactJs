export default function(dice = 0, action) {
  if(action.type === 'throwing') {
    let newDice;
    newDice = action.result
    return newDice
  } else{
    return dice
  }
}
