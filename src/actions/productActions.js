import TYPES from '../reducers/types'
import axios from 'axios'

export function fetchProducts() { 
    return async function (dispatch) { 
        // fetch('http://localhost:3001/products')
        // .then(res => res.json())
        // .then(data => 
        //     dispatch({
        //         type: TYPES.FETCH_PRODUCT,
        //         payload: data
        //     })
        // )
        const {data} = await axios.get('http://localhost:3001/products');
        dispatch({
            type: TYPES.FETCH_PRODUCTS,
            payload: data
        })
    }
 }