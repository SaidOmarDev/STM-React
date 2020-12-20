import React, { useState } from 'react'
import './quantity.css'

const Quantity = (props) => {
    const [quntity, setQuntity] = useState(props.quntity)
    return ( 
        <div className="quantity">
            <h6>Quantity: </h6>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text btn">-</span>
                </div>
                <input 
                    className="form-control"
                    type="text" 
                    value={quntity}
                    onChange={(e)=>setQuntity(e.target.value)}/>
                <div className="input-group-append">
                    <span className="input-group-text btn">+</span>
                </div>
            </div>
        </div>
     );
}
 
export default Quantity;