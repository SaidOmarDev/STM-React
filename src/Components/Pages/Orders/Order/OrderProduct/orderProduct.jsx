import React from 'react'

const OrderProduct = (props) => {
    return ( 
        <div className="order-product">
            <img src="./images/pro3.jpg" alt=""/>
            <div>
                <span>Product name goes here</span><br/>
                <span className="price">EGP 145</span>
            </div>
            <div>
                <span>Seller</span><br/>
                <span>ABC shop</span>
            </div>
            <div>
                <button className="btn">Return</button><button className="btn">Cancel Order</button>
            </div>
        </div>
     );
}
 
export default OrderProduct;