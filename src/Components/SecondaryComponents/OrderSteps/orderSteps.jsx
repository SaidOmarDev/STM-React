import React from 'react'
import { NavLink } from 'react-router-dom';
import {FaShoppingCart, FaRegUserCircle, FaCreditCard, FaCheckCircle} from 'react-icons/fa'
import './orderSteps.css'

const OrderSteps = (props) => {
    let checkclasses= [];
    let payclasses= [];
    let reviewclasses= [];
    if(props.page === "checkout"){
        checkclasses.push('current')
    }else if(props.page === "payment"){
        payclasses.push("current");
        payclasses.push("active");
        checkclasses.push("active")
    }else if(props.page === "review"){
        reviewclasses.push("current");
        reviewclasses.push("active");
        checkclasses.push("active");
        payclasses.push("active")
    }

    const handleActive = (e)=>{
        console.log(e.target);
    }
    return ( 
        <div className="order-steps">
            <div className="step-item active" onClick={handleActive}>
                <div className="step-progress">
                    <div className="step-count">1</div>
                </div>
                <div className="step-label">
                    <FaShoppingCart className="step-icons"/>Cart
                </div>
            </div>
            <div className={`step-item ${checkclasses.join(' ')}`}>
                <div className="step-progress">
                    <div className="step-count">2</div>
                </div>
                <div className="step-label">
                    <FaRegUserCircle className="step-icons"/>Your details
                </div>
            </div>
            <div className={`step-item ${payclasses.join(' ')}`}>
                <div className="step-progress">
                    <div className="step-count">3</div>
                </div>
                <div className="step-label">
                    <FaCreditCard className="step-icons"/>Payment
                </div>
            </div>
            <div className={`step-item ${reviewclasses.join(' ')}`}>
                <div className="step-progress">
                    <div className="step-count">4</div>
                </div>
                <div className="step-label">
                    <FaCheckCircle className="step-icons"/>Review
                </div>
            </div>
        </div>
     );
}
 
export default OrderSteps;