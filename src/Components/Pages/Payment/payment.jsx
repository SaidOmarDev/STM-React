import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Button, Col, Row, Tab, Tabs } from 'react-bootstrap';
import {Formik, Form, useField} from 'formik'
import * as Yup from 'yup'
import {FaCcVisa, FaCcMastercard} from 'react-icons/fa'

import BreadCrumb from '../../SecondaryComponents/BreadCrumb/breadCrumb';
import OrderSteps from '../../SecondaryComponents/OrderSteps/orderSteps';
import './payment.css'

const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="form-control" {...field} {...props}/>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : (<div className="noerror"></div>)}
        </>
    );
};
const MyTextInputWithAppend = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <div className="input-group">
                <input className="form-control" {...field} {...props}/> 
                <div className="input-group-append">
                    <span className="input-group-text"><FaCcVisa /></span>
                    <span className="input-group-text"><FaCcMastercard /></span>
                </div>
            </div>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : (<div className="noerror"></div>)}
        </>
    );
};

const Payment = (props) => {

    const history = useHistory()
    const handleSubmit = () => {
        history.push('/review');
    }
    return ( 
        <React.Fragment>
            <BreadCrumb pagename="Payment Info"/>
            <div className="billing-info">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <OrderSteps page="payment"/>
                            <div className="card mb-4">
                                {/* <h4 className="mb-3">Payment</h4> */}
                                <Tabs defaultActiveKey="visa">
                                    <Tab eventKey="visa" title="PayByVisa">
                                        <Formik 
                                            initialValues={{
                                                cardName:'',
                                                cardNumber:'',
                                                exDate:'',
                                                cvvCode:''
                                            }}
                                            validationSchema={Yup.object().shape({
                                                cardName: Yup.string().required('*required'),
                                                cardNumber: Yup.number('*Must be a number').required('*required'),
                                                exDate: Yup.date().required('*required'),
                                                cvvCode: Yup.number('*Must be a number').required('*required')
                                            })}
                                            onSubmit={(values, {setSubmitting}) => {
                                                setTimeout(() => {
                                                    setSubmitting(false);
                                                    console.log(values);
                                                    handleSubmit()
                                                }, 400)
                                            }}>
                                            <Form>
                                                <Row>
                                                    <Col xs={12} className="mb-3">
                                                        <div className="form-group">
                                                            <MyTextInput 
                                                                label="Name on card"
                                                                name="cardName"
                                                                type="text"
                                                                placeholder="Said Omar Gaber"    
                                                            />
                                                            <small className="text-muted">Full name as displayed on card</small>
                                                        </div>
                                                    </Col>
                                                    <Col xs={12} className="mb-3">
                                                        <div className="form-group">
                                                            <MyTextInputWithAppend 
                                                                label="Credit card number"
                                                                name="cardNumber"
                                                                type="text"
                                                                placeholder="123125355255"    
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6} className="mb-3">
                                                        <MyTextInput 
                                                            label="Expiration"
                                                            name="exDate"
                                                            type="date"
                                                            placeholder="12/2/2020"    
                                                        />
                                                    </Col>
                                                    <Col lg={6} className="mb-3">
                                                        <MyTextInput 
                                                            label="CVV"
                                                            name="cvvCode"
                                                            type="text"
                                                            placeholder="235"    
                                                        />
                                                    </Col>
                                                    <Col xs={12} className="mb-3">
                                                        <Button type="submit" className="complete">Continue to Complete</Button>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </Formik>
                                        {/* <form >
                                            <div className="row"> */}
                                                {/* <div className="col-12 mb-3">
                                                    <label htmlFor="cc-name">Name on card</label>
                                                    <input type="text" className="form-control" id="cc-name" placeholder="" required/>
                                                    <small className="text-muted">Full name as displayed on card</small>
                                                </div> */}
                                                {/* <div className="col-12 mb-3">
                                                    <label htmlFor="cc-number">Credit card number</label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" id="cc-number" placeholder="" required/>
                                                        <div className="input-group-append">
                                                            <span className="input-group-text"><FaCcVisa /></span>
                                                            <span className="input-group-text"><FaCcMastercard /></span>
                                                        </div>
                                                    </div>
                                                </div> */}
                                                {/* <div className="col-lg-6 mb-3">
                                                    <label htmlFor="cc-expiration">Expiration</label>
                                                    <input type="date" className="form-control" id="cc-expiration" placeholder="" required/>
                                                </div> */}
                                                {/* <div className="col-lg-6 mb-3">
                                                    <label htmlFor="cc-cvv">CVV</label>
                                                    <input type="text" className="form-control" id="cc-cvv" placeholder="" required/>
                                                </div> */}
                                                {/* <div className="col-12">
                                                    <Link to="/review" type="submit" className="btn complete">Continue to Complete</Link>
                                                </div>
                                            </div>
                                        </form> */}
                                    </Tab>
                                    <Tab eventKey="cash" title="Cash">
                                        <h4>Cash on Delivery</h4>
                                        <Link to="/review" className="btn complete">Continue to Complete</Link>
                                    </Tab>
                                </Tabs>
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