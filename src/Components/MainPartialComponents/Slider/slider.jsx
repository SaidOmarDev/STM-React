import React from 'react';
import { useSelector } from 'react-redux';
import {FaAngleRight} from 'react-icons/fa'
import { Container } from 'react-bootstrap';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slider.css'

const Adsslider = (props) => {
    const lang = useSelector(state=> state.lang.lang)
    const opt = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: false
    };
    if(lang === 'ar'){
        opt.rtl = true
        // document.getElementsByClassName('slick-slider').setAttribute('dir', 'rtl')
        console.log(opt);
    }else{
        opt.rtl = false
        console.log(opt);
    }
    return ( 
        <div className="slider">
            <Container>
                <div className="slider-content">
                    <Slider {...opt}>
                        <div>
                            <div className="item">
                                <div>
                                    <p>Explore our </p>
                                    <h3>Smartphones</h3>
                                    <p>&amp; Accessories collection</p>
                                    <button className="btn">Shop Now <FaAngleRight className="leftIcon" /></button>
                                </div>
                                <img src="./images/slider1.jpg" className="" alt="..." />
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <div>
                                    <p>Explore our </p>
                                    <h3>Smartphones </h3>
                                    <p>&amp; Accessories collection</p>
                                    <button className="btn">Shop Now<FaAngleRight /></button>
                                </div>
                                <img src="./images/slider2.jpg" className="" alt="..." />
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <div>
                                    <p>Explore our </p>
                                    <h3>Smartphones</h3>
                                    <p>&amp; Accessories collection</p>
                                    <button className="btn">Shop Now <FaAngleRight /></button>
                                </div>
                                <img src="./images/slider3.jpg" className="" alt="..." />
                            </div>
                        </div>
                    </Slider>
                </div>
            </Container>
        </div>
     );
}
 
export default Adsslider;