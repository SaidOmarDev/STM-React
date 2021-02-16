import React from 'react'
import { Form, Formik, useField } from 'formik';
import * as Yup from 'yup'
import { Col, Row } from 'react-bootstrap';
import BreadCrumb from '../../SecondaryComponents/BreadCrumb/breadCrumb';
import {FaRegClock, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope} from 'react-icons/fa'
import './contacts.css'
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../../actions/ContactActions';

const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            {/* <label htmlFor={props.id || props.name}>{label}</label> */}
            <input className="form-control" {...field} {...props}/>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : (<div className="noerror"></div>)}
        </>
    );
};

const MyTextarea = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            {/* <label htmlFor={props.id || props.name}>{label}</label> */}
            <textarea className="form-control" {...field} {...props}/>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : (<div className="noerror"></div>)}
        </>
    );
};

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div>
        {/* <label htmlFor={props.id || props.name}>{label}</label> */}
        <select className="form-control" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : (<div className="noerror"></div>)}
      </div>
    );
};

const Contacts = (props) => {
    const dispatch = useDispatch()
    const token = localStorage.getItem('apiToken')
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
                                <Formik
                                    initialValues={{
                                        type: '',
                                        title: '',
                                        desc: ''
                                    }}
                                    validationSchema={Yup.object().shape({
                                        type: Yup.string().oneOf(['complaint', 'suggestion', 'report'], '* Invalid Message Type').required('* required Type selection'),
                                        title: Yup.string(),
                                        desc: Yup.string().required('* required Message Description')
                                    })}
                                    onSubmit={(values, {setSubmitting}) => {
                                        setTimeout(() => {
                                            // alert(JSON.stringify(values, null, 2));
                                            setSubmitting(false); 
                                            console.log(values)
                                            dispatch(sendMessage(token, values))
                                        }, 400)
                                    }}>
                                    <Form>
                                        <Row>
                                            <Col md={6}>
                                                <div className="form-group">
                                                    <MySelect name="type">
                                                        <option value="">Select Message Type</option>
                                                        <option value="complaint">Complaint</option>
                                                        <option value="suggestion">Suggestion</option>
                                                        <option value="report">Report</option>
                                                    </MySelect>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="form-group">
                                                    <MyTextInput 
                                                        name="title"
                                                        type="text"
                                                        placeholder="Provide short title of your request"
                                                    />
                                                </div>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="form-group">
                                                    <MyTextarea 
                                                        name="desc"
                                                        rows="5"
                                                        placeholder="Type here a message"
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        <button type="submit" className="btn">Send Message</button>
                                    </Form>
                                </Formik>
                                {/* <form>
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
                                        </div> *//*
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <select name="type" id="type" className="form-control">
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
                                </form>  */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Contacts;