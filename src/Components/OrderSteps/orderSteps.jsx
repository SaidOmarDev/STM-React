import React from 'react'
import {FaShoppingCart, FaRegUserCircle, FaCreditCard, FaCheckCircle} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import './orderSteps.css'

const OrderSteps = (props) => {
    // let classes= [];
    // if(){
    //     classes.push('current')
    // }
    return ( 
        <div className="order-steps">
            <NavLink to="/shoppingCart" className="step-item">
                <div className="step-progress">
                    <div className="step-count">1</div>
                </div>
                <div className="step-label">
                    <FaShoppingCart className="step-icons"/>Cart
                </div>
            </NavLink>
            <NavLink to="/checkout" className="step-item">
                <div className="step-progress">
                    <div className="step-count">2</div>
                </div>
                <div className="step-label">
                    <FaRegUserCircle className="step-icons"/>Your details
                </div>
            </NavLink>
            <NavLink to="/payment" exact className="step-item">
                <div className="step-progress">
                    <div className="step-count">3</div>
                </div>
                <div className="step-label">
                    <FaCreditCard className="step-icons"/>Payment
                </div>
            </NavLink>
            <NavLink to="/review" exact className="step-item">
                <div className="step-progress">
                    <div className="step-count">4</div>
                </div>
                <div className="step-label">
                    <FaCheckCircle className="step-icons"/>Review
                </div>
            </NavLink>
        </div>
     );
}
 
export default OrderSteps;