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
        let newProduct = {...product, quantity: 1}
        const {data} = await axios.post('http://localhost:3001/cart', newProduct);
        dispatch({
            type: TYPES.ADD_TO_CART,
            payload: data
        })
    }
 }

 export function removeFromCart(productId) {
     return async function(dispatch){
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
       dispatch({
           type: TYPES.UPDATE_CART_QUANTITY,
           payload: {
               data,
               productId
           }
       })
    }
    
}