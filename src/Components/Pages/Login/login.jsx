import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {Formik, Form, useField} from 'formik'
import * as Yup from 'yup'
import { Spinner, Toast } from 'react-bootstrap';
import { auth } from '../../../actions/AuthActions';
import './login.css'
import { useEffect } from 'react';

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
const MyCheckBox = ({children, ...props}) => {
    const [field, meta] = useField({...props, type: 'checkbox'})
    return (
        <>
            <label className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : (<div className="noerror"></div>)}
        </>
    );
};

const Login = (props) => {
    const [isRegister, setIsRegister] = useState(false);
    // const [show, setShow] = useState(true);
    const dispatch = useDispatch();
    const loading = useSelector(state=> state.auth.loading);
    const token = useSelector(state=> state.auth.token);
    // const errorMessage = useSelector(state => state.auth.error);
    useEffect(() => {
        if(token){
            // console.log(props.history);
            props.history.replace("/");
        }
    },[token])
    

    return ( 
        <div className="login-page">
            {!loading ? (
                <React.Fragment>
                    <div className="card login-form">
                        <h4>Login</h4>
                        <Formik
                            initialValues={{
                                email:'',
                                password:'',
                                rememberMe: false
                            }}
                            validationSchema={Yup.object().shape({
                                email: Yup.string().email('*Invalid Email Address').required('*Required'),
                                password: Yup.string().required('*required'),
                                rememberMe: Yup.boolean()
                            })}
                            onSubmit={(values, {setSubmitting}) => {
                                setTimeout(() => {
                                    // alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                    // console.log(values);
                                    dispatch(auth(values.email, values.password, isRegister))
                                }, 400)
                                // if(token){
                                //     repalceHandler();
                                //     // console.log(props.history);
                                //     // props.history.replace("/");
                                // }
                            }}
                        >
                            <Form>
                                <div className="form-group">
                                    <MyTextInput
                                        label="Email Address"
                                        name="email"
                                        type="email"
                                        placeholder="jane@formik.com"
                                    />
                                </div>
                                <div className="form-group">
                                    <MyTextInput
                                        label="Password"
                                        name="password"
                                        type="password"
                                        placeholder="Your Password"
                                    />
                                </div>
                                <div className="form-group">
                                    <MyCheckBox name="rememberMe">
                                        <div className="custom-control-label">Remember Me</div>
                                    </MyCheckBox>
                                    <a href="forget.html" className="forget">Forget your password?</a>
                                </div>
                                <button type="submit" className="btn btn-block ">Login</button>
                            </Form>
                        </Formik>
                    </div>
                    <p className="go-login text-center mt-3">Don't have an account?<Link to="/register"><strong> Register Now</strong></Link></p>
                </React.Fragment>
                ):
                (<Spinner animation="border" style={{margin: '100px auto', display: 'block'}}/>)
            }
        </div>
     );
}
 
export default Login;


// {errorMessage ? (
//     <Toast
//         style={{
//             position: 'absolute',
//             top: '0',
//             right: '0',
//             zIndex: '10'
//         }}
//         onClose={() => setShow(false)}
//         delay={3000} 
//         autohide
//     >
//         {/* <Toast.Header>
//         <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
//         <strong className="mr-auto">Bootstrap</strong>
//         <small>11 mins ago</small>
//         </Toast.Header> */}
//         <Toast.Body>{errorMessage.message}</Toast.Body>
//     </Toast>
// ):null}