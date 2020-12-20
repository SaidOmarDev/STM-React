import React from 'react'
import BreadCrumb from '../BreadCrumb/breadCrumb'
import ImageGallery from '../ImageGallery/imageGallery'
import americanExpress from '../../assets/images/american-express.png'
import discover from '../../assets/images/discover.png'
import mastercard from '../../assets/images/mastercard.png'
import paypal from '../../assets/images/paypal.png'
import visa from '../../assets/images/visa.png'
import {FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaHeart, FaShoppingCart} from 'react-icons/fa'
import './productDetails.css'
import RateStars from '../RateStars/rate-stars'
import Tabs from './DetailsTabs/DetailsTabs'
import { Route, Switch } from 'react-router-dom'
import Reviews from './Reviews/reviews'
import Description from './Description/description'
import Quantity from './Quantity/quantity'

const ProductDetails = (props) => {
    return ( 
        <React.Fragment>
            <BreadCrumb />
            <div className="pro-details">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <ImageGallery />
                        </div>
                        <div className="col-md-4">
                            <h4>Product Name Is Here</h4>
                            <div className="brief-details">
                                <h6>Product Details</h6>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum tempora officia ad, id expedita nam. Voluptates, deserunt.</p>
                            </div>
                            <div className="spec">
                                <div>
                                    <span>Category: </span>
                                    <span>Color:</span>
                                    <span>Matrial:</span>
                                </div>
                                <div className="spec-value">
                                    <span>Phones/SmartPhones</span>
                                    <span>Blue</span>
                                    <span>metal</span>
                                </div>
                            </div>
                            <div className="share">
                                <h6>Share It</h6>
                                <div className="d-flex">
                                    <div className="share-links">
                                        <a href="#"><FaFacebookF /></a>
                                        <a href="#"><FaTwitter /></a>
                                        <a href="#"><FaYoutube /></a>
                                        <a href="#"><FaInstagram /></a>
                                    </div>
                                    <button className="btn"><FaHeart className="icon"/>Add To WishList</button>
                                </div>
                            </div>
                            <div className="payment">
                                <h6>100% SECURE PAYMENT</h6>
                                <div className="payment-icons">
                                    <img src={americanExpress} alt=""/>
                                    <img src={discover} alt=""/>
                                    <img src={mastercard} alt=""/>
                                    <img src={paypal} alt=""/>
                                    <img src={visa} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="d-flex justify-content-between">
                                    <span className="price">
                                        <span className="aft-dis">$9.9</span>
                                        <span className="bef-dis">$12.5</span>
                                    </span>
                                    <RateStars />
                                </div>
                                <div className="color">
                                    <h6>Color: </h6>
                                    <div className="custom-control custom-option custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="color1"/>
                                        <label htmlFor="color1" className="custom-option-label rounded-circle">
                                            <span className="custom-option-color rounded-circle" style={{backgroundColor: "#f25540"}}></span>
                                        </label>
                                    </div>
                                    <div className="custom-control custom-option custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="color2"/>
                                        <label htmlFor="color2" className="custom-option-label rounded-circle">
                                            <span className="custom-option-color rounded-circle" style={{backgroundColor: "#65805b"}}></span>
                                        </label>
                                    </div>
                                    <div className="custom-control custom-option custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="color3"/>
                                        <label htmlFor="color3" className="custom-option-label rounded-circle">
                                            <span className="custom-option-color rounded-circle" style={{backgroundColor: "#f5f5f5"}}></span>
                                        </label>
                                    </div>
                                    <div className="custom-control custom-option custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="color4"/>
                                        <label htmlFor="color4" className="custom-option-label rounded-circle">
                                            <span className="custom-option-color rounded-circle" style={{backgroundColor: "#333"}}></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="size">
                                    <h6>Selected Size: </h6>
                                </div>
                                <Quantity quntity={1}/>
                                <div className="add-btn">
                                    <button className="btn add-cart"><FaShoppingCart className="cart-icon"/>Add To Cart</button>
                                    <button className="btn add-cart">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Tabs />
                    <Switch>
                        <Route path="/productDetails/reviews" component={Reviews}/>
                        <Route path="/productDetails/description" component={Description}/>
                    </Switch>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default ProductDetails;