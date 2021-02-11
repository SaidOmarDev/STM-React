import TYPES from './types'

const initialState = {

}

export default function (state = initialState, action){
    switch(action.type){
        case TYPES.MAKE_ORDER:
            return {
                ...state
            }
        case TYPES.FETCH_ORDERS:
            return {
                ...state
            }
        case TYPES.ORDER_DETAILS:
            return {
                ...state
            }
        default:
            return state
    }
}