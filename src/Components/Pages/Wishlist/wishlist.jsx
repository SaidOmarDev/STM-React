import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

import {HiOutlineShoppingBag} from 'react-icons/hi'
import Pagination from '../../SecondaryComponents/Pagination/pagination'
import CartProduct from '../../SecondaryComponents/Product/CartProduct/cartProduct'
import ProfileSidebar from '../../Profile/ProfileSidebar/profileSideBar'
import './wishlist.css'
import { Col, Container, Row } from 'react-bootstrap'

const Wishlist = (props) => {
    const wishlist = useSelector((state) => state.wishlist.items)
    const cart = useSelector((state) => state.cart.items)
    const token = useSelector(state => state.auth.token)
    console.log(cart.length);

    return ( 
        <div className="wishlist-wrapper">
            <Container>
                <Row>
                    {token ? 
                        <Col md={4}>
                            <ProfileSidebar />
                        </Col>: null
                    }
                    <Col md={8}>
                        {token ? 
                            <React.Fragment>
                                {wishlist.length>0? (
                                    <React.Fragment>
                                        <Row>
                                            {wishlist.map(product =>(
                                                <Col lg={4} sm={6} key={product.id}>
                                                    <CartProduct 
                                                        productType="wish"
                                                        product={product}   
                                                        inCart={cart.length > 0 && cart.filter(item => item.id === product.id).length > 0 }
                                                    />
                                                </Col>
                                            ))}
                                        </Row>
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
                            </React.Fragment>
                            :
                            <div className="panel-body">
                                <HiOutlineShoppingBag className="bag-icon"/>
                                <p>WishList is empty</p>
                                <p className="redlogin">Already have an account? <span><Link to="/login">Login</Link></span> to see the items in your cart.</p>
                                <Link to="/" className="btn">Start Shopping</Link>
                            </div>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
     );
}

export default Wishlist;