import React from 'react'
import { Button } from 'react-bootstrap';
import {FaChevronLeft} from 'react-icons/fa'

const PrevArrow = (props) => {
    const {onClick} = props
    return ( 
        <Button className="arrow-btn prev" onClick={onClick}>
            <FaChevronLeft className="arrow-icon"/>
        </Button>
     );
}
 
export default PrevArrow;