export default function(colIndex = null, action) {
  if(action.type === 'colIndex') {
    let newIndex = action.colIndex
    return newIndex
  }
  else{
    return colIndex;
  }
}
