import TYPES from '../reducers/types'
import axios from 'axios'

export function createOrder(order){
    return async function (dispatch){
        
        const {data} = await axios.post('https://stm-react-default-rtdb.firebaseio.com/orders.json', order);
        dispatch({
            type: TYPES.CREAT_ORDER,
            payload: data
        })
    }
}