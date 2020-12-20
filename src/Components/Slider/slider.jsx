import React from 'react';
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';  
import './slider.css'
import banner1 from '../../assets/images/banner_img.png'
const Slider = (props) => {
    
    return ( 
        <div className="slider">
            <div className="container">
                <div className="slider-content">
                    <OwlCarousel items={1} className="owl-theme" dots>
                        <div>
                            <img src={banner1} className="" alt="..." />
                        </div>
                        <div>
                            <img src={banner1} className="" alt="..." />
                        </div>
                        <div>
                            <img src={banner1} className="" alt="..." />
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
     );
}
 
export default Slider;