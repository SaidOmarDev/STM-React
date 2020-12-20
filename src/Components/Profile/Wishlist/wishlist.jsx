import React from 'react'
import Pagination from '../../Pagination/pagination'
import CartProduct from '../../Product/CartProduct/cartProduct'
import ProfileSidebar from '../ProfileSidebar/profileSideBar'
import './wishlist.css'

const Wishlist = (props) => {
    return ( 
        <div className="wishlist-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ProfileSidebar />
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                <CartProduct productType="wish"/>
                            </div>
                            <div className="col-md-6">
                                <CartProduct productType="wish"/>
                            </div>
                            <div className="col-md-6">
                                <CartProduct productType="wish"/>
                            </div>
                            <div className="col-md-6">
                                <CartProduct productType="wish"/>
                            </div>
                        </div>
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Wishlist;