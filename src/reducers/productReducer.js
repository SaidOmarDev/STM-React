import TYPES from './types'

const initialState = {
    items: [],
    item: {}
};

export default function(state = initialState, action) { 
    switch(action.type){
        case TYPES.FETCH_PRODUCTS:
            return {
                ...state,
                items: action.payload
            };
        case TYPES.PRODUCT_DETAILS:
            return {
                ...state
            }
        default:
            return state;
    }
}