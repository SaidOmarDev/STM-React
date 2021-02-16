import React from 'react'
import './main-header.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FaRegHeart} from 'react-icons/fa'
import { Link, useHistory } from 'react-router-dom'
import Search from '../../../SecondaryComponents/Search/search'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Row, Dropdown } from 'react-bootstrap'
import { BsBag } from 'react-icons/bs'
import { FiMapPin } from 'react-icons/fi'
import { HiOutlineUser } from 'react-icons/hi'
import { BiLogOut } from 'react-icons/bi'
import { logout } from '../../../../actions/AuthActions'
// import { Dropdown } from 'bootstrap'

const MainHeader = (props) => {
    const wishlist = useSelector((state) => state.wishlist.items)
    const cart = useSelector((state) => state.cart.items)
    // const token = useSelector(state => state.auth.token)
    const history = useHistory()
    const dispatch = useDispatch();
    
    let total = 0
    if(cart.length>0){
        cart.map(item => total += item.price)
    }

    let classes = []
    if(!props.token){
        classes.push('notAuth')
    }

    const logoutHandler = () => {
        dispatch(logout());
        history.replace('/')
    }

    return ( 
        <div className="main-header">
            <Container>
                <Row>
                    <Col md={2}>
                        <Link to="/" className="navbar-brand">STM</Link>
                    </Col>
                    <Col lg={6} md={5}>
                        <Search mainSearch={true}/>
                    </Col>
                    <Col lg={4} md={5}>
                        <div className={`shop-setting ${classes}`}>
                        {props.token ? (
                                <div className="account">
                                    <img src="images/team2.jpg" className="main-icon" alt=""/>
                                    <div>
                                        <span>Hello</span>
                                        <Dropdown>
                                            <Dropdown.Toggle>
                                                User Name
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item as={Link} to="/profile/orders"><BsBag className="account-icon"/> Orders</Dropdown.Item>
                                                <Dropdown.Item as={Link} to="/profile/addresses"><FiMapPin className="account-icon"/> Addresses</Dropdown.Item>
                                                <Dropdown.Item as={Link} to="/profile/settings"><HiOutlineUser className="account-icon"/> Profile Info</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item onClick={logoutHandler}><BiLogOut className="account-icon"/> Logout</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                                ): null
                            }
                            <div className="wishlist">
                                <FaRegHeart className="main-icon"/>
                                <div>
                                    <Link to="/profile/wishlist">Wishlist</Link>
                                    <span>{props.token ? wishlist.length : 0}</span>
                                </div>
                            </div>
                            <div className="cart">
                                <AiOutlineShoppingCart className="main-icon"/>
                                <div>
                                    <Link to="/shoppingCart">Cart</Link>
                                    <span>EGP {total}</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
     );
}
 
export default MainHeader;