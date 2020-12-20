import React from 'react'
import { Link } from 'react-router-dom'
import dealImg from '../../../assets/images/deals.png'
import {BiHeart} from 'react-icons/bi'
import {MdRemoveShoppingCart} from 'react-icons/md'
import {FaShoppingCart} from 'react-icons/fa'
import {TiDeleteOutline} from 'react-icons/ti'
import RateStars from '../../RateStars/rate-stars'
import './CartProduct.css'
import Quantity from '../../ProductDetails/Quantity/quantity'

const CartProduct = (props) => {
    return ( 
        <div className="cart-product card">
            <div className="pro-img">
                <Link to="/productDetails"><img src={dealImg} alt="product" /></Link>
            </div>
            <div className="pro-desc">
                <div className="pro-info">
                    <span className="categ">Cake Tools</span>
                    <div>
                        <Link to="/productDetails"><h4 className="pro-name">Product Name</h4></Link>
                        <RateStars />
                    </div>
                    <div>
                        <span className="price">
                            <span className="aft-dis">$9.9</span>
                            {/* <span className="bef-dis">$12.5</span> */}
                        </span>
                    </div>
                    {props.productType === 'wish' ? null : <div>
                        <Quantity />
                        <div className="price total">
                            <h6>Total Price:</h6>
                            <span className="aft-dis">$9.9</span>
                        </div>
                    </div>}
                    <div className="actions">
                        <span className="fav btn" data-toggle="tooltip" data-placement="left" title="add to wishlist">{props.productType === 'wish' ? <TiDeleteOutline className="fav-icon"/> : <BiHeart className="fav-icon"/>}</span>
                        <button className="btn ricon">{props.productType === 'wish'?<FaShoppingCart className="cart-icon"/>:<MdRemoveShoppingCart className="cart-icon"/>}</button>
                        {/* <button className="btn q-view d-block"><FaEye className="view-icon"/>Quick View</button> */}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default CartProduct;