import axios from 'axios';
import TYPES from '../reducers/types'

export function fetchWishlist() { 
    return async function (dispatch) { 
        const {data} = await axios.get('http://localhost:3001/wishlist');
        dispatch({
            type: TYPES.FETCH_WISHLIST,
            payload: data
        })
    }
 }

export function addToWishlist(product){
    return async function(dispatch){
        const {data} = await axios.post('http://localhost:3001/wishlist', product);
        console.log(data);
        dispatch({
            type: TYPES.ADD_TO_WISHLIST,
            payload: data
        })
    }
}
export function removeFromWishlist(productId){
    return async function(dispatch){
        const {data} = await axios.delete('http://localhost:3001/wishlist/'+productId);
        dispatch({
            type: TYPES.REMOVE_FROM_WISHLIST,
            payload: productId
        })
    }
}