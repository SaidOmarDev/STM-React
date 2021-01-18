import TYPES from './types'

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case TYPES.AUTH_START:
            return {
                ...state,
                error: null,
                loading: true
            }
        case TYPES.AUTH_SUCCESS:
            return {
                ...state,
                token: action.idToken,
                userId: action.userId,
                error: null,
                loading: false
            }
        case TYPES.AUTH_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case TYPES.LOGOUT:
            return {
                ...state,
                token: null,
                userId: null
            }
        default:
            return state
    }
}