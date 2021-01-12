//Root reducer
import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productReducer from './productReducer';
import wishlistReducer from './wishlistReducer';
import filterReducer from './filterReducer'

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    filtered: filterReducer
});
export default rootReducer;