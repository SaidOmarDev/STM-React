import React from 'react'
import './delivery-services.css'
import {FiTruck} from 'react-icons/fi'
import {FaUndo} from 'react-icons/fa'
import {BiWallet} from 'react-icons/bi'
import { Col, Container, Row } from 'react-bootstrap'

const DelivryServices = (props) => {
    return ( 
        <div className="services">
            <Container>
                <Row>
                    <Col lg={3} md={4} sm={6}>
                        <div className="service">
                            <div className="service-icon">
                                <FiTruck />
                            </div>
                            <div className="service-text">
                                <h5>Free Delivery</h5>
                                <span>From 100EGP</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6}>
                        <div className="service">
                            <div className="service-icon">
                                <FaUndo />
                            </div>
                            <div className="service-text">
                                <h5>Free Delivery</h5>
                                <span>From 100EGP</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6}>
                        <div className="service">
                            <div className="service-icon">
                                <BiWallet />
                            </div>
                            <div className="service-text">
                                <h5>Free Delivery</h5>
                                <span>From 100EGP</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6}>
                        <div className="service">
                        <div className="service-icon">
                                <BiWallet />
                            </div>
                            <div className="service-text">
                                <h5>Free Delivery</h5>
                                <span>From 100EGP</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
     );
}
 
export default DelivryServices;