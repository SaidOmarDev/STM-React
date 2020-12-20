import React, {useEffect, useState} from 'react'
import dealImg from '../../assets/images/deals.png'
import {FaShoppingCart} from 'react-icons/fa'
import {BiHeart} from 'react-icons/bi'
import './product.css'
import RateStars from '../RateStars/rate-stars'
import { Link } from 'react-router-dom'

const Product = (props) => {
    // const [ishover, setIshover] = useState(false);

    // const handleHover = () => {
    //     setIshover(!ishover)
    // }
    // let classes = [] 
    // if(ishover){
    //     classes.push('d-block')
    // }
    return ( 
        <div 
            className="product card" 
            // onMouseEnter={handleHover} 
            // onMouseLeave={handleHover}
        >
            <div className="pro-img">
                <Link to="/productDetails"><img src={dealImg} alt="product" /></Link>
                <div className="badges">
                    <span className="status badge badge-danger">sale</span>
                </div>
                <span className="fav" data-toggle="tooltip" data-placement="left" title="add to wishlist"><BiHeart className="fav-icon"/></span>
            </div>
            <div className="pro-desc">
                <div className="pro-info">
                    <span className="categ">Cake Tools</span>
                    <Link to="/productDetails"><h4 className="pro-name">Product Name</h4></Link>
                    <div>
                        <span className="price">
                            <span className="aft-dis">$9.9</span>
                            <span className="bef-dis">$12.5</span>
                        </span>
                        <RateStars />
                    </div>
                </div>
                <div className="cart-view">
                    <button className="btn add-cart d-block"><FaShoppingCart className="cart-icon"/>{props.addText}</button>
                    {/* <button className="btn q-view d-block"><FaEye className="view-icon"/>Quick View</button> */}
                </div>
            </div>
        </div>
     );
}
 
export default Product;