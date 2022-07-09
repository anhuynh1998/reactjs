import axios from "../axios";
const handleLogin = ( email, password ) => {
  return axios.post( '/api/login', { email, password } );
};

const getAllUsers = ( inputId ) => {
  //teamplate string
  return axios.get( `/api/get-all-users?id=${ inputId }` )
}
const createNewUserService = ( data ) => {

  return axios.post( '/api/create-new-users', data )

}
const deleteUserSevice = ( UserId ) => {
  axios.delete( '/api/delete-users', {
    //   headers: {
    //     Authorization: authorizationToken
    //   },
    data: {
      id: UserId
    }
  } );

}
const editUserSevice = ( inputData ) => {
  return axios.put( 'api/edit-users', inputData );
}
const getAllCodes = ( inputType ) => {
  return axios.get( `api/get-all-codes?type=${ inputType }` );
}
const getTopDoctorHome = ( limit ) => {
  return axios.get( `api/get-top-doctor?limit=${ limit }` )
}
const getAllDoctor = () => {
  return axios.get( `api/get-all-doctor` )
}
const createInfordoctor = ( inputData ) => {
  return axios.post( 'api/create-infor-doctor', inputData );
}
const getDetailDoctor = ( inputId ) => {
  return axios.get( `api/get-detail-infor-doctor?id=${ inputId }` );
}
export {
  handleLogin
  , getAllUsers,
  createNewUserService,
  deleteUserSevice,
  editUserSevice,
  getAllCodes,
  getTopDoctorHome,
  getAllDoctor,
  createInfordoctor,
  getDetailDoctor

}