import React from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {FiTruck} from 'react-icons/fi'
import {FaUndo} from 'react-icons/fa'
import {BiWallet} from 'react-icons/bi'
import { Col, Container, Row } from 'react-bootstrap'
import './delivery-services.css'

const DelivryServices = (props) => {
    const lang = useSelector(state=> state.lang.lang)
    const options = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        rtl: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };
    if(lang === 'ar'){
        options.rtl = true
    }else{
        options.rtl = false
    }
    return ( 
        <div className="services">
            <Container>
                {/* <Slider {...options}>
                    <div>
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
                    <div>
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
                    <div>
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
                    <div>
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
                </Slider> */}
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