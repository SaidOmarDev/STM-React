import React from 'react'
import './delivery-services.css'
import {FiTruck} from 'react-icons/fi'
import {FaUndo} from 'react-icons/fa'
import {BiWallet} from 'react-icons/bi'

const DelivryServices = (props) => {
    return ( 
        <div className="services">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="service">
                            <div className="service-icon">
                                <FiTruck />
                            </div>
                            <div className="service-text">
                                <h5>Free Delivery</h5>
                                <span>From 100EGP</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="service">
                            <div className="service-icon">
                                <FaUndo />
                            </div>
                            <div className="service-text">
                                <h5>Free Delivery</h5>
                                <span>From 100EGP</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="service">
                            <div className="service-icon">
                                <BiWallet />
                            </div>
                            <div className="service-text">
                                <h5>Free Delivery</h5>
                                <span>From 100EGP</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="service">
                        <div className="service-icon">
                                <BiWallet />
                            </div>
                            <div className="service-text">
                                <h5>Free Delivery</h5>
                                <span>From 100EGP</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default DelivryServices;