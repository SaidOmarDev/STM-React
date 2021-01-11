import { createStore, applyMiddleware, compose } from 'redux'
import * as thunk from 'redux-thunk'
import rootReducer from './reducers';

const initialState = {};
// const middlewares = [thunk]

const store = createStore(
    rootReducer, 
    initialState, 
    compose(
        applyMiddleware(thunk.default),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
export default store;