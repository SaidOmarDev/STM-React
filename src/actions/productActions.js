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
        // await axios.post('http://stm.4soft-eg.com/api/getProducts', {
        //     api_token: 'rjdClHuZg7dVRXsmOzrdVgQfJEiOriI7E5hdLFoT1j2AJij38FKqlhnOQmdhgc0U',
        //     category_id: 3,
        //     lang: 'en',
        //     page: 1
        // }).then(response => {
        //     console.log(response);
        //     dispatch({
        //         type: TYPES.FETCH_PRODUCTS,
        //         payload: response.data.product
        //     })
        // }).catch(err => {
        //     console.log(err);
        // })
    }
 }