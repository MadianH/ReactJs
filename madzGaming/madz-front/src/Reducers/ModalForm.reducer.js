export default function(dataModal = {boolean: false}, action) {
  if(action.type === 'OpenModal') {
    let dataModalCopy = {...dataModal}
    dataModalCopy.boolean = action.boolean
    return dataModalCopy;
  } else if (action.type === 'CloseModal') {
    let dataModalCopy = {...dataModal}
    dataModalCopy.boolean = action.boolean
    return dataModalCopy;
  } else {
    return dataModal;
  }
}
