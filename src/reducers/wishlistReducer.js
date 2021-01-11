import TYPES from './types'

const initialState = {
    items: []
}

export default function(state = initialState, action){
    // let wishlist = state.items;
    switch(action.type){
        case TYPES.FETCH_WISHLIST:
            return {
                ...state,
                items: action.payload
            };
        case TYPES.ADD_TO_WISHLIST:
            // wishlist.push(action.payload.product)
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case TYPES.REMOVE_FROM_WISHLIST:
            return {
                ...state,
                items: state.items.filter(item => item.id != action.payload)
            };
        default:
            return state;
    }
}