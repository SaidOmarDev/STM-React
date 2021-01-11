import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector } from 'react-redux';
import {fetchCart} from '../../../actions/cartActions'

import BreadCrumb from '../../SecondaryComponents/BreadCrumb/breadCrumb'
import CartSummary from '../../MainPartialComponents/CartSummary/cartSummary'
import Pagination from '../../SecondaryComponents/Pagination/pagination'
import CartProduct from '../../SecondaryComponents/Product/CartProduct/cartProduct'
import {GrUpdate} from 'react-icons/gr'
import {RiArrowGoBackFill} from 'react-icons/ri'
import './ShoppingCart.css'

const ShoppingCart = (props) => {
    const cart = useSelector((state) => state.cart.items)
    const wishlist = useSelector((state) => state.wishlist.items)

    let grandTotal = 0;
    cart.map(item => grandTotal += item.price * item.quantity);

    return ( 
        <React.Fragment>
            <BreadCrumb pagename="Shopping Cart"/>
            <div className="shopping-cart">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            {cart.length>0 ? (
                                <React.Fragment>
                                    <div className="row">
                                        {cart.map(item=>(
                                            <div className="col-md-6" key={item.id}>
                                                <CartProduct
                                                    product={item}
                                                    inWishlist={wishlist.length>0 && wishlist.filter(pro=>pro.id===item.id).length>0}
                                                /> 
                                            </div>
                                        ))}
                                    </div> 
                                    <div className="cart-bottom">
                                        <Link to="/" className="btn back-btn"><RiArrowGoBackFill className="update-icon"/> Back to Shopping</Link>
                                        <Pagination />
                                        <a href="#" className="btn update-btn"><GrUpdate className="update-icon"/> Update Cart</a>
                                    </div>
                                </React.Fragment>
                                ) : 
                                (
                                    <div className="panel-body">
                                        <p>Cart is empty</p>
                                    </div>
                                )
                            }
                            
                            
                        </div>
                        <div className="col-md-4">
                            <CartSummary grandTotal={grandTotal}/>
                        </div>
                    </div>
                    {/* <Related/> */}
                </div>
            </div>
        </React.Fragment>
     );
}
// function mapStateToProps(state) {
//     return {
//         cart: state.cart.items,
//         wishlist: state.wishlist.items
//     }
// }
 
export default ShoppingCart;