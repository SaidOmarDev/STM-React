import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import {addToCart, removeFromCart, updateCartQuantity} from '../../../../actions/cartActions'
import {removeFromWishlist, addToWishlist} from '../../../../actions/wishlistActions'

import RateStars from '../../RateStars/rate-stars'
import {BiHeart} from 'react-icons/bi'
import {MdRemoveShoppingCart} from 'react-icons/md'
import {FaShoppingCart} from 'react-icons/fa'
import {TiDeleteOutline} from 'react-icons/ti'
import './CartProduct.css'

const CartProduct = (props) => {
    const dispatch = useDispatch()
    const [quantity, setQuntity] = useState(props.product.quantity)
    
    const incrementHandler = ()=>{
        setQuntity(quantity+1)
        dispatch(updateCartQuantity(props.product.id,quantity))
    }
    const decrementHandler = ()=>{
        setQuntity(quantity-1)
        dispatch(updateCartQuantity(props.product.id,quantity))
    }

    const handleChange = (e)=>{
        setQuntity(e.target.value)
        dispatch(updateCartQuantity(props.product.id,quantity))
    }

    const addToCartHandler = (itemId)=>{
        dispatch(addToCart(itemId));
    }

    const removeFromCartHandler = (itemId)=>{
        dispatch(removeFromCart(itemId));
    }
    
    const addToWishlistHandler = (item)=>{
        dispatch(addToWishlist(item));
    }
    const removeFromWishlistHandler = (itemId)=>{
        dispatch(removeFromWishlist(itemId));
    }
    return ( 
        <div className="cart-product card">
            <div className="pro-img">
                <Link to="/productDetails"><img src={props.product.image} alt="product" /></Link>
            </div>
            <div className="pro-desc">
                <div className="pro-info">
                    <span className="categ">{props.product.category}</span>
                    <div>
                        <Link to="/productDetails"><h4 className="pro-name">{props.product.name}</h4></Link>
                        <RateStars />
                    </div>
                    <div>
                        <span className="price">
                            <span className="aft-dis">EGP {props.product.price}</span>
                            {/* <span className="bef-dis">$12.5</span> */}
                        </span>
                    </div>
                    {props.productType === 'wish' ? null : 
                        <div>
                            <div className="quantity">
                                <h6>Quantity: </h6>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span 
                                            className="input-group-text btn"
                                            onClick={decrementHandler}
                                            >-</span>
                                    </div>
                                    <input 
                                        className="form-control"
                                        type="text" 
                                        value={quantity}
                                        onChange={handleChange}/>
                                    <div className="input-group-append">
                                        <span 
                                            className="input-group-text btn"
                                            onClick={incrementHandler}
                                            >+</span>
                                    </div>
                                </div>
                            </div>
                            <div className="price total">
                                <h6>Total Price:</h6>
                                <span className="aft-dis">EGP {props.product.price*quantity}</span>
                            </div>
                        </div>
                    }
                    <div className="actions">
                        {props.productType === 'wish' ?
                            <React.Fragment>
                                <span className="fav btn" data-toggle="tooltip" data-placement="left" title="remove from wishlist" onClick={()=>removeFromWishlistHandler(props.product.id)}>
                                    <TiDeleteOutline className="fav-icon"/>
                                </span> 
                                {props.inCart ? 
                                    <span className="btn ricon"><MdRemoveShoppingCart className="cart-icon"/></span>
                                    :
                                    <button className="btn ricon" onClick={()=>addToCartHandler(props.product)}><FaShoppingCart className="cart-icon"/></button>
                                }
                            </React.Fragment> 
                            : 
                            <React.Fragment>
                                {props.inWishlist ? 
                                    <span className="fav btn active">
                                        <BiHeart className="fav-icon"/>
                                    </span>
                                    : 
                                    <span className="fav btn" onClick={()=>addToWishlistHandler(props.product)}>
                                        <BiHeart className="fav-icon"/>
                                    </span>
                                }
                                
                                <button className="btn ricon" onClick={()=>removeFromCartHandler(props.product.id)}><MdRemoveShoppingCart className="cart-icon"/></button>
                            </React.Fragment>
                        }
                        {/* <button className="btn q-view d-block"><FaEye className="view-icon"/>Quick View</button> */}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default CartProduct;