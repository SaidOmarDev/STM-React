import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import {FaAngleUp} from 'react-icons/fa'
import './toTopButton.css'

const ToTopButton = (props) => {
    const [showTop, setShowTop] = useState(false)

    const showTopHandler = ()=>{
        if (!showTop && window.pageYOffset > 400){
          setShowTop(true)
        }else if(showTop && window.pageYOffset <= 400){
          setShowTop(false)
        }
    }

    const scrollTop = ()=>{
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    window.addEventListener('scroll', showTopHandler)
    return ( 
        <Button className="topButton" onClick={scrollTop} style={{display: showTop ? 'flex' : 'none'}}>
            <FaAngleUp className="topIcon"/>
        </Button>
     );
}
 
export default ToTopButton;