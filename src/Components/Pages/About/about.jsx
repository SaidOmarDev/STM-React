import React from 'react'
import { Link } from 'react-router-dom';
import BreadCrumb from '../../SecondaryComponents/BreadCrumb/breadCrumb';
import './about.css'

const About = (props) => {
    return ( 
        <React.Fragment>
            <BreadCrumb pagename="About Us"/>
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="./images/about0.jpg" alt="" className="main-img"/>
                        </div>
                        <div className="col-md-6">
                            <div className="main-content">
                                <h3>Search, Select, Buy online</h3>
                                <p>Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit. 
                                    Aliquam id purus at risus pellentesque faucibus a quis eros.
                                    In eu fermentum leo. 
                                    Integer ut eros lacus. Proin ut accumsan leo. 
                                    orbi vitae est eget dolor consequat aliquam eget quis dolor. 
                                    Mauris rutrum fermentum erat, at euismod lorem pharetra nec.</p>
                                {/* <Link to="/shopProducts" className="btn">View Products</Link> */}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="main-content">
                                <h3>Fast delivery worldwide</h3>
                                <p>Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit. 
                                    Aliquam id purus at risus pellentesque faucibus a quis eros.
                                    In eu fermentum leo. 
                                    Integer ut eros lacus. Proin ut accumsan leo. 
                                    orbi vitae est eget dolor consequat aliquam eget quis dolor. 
                                    Mauris rutrum fermentum erat, at euismod lorem pharetra nec.</p>
                                {/* <Link to="/shopProducts" className="btn">Shipping Details</Link> */}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="./images/about1.jpg" alt="" className="main-img"/>
                        </div>
                        <div className="col-md-6">
                            <img src="./images/about2.jpg" alt="" className="main-img"/>
                        </div>
                        <div className="col-md-6">
                            <div className="main-content">
                                <h3>Great mobile app. Shop on the go</h3>
                                <p>Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit. 
                                    Aliquam id purus at risus pellentesque faucibus a quis eros.
                                    In eu fermentum leo. 
                                    Integer ut eros lacus. Proin ut accumsan leo. 
                                    orbi vitae est eget dolor consequat aliquam eget quis dolor. 
                                    Mauris rutrum fermentum erat, at euismod lorem pharetra nec.</p>
                                {/* <Link to="/shopProducts" className="btn">View Products</Link> */}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="main-content">
                                <h3>Shop offline. Cozy outlet stores</h3>
                                <p>Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit. 
                                    Aliquam id purus at risus pellentesque faucibus a quis eros.
                                    In eu fermentum leo. 
                                    Integer ut eros lacus. Proin ut accumsan leo. 
                                    orbi vitae est eget dolor consequat aliquam eget quis dolor. 
                                    Mauris rutrum fermentum erat, at euismod lorem pharetra nec.</p>
                                <div className="d-flex">
                                    <Link to="/shopProducts" className="btn app">
                                        <img src="./images/google-play-badge.png" alt=""/>
                                    </Link>
                                    <Link to="/shopProducts" className="btn app">
                                        <img src="./images/app-store-badge.png" alt=""/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="./images/about2.jpg" alt="" className="main-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default About;