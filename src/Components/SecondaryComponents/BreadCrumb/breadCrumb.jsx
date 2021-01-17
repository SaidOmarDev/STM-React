import React from 'react'
import { Container, Breadcrumb } from 'react-bootstrap'
import RateStars from '../RateStars/rate-stars'
import {FaHome} from 'react-icons/fa'
import './breadCrumb.css'

const BreadCrumb = (props) => {
    return ( 
        <div className="details-header">
            <Container>
                <div className="header-content">
                    <div className="pro-reviews">
                        {props.proname ? <h3>{props.proname}</h3>:<h3>{props.pagename}</h3>}
                        {props.proname ? 
                            (<div className="d-flex align-items-center">
                                <RateStars />
                                <span className="rating-nums">30 Reviews</span>
                            </div>) : null
                        }
                    </div>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#"><FaHome /> Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>{props.pagename}</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </Container>
        </div>
     );
}
 
export default BreadCrumb;