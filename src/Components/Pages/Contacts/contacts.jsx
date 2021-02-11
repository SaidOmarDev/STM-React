import React from 'react'
import BreadCrumb from '../../SecondaryComponents/BreadCrumb/breadCrumb';
import {FaRegClock, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope} from 'react-icons/fa'
import './contacts.css'

const Contacts = (props) => {
    return ( 
        <React.Fragment>
            <BreadCrumb pagename="Contact Info"/>
            <div className="contacts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contacts-details">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card">
                                            <span><FaRegClock className="contact-icons"/></span>
                                            <h5>Working Hours</h5>
                                            <span>Mon – Fri: 10AM – 7PM</span>
                                            <span>Sta: 11AM – 5PM</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <span><FaMapMarkerAlt className="contact-icons"/></span>
                                            <h5>Main Store Address</h5>
                                            <span>22 Minia Street</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <span><FaPhoneAlt className="contact-icons"/></span>
                                            <h5>Phone numbers</h5>
                                            <span>For customers: +2 01021255462</span>
                                            <span>Tech customers: +2 01201200125</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <span><FaEnvelope className="contact-icons"/></span>
                                            <h5>Email Addresses</h5>
                                            <span>saidomar111@gmail.com</span>
                                            <span>saomar458@yahoo.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card send-message">
                                <h3>Send a Message</h3>
                                <form>
                                    <div className="row">
                                        {/* <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Your Name"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Your Email Address"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="number" className="form-control" placeholder="Your Phone Number"/>
                                            </div>
                                        </div> */}
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <select name="type" id="type">
                                                    <option value="">Select Message Type</option>
                                                    <option value="complaint">Complaint</option>
                                                    <option value="suggestion">Suggestion</option>
                                                    <option value="report">Report</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Provide short title of your request"/>
                                            </div>
                                        </div>
                                        
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea className="form-control" name="desc" id="desc" cols="" rows="5" placeholder="Type here a message"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" className="btn">Send Message</button>
                                </form> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Contacts;