import TYPES from '../reducers/types'
import axios from 'axios'

export function authStart() { 
    return function (dispatch) { 
        dispatch({
            type: TYPES.AUTH_START
        })
    }
 }
 export function authSuccess(token, userid) { 
    return function (dispatch) { 
        dispatch({
            type: TYPES.AUTH_SUCCESS,
            idToken: token,
            userid: userid
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
 export function auth(values, isRegister) { 
     return function (dispatch) { 
         dispatch(authStart())
         let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAVN68TYqHIuqc7pNW7G08VVer7Mjk8wCE'
         if(!isRegister){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAVN68TYqHIuqc7pNW7G08VVer7Mjk8wCE'
         }
         const authData = { 
            email: values.email,
            password: values.password,
            returnSecureToken: true
        }
       axios.post(url, authData)
        .then(response =>{
            console.log(response);
            // console.log(response.data.driver.apiToken+' , '+ response.data.driver.phone);
            dispatch(authSuccess(response.data.idToken, response.data.localId))
            
        })
        .catch(err=>{
            console.log(err.response.data.error);
            dispatch(authFail(err))
        })
        // let url ='';
        // let authData = {}
        // if(isRegister){
        //     url = 'http://stm.4soft-eg.com/api/register'
        //     authData = {
        //         name: values.fullName,
        //         phone: values.phone,
        //         email: values.email,
        //         city: values.city,
        //         password: values.password,
        //         lang: 'en'
        //     }
        // }else{
        //     url = 'http://stm.4soft-eg.com/api/login'
        //     authData = {
        //         phone: '01030222791',
        //         password: '123456789',
        //         // lang: 'en'
        //     }
        // }
        // axios.post(url, authData)
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
         dispatch({
             type: TYPES.LOGOUT
         })
     }
 }
