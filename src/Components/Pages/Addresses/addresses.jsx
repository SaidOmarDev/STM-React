import React from 'react'
import ProfileSidebar from '../../Profile/ProfileSidebar/profileSideBar'
import {MdAdd} from 'react-icons/md'
import Address from './address/address'
import './addresses.css'
import { useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'

const Addresses = (props) => {
    const [show, setShow] = useState(false)

    const handleShow = (e) => {
        setShow(true)
    }
    const handleClose = (e) => {
        setShow(false)
    }
    return ( 
        <div className="addresses pt-5 pb-5">
            <Container>
                <Row>
                    <Col md={4}>
                        <ProfileSidebar />
                    </Col>
                    <Col md={8}>
                        <button className="btn add-new" onClick={handleShow}><MdAdd />Add new Address</button>
                        <Row>
                            <Col sm={6}><Address default="active"/></Col>
                            <Col sm={6}><Address /></Col>
                            <Col sm={6}><Address /></Col>
                        </Row>
                    </Col>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Address
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Row>
            </Container>
        </div>
     );
}
 
export default Addresses;