import React from 'react'
import { Container } from 'react-bootstrap';
import { BiEnvelope, BiPhone } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import Search from '../../../../SecondaryComponents/Search/search';
import './responsiveMenu.css'

const ResponsiveMenu = (props) => {
    return ( 
        <React.Fragment>
            <div className="responsiveMenu">
                <Container>
                    <Search />
                    <div className="navbar-responsive">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" to="/" exact>Home <span className="sr-only">(current)</span></NavLink>
                            <NavLink className="nav-link" to="/shopProducts">Shop</NavLink>
                            <NavLink className="nav-link" to="/profile/orders">Orders</NavLink>
                            <NavLink className="nav-link" to="/about">About Us</NavLink>
                            <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
                        </div>
                    </div>
                    <div className="right">
                        <div className="phone">
                            <span><BiPhone className="top-icon"/>Call: 01020122011</span>
                        </div>
                        <div className="email">
                            <span><BiEnvelope className="top-icon"/>Email: SaidOmar@gmail.com</span>
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
     );
}
 
export default ResponsiveMenu;