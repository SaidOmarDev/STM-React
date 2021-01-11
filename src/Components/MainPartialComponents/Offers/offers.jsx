import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import {fetchProducts} from '../../../actions/productActions'
import {addToCart} from '../../../actions/cartActions'
import {addToWishlist} from '../../../actions/wishlistActions'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Deals from './Deals/deals'
import Product from '../../SecondaryComponents/Product/product'
import SectionHeader from '../../SecondaryComponents/SectionHeader/sectionHeader'
import './offers.css'

const Offers = (props) => {
    let settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 2,
        slidesPerRow: 1
    };
    let options = {
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    useEffect(() => {
        props.fetchProducts();
    })
    const addToCartHandler = (product)=>{
        props.addToCart(product);
    }
    const addToWishListHandler = (product)=>{
        props.addToWishlist(product);
    }
    
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
                                {props.products.map(product=>(
                                    <div key={product.id}>
                                        <Product 
                                            product={product} 
                                            addText="add to cart"
                                            addToCart={()=>addToCartHandler(product)}
                                            addToWishlist={()=>addToWishListHandler(product)}
                                            inCart={props.cart.length>0 && props.cart.filter(item => item.id === product.id).length > 0 }
                                            inWishlist={props.wishlist.length>0 && props.wishlist.filter(item => item.id === product.id).length > 0 }
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
function mapStateToProps(state){
    return {
        products: state.products.items,
        cart: state.cart.items,
        wishlist: state.wishlist.items
    }
}  

export default connect(mapStateToProps, {fetchProducts, addToCart, addToWishlist})(Offers);