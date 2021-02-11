import TYPES from './types'

const initialState = {
    lang: ''
}

export default function (state = initialState, action){
    switch(action.type){
        case TYPES.CHANGE_LANG:
            return {
                ...state,
                lang: action.lang
            }
        default:
            return state
    }
}