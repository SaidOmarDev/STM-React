import React from 'react'
import americanExpress from '../../assets/images/american-express.png'
import discover from '../../assets/images/discover.png'
import mastercard from '../../assets/images/mastercard.png'
import paypal from '../../assets/images/paypal.png'
import visa from '../../assets/images/visa.png'
import {AiOutlinePhone} from 'react-icons/ai'
import {BsEnvelope} from 'react-icons/bs'
import {BiMap} from 'react-icons/bi'
import {FaFacebookF, FaTwitter, FaYoutube, FaInstagram} from 'react-icons/fa'
import './footer.css'

const Footer = (props) => {
    return ( 
        <footer>
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h4>Contact Info</h4>
                            <div className="info">
                                <div><AiOutlinePhone className="icon"/><span>(+02) 01033293899</span></div>
                                <div><BsEnvelope className="icon"/><span>4soft@gmail.com</span></div>
                                <div><BiMap className="icon"/><span>21 Doai St, First Floor, Flat 102</span></div>
                            </div>
                            <div className="social">
                                <a href="#"><FaFacebookF /></a>
                                <a href="#"><FaTwitter /></a>
                                <a href="#"><FaYoutube /></a>
                                <a href="#"><FaInstagram /></a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h4>My Account</h4>
                            <div className="account-links">
                                <a href="#">Sign In</a>
                                <a href="">View Cart</a>
                                <a href="">My Wishlist</a>
                                <a href="">Track My Order</a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h4>Customer Services</h4>
                            <div className="account-links">
                                <a href="#">Payment Methods</a>
                                <a href="">Money-back guarantee</a>
                                <a href="">Returns</a>
                                <a href="">Shipping</a>
                                <a href="">Terms and conditions</a>
                                <a href="">Privacy Policy</a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h4>Company Name</h4>
                            <div className="newsletter">
                                <p>Get an only new update from this newsletter​</p>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="email" placeholder="Email address" />
                                </div>
                                <button type="submit" className="btn btn-block">SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p>&copy; All rights reserved. Made by 4Soft Company</p>
                        </div>
                        <div className="col-md-6">
                            <div className="payment">
                                <img src={americanExpress} alt=""/>
                                <img src={discover} alt=""/>
                                <img src={mastercard} alt=""/>
                                <img src={paypal} alt=""/>
                                <img src={visa} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;