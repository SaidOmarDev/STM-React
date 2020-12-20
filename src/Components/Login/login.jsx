import React from 'react'
import { Link } from 'react-router-dom';
import './login.css'

const Login = (props) => {
    return ( 
        <div className="login-page">
            <div className="card login-form">
                <h4>Login</h4>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <div className="custom-control-label">Remember me</div>
                        </label>
                        <a href="forget.html" className="forget">Forget your password?</a>
                    </div>
                    <button type="submit" className="btn btn-block ">Login</button>
                </form>
            </div>
            <p className="go-login text-center mt-3">Don't have an account?<Link to="/register"><strong> Register Now</strong></Link></p>
        </div>
     );
}
 
export default Login;