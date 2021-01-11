import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './imageGallery.css'

const ImageGallery = (props) => {
    return ( 
        <div className="gallery">
            {/* <div className="main-image">
                <img src={Pro1} alt="product-image" />
            </div> */}
            <Carousel className="image-gallery" showIndicators={false}>
                <div><img src="/images/pro1.jpg" alt="#"/></div>
                <div><img src="/images/pro2.jpg" alt="#"/></div>
                <div><img src="/images/pro3.jpg" alt="#"/></div>
                <div><img src="/images/pro4.jpg" alt="#"/></div>
                <div><img src="/images/pro5.jpg" alt="#"/></div>
            </Carousel>
        </div>
     );
}
 
export default ImageGallery;