import React from 'react'
import { Button } from 'react-bootstrap';
import {FaChevronRight} from 'react-icons/fa'
import './nextArrow.css'

const NextArrow = (props) => {
    const {onClick} = props
    return ( 
        <Button className="arrow-btn next" onClick={onClick}>
            <FaChevronRight className="arrow-icon"/>
        </Button>
     );
}
 
export default NextArrow;