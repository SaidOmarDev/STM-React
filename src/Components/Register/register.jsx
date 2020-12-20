import React from 'react'
import { Link } from 'react-router-dom';

const Register = (props) => {
    return ( 
        <div className="login-page">
            <div className="card login-form register">
                <h4 className="mb-4"><strong> Register</strong></h4>
                <form>
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
                </form>
            </div>
            <p className="go-login text-center mt-3">Have an account? <Link to="/login"><strong>Log In</strong></Link></p>
        </div>
     );
}
 
export default Register;