import React from 'react'
import './main-header.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FaRegHeart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Search from '../../../SecondaryComponents/Search/search'
import { useSelector } from 'react-redux'

const MainHeader = (props) => {
    const wishlist = useSelector((state) => state.wishlist.items)
    return ( 
        <div className="main-header">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <a href="#" className="navbar-brand">LOGO</a>
                    </div>
                    <div className="col-md-6">
                        <Search mainSearch={true}/>
                    </div>
                    <div className="col-md-4">
                        <div className="shop-setting">
                            <div className="wishlist">
                                <AiOutlineShoppingCart className="main-icon"/>
                                <div>
                                    <Link to="/profile/wishlist">Wishlist</Link>
                                    <span>{wishlist.length}</span>
                                </div>
                            </div>
                            <div className="cart">
                                <FaRegHeart className="main-icon"/>
                                <div>
                                    <Link to="/shoppingCart">Cart</Link>
                                    <span>EGP {500}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default MainHeader;