import React from 'react';
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';  
import './slider.css'

const Slider = (props) => {
    
    return ( 
        <div className="slider">
            <div className="container">
                <div className="slider-content">
                    <OwlCarousel items={1} className="owl-theme" dots>
                        <div>
                            <img src="./images/banner_img.png" className="" alt="..." />
                            <h4>Hello SLider Hello SLider Hello SLider</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. numquam sequi laudantium iusto debitis ullam sed atque eaque hic libero necessitatibus eveniet dolore voluptates?
                            </p>
                            <button className="btn">Shop Now</button>
                        </div>
                        <div>
                            <img src="./images/gadg-cate.jpg" className="" alt="..." />
                        </div>
                        <div>
                            <img src="./images/deals.png" className="" alt="..." />
                            <h4>Hello SLider Hello SLider Hello SLider</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. numquam sequi laudantium iusto debitis ullam sed atque eaque hic libero necessitatibus eveniet dolore voluptates?
                            </p>
                            <button className="btn">Shop Now</button>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
     );
}
 
export default Slider;