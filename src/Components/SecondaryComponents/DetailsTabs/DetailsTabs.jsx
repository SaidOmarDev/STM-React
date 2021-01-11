import React from 'react';
import { NavLink } from 'react-router-dom';
import './DetailsTabs.css'

const Tabs = (props) => {
    return ( 
        <div className="tabs">
            <ul className="nav">
                <li className="nav-item">
                    <NavLink to={`/productDetails/${props.productId}/description`} className="nav-link">Description</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={`/productDetails/${props.productId}/reviews`} className="nav-link">Reviews (01)</NavLink>
                </li>
            </ul>
        </div>
     );
}
 
export default Tabs;