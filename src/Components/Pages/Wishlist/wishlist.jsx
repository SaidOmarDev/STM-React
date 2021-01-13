import React from 'react'
import {useSelector} from 'react-redux'

import {HiOutlineShoppingBag} from 'react-icons/hi'
import Pagination from '../../SecondaryComponents/Pagination/pagination'
import CartProduct from '../../SecondaryComponents/Product/CartProduct/cartProduct'
import ProfileSidebar from '../../Profile/ProfileSidebar/profileSideBar'
import './wishlist.css'

const Wishlist = (props) => {
    const wishlist = useSelector((state) => state.wishlist.items);
    const cart = useSelector((state) => state.cart.items);

    return ( 
        <div className="wishlist-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ProfileSidebar />
                    </div>
                    <div className="col-md-8">
                        {wishlist.length>0? (
                            <React.Fragment>
                                <div className="row">
                                    {wishlist.map(product =>(
                                        <div className="col-md-4" key={product.id}>
                                            <CartProduct 
                                                productType="wish"
                                                product={product}   
                                                inCart={cart.length > 0 && cart.filter(item => item.id === product.id).length > 0 }
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="cart-bottom">
                                    <Pagination />
                                </div>
                            </React.Fragment>
                        ) : (
                            <div className="panel-body">
                                <HiOutlineShoppingBag className="bag-icon"/>
                                <p>WishList is empty</p>
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Wishlist;