import React from 'react'
import ProfileSidebar from '../../Profile/ProfileSidebar/profileSideBar'
import Order from './Order/order'

const Orders = (props) => {
    return ( 
        <div className="orders pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ProfileSidebar />
                    </div>
                    <div className="col-md-8">
                        <Order />
                        <Order />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Orders;