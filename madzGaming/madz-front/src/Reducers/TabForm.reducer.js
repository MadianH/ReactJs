export default function(dataTabForm = {result: true}, action) {
  if(action.type === 'TabIsOpen') {
    let dataTabFormCopy = {...action}
    return dataTabFormCopy;
  }else {
    return dataTabForm;
  }
}
