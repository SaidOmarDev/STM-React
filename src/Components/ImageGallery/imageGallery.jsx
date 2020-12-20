import React from 'react'
import Pro1 from '../../assets/images/pro1.jpg'
import Pro2 from '../../assets/images/pro2.jpg'
import Pro3 from '../../assets/images/pro3.jpg'
import Pro4 from '../../assets/images/pro4.jpg'
import Pro5 from '../../assets/images/pro5.jpg'
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
                <div><img src={Pro1} alt="#"/></div>
                <div><img src={Pro2} alt="#"/></div>
                <div><img src={Pro3} alt="#"/></div>
                <div><img src={Pro4} alt="#"/></div>
                <div><img src={Pro5} alt="#"/></div>
            </Carousel>
        </div>
     );
}
 
export default ImageGallery;