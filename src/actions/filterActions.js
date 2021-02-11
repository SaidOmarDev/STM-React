import axios from 'axios';
import TYPES from '../reducers/types';

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
export function fetchCategories() { 
    return async function (dispatch) { 
        await axios.post('http://stm.4soft-eg.com/api/getCategories', {
            api_token: 'rjdClHuZg7dVRXsmOzrdVgQfJEiOriI7E5hdLFoT1j2AJij38FKqlhnOQmdhgc0U',
            lang: 'en'
        }).then(response => {
            console.log(response);
            dispatch({
                type: TYPES.FETCH_CATEGORIES,
                payload: response.data.category
            })
        })
    }
}