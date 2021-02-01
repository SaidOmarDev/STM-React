import React from 'react'
import { useSelector } from 'react-redux'

import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap'
import BreadCrumb from '../../SecondaryComponents/BreadCrumb/breadCrumb'
import ImageGallery from '../../MainPartialComponents/ImageGallery/imageGallery'
import RateStars from '../../SecondaryComponents/RateStars/rate-stars'
import Reviews from '../../MainPartialComponents/Reviews/reviews'
import Description from '../../MainPartialComponents/Description/description'
import Quantity from '../../SecondaryComponents/Quantity/quantity'
import {FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaHeart, FaShoppingCart} from 'react-icons/fa'
import './productDetails.css'

const ProductDetails = (props) => {
    const products = useSelector(state => state.products.items) 
    const product = products.find(p=>p.id === props.match.params.id)
    console.log(product)
    return ( 
        <React.Fragment>
            <BreadCrumb pagename="productDetails" proname={product.name}/>
            <div className="pro-details">
                <Container>
                    <Row>
                        <Col md={4}>
                            <ImageGallery image={product.image}/>
                        </Col>
                        <Col md={4}>
                            <h4>{product.name}</h4>
                            <div className="brief-details">
                                <h6>Product Details</h6>
                                <p>{product.shortDesc}</p>
                            </div>
                            <div className="spec">
                                <div>
                                    <span>Category:</span>
                                    <span>Color:</span>
                                    <span>Size:</span>
                                    <span>Brand:</span>
                                </div>
                                <div className="spec-value">
                                    <span>{product.category}</span>
                                    <span>Blue</span>
                                    <span>MD</span>
                                    <span>lacost</span>
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
                        </Col>
                        <Col md={4}>
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
                                        <input type="radio" name="color" className="custom-control-input" id="color1"/>
                                        <label htmlFor="color1" className="custom-option-label rounded-circle">
                                            <span className="custom-option-color rounded-circle" style={{backgroundColor: "#f25540"}}></span>
                                        </label>
                                    </div>
                                    <div className="custom-control custom-option custom-control-inline">
                                        <input type="radio" name="color" className="custom-control-input" id="color2"/>
                                        <label htmlFor="color2" className="custom-option-label rounded-circle">
                                            <span className="custom-option-color rounded-circle" style={{backgroundColor: "#65805b"}}></span>
                                        </label>
                                    </div>
                                    <div className="custom-control custom-option custom-control-inline">
                                        <input type="radio" name="color" className="custom-control-input" id="color3"/>
                                        <label htmlFor="color3" className="custom-option-label rounded-circle">
                                            <span className="custom-option-color rounded-circle" style={{backgroundColor: "#f5f5f5"}}></span>
                                        </label>
                                    </div>
                                    <div className="custom-control custom-option custom-control-inline">
                                        <input type="radio" name="color" className="custom-control-input" id="color4"/>
                                        <label htmlFor="color4" className="custom-option-label rounded-circle">
                                            <span className="custom-option-color rounded-circle" style={{backgroundColor: "#333"}}></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="size">
                                    <h6>Selected Size: </h6>
                                    <div className="custom-control custom-option custom-control-inline">
                                        <input type="radio" name="size" className="custom-control-input" id="xl"/>
                                        <label htmlFor="xl" className="custom-option-label">
                                            <span className="custom-option-size">XL</span>
                                        </label>
                                    </div>
                                    <div className="custom-control custom-option custom-control-inline">
                                        <input type="radio" name="size" className="custom-control-input" id="lg"/>
                                        <label htmlFor="lg" className="custom-option-label">
                                            <span className="custom-option-size">LG</span>
                                        </label>
                                    </div>
                                    <div className="custom-control custom-option custom-control-inline">
                                        <input type="radio" name="size" className="custom-control-input" id="md"/>
                                        <label htmlFor="md" className="custom-option-label">
                                            <span className="custom-option-size">MD</span>
                                        </label>
                                    </div>
                                    <div className="custom-control custom-option custom-control-inline">
                                        <input type="radio" name="size" className="custom-control-input" id="sm"/>
                                        <label htmlFor="sm" className="custom-option-label">
                                            <span className="custom-option-size">SM</span>
                                        </label>
                                    </div>
                                </div>
                                <Quantity quantity={product.quantity} id={product.id}/>
                                <div className="add-btn">
                                    <button className="btn add-cart"><FaShoppingCart className="cart-icon"/>Add To Cart</button>
                                    <button className="btn add-cart">Buy Now</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Tabs defaultActiveKey="reviews">
                        <Tab eventKey="reviews" title="Reviews">
                            <Reviews />
                        </Tab>
                    </Tabs>
                </Container>
            </div>
        </React.Fragment>
     );
}


 
export default ProductDetails;