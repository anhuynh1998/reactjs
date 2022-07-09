import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import actionTypes from '../actions/actionTypes';

const initialState = {
    genders: [],
    roles: [],
    positions: [],
    users: [],
    topdoctor: [],
    alldoctor:[]
    
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            return {
                ...state,

                
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            let copyState = { ...state }
            copyState.genders = action.data;

            return {
              ...copyState 
                
                
            }
        case actionTypes.FETCH_GENDER_FAIL:
            return {
                ...state,
                
                
            }
        case actionTypes.FETCH_POSITION_START:
            return {
                ...state,

                
            }
        case actionTypes.FECTCH_POSITION_SUCCESS:
            let positionState = { ...state }
            positionState.positions = action.data;

            return {
              ...positionState,
                
                
            }
        case actionTypes.FECTCH_POSITION_FAILS:
            return {
                ...state,
                
                
            }
        case actionTypes.FETCH_ROLES_START:
            return {
                ...state,

                
            }
        case actionTypes.FECTCH_ROLES_SUCCESS:
            let roleState = { ...state }
            roleState.roles = action.data;

            return {
              ...roleState,
                
                
            }
        case actionTypes.FECTCH_ROLES_FAILS:
            return {
                ...state,
                
                
            }
        // get all user 
        case actionTypes.FECTCH_ALL_USERS_SUCCESS:
            state.users=action.users
            return {
                ...state
                
            }
        case actionTypes.FECTCH_ALL_USERS_FAILS:
            state.users = [];
            return {
                ...state
                
            }
        //load yop doctor
        case actionTypes.FETCH_ALL_DOCTOR_SUCCESS:
            state.topdoctor=action.data
            return {
                ...state
                
            }
        case actionTypes.FETCH_ALL_DOCTOR_FAILS:
            state.topdoctor = [];
            return {
                ...state
                
            }
        //get alldoctor
        case actionTypes.FETCH_DOCTOR_SUCCESS:
            state.alldoctor=action.data
            return {
                ...state
                
            }
        case actionTypes.FETCH_DOCTOR_FAILS:
            state.alldoctor = [];
            return {
                ...state
                
            }
        
        
         
        default:
            return state;
    }
}



export default adminReducer;