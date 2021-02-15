import TYPES from '../reducers/types'
import axios from 'axios'

export function sendMessage(token, values){
    return function (dispatch){
        axios.post('http://stm.4soft-eg.com/api/contact', {
            apiToken: 'cfWGXxCeU701RFqA1zAvE5Fg0SvKgjgB9H1gI0TNEO4znRmqUXGJal5QT2J7XG03',
            msgType: values.type,
            message: values.desc,
            title: values.title
        })
        .then(response => {
            console.log(response);
            dispatch({
                type: TYPES.SEND_MESSAGE,
                payload: {

                }
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
}