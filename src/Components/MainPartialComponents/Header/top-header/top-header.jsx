import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeLang } from '../../../../actions/langActions'
import { Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap'
import {AiOutlineUser} from 'react-icons/ai'
import {BiEnvelope, BiPhone} from 'react-icons/bi'
import './top-header.css'

const TopHeader = (props) => {
    const [lang, setLang] = useState('Eng')
    const changedLang = useSelector(state => state.lang.lang)
    // const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch()

    useEffect(() => {
        if(changedLang === 'en'){
            setLang('Eng')
        }else{
            setLang('عربي')
        }
    }, [changedLang])
    
    const handleLang = (e)=>{
        dispatch(changeLang(props.token, e))
    }

    return ( 
        <div className="topHeader">
            <Container>
                <Row>
                    <Col md={2} xs={4}>
                        <div className="left">
                            <div className="lang">
                                <DropdownButton id="dropdown-basic-button" title={lang} onSelect={handleLang}>
                                    <Dropdown.Item eventKey='en'>
                                        <img src="/images/eng.png" alt="English"/>Eng
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="ar">
                                        <img src="/images/ar.png" alt="English"/>عربي
                                    </Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} sm={8} className="rightCol">
                        <div className="right">
                            <div className="phone">
                                <span><BiPhone className="top-icon"/>Call: 01020122011</span>
                            </div>
                            <div className="email">
                                <span><BiEnvelope className="top-icon"/>Email: SaidOmar@gmail.com</span>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} xs={8}>
                        {!props.token ? (
                            <div className="login">
                                <AiOutlineUser className="user-icon"/>
                                <Link to="/register" >Register</Link>
                                <Link to="/login"> Login</Link>
                            </div>):
                            null
                        }
                    </Col>
                </Row>
            </Container>
        </div>
     );
}
 
export default TopHeader;