import React from 'react'
import {FaCheck} from 'react-icons/fa'
import {MdDelete, MdEdit} from 'react-icons/md'
import './address.css'

const Address = (props) => {
    return ( 
        <div className="address">
            <div className="card">
                <h5>London, United Kingdom</h5>
                <p>Building: Nestone</p>
                <p>Floor: 22, Aprt: 12</p>
                <div className="actions">
                    {props.default === 'active' ? <button className="btn active"><FaCheck className="default-icon"/>Default</button> : <button className="btn"><FaCheck className="default-icon"/>Default</button>}
                    
                    <button className="btn"><MdEdit /></button>
                    <button className="btn"><MdDelete className="delete-icon"/></button>
                </div>
            </div>
        </div>
     );
}
 
export default Address;