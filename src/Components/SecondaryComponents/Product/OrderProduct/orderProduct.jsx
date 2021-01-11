import React from 'react'
import { Link } from 'react-router-dom';

import './orderProduct.css';

const OrderProduct = (props) => {
    return ( 
        <div className="order-product">
            <div className="pro-img">
                <Link to={`/productDetails/${props.product.id}`}><img src={props.product.image} alt="product" /></Link>
            </div>
            <div className="pro-info">
                <Link to={`/productDetails/${props.product.id}`}><h4 className="pro-name">{props.product.name}</h4></Link>
                <span className="price">
                    <span className="aft-dis">EGP {props.product.price}</span>
                </span>
            </div>
        </div>
     );
}
 
export default OrderProduct;