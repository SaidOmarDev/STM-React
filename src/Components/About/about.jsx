import React from 'react'
import BreadCrumb from '../BreadCrumb/breadCrumb';
import BuyImg from '../../assets/images/about0.jpg'
import FastImg from '../../assets/images/about1.jpg'
import OutletImg from '../../assets/images/about2.jpg'
import AppImg from '../../assets/images/about3.jpg'
import PlayBadge from '../../assets/images/google-play-badge.png'
import AppStoreBadge from '../../assets/images/app-store-badge.png'

import './about.css'
import { Link } from 'react-router-dom';

const About = (props) => {
    return ( 
        <React.Fragment>
            <BreadCrumb />
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={BuyImg} alt="" className="main-img"/>
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
                                <Link to="/shopProducts" className="btn">View Products</Link>
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
                                <Link to="/shopProducts" className="btn">Shipping Details</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={FastImg} alt="" className="main-img"/>
                        </div>
                        <div className="col-md-6">
                            <img src={AppImg} alt="" className="main-img"/>
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
                                <Link to="/shopProducts" className="btn">View Products</Link>
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
                                        <img src={PlayBadge} alt=""/>
                                    </Link>
                                    <Link to="/shopProducts" className="btn app">
                                        <img src={AppStoreBadge} alt=""/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={OutletImg} alt="" className="main-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default About;