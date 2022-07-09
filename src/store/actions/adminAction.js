import actionTypes from './actionTypes';
import { getAllCodes, createNewUserService, getAllUsers ,deleteUserSevice,getTopDoctorHome,getAllDoctor,createInfordoctor} from '../../services/userSevice'
import { toast } from "react-toastify";

// export const fetchGenderStart= () => ({
//     type: actionTypes.FETCH_GENDER_START
// });
export const fetchGenderStart =  () => {
    return  async(dispatch, getSate)=>
    {
          try {
        let res = await getAllCodes("gender");
              if (res && res.errCode === 0) {
                 
                  
            dispatch(fetchGenderSuccess(res.data));
        }
        else {
           dispatch(fetchGenderFail());
            
        }

       
    
    } catch (e) {
          dispatch(fetchGenderFail());
            
       console.log(' fetchGenderStartFail',e)
    
   }

    }
  
};
export const fetchPositionStart =  ( ) => {
    return  async(dispatch, getSate)=>
    {
          try {
        let res = await getAllCodes("POSITION");
              if (res && res.errCode === 0) {
            
                  
            dispatch(fetchPositionSuccess(res.data));
        }
        else {
           dispatch(fetchPositionFail());
            
        }

       
    
    } catch (e) {
          dispatch(fetchPositionFail());
            
       console.log(' fetchPostionStartFail',e)
    
   }

    }
  
};
export const fetchRolesStart =  ( ) => {
    return  async(dispatch, getSate)=>
    {
          try {
        let res = await getAllCodes("role");
              if (res && res.errCode === 0) {
                  console.log( res.data)
            
                  
            dispatch(fetchRolesSuccess(res.data));
        }
        else {
           dispatch(fetchRolesFail());
            
        }

       
    
    } catch (e) {
          dispatch(fetchRolesFail());
            
       console.log(' fetchRolesFail',e)
    
   }

    }
  
};
export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FECTCH_POSITION_SUCCESS,
    data:positionData
    
});
export const fetchPositionFail = () => ({
    type:actionTypes.FECTCH_POSITION_FAILS
    
});
export const fetchRolesSuccess = (rolesData) => ({
    type: actionTypes.FECTCH_ROLES_SUCCESS,
    data:rolesData
    
});
export const fetchRolesFail = () => ({
    type:actionTypes.FECTCH_ROLES_FAILS
    
});

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data:genderData
   
});
export const fetchGenderFail = (languageInput) => ({
    type: actionTypes.FETCH_GENDER_FAIL,
   
    
})

// SAVE USER
export const createNewUser =  (data ) => {
    return  async(dispatch, getSate)=>
    {
          try {
        let res = await createNewUserService(data);
              if (res && res.errCode === 0) {
                  toast.success("Create a new users success");
                  dispatch(saveUserSuccess(res.data));
                  dispatch(fetchAllUser());
        }
        else {
           dispatch(saveUserFail());
            
        }

       
    
    } catch (e) {
          dispatch(saveUserFail());
            
       console.log(' saveUserFail',e)
    
   }

    }
  
};
export const saveUserSuccess = () => ({
    type: actionTypes.SAVE_USER_SUCCESS,
    
});
export const saveUserFail = () => ({
    type:actionTypes.SAVE_USER_FAILED,
    
})
// LAYS USER 
export const fetchAllUser = () => {
     return  async(dispatch, getSate)=>
    {
         try {
            //  let user = await getTopDoctorHome(3)
            //  console.log('check user resppom doctor',user.data)
             
        let res = await getAllUsers("ALL");
              if (res && res.errCode === 0) {
                  
                 
            
                  
            dispatch(fetchAllUserSuccess(res.users.reverse()));
        }
        else {
           dispatch(fetchAllUserFailed());
            
        }

       
    
    } catch (e) {
          dispatch(fetchAllUserFailed());
            
       console.log(' fetchAllUserFailed',e)
    
   }

    }
    
}
export const fetchAllUserSuccess = (data) => ({
    type: actionTypes.FECTCH_ALL_USERS_SUCCESS,
    users:data
})
export const fetchAllUserFailed = () => ({
    type:actionTypes.FECTCH_ALL_USERS_FAILS
})
//Delete user
export const DeleteUser =  (userId) => {
    return  async(dispatch, getSate)=>
    {
          try {
          let resp = await deleteUserSevice(userId);
              if (resp && resp.errCode===0 ) {
                  toast.success("Create a new users success");
                  dispatch(DeleteUserSuccess());
                  dispatch(fetchAllUser());
        }
        else {
           dispatch(DeleteUserFails());
            
        }

       
    
    } catch (e) {
          dispatch(DeleteUserFails());
            
       console.log(' DeleteUserFails',e)
    
   }

    }
  
};
export const DeleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
})
export const DeleteUserFails = () => ({
    type: actionTypes.DELETE_USER_FAILS,
})
// load top doctor
export const fetchTopDoctor = () => {

    
 return  async(dispatch, getSate)=>
    {
     try {
         let res = await getTopDoctorHome('10');
         if (res.errCode === 0)
         {
             dispatch(fetchTopDoctorSuccess(res.data))
         }
         else
         {
             dispatch(fetchTopDoctorFails())
             }
         
            
       

       
    
     } catch (e) {
         dispatch(fetchTopDoctorFails())
          
       console.log(' DeleteUserFails',e)
    
   }

    }
}
export const fetchTopDoctorSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_DOCTOR_SUCCESS,
    data
    
})
export const fetchTopDoctorFails = () => ({
    type:actionTypes.FETCH_ALL_DOCTOR_SUCCESS,
})
//get all doctor
export const fetchAllDoctor = () => {

    
 return  async(dispatch, getSate)=>
    {
     try {
         let res = await getAllDoctor();
         console.log('check prop ', res.data)
         if (res.errCode === 0)
         {
             dispatch(fetchAllDoctorSuccess(res.data))
         }
         else
         {
             dispatch(fetchAllDoctorFails())
             }
         
            
       

       
    
     } catch (e) {
         dispatch(fetchAllDoctorFails())
          
       console.log(' fetchAllDoctorFails',e)
    
   }

    }
}
export const fetchAllDoctorSuccess = (data) => ({
    type: actionTypes.FETCH_DOCTOR_SUCCESS,
    data
    
})
export const fetchAllDoctorFails = () => ({
    type:actionTypes.FETCH_DOCTOR_FAILS,
})
export const createDoctorInfora = (data) => {

    
 return  async(dispatch, getSate)=>
    {
     try {
         let res = await createInfordoctor(data);
       
         if (res.errCode === 0)
         {
             dispatch(createDoctorInforSuccess(res.data))
         }
         else
         {
             dispatch(createDoctorInforFails())
             }
         
            
       

       
    
     } catch (e) {
         dispatch(createDoctorInforFails())
          
       console.log(' createDoctorInforFails',e)
    
   }

    }
}
export const createDoctorInforSuccess = (data) => ({
    type: actionTypes.SAVE_DOCTOR_INFOR_SUCCESS,
    data
})
export const createDoctorInforFails = () => ({
    type: actionTypes.SAVE_DOCTOR_INFOR_FAILED,
})
    

