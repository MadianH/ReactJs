export default function(dataModal = {boolean: false}, action) {
  if(action.type === 'OpenModalSignIn') {
    let dataModalCopy = {...dataModal}
    dataModalCopy.boolean = action.boolean
    return dataModalCopy;
  } else if (action.type === 'CloseModalSignIn') {
      let dataModalCopy = {...dataModal}
      dataModalCopy.boolean = action.boolean
      return dataModalCopy;
  } else {
      return dataModal;
  }
}
