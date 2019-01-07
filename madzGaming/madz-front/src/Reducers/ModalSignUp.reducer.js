export default function(dataModalSignUp = {boolean: false}, action) {
  if(action.type === 'OpenModalSignUp') {
    console.log("ok");
    let dataModalSignUpCopy = {...dataModalSignUp}
    dataModalSignUpCopy.boolean = action.boolean
    return dataModalSignUpCopy;
  } else if (action.type === 'CloseModalSignUp') {
      let dataModalSignUpCopy = {...dataModalSignUp}
      dataModalSignUpCopy.boolean = action.boolean
      return dataModalSignUpCopy;
  } else {
      return dataModalSignUp;
  }
}
