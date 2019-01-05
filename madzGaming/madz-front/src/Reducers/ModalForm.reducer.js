export default function(dataModal = {boolean: false}, action) {
  if(action.type === 'OpenModal') {
    let dataModalCopy = {...dataModal}
    dataModalCopy.boolean = action.boolean
    console.log("reducer", dataModalCopy);
    return dataModalCopy;
  } else if (action.type === 'closeModal') {
    console.log(dataModalCopy2);
    let dataModalCopy2 = {...action}
    return dataModalCopy2;
  } else {
    return dataModal;
  }
}
