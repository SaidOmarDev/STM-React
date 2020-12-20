import React from 'react'
import ProfileSidebar from './ProfileSidebar/profileSideBar'

const Profile = (props) => {
    return ( 
        <div className="profile">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ProfileSidebar />
                    </div>
                    <div className="col-md-8">
                        <Route path="/profile/wishlist" component={Wishlist} />
                        <Route path="/profile/settings" component={ProfileInfo} />
                        <Route path="/profile/orders" component={Orders} />
                        <Route path="/profile/addresses" component={Addresses} />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Profile;