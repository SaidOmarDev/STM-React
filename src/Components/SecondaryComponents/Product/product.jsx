import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {addToCart} from '../../../actions/cartActions'
import {addToWishlist} from '../../../actions/wishlistActions'

import RateStars from '../RateStars/rate-stars'
import {FaShoppingCart, FaHeart} from 'react-icons/fa'
import {BiHeart} from 'react-icons/bi'
import {AiFillCheckCircle} from 'react-icons/ai'
import './product.css'

const Product = (props) => {
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch();
    const history = useHistory();

    const addToCartHandler = (product)=>{
        if(token){
            dispatch(addToCart(product));
        }else{
            history.push("/login");
        }
    }
    const addToWishListHandler = (product)=>{
        if(token){
            dispatch(addToWishlist(product));
        }else{
            history.push("/login");
        }
    }

    return ( 
        <div className="product card">
            <div className="pro-img">
                <Link to={`/productDetails/${props.product.id}`}><img src={props.product.image} alt="product" /></Link>
                <div className="badges">
                    <span className="status badge badge-danger">sale</span>
                </div>
                {props.inWishlist ? 
                    (<span className="fav active" ><FaHeart className="fav-icon"/></span>): 
                    (<span className="fav"  onClick={()=>addToWishListHandler(props.product)}><BiHeart className="fav-icon"/></span>)
                }
            </div>
            <div className="pro-desc">
                <div className="pro-info">
                    <span className="categ">{props.product.category}</span>
                    <Link to={`/productDetails/${props.product.id}`}><h4 className="pro-name">{props.product.name}</h4></Link>
                    <div>
                        <span className="price">
                            <span className="aft-dis">EGP {props.product.price}</span>
                            <span className="bef-dis">$12.5</span>
                        </span>
                        <RateStars />
                    </div>
                </div>
                <div className="cart-view">
                    {props.inCart ? 
                        <Link to="/shoppingCart" className="btn d-block added-cart"><FaShoppingCart className="cart-icon"/>View Cart <AiFillCheckCircle className="added-icon"/></Link> : 
                        <button className="btn add-cart d-block" onClick={()=>addToCartHandler(props.product)}><FaShoppingCart className="cart-icon"/>{props.addText}</button>
                    }
                    {/* <button className="btn q-view d-block"><FaEye className="view-icon"/>Quick View</button> */}
                </div>
            </div>
        </div>
     );
}
 
export default Product;