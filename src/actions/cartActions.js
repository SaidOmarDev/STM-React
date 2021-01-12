import TYPES from '../reducers/types'
import axios from 'axios'

export function fetchCart() { 
    return async function (dispatch) { 
        const {data} = await axios.get('http://localhost:3001/cart');
        dispatch({
            type: TYPES.FETCH_CART,
            payload: data
        })
    }
 }

export function addToCart(product) { 
    return async function (dispatch) {
        // fetch('http://localhost:3001/cart',{
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json",
        //         'Accept': 'application/json'
        //     },
        //     body: JSON.stringify(product)
        // })
        // .then(res => res.json())
        // .then(data => 
        //     dispatch({
        //         type: TYPES.ADD_TO_CART,
        //         payload: data
        //     })
        // )
        const {data} = await axios.post('http://localhost:3001/cart', product);
        // console.log(data);
        dispatch({
            type: TYPES.ADD_TO_CART,
            payload: data
        })
    }
 }

 export function removeFromCart(productId) {
     return async function(dispatch){
        // fetch('http://localhost:3001/cart/'+productId, {method: "DELETE"})
        // .then(res => res.json())
        // .then(data => 
        //     dispatch({
        //         type: TYPES.ADD_TO_CART,
        //         payload: data
        //     })
        // )
        const {data} = await axios.delete('http://localhost:3001/cart/'+ productId);
        dispatch({
            type: TYPES.REMOVE_FROM_CART,
            payload: productId
        })
     }
     
 }

 export function updateCartQuantity(productId, quantity) {
    return async function(dispatch){
        const {data} = await axios.patch('http://localhost:3001/cart/'+ productId, {"quantity": quantity})
        console.log(data);
       dispatch({
           type: TYPES.UPDATE_CART_QUANTITY,
           payload: {
               data,
               productId
           }
       })
    }
    
}