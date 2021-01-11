import React from 'react';
import {FaAngleRight} from 'react-icons/fa'
import './newHead.css'

const NewHead = (props) => {
    return ( 
        <div className="head">
            <h3>{props.header}</h3>
            <a href="#" className="btn">More Products<FaAngleRight className="angle-right"/></a>
        </div>
     );
}

export default NewHead;