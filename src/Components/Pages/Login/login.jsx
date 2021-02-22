import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../../actions/AuthActions';
import {Formik, Form, useField} from 'formik'
import * as Yup from 'yup'
import { Spinner, Toast } from 'react-bootstrap';
import AlertToast from '../../SecondaryComponents/AlertToast/alertToast';
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs';
import './login.css'

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
const MyTextInputWithAppend = ({...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
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
    const [showPassword, setShowPassword] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch();
    const loading = useSelector(state=> state.auth.loading);
    const token = useSelector(state=> state.auth.token);
    const errorMessage = useSelector(state => state.auth.error);
    useEffect(() => {
        if(token){
            history.goBack()
            // props.history.replace('/');
        }
    },[token])
    const showPasswordHandler = () => {
        setShowPassword(!showPassword)
    }

    return ( 
        <React.Fragment>
            {errorMessage ? <AlertToast type="bg-danger" content={errorMessage} show={true}/> : null}
            <div className="login-page">
                {!loading && !token ? (
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
                                        dispatch(auth(values, isRegister))
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
                                        <label htmlFor="password">Password</label>
                                        <div className="input-group">
                                            <MyTextInputWithAppend
                                                label="Password"
                                                name="password"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Your Password"
                                            />
                                            <div className="input-group-append">
                                                <span className="input-group-text" onClick={showPasswordHandler}>
                                                    { showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                                                </span>
                                            </div>
                                        </div>
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
        </React.Fragment>
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