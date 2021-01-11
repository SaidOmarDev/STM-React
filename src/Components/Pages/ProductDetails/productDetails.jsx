import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import {fetchProducts} from '../../../actions/productActions'

import BreadCrumb from '../../SecondaryComponents/BreadCrumb/breadCrumb'
import ImageGallery from '../../MainPartialComponents/ImageGallery/imageGallery'
import RateStars from '../../SecondaryComponents/RateStars/rate-stars'
import Tabs from '../../SecondaryComponents/DetailsTabs/DetailsTabs'
import Reviews from '../../MainPartialComponents/Reviews/reviews'
import Description from '../../MainPartialComponents/Description/description'
import Quantity from '../../SecondaryComponents/Quantity/quantity'
import {FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaHeart, FaShoppingCart} from 'react-icons/fa'
import './productDetails.css'

const ProductDetails = (props) => {
    useEffect(() => {
        props.fetchProducts();
    })
    const product = props.products.find(p=>p.id === props.match.params.id)
    // console.log(product)
    return ( 
        <React.Fragment>
            <BreadCrumb pagename="productDetails" proname={product.name}/>
            <div className="pro-details">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <ImageGallery image={product.image}/>
                        </div>
                        <div className="col-md-4">
                            <h4>{product.name}</h4>
                            <div className="brief-details">
                                <h6>Product Details</h6>
                                <p>{product.shortDesc}</p>
                            </div>
                            <div className="spec">
                                <div>
                                    <span>Category:</span>
                                    <span>Color:</span>
                                    <span>Matrial:</span>
                                </div>
                                <div className="spec-value">
                                    <span>{product.category}</span>
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
                                    <img src="/images/american-express.png" alt=""/>
                                    <img src="/images/discover.png" alt=""/>
                                    <img src="/images/mastercard.png" alt=""/>
                                    <img src="/images/paypal.png" alt=""/>
                                    <img src="/images/visa.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="d-flex justify-content-between">
                                    <span className="price">
                                        <span className="aft-dis">EGP {product.price}</span>
                                        <span className="bef-dis">EGP 12.5</span>
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
                                <Quantity quntity={product.quantity}/>
                                <div className="add-btn">
                                    <button className="btn add-cart"><FaShoppingCart className="cart-icon"/>Add To Cart</button>
                                    <button className="btn add-cart">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Tabs productId={product.id}/>
                    <Switch>
                        <Route path="/productDetails/:id/reviews" component={Reviews}/>
                        <Route path="/productDetails/:id/description" component={Description}/>
                    </Switch>
                </div>
            </div>
        </React.Fragment>
     );
}

function mapStateToProps(state){
    return {
        products: state.products.items
    }
}
 
export default connect(mapStateToProps, {fetchProducts})(ProductDetails);