import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../../actions/AuthActions';
import {Formik, Form, useField} from 'formik'
import * as Yup from 'yup'
import { Spinner, Toast } from 'react-bootstrap';
import AlertToast from '../../SecondaryComponents/AlertToast/alertToast';


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

const VerifiCode = (props) => {
    const history = useHistory()
    const dispatch = useDispatch();
    const loading = useSelector(state=> state.auth.loading);
    const token = useSelector(state=> state.auth.token);
    const errorMessage = useSelector(state => state.auth.error);
    

    return ( 
        <React.Fragment>
            {errorMessage ? <AlertToast type="bg-danger" content={errorMessage} show={true}/> : null}
            <div className="login-page">
                    <React.Fragment>
                        <div className="card login-form">
                            <h4>verify phone number</h4>
                            <Formik
                                initialValues={{
                                    vercode:'',
                                }}
                                validationSchema={Yup.object().shape({
                                    vercode: Yup.number().required('*required')
                                })}
                                onSubmit={(values, {setSubmitting}) => {
                                    setTimeout(() => {
                                        // alert(JSON.stringify(values, null, 2));
                                        setSubmitting(false);
                                        console.log(values);
                                    }, 400)
                                }}
                            >
                                <Form>
                                    <div className="form-group">
                                        <MyTextInput
                                            label="Verification Code"
                                            name="vercode"
                                            type="text"
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-block ">Create Account</button>
                                </Form>
                            </Formik>
                        </div>
                        {/* <p className="go-login text-center mt-3">Don't have an account?<Link to="/register"><strong> Register Now</strong></Link></p> */}
                    </React.Fragment>
            </div>
        </React.Fragment>
     );
}
 
export default VerifiCode;