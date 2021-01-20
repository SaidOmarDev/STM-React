import React from 'react'
import { Link } from 'react-router-dom';

import BreadCrumb from '../../SecondaryComponents/BreadCrumb/breadCrumb';
import CartSummary from '../../MainPartialComponents/CartSummary/cartSummary';
import OrderSteps from '../../SecondaryComponents/OrderSteps/orderSteps';
import NewProduct from '../../SecondaryComponents/Product/NewProduct/newProduct'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import './review.css'
import { useSelector } from 'react-redux';

const Review = (props) => {
    const cart = useSelector(state => state.cart.items)
    let grandTotal = 0;
    cart.map(item=> grandTotal+=item.price)
    return ( 
        <React.Fragment>
            <BreadCrumb pagename="Review"/>
            <div className="review">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <OrderSteps page="review"/>
                            <div className="review-details">
                                <h4 className="mb-3">Review your order</h4>
                                <div className="products-review">
                                    <div className="row">
                                        {cart.map(item => (
                                            <div className="col-md-4" key={item.id}>
                                                <NewProduct proType="review" product={item}/>
                                            </div>
                                        ))}
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
                            <CartSummary grandTotal={grandTotal}/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Review;