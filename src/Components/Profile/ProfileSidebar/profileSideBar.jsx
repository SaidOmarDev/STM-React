import React from 'react'
import {FaShoppingBag, FaRegHeart, FaRegUser, FaMapMarkerAlt} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

import avatar from '../../../assets/images/avatar.png'
import './profileSidebar.css'
const ProfileSidebar = (props) => {
    return ( 
        <div className="profile-sidebar">
            <div className="cart-summary">
                <div className="user-prief">
                    <img src={avatar} alt=""/>
                    <div className="user-info">
                        <h6>user name</h6>
                        <p>useremail@gmail.com</p>
                    </div>
                </div>
                <h3>Dashboard</h3>
                <ul className="list-style-group list-unstyled">
                    <li className="list-style-item">
                        <NavLink to="/profile/orders"><FaShoppingBag className="profile-icons"/> orders <span>1</span></NavLink>
                    </li>
                    <li className="list-style-item">
                        <NavLink to="/profile/wishlist"><FaRegHeart className="profile-icons"/>wishlist <span>4</span></NavLink>
                    </li>
                </ul>
                <h3>Account settings</h3>
                <ul className="list-style-group list-unstyled">
                    <li className="list-style-item">
                        <NavLink to="/profile/settings"><FaRegUser className="profile-icons"/> profile info</NavLink>
                    </li>
                    <li className="list-style-item">
                        <NavLink to="/profile/addresses"><FaMapMarkerAlt className="profile-icons"/>addresses</NavLink>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default ProfileSidebar;