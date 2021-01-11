import React from 'react'
import {Formik, Form, useField} from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom';
import './login.css'

const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="form-control" {...field} {...props}/>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
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
            ) : null}
        </>
    );
};

const Login = (props) => {
    return ( 
        <div className="login-page">
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
                        rememberMe: Yup.boolean().required('*required')
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400)
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
        </div>
     );
}
 
export default Login;