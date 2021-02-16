import React, { useEffect, useState } from 'react'
import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './deals.css';

const Deals = (props) => {
    return ( 
        <div className="deals-container">
            <img className="img" src="/images/deals.png"/>
            <div className="deals-content">
                <div className="category">     
                    <h6>HeadPhones</h6>
                    <span>500EGP</span>
                </div>
                <div className="pro-name">
                    <Link to="/productDetails/1" ><h5>Samsung</h5></Link>
                    <span>350EGP</span>
                </div>
                <div className="available">
                    <div className="ava-head">
                        <h6>Available: <span>5</span></h6>
                        <h6>Already sold: <span>15</span></h6>
                    </div>
                    <div className="ava-progress">
                        <ProgressBar now={33} />
                    </div>
                </div>
                {/* <div className="end-time">
                    <div className="time-head">
                        <h6>Hurry Up</h6>
                        <span>Offer ends in:</span>
                    </div>
                    <div className="time">
                        <div className="time-box">
                            <div className="time-unit">
                                {hours}
                                <span>Hours</span>
                            </div>
                            <div className="time-unit">
                                {mins}
                                <span>MINS</span>
                            </div>
                            <div className="time-unit">
                                {secs}
                                <span>SECS</span>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
     );
}
 
export default Deals;