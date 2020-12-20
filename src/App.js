import {Switch, Route} from 'react-router-dom'

import './App.css';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import ProductDetails from './Components/ProductDetails/productDetails';
import Home from './Components/Home/Home';
import ShoppingCart from './Components/ShoppingCart/shoppingCart';
import Wishlist from './Components/Profile/Wishlist/wishlist';
import ShopProducts from './Components/ShopProducts/shopProducts';
import ProfileInfo from './Components/Profile/ProfileInfo/profileInfo';
import Orders from './Components/Profile/Orders/orders';
import Addresses from './Components/Profile/Addresses/addresses';
import CheckoutDetails from './Components/CheckoutDetails/checkoutDetails';
import Payment from './Components/Payment/payment';
import Review from './Components/Review/review';
import Login from './Components/Login/login';
import Register from './Components/Register/register';
import Contacts from './Components/Contacts/contacts';
import About from './Components/About/about';

function App() {
  return (
    <div className="">
        <Header />
        <Switch>
          <Route path="/productDetails" component={ProductDetails} />
          <Route path="/shoppingCart" component={ShoppingCart} />
          <Route path="/profile/wishlist" component={Wishlist} />
          <Route path="/shopProducts" component={ShopProducts} />
          <Route path="/profile/settings" component={ProfileInfo} />
          <Route path="/profile/orders" component={Orders} />
          <Route path="/profile/addresses" component={Addresses} />
          <Route path="/checkout" component={CheckoutDetails} />
          <Route path="/payment" component={Payment} />
          <Route path="/review" component={Review} />
          <Route path="/login" component={Login} />
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
