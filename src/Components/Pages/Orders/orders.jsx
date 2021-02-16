import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProfileSidebar from '../../Profile/ProfileSidebar/profileSideBar'
import Order from './Order/order'
import {FaBoxOpen} from 'react-icons/fa'
import './orders.css'

const Orders = (props) => {
    const token = localStorage.getItem('apiToken')

    return ( 
        <div className="orders pt-5 pb-5">
            <div className="container">
                <div className="row">
                    {token ? 
                        <React.Fragment>
                            <div className="col-md-4">
                                <ProfileSidebar />
                            </div>
                            <div className="col-md-8">
                                <Order />
                                <Order />
                            </div>
                        </React.Fragment>:
                        <div className="empty-orders">
                            <FaBoxOpen className="icon"/>
                            <p className="redlogin">Already have an account? <span><Link to="/login">Login</Link></span> to see your orders.</p>
                            <Link to="/" className="btn">Start Shopping</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Orders;