import React from 'react'
import ProfileSidebar from '../../Profile/ProfileSidebar/profileSideBar'
import {MdAdd} from 'react-icons/md'
import Address from './address/address'
import './addresses.css'

const Addresses = (props) => {
    return ( 
        <div className="addresses pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ProfileSidebar />
                    </div>
                    <div className="col-md-8">
                        <button className="btn add-new"><MdAdd />Add new Address</button>
                        <div className="row">
                            <div className="col-md-6"><Address default="active"/></div>
                            <div className="col-md-6"><Address /></div>
                            <div className="col-md-6"><Address /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Addresses;