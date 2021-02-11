import TYPES from '../reducers/types'
import axios from 'axios'

export function changeLang(token, lang) {
    return function (dispatch) {
        axios.post('http://stm.4soft-eg.com/api/changeLanguage', {
            apiToken: 'cfWGXxCeU701RFqA1zAvE5Fg0SvKgjgB9H1gI0TNEO4znRmqUXGJal5QT2J7XG03',
            language: lang
        })
        .then(response => {
            console.log(response);
            console.log(lang);
            dispatch({
                type: TYPES.CHANGE_LANG,
                lang
            })
        })
    }
}