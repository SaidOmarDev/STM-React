import TYPES from '../reducers/types'
import axios from 'axios'

export function fetchOrders(apiToken, page){
    return async function (dispatch){

        const {data} = await axios.post('https://stm-react-default-rtdb.firebaseio.com/orders.json', order);
        dispatch({
            type: TYPES.FETCH_ORDERS,
            payload: data
        })
    }
}
export function orderDetails(apiToken, orderId){
    return async function (dispatch){
        
        const {data} = await axios.post('https://stm-react-default-rtdb.firebaseio.com/orders.json', order);
        dispatch({
            type: TYPES.ORDER_DETAILS,
            payload: data
        })
    }
}
export function makeOrder(apiToken, addressID, paymentType, promoCodeId = null){
    return async function (dispatch){
        
        const {data} = await axios.post('https://stm-react-default-rtdb.firebaseio.com/orders.json', order);
        dispatch({
            type: TYPES.CREAT_ORDER,
            payload: data
        })
    }
}