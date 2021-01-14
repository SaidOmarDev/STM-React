import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateCartQuantity } from '../../../actions/cartActions'
import './quantity.css'

const Quantity = (props) => {
    const dispatch = useDispatch()
    const [quantity, setQuntity] = useState(props.quantity)

    const handleChange = (e)=>{
        setQuntity(prevState => prevState += 1 )
        dispatch(updateCartQuantity(props.id,quantity))
    }

    const incrementHandler = ()=>{
        setQuntity(prevState => prevState + 1)
        dispatch(updateCartQuantity(props.id,quantity))
    }
    const decrementHandler = ()=>{
        setQuntity(prevState => prevState - 1)
        dispatch(updateCartQuantity(props.id,quantity))
    }
    
    return ( 
        <div className="quantity">
            <h6>Quantity: </h6>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span 
                        className="input-group-text btn"
                        onClick={decrementHandler}
                        >-</span>
                </div>
                <input 
                    className="form-control"
                    type="text" 
                    value={quantity}
                    onChange={handleChange}/>
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