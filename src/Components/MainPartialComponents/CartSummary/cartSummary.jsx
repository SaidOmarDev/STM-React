import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import OrderProduct from '../../SecondaryComponents/Product/OrderProduct/orderProduct';
import {MdPayment} from 'react-icons/md'
import './cartSummary.css'

const CartSummary = (props) => {
    const cart = useSelector((state) => state.cart.items)

    return ( 
        <div className="cart-summary">
            {props.page === "checkout" ?
                <>
                    <h4>Your Order</h4>
                    <div className="order-products">
                        {cart.map(item => 
                            <OrderProduct 
                                key={item.id}
                                product={item}
                            />
                        )}
                    </div>
                </>
                :
                null
            }
            <h4>cart summary</h4>
            <div className="cost">
                <div className="total-summary">
                    <p>sub total: <span>EGP {props.grandTotal}</span></p>
                    <p>shipping cost: <span>EGP 55</span></p><hr/>
                    <p>Total: <span>EGP {props.grandTotal + 55}</span></p>
                </div>
            </div>
            {props.page === "cart" ? 
                <>
                <div className="coupon">
                    <div className="acco-header">
                        <h4>Purchase Coupon</h4>
                    </div>
                    <div className="acco-body">
                        <input type="text" placeholder="Purchase Coupon"/>
                        <a href="#" className="btn btn-block">Apply Coupon</a>
                    </div>
                </div>
                <Link to="/checkout" className="btn btn-block proceed-check"><MdPayment/> Proceed to checkout</Link>
                </>
                :
                null
            }
        </div>
     );
}
 
export default CartSummary;