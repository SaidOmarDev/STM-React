//Root reducer
import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productReducer from './productReducer';
import wishlistReducer from './wishlistReducer';

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer
});
export default rootReducer;