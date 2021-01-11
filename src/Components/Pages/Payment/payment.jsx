import React from 'react'
import BreadCrumb from '../../SecondaryComponents/BreadCrumb/breadCrumb';
import CartSummary from '../../MainPartialComponents/CartSummary/cartSummary';
import OrderSteps from '../../SecondaryComponents/OrderSteps/orderSteps';
import {FaCcVisa, FaCcMastercard} from 'react-icons/fa'
import './payment.css'

const Payment = (props) => {
    return ( 
        <React.Fragment>
            <BreadCrumb pagename="Payment Info"/>
            <div className="billing-info">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <OrderSteps page="payment"/>
                            <div className="card mb-4">
                                <h4 className="mb-3">Payment</h4>
                                <form >
                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            <label htmlFor="cc-name">Name on card</label>
                                            <input type="text" className="form-control" id="cc-name" placeholder="" required/>
                                            <small className="text-muted">Full name as displayed on card</small>
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="cc-number">Credit card number</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="cc-number" placeholder="" required/>
                                                <div className="input-group-append">
                                                    <span className="input-group-text"><FaCcVisa /></span>
                                                    <span className="input-group-text"><FaCcMastercard /></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <label htmlFor="cc-expiration">Expiration</label>
                                            <input type="date" className="form-control" id="cc-expiration" placeholder="" required/>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <label htmlFor="cc-cvv">CVV</label>
                                            <input type="text" className="form-control" id="cc-cvv" placeholder="" required/>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn complete" type="submit">Continue to Complete</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            {/* <CartSummary /> */}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Payment;