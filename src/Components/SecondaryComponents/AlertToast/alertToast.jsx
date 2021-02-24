import React from 'react'
import { useState } from 'react';
import { Toast } from 'react-bootstrap';
import {CgDanger} from 'react-icons/cg'
import './alertToast.css'

const AlertToast = (props) => {
    const [showToast, setShow] = useState(props.show)
    // if(props.show){
    //     setShow(true)
    // }else{
    //     setShow(false)
    // }
    return ( 
        <Toast onClose={() => setShow(false)} show={showToast} delay={4000}  className={props.type}>
            <Toast.Body>{props.type === 'bg-danger' ? (<CgDanger className="toastIcon"/>) : null}{props.content}</Toast.Body>
        </Toast>
     );
}
 
export default AlertToast;