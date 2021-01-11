import React from 'react'
import './cartSummary.css'

const CartSummary = (props) => {
    return ( 
        <div className="cart-summary">
            <h4>cart summary</h4>
            <div className="cost">
                <div className="total-summary">
                    <p>sub total: <span>EGP {props.grandTotal}</span></p>
                    <p>shipping cost: <span>EGP 55</span></p><hr/>
                    <p>grand total: <span>EGP {props.grandTotal + 55}</span></p>
                </div>
            </div>
            <div className="coupon">
                <div className="acco-header">
                    <h4>Purchase Coupon</h4>
                </div>
                <div className="acco-body">
                    <input type="text" placeholder="Purchase Coupon"/>
                    <a href="#" className="btn btn-block">Apply Coupon</a>
                </div>
            </div>
            <a href="#" className="btn btn-block proceed-check">Proceed to checkout</a>
        </div>
     );
}
 
export default CartSummary;