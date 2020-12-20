import React from 'react'
import BreadCrumb from '../BreadCrumb/breadCrumb';
import CartSummary from '../CartSummary/cartSummary';
import OrderSteps from '../OrderSteps/orderSteps';
import NewProduct from '../Product/NewProduct/newProduct'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import './review.css'
import { Link } from 'react-router-dom';

const Review = (props) => {
    return ( 
        <React.Fragment>
            <BreadCrumb />
            <div className="review">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <OrderSteps />
                            <div className="review-details">
                                <h4 className="mb-3">Review your order</h4>
                                <div className="products-review">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <NewProduct proType="review"/>
                                        </div>
                                        <div className="col-md-4">
                                            <NewProduct proType="review"/>
                                        </div>
                                        <div className="col-md-4">
                                            <NewProduct proType="review"/>
                                        </div>
                                        <div className="col-md-4">
                                            <NewProduct proType="review"/>
                                        </div>
                                        <div className="col-md-4">
                                            <NewProduct proType="review"/>
                                        </div>
                                        <div className="col-md-4">
                                            <NewProduct proType="review"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="shipping-address">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h6>Shipping to:</h6>
                                            <p>Client: <span>Said Omar</span></p>
                                            <p>Address: <span>15 Alharam, Giza</span></p>
                                            <p>Phone: 01012202020</p>
                                        </div>
                                        <div className="col-md-6">
                                            <h6>Payment method:</h6>
                                            <p>PayPal: *************</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="proceed">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Link to="/payment" className="btn btn-block back"><FaAngleLeft /> back to payment</Link>
                                        </div>
                                        <div className="col-md-6">
                                            <Link to="/" className="btn btn-block go-proceed"> complete order <FaAngleRight /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <CartSummary />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Review;