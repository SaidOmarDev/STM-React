import TYPES from '../reducers/types'
import axios from 'axios'

export function fetchCart() { 
    return async function (dispatch) { 
        const {data} = await axios.get('https://stm-react-default-rtdb.firebaseio.com/cart.json');
        console.log(data);
        dispatch({
            type: TYPES.FETCH_CART,
            payload: data
        })
    }
}

export function addStart() { 
    return async function (dispatch) {
        dispatch({
            type: TYPES.ADD_START
        })
    }
}
export function addSuccess(product) {
    return function (dispatch) {
        dispatch({
            type: TYPES.ADD_SUCCESS,
            product: product
        })
    }
}
export function addToCart(product) { 
    return async function (dispatch) {
        dispatch(addStart())
        let newProduct = {...product, quantity: 1}
        await axios.post('https://stm-react-default-rtdb.firebaseio.com/cart', newProduct)
        .then(response => {
            console.log(response);
            dispatch(addSuccess(response.data))
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export function removeFromCart(productId) {
    return async function(dispatch){
        const {data} = await axios.delete('https://stm-react-default-rtdb.firebaseio.com/cart/'+ productId);
        dispatch({
            type: TYPES.REMOVE_FROM_CART,
            payload: productId
        })
    }
     
}

export function updateCartQuantity(productId, quantity) {
    return async function(dispatch){
        const {data} = await axios.patch('https://stm-react-default-rtdb.firebaseio.com/cart/'+ productId, {"quantity": quantity})
        dispatch({
            type: TYPES.UPDATE_CART_QUANTITY,
            payload: {
                data,
                productId
            }
        })
    }
    
}