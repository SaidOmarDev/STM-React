import React from 'react'
import './ads.css'

const Ads = (props) => {
    return ( 
        <div className="ads-sec">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="left-ad-card card">
                            <div className="ad-card-text">
                                <p>Hurry up! Limited time offer</p>
                                <h2>Converse All Star on Sale</h2>
                                <a href="#" className="btn">Shop Now</a>
                            </div>
                            <div className="ad-card-img">
                                <img src="./images/leftAdImg.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="right-ad-card card">
                            <img src="./images/addRightBg.jpg" alt=""/>
                            <div className="ad-card-text">
                                <h2>Converse All Star on Sale</h2>
                                <p>Hurry up! Limited time offer</p>
                                <a href="#" className="btn">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Ads;