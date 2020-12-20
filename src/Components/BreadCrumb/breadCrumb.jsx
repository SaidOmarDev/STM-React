import React from 'react'
import './breadCrumb.css'
import RateStars from '../RateStars/rate-stars'
import {FaHome} from 'react-icons/fa'

const BreadCrumb = (props) => {
    return ( 
        <div className="details-header">
            <div className="container">
                <div className="header-content">
                    <div className="pro-reviews">
                        <h3>product name</h3>
                        <div className="d-flex align-items-center">
                            <RateStars />
                            <span className="rating-nums">30 Reviews</span>
                        </div>
                    </div>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#"><i className="fas fa-home"></i><FaHome /> Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">ProductDetails</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
     );
}
 
export default BreadCrumb;