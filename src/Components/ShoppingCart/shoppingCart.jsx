import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../BreadCrumb/breadCrumb'
import CartSummary from '../CartSummary/cartSummary'
import Pagination from '../Pagination/pagination'
import CartProduct from '../Product/CartProduct/cartProduct'
import {GrUpdate} from 'react-icons/gr'
import {RiArrowGoBackFill} from 'react-icons/ri'
import './ShoppingCart.css'
import Related from '../Related/related'

const ShoppingCart = () => {
    return ( 
        <React.Fragment>
            <BreadCrumb />
            <div className="shopping-cart">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <CartProduct/> 
                                </div>
                                <div className="col-md-6">
                                    <CartProduct/> 
                                </div>
                                <div className="col-md-6">
                                    <CartProduct/> 
                                </div>
                                <div className="col-md-6">
                                    <CartProduct/> 
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <Link to="/" className="btn back-btn"><RiArrowGoBackFill className="update-icon"/> Back to Shopping</Link>
                                <Pagination />
                                <a href="#" className="btn update-btn"><GrUpdate className="update-icon"/> Update Cart</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <CartSummary />
                        </div>
                    </div>
                    <Related/>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default ShoppingCart;