import React from 'react';
import {FaAngleRight} from 'react-icons/fa'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';  
import './slider.css'

const Slider = (props) => {
    
    return ( 
        <div className="slider">
            <div className="container">
                <div className="slider-content">
                    <OwlCarousel items={1} className="owl-theme" dots>
                        <div className="item">
                            <div>
                                <p>Explore our </p>
                                <h3>Smartphones</h3>
                                <p>&amp; Accessories collection</p>
                                <button className="btn">Shop Now <FaAngleRight /> </button>
                            </div>
                            <img src="./images/slider1.jpg" className="" alt="..." />
                        </div>
                        <div className="item">
                            <div>
                                <p>Explore our </p>
                                <h3>Smartphones </h3>
                                <p>&amp; Accessories collection</p>
                                <button className="btn">Shop Now<FaAngleRight /></button>
                            </div>
                            <img src="./images/slider2.jpg" className="" alt="..." />
                        </div>
                        <div className="item">
                            <div>
                                <p>Explore our </p>
                                <h3>Smartphones</h3>
                                <p>&amp; Accessories collection</p>
                                <button className="btn">Shop Now <FaAngleRight /></button>
                            </div>
                            <img src="./images/slider3.jpg" className="" alt="..." />
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
     );
}
 
export default Slider;