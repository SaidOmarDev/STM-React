import TYPES from './types'
// import {useSelector} from 'react-redux'

const initialState = {
    items: [],
    // filteredItems: [],
    // categories: []
};

export default function(state = initialState, action) { 
    // console.log(action.payload);
    // state.items = action.payload.products
    switch(action.type){
        case TYPES.FILTER_WITH_CATEGORY:
            let filteredProducts = action.payload.products.filter(item => item.category === action.payload.category)
            // console.log(filteredProducts);
            return {
                ...state,
                items: filteredProducts
            };
        default:
            return state;
    }
}