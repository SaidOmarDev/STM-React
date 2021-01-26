import { useEffect } from 'react';
import {Switch, Route} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {fetchProducts} from './actions/productActions'
import { fetchCategories } from './actions/filterActions'
import {fetchCart} from './actions/cartActions'
import { fetchWishlist } from './actions/wishlistActions'

import Header from './Components/MainPartialComponents/Header/header';
import Footer from './Components/MainPartialComponents/Footer/footer';
import ProductDetails from './Components/Pages/ProductDetails/productDetails';
import Home from './Components/Pages/Home/Home';
import ShoppingCart from './Components/Pages/ShoppingCart/shoppingCart';
import Wishlist from './Components/Pages/Wishlist/wishlist';
import ShopProducts from './Components/Pages/ShopProducts/shopProducts';
import ProfileInfo from './Components/Pages/ProfileInfo/profileInfo';
import Orders from './Components/Pages/Orders/orders';
import Addresses from './Components/Pages/Addresses/addresses';
import CheckoutDetails from './Components/Pages/CheckoutDetails/checkoutDetails';
import Payment from './Components/Pages/Payment/payment';
import Review from './Components/Pages/Review/review';
import Login from './Components/Pages/Login/login';
import Register from './Components/Pages/Register/register';
import Contacts from './Components/Pages/Contacts/contacts';
import About from './Components/Pages/About/about';
import './App.css';

function App(props) {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token)

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  },[token, dispatch])

  useEffect(() => {
    if(token){
      dispatch(fetchCart());
      dispatch(fetchWishlist());
    }
  },[token, dispatch])

  // useEffect(() => {
  // },[dispatch]);

  // useEffect(() => {
  // },[dispatch]);

  return (
    <div className="">
        <Header token={token}/>
        <Switch>
          <Route path="/productDetails/:id" render={(props)=>(
            <ProductDetails
              {...props}
            />)} />
          <Route path="/shoppingCart" component={ShoppingCart} />
          <Route path="/profile/wishlist" component={Wishlist} />
          <Route path="/shopProducts" component={ShopProducts} />
          <Route path="/profile/settings" component={ProfileInfo} />
          <Route path="/profile/orders" component={Orders} />
          <Route path="/profile/addresses" component={Addresses} />
          <Route path="/checkout" component={CheckoutDetails} />
          <Route path="/payment" component={Payment} />
          <Route path="/review" component={Review} />
          <Route path="/login" render={(props)=>(
              <Login {...props}/>)
            } />
          <Route path="/register" component={Register} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home}/>
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
