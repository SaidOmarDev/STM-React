import React from 'react'
import {BsStar} from 'react-icons/bs'
import {BsStarFill} from 'react-icons/bs'
import './rate-stars.css'

const RateStars = (props) => {
    return ( 
        <div className="rating-stars">
            <span>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStar />
            </span>
        </div>
     );
}
 
export default RateStars;