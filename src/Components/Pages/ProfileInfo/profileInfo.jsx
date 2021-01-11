import React from 'react'
import ProfileSidebar from '../../Profile/ProfileSidebar/profileSideBar'
import {AiOutlineLogout} from 'react-icons/ai'
import './profileInfo.css'

const ProfileInfo = (props) => {
    return ( 
        <div className="profile-data pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ProfileSidebar />
                    </div>
                    <div className="col-md-8">
                    <div className="wishlist-header">
                        <span>Update Profile Info</span>
                        <button className="btn">Sign out <AiOutlineLogout /></button>
                    </div>
                    <div className="profile-info">
                        <div className="user-prief">
                            <img src="/images/avatar.png" alt=""/>
                            <div className="user-info">
                                <button className="btn"><i className="far fa-edit"></i>Change photo</button>
                                <p>Said Omar</p>
                            </div>
                        </div>
                        <form action="">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="fname">First Name</label>
                                    <input type="text" className="form-control" id="fname" placeholder="First Name" value="Said"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="lname">Last Name</label>
                                    <input type="text" className="form-control" id="lname" placeholder="Last Name" value="Omar"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="E-mail Address" value="ex@gmail.com" disabled/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" className="form-control" id="phone" placeholder="Phone Number"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="npassword">New Password</label>
                                    <input type="password" className="form-control" id="npassword" placeholder="New Password"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="cpassword">Confirm Password</label>
                                    <input type="password" className="form-control" id="cpassword" placeholder="Confirm Password"/>
                                </div>
                            </div>
                            <button type="submit" className="btn">Update Profile</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProfileInfo;