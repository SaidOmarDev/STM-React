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
            {/* <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Bootstrap</strong>
                <small>just now</small>
            </Toast.Header> */}
            <Toast.Body>{props.type === 'bg-danger' ? (<CgDanger className="toastIcon"/>) : null}{props.content}</Toast.Body>
        </Toast>
     );
}
 
export default AlertToast;