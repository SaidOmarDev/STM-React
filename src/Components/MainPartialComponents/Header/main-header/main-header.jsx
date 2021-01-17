import React from 'react'
import './main-header.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FaRegHeart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Search from '../../../SecondaryComponents/Search/search'
import { useSelector } from 'react-redux'
import { Col, Container, Row, Dropdown } from 'react-bootstrap'
import { BsBag } from 'react-icons/bs'
import { FiMapPin } from 'react-icons/fi'
import { HiOutlineUser } from 'react-icons/hi'
import { BiLogOut } from 'react-icons/bi'
// import { Dropdown } from 'bootstrap'

const MainHeader = (props) => {
    const wishlist = useSelector((state) => state.wishlist.items)
    const token = useSelector(state => state.auth.token)
    console.log(token);
    let classes = []
    if(!token){
        classes.push('notAuth')
    }
    return ( 
        <div className="main-header">
            <Container>
                <Row>
                    <Col sm={2}>
                        <a href="#" className="navbar-brand">LOGO</a>
                    </Col>
                    <Col md={6}>
                        <Search mainSearch={true}/>
                    </Col>
                    <Col md={4}>
                        <div className={`shop-setting ${classes}`}>
                            <div className="wishlist">
                                <FaRegHeart className="main-icon"/>
                                <div>
                                    <Link to="/profile/wishlist">Wishlist</Link>
                                    <span>{wishlist.length}</span>
                                </div>
                            </div>
                            {token ? (
                                <div className="account">
                                    <img src="images/team2.jpg" className="main-icon" alt=""/>
                                    <div>
                                        <span>Hello</span>
                                        <Dropdown>
                                            <Dropdown.Toggle>
                                                User Name
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1"><BsBag className="account-icon"/> Orders</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2"><FiMapPin className="account-icon"/> Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3"><HiOutlineUser className="account-icon"/> Something else</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item href="#/action-3"><BiLogOut className="account-icon"/> Logout</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                                ): null
                            }
                            
                            <div className="cart">
                                <AiOutlineShoppingCart className="main-icon"/>
                                <div>
                                    <Link to="/shoppingCart">Cart</Link>
                                    <span>EGP {500}</span>
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