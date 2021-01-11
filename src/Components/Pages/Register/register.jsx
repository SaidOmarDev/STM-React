import React from 'react'
import {Formik, Form, useField} from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom';


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
const MyRadioButton = ({children, ...props}) => {
    const [field, meta] = useField({...props, type: 'radio'})
    return (
        <>
            <label className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" {...field} {...props} />
                {children}
            </label>
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
const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select className="custom-select form-control" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
};


const Register = (props) => {
    return ( 
        <div className="login-page">
            <div className="card login-form register">
                <h4 className="mb-4"><strong> Register</strong></h4>
                <Formik
                    initialValues={{
                        fullName: '',
                        email: '',
                        birthDate: '',
                        phone: '',
                        password: '',
                        confirmPassword: '',
                        acceptTerms: false,
                        gender: ''
                    }}
                    validationSchema={Yup.object().shape({
                        fullName: Yup.string().max(20, '* Must be 20 character or less').required('* required'),
                        email: Yup.string().email('* Invalid Email address').required('* required'),
                        phone: Yup.number().required('* required'),
                        acceptedTerms: Yup.boolean().required('* required')
                        .oneOf([true], 'You must accept the terms and conditions.'),
                        password: Yup.string().required('* required'),
                        confirmPassword: Yup.string().required('* required'),
                        birthDate: Yup.string().required('* required')
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);   
                        }, 400)
                    }}>
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
                            <div className="col-12">
                                <div className="form-group">
                                    <MyTextInput
                                        label="Birthdate"
                                        name="birthDate"
                                        type="date"
                                        placeholder="12/12/2020"
                                    />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <MyRadioButton name="gender" value="Male" checked>
                                        <span className="custom-control-label">Male</span>
                                    </MyRadioButton>
                                    <MyRadioButton name="gender" value="Female">
                                        <span className="custom-control-label">Female</span>
                                    </MyRadioButton>
                                    {/* {value.gender} */}
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <MyTextInput
                                        label="Phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="01022336655"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <MyTextInput
                                        label="Password"
                                        name="password"
                                        type="password"
                                        placeholder="Your Password"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <MyTextInput
                                        label="Confirmed Password"
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="Your Confirmed Password"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <MyCheckBox name="acceptedTerms">
                                <div className="custom-control-label">I accept the <a href="policy.html">Terms & Policy</a></div>
                            </MyCheckBox>
                        </div>
                        <button type="submit" className="btn btn-block ">Create Account</button>
                    </Form>
                </Formik>
            </div>
            <p className="go-login text-center mt-3">Have an account? <Link to="/login"><strong>Log In</strong></Link></p>
        </div>
     );
}
 
export default Register;



{/* <form>
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input type="text" className="form-control" id="fullname" placeholder="Enter Full Name"/>
            </div>
        </div>
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Your Email"/>
            </div>
        </div>
        <div className="col-12">
            <div className="form-group">
                <label htmlFor="date">Birthdate</label>
                <input type="date" className="form-control" id="date" placeholder="Your Birthdate"/>
            </div>
        </div>
        <div className="col-12">
            <div className="form-group">
                <label className="custom-control custom-radio custom-control-inline">
                    <input type="radio" className="custom-control-input" name="gender" value="option1" checked/>
                    <span className="custom-control-label">Male</span>
                </label>
                <label className="custom-control custom-radio custom-control-inline">
                    <input type="radio" className="custom-control-input" name="gender" value="option2"/>
                    <span className="custom-control-label">Female</span>
                </label>
            </div>
        </div>
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" className="form-control" id="city" placeholder="Your City"/>
            </div>
        </div>
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="country">Country</label>
                <select name="country" id="country" className="custom-select form-control">
                    <option value="1">Egypt</option>
                    <option value="2">Saudi Arabia</option>
                    <option value="3">Tunisia</option>
                </select>
            </div>
        </div>
        <div className="col-12">
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" className="form-control" id="phone" placeholder="Phone Number"/>
            </div>
        </div>
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password"/>
            </div>
        </div>
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="confpassword">Confirm Password</label>
                <input type="password" className="form-control" id="confpassword" placeholder="Confirm Password"/>
            </div>
        </div>
    </div>
    <div className="form-group">
        <label className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" />
            <div className="custom-control-label">I accept the <a href="policy.html">Terms & Policy</a></div>
        </label>
    </div>
    <button type="submit" className="btn btn-block ">Create Account</button>
</form> */}