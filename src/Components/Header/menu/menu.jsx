import React, { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import ClothingCate from '../../../assets/images/cloth-cate.jpg'
import FurnCate from '../../../assets/images/furn-cate.jpg'
import AccessCate from '../../../assets/images/access-cate.jpg'
import GadgCate from '../../../assets/images/gadg-cate.jpg'
import InterCate from '../../../assets/images/inter-cate.jpg'
import ShoesCate from '../../../assets/images/shoes-cate.jpg'
import { Link, NavLink } from 'react-router-dom';
import './menu.css'

const Menu = (props) => {
    const [ishover, setIshover] = useState(false);

    const handleHover = () => {
        setIshover(!ishover)
    }
    let classes = [] 
    if(ishover){
        classes.push('d-flex')
    }
    return ( 
        <div className="menu">
            <div className="container">
                <div className="menu-content">
                    <div className="categories">
                        <div 
                            className="main-category" 
                            onMouseEnter={handleHover}
                            
                            >
                            <span><FaBars className="bar-icon"/>CATEGORIES</span>
                        </div>
                        <div onMouseLeave={handleHover} className={`${classes} cate-list`}>
                                    <div className="category-list">
                                        <img src={ClothingCate} alt=""/>
                                        <h6>Clothing</h6>
                                        <ul className="list-unstyled sub-cate">
                                            <li>
                                                <Link to="/shopProducts">Women's Clothes</Link>
                                            </li>
                                            <li>
                                                <Link to="/shopProducts">Men's Clothes</Link>
                                            </li>
                                            <li>
                                                <Link to="/shopProducts">Kid's Clothes</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="category-list">
                                        <img src={FurnCate} alt=""/>
                                        <h6>Furniture</h6>
                                        <ul className="list-unstyled sub-cate">
                                            <li>
                                                <Link to="/shopProducts">Office Chairs</Link>
                                            </li>
                                            <li>
                                                <Link to="/shopProducts">Lounge Seating</Link>
                                            </li>
                                            <li>
                                                <Link to="/shopProducts">File Cabinets</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="category-list">
                                        <img src={GadgCate} alt=""/>
                                        <h6>Gadgets</h6>
                                        <ul className="list-unstyled sub-cate">
                                            <li>
                                                <Link to="/shopProducts">Mouses</Link>
                                            </li>
                                            <li>
                                                <Link to="/shopProducts">Headphones</Link>
                                            </li>
                                            <li>
                                                <Link to="/shopProducts">Keyboards</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="category-list">
                                        <img src={InterCate} alt=""/>
                                        <h6>Entertainment</h6>
                                        <ul className="list-unstyled sub-cate">
                                            <li>
                                                <Link to="/shopProducts">Gifts</Link>
                                            </li>
                                            <li>
                                                <Link to="/shopProducts">Table Games</Link>
                                            </li>
                                            <li>
                                                <Link to="/shopProducts">Music & CDs</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="category-list">
                                        <img src={ShoesCate} alt=""/>
                                        <h6>Shoes</h6>
                                        <ul className="list-unstyled sub-cate">
                                            <li>
                                                <Link to="/shopProducts">Women's Shoes</Link>
                                            </li>
                                            <li>
                                                <Link to="/shopProducts">Men's Shoes</Link>
                                            </li>
                                            <li>
                                                <Link to="/shopProducts">Kid's Shoes</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="category-list">
                                        <img src={AccessCate} alt=""/>
                                        <h6>Accessories</h6>
                                        <ul className="list-unstyled sub-cate">
                                            <li>
                                                <Link to="/shopProducts">Sunglasses</Link>
                                            </li>
                                            <li>
                                                <Link to="/shopProducts">Bags</Link>
                                            </li>
                                            <li>
                                                <Link to="/shopProducts">Hats</Link>
                                            </li>
                                        </ul>
                                    </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg navbar-light ml-auto">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink className="nav-link" to="/" exact>Home <span className="sr-only">(current)</span></NavLink>
                                <NavLink className="nav-link" to="/shopProducts">Features</NavLink>
                                <NavLink className="nav-link" to="/review">Pricing</NavLink>
                                <NavLink className="nav-link" to="/about">About Us</NavLink>
                                <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
     );
}
 
export default Menu;