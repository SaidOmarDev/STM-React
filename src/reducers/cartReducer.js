import TYPES from './types'

const initialState = {
    items: []
};

export default function(state = initialState, action) { 
    switch(action.type){
        case TYPES.FETCH_CART:
            return {
                ...state,
                items: action.payload
            };
        case TYPES.ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case TYPES.REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item.id != action.payload)
            };
        case TYPES.UPDATE_CART_QUANTITY:
            let product = state.items.find(item => item.id === action.payload.productId);
            let index = state.items.indexOf(product)
            state.items.splice(index, 1, action.payload.data);
            return {
                ...state,
                items: [...state.items]
            };
        default:
            return state;
    }
}