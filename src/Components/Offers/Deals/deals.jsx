import React, { useEffect, useState } from 'react'
import './deals.css';
import dealImg from '../../../assets/images/deals.png'

const Deals = (props) => {
    const [hours, setHours] = useState('10');
    const [mins, setMins] = useState('15');
    const [secs, setSecs] = useState('44');
    const timeClock = () => {
        let myDate = new Date();
        let hours = myDate.getHours();
        setHours(hours);
        let minutes = myDate.getMinutes(); 
        minutes = minutes < 10 ? '0' + minutes : minutes;
        setMins(minutes);
        let seconds = myDate.getSeconds();
        seconds = seconds < 10 ? '0' + seconds : seconds;
        setSecs(seconds);
    }
    useEffect(()=>{
        // const timer = setTimeout(()=>{
        //     timeClock();
        // }, 1000);
        // return () => clearTimeout(timer);
    })
    return ( 
        <div className="deals-container">
            <img className="img" src={dealImg}/>
            <div className="deals-content">
                <div className="category">     
                    <a href="#"><h6>HeadPhones</h6></a>
                    <span>500EGP</span>
                </div>
                <div className="pro-name">
                    <h5>Samsung</h5>
                    <span>350EGP</span>
                </div>
                <div className="available">
                    <div className="ava-head">
                        <h6>Available: <span>5</span></h6>
                        <h6>Already sold: <span>15</span></h6>
                    </div>
                    <div className="ava-progress">
                        <div className="progress">
                            <div className="progress-bar w-25" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                {/* <div className="end-time">
                    <div className="time-head">
                        <h6>Hurry Up</h6>
                        <span>Offer ends in:</span>
                    </div>
                    <div className="time">
                        <div className="time-box">
                            <div className="time-unit">
                                {hours}
                                <span>Hours</span>
                            </div>
                            <div className="time-unit">
                                {mins}
                                <span>MINS</span>
                            </div>
                            <div className="time-unit">
                                {secs}
                                <span>SECS</span>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
     );
}
 
export default Deals;