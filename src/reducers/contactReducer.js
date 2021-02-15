import TYPES from './types'

const initialState = {

}

export default function(state = initialState, action){
    switch(action.type){
        case TYPES.SEND_MESSAGE:
            return {
                ...state
            }
        default:
            return state
    }
}