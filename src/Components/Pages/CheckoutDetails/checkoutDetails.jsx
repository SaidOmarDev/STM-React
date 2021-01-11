import React from 'react'
import { Link } from 'react-router-dom';
import BreadCrumb from '../../SecondaryComponents/BreadCrumb/breadCrumb';
import CartSummary from '../../MainPartialComponents/CartSummary/cartSummary'
import OrderSteps from '../../SecondaryComponents/OrderSteps/orderSteps'
import {FaEdit, FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import './checkoutDetails.css'

const CheckoutDetails = (props) => {
    return (
        <React.Fragment>
            <BreadCrumb pagename="Checkout Details"/>
            <div className="checkout-details">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <OrderSteps page="checkout"/>
                            <div className="details">
                                <div className="user">
                                    <div className="user-prief">
                                        <img src="./images/avatar.png" alt=""/>
                                        <div className="user-info">
                                            <h6>user name</h6>
                                            <p>useremail@gmail.com</p>
                                        </div>
                                    </div>
                                    <Link to="/profile/settings" className="btn"><FaEdit className="checkout-icons"/> Edit profile</Link>
                                </div>
                                <h6>checkout details</h6>
                                <form action="">
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="fname">First Name</label>
                                            <input type="text" className="form-control" id="fname" placeholder="First Name"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="lname">Last Name</label>
                                            <input type="text" className="form-control" id="lname" placeholder="Last Name"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className="form-control" id="email" placeholder="E-mail Address"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input type="tel" className="form-control" id="phone" placeholder="Phone Number"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="city">Your City</label>
                                            <input type="text" className="form-control" id="city" placeholder="Your City"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="zip">ZIP Code</label>
                                            <input type="text" className="form-control" id="zip" placeholder="ZIP Code"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="add1">Address1</label>
                                            <input type="text" className="form-control" id="add1" placeholder="Address1"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="add2">Address2</label>
                                            <input type="text" className="form-control" id="add2" placeholder="Address2"/>
                                        </div>
                                    </div>
                                </form>
                                <div className="proceed row">
                                    <div className="col-md-6">
                                        <Link to="/shoppingCart" className="btn btn-block back"><FaAngleLeft className="checkout-icons"/> back to cart</Link>
                                    </div>
                                    <div className="col-md-6">
                                        <Link to="#" className="btn btn-block go-proceed"> proceed to payment <FaAngleRight className="checkout-icons"/></Link>
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
 
export default CheckoutDetails;