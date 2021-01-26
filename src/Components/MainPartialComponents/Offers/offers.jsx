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

const Offers = (props) => {
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
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 2,
        slidesPerRow: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    let options = {
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

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
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
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
                    </div>
                    <div className="col-md-8">
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
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Offers;