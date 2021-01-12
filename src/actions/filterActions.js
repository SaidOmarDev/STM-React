import TYPES from '../reducers/types'
// import axios from 'axios'

export function filterProducts(products, category) { 
    return async function (dispatch) { 
        console.log(category);
        dispatch({
            type: TYPES.FILTER_WITH_CATEGORY,
            payload: {
                products: products,
                category: category
            }
        })
    }
 }