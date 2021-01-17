import TYPES from '../reducers/types'
import axios from 'axios'

export function authStart() { 
    return function (dispatch) { 
        dispatch({
            type: TYPES.AUTH_START
        })
    }
 }
 export function authSuccess(token, userId) { 
    return function (dispatch) { 
        dispatch({
            type: TYPES.AUTH_SUCCESS,
            idToken: token,
            userId: userId
        })
    }
 }
 export function authFail(error) { 
    return function (dispatch) { 
        dispatch({
            type: TYPES.AUTH_FAIL,
            error: error
        })
    }
 }
 export function auth(email, password, isRegister) { 
     return function (dispatch) { 
         dispatch(authStart())
         let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAVN68TYqHIuqc7pNW7G08VVer7Mjk8wCE'
         if(!isRegister){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAVN68TYqHIuqc7pNW7G08VVer7Mjk8wCE'
         }
         const authData = {
             email: email,
             password: password,
             returnSecureToken: true
         }
        axios.post(url, authData)
         .then(response =>{
            //  console.log(response);
             dispatch(authSuccess(response.data.idToken, response.data.localId))
             
         })
         .catch(err=>{
            //  console.log(err.response.data.error);
             dispatch(authFail(err.response.data.error))
         })
    }
 }
