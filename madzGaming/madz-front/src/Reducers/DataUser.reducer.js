export default function(DataUser = null, action) {
  if(action.type === 'UserData') {
    let DataUserCopy = {}
    DataUserCopy.id = action.DataUser.users[0]._id
    DataUserCopy.pseudo = action.DataUser.users[0].pseudo
    DataUserCopy.email = action.DataUser.users[0].email
    console.log(DataUserCopy);
    return DataUserCopy
  }
  else{
    return DataUser;
  }
}
