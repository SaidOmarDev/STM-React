import React from 'react'
import { useSelector } from 'react-redux';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Deals from './Deals/deals'
import Product from '../../SecondaryComponents/Product/product'
import SectionHeader from '../../SecondaryComponents/SectionHeader/sectionHeader'
import PrevArrow from '../../SecondaryComponents/CustomArrows/PrevArrow/prevArrow'
import NextArrow from '../../SecondaryComponents/CustomArrows/NextArrow/nextArrow'
import './offers.css'
import { Row, Col, Container } from 'react-bootstrap';

const Offers = (props) => {
    const token = localStorage.getItem('apiToken')
    const products = useSelector((state) => state.products.items);
    let cart = useSelector((state) => state.cart.items);
    let wishlist = useSelector((state) => state.wishlist.items);
    const lang = useSelector(state => state.lang.lang)
    
    if(!token){
        cart = [];
        wishlist = []
    }
    let settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        swipeToSlide: false,
        rows: 2,
        slidesPerRow: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    let options = {
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    if(lang === 'ar'){
        options.rtl = true;
        settings.rtl = true;
        let sliders = document.getElementsByClassName('slick-slider')
        console.log(sliders);
        // sliders.map(slider => console.log(slider))
    }else{
        options.rtl = false;
        settings.rtl = false;
    }
    // useEffect(() => {
    //     props.fetchProducts();
    // })
    // const addToCartHandler = (product)=>{
    //     props.addToCart(product);
    // }
    // const addToWishListHandler = (product)=>{
    //     props.addToWishlist(product);
    // }
    
    return ( 
        <div className="offers">
            <Container>
                <Row>
                    <Col md={4}>
                        <div className="deals-card card">
                            <div className="title">
                                Deals of the Week
                            </div>
                            <Slider {...options} >
                                <div>
                                    <Deals />
                                </div>
                                <div>
                                    <Deals />
                                </div>
                            </Slider>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className="offers-cards">
                            <SectionHeader />
                            <Slider {...settings} >
                                {products.map(product=>(
                                    <div key={product.id}>
                                        <Product 
                                            product={product} 
                                            addText="add to cart"
                                            inCart={cart.length>0 && cart.filter(item => item.id === product.id).length > 0 }
                                            inWishlist={wishlist.length>0 && wishlist.filter(item => item.id === product.id).length > 0 }
                                        />
                                        {/* <Product product={item} addText="add to cart"/> */}
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
     );
}

export default Offers;