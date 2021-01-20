import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {Formik, Form, useField} from 'formik'
import * as Yup from 'yup'

import BreadCrumb from '../../SecondaryComponents/BreadCrumb/breadCrumb';
import CartSummary from '../../MainPartialComponents/CartSummary/cartSummary'
import OrderSteps from '../../SecondaryComponents/OrderSteps/orderSteps'
import {FaEdit, FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import './checkoutDetails.css'

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
    )
}

const CheckoutDetails = (props) => {
    const history = useHistory();
    const cart = useSelector((state) => state.cart.items)

    let grandTotal = 0;
    cart.map(item => grandTotal += item.price * item.quantity);

    const handleSubmit = (values) => {
        alert(JSON.stringify(values, null, 2));
        history.push('/payment')
    }

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
                                <Formik
                                    initialValues={{
                                        fullName: '',
                                        email: '',
                                        phone: '',
                                        city: '',
                                        zCode: '',
                                        address1: '',
                                        address2: ''
                                    }}
                                    validationSchema={Yup.object().shape({
                                        fullName: Yup.string().max(20, '* Must be 20 character or less').required('* required'),
                                        email: Yup.string().email('*Invalid Email Address').required('*Required'),
                                        phone: Yup.number().required('* required'),
                                        city: Yup.string().required('* required'),
                                        zCode: Yup.string().required('* required'),
                                        address1: Yup.string().required('* required'),
                                        address2: Yup.string()
                                    })}
                                    onSubmit={(values, {setSubmitting}) => {
                                        setTimeout(() => {
                                            // alert(JSON.stringify(values, null, 2));
                                            handleSubmit(values);
                                            setSubmitting(false);
                                            // console.log(values);
                                        }, 400)
                                        // if(token){
                                        //     repalceHandler();
                                        //     // console.log(props.history);
                                        //     // props.history.replace("/");
                                        // }
                                    }}
                                >
                                    <Form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <MyTextInput 
                                                        label="Full Name"
                                                        name="fullName"
                                                        type="text"
                                                        placeholder="Said Omar Gaber"    
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <MyTextInput
                                                        label="Email Address"
                                                        name="email"
                                                        type="email"
                                                        placeholder="jane@formik.com"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <MyTextInput
                                                        label="Phone"
                                                        name="phone"
                                                        type="tel"
                                                        placeholder="01010101010"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <MyTextInput
                                                        label="City"
                                                        name="city"
                                                        type="text"
                                                        placeholder="Minia"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <MyTextInput
                                                        label="Z-Code"
                                                        name="zCode"
                                                        type="text"
                                                        placeholder="62451"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <MyTextInput
                                                        label="Address1"
                                                        name="address1"
                                                        type="text"
                                                        placeholder="Minia Maghagh"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <MyTextInput
                                                        label="Address2"
                                                        name="address2"
                                                        type="text"
                                                        placeholder="Minia Maghagha"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="proceed row">
                                            <div className="col-md-6">
                                                <Link to="/shoppingCart" className="btn btn-block back"><FaAngleLeft className="checkout-icons"/> back to cart</Link>
                                            </div>
                                            <div className="col-md-6">
                                                <button type="submit" className="btn btn-block go-proceed"> proceed to payment <FaAngleRight className="checkout-icons"/></button>
                                            </div>
                                        </div>
                                    </Form>
                                </Formik>
                                {/* <form action="">
                                    <div className="row">
                                        <div className="form-group col-12">
                                            <label htmlFor="fullname">Full Name</label>
                                            <input type="text" className="form-control" id="fullname" placeholder="Full Name"/>
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
                                </form> */}
                                {/* <div className="proceed row">
                                    <div className="col-md-6">
                                        <Link to="/shoppingCart" className="btn btn-block back"><FaAngleLeft className="checkout-icons"/> back to cart</Link>
                                    </div>
                                    <div className="col-md-6">
                                        <Link to="/payment" type="submit" className="btn btn-block go-proceed"> proceed to payment <FaAngleRight className="checkout-icons"/></Link>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <CartSummary page="checkout" grandTotal={grandTotal}/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment> 
     );
}
 
export default CheckoutDetails;