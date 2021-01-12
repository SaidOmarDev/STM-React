import React from 'react'
import {IoMdClock} from 'react-icons/io'
import {MdLocalShipping} from 'react-icons/md'
import {BsCardChecklist} from 'react-icons/bs'
import {FaBoxOpen, FaBox} from 'react-icons/fa'
import './orderStatus.css'

const OrderStatus = (props) => {
    // let checkclasses= [];
    // let payclasses= [];
    // let reviewclasses= [];
    // if(props.page === "checkout"){
    //     checkclasses.push('current')
    // }else if(props.page === "payment"){
    //     payclasses.push("current");
    //     checkclasses.push("active")
    // }else if(props.page === "review"){
    //     reviewclasses.push("current");
    //     checkclasses.push("active");
    //     payclasses.push("active")
    // }
    return ( 
        <div className="order-status">
            <span to="/shoppingCart" className="step-item active">
                <div className="step-progress">
                    <div className="step-count">1</div>
                </div>
                <div className="step-label">
                    <FaBoxOpen className="step-icons"/>Order Accepted
                </div>
            </span>
            <span to="/checkout" className="step-item">
                <div className="step-progress">
                    <div className="step-count">2</div>
                </div>
                <div className="step-label">
                    <IoMdClock className="step-icons"/>Order In Progress
                </div>
            </span>
            <span to="/payment" exact className="step-item">
                <div className="step-progress">
                    <div className="step-count">3</div>
                </div>
                <div className="step-label">
                    <MdLocalShipping className="step-icons"/>Order Shipped
                </div>
            </span>
            <span to="/review" exact className="step-item">
                <div className="step-progress">
                    <div className="step-count">4</div>
                </div>
                <div className="step-label">
                    <FaBox className="step-icons"/>Order Delivered
                </div>
            </span>
        </div>
     );
}
 
export default OrderStatus;