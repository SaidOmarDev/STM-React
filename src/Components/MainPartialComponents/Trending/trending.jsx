import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import {addToCart} from '../../../actions/cartActions'
import {addToWishlist} from '../../../actions/wishlistActions'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css' 
import Product from '../../SecondaryComponents/Product/product'
import NewHead from '../../SecondaryComponents/SectionHeader/NewHead/newHead';
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';  
// import SwiperCore, { Navigation, Pagination} from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css'
import './trending.css'

const Trending = (props) => {
    const token = useSelector(state=>state.auth.token)
    const products = useSelector((state) => state.products.items);
    let cart = useSelector((state) => state.cart.items);
    let wishlist = useSelector((state) => state.wishlist.items);
    
    if(!token){
        cart = [];
        wishlist = []
    }

    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
        // nextArrow: '<addToCart/>',
        // prevArrow: '<addToCart/>'
    };
    let options = {
        spaceBetween: 50,
        slidesPerView: 3,
        navigation: true,
        pagination: {clickable: true}
    }
    
    return ( 
        <div className="trend-section">
            <div className="container">
                <NewHead header="Trending Products"/>
                <Slider {...settings}>
                    {products.map(product=>(
                        <div key={product.id}>
                            <Product 
                                product={product}
                                inCart={cart.length>0 && cart.filter(item => item.id === product.id).length > 0 }
                                inWishlist={wishlist.length>0 && wishlist.filter(item => item.id === product.id).length > 0 }
                            />
                        </div>
                    ))}
                </Slider>
                {/* <Swiper 
                    spaceBetween={10}
                    slidesPerView={4}
                    navigation={true}
                    autoplay
                    pagination={{ clickable: true }}
                >
                    {props.products.map(product=>(
                        <SwiperSlide key={product.id}>
                            <Product 
                                product={product}
                                addToCart={()=>addToCartHandler(product)}
                                addToWishlist={()=>addToWishListHandler(product)}
                                inCart={props.cart.length>0 && props.cart.filter(item => item.id === product.id).length > 0 }
                                inWishlist={props.wishlist.length>0 && props.wishlist.filter(item => item.id === product.id).length > 0 }
                            />
                        </SwiperSlide>
                    ))}
                </Swiper> */}
            </div>
        </div>
     );
} 

export default Trending;