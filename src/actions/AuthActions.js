import TYPES from '../reducers/types'
import axios from 'axios'

export function authStart() { 
    return function (dispatch) { 
        dispatch({
            type: TYPES.AUTH_START
        })
    }
 }
 export function authSuccess(token, phone) { 
    return function (dispatch) { 
        dispatch({
            type: TYPES.AUTH_SUCCESS,
            idToken: token,
            phone: phone
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
     return async function (dispatch) { 
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
         await axios.post(url, authData)
         .then(response =>{
             console.log(response);
            localStorage.setItem('apiToken', response.data.idToken)
             dispatch(authSuccess(response.data.idToken, response.data.localId))
         })
         .catch(err=>{
             dispatch(authFail(err))
         })
        // axios.post('http://stm.4soft-eg.com/api/login', authData)
        //  .then(response =>{
        //      console.log(response);
        //      console.log(response.data.driver.apiToken+' , '+ response.data.driver.phone);
        //      dispatch(authSuccess(response.data.driver.apiToken, response.data.driver.phone))
             
        //  })
        //  .catch(err=>{
        //     //  console.log(err.response.data.error);
        //      dispatch(authFail(err))
        //  })
    }
 }
 export function logout(){
     return function (dispatch){
         localStorage.removeItem('apiToken')
         dispatch({
             type: TYPES.LOGOUT
         })
     }
 }
