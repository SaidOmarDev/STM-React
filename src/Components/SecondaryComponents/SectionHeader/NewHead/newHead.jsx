import React from 'react';
import {FaAngleRight} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './newHead.css'

const NewHead = (props) => {
    return ( 
        <div className="head">
            <h3>{props.header}</h3>
            <Link to="/shopProducts" className="btn">More Products<FaAngleRight className="angle-right"/></Link>
        </div>
     );
}

export default NewHead;