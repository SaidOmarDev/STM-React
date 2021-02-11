import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateCartQuantity } from '../../../actions/cartActions'
import './quantity.css'

const Quantity = (props) => {
    const dispatch = useDispatch()
    const [quantity, setQuntity] = useState(props.quantity)

    const incrementHandler = ()=>{
        setQuntity(prevState => prevState + 1)
    }
    const decrementHandler = ()=>{
        setQuntity(prevState => prevState - 1)
    }

    useEffect(()=>{
        dispatch(updateCartQuantity(props.id,quantity))
    },[quantity, dispatch])
    
    return ( 
        <div className="quantity">
            <h6>Quantity: </h6>
            <div className="input-group">
                {quantity>0 ?
                    <div className="input-group-prepend">
                        <span 
                            className="input-group-text btn"
                            onClick={decrementHandler}
                            >-</span>
                    </div> : null
                }
                <input 
                    className="form-control"
                    type="text" 
                    value={quantity}
                    readOnly/>
                <div className="input-group-append">
                    <span 
                        className="input-group-text btn"
                        onClick={incrementHandler}
                        >+</span>
                </div>
            </div>
        </div>
     );
}

export default Quantity;