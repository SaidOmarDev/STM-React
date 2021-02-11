import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import './ads.css'

const Ads = (props) => {
    return ( 
        <div className="ads-sec">
            <Container>
                <Row>
                    <Col md={9}>
                        <Card className="left-ad-card">
                            <div className="ad-card-text">
                                <p>Hurry up! Limited time offer</p>
                                <h2>Converse All Star on Sale</h2>
                                <a href="#" className="btn">Shop Now</a>
                            </div>
                            <div className="ad-card-img">
                                <img src="./images/leftAdImg.jpg" alt=""/>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="right-ad-card">
                            <img src="./images/addRightBg.jpg" alt=""/>
                            <div className="ad-card-text">
                                <h2>Converse All Star on Sale</h2>
                                <p>Hurry up! Limited time offer</p>
                                <a href="#" className="btn">Shop Now</a>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
     );
}
 
export default Ads;