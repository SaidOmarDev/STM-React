import React, { useState } from 'react'
import { connect } from 'react-redux'
import './quantity.css'

const Quantity = (props) => {
    
    return ( 
        <div className="quantity">
            <h6>Quantity: </h6>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span 
                        className="input-group-text btn"
                        onClick={props.onDecrement}
                        >-</span>
                </div>
                <input 
                    className="form-control"
                    type="text" 
                    value={props.quantity}
                    onChange={()=>props.updateQuantity()}/>
                <div className="input-group-append">
                    <span 
                        className="input-group-text btn"
                        onClick={props.onIncrement}
                        >+</span>
                </div>
            </div>
        </div>
     );
}
// function mapStateToProps(state) {
//     return {
//         quantity: state.cart.quantity
//     }
// } 

export default Quantity;