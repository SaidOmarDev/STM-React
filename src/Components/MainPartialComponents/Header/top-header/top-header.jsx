import React from 'react'
import { Link } from 'react-router-dom'

import {AiOutlineUser} from 'react-icons/ai'
import {BiEnvelope, BiPhone} from 'react-icons/bi'
import './top-header.css'

const TopHeader = (props) => {
    return ( 
        <div className="topHeader">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="left">
                            <div className="lang">
                                <div className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <img src="./images/eng.png" alt="English"/>
                                        Eng
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-item">
                                            <img src="./images/eng.png" alt="English"/>
                                            Eng
                                        </li>
                                        <li className="dropdown-item">
                                            <img src="./images/ar.png" alt="English"/>
                                            عربي
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="right">
                            <div className="phone">
                                <span><BiPhone className="top-icon"/>Call: 01020122011</span>
                            </div>
                            <div className="email">
                                <span><BiEnvelope className="top-icon"/>Email: SaidOmar@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="login">
                            <AiOutlineUser className="user-icon"/>
                            <Link to="/register" >Register</Link>
                            <Link to="/login"> Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default TopHeader;