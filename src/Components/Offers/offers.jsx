import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import Deals from './Deals/deals'
import Product from '../Product/product'
import SectionHeader from '../SectionHeader/sectionHeader'
import './offers.css'

const Offers = (props) => {
    return ( 
        <div className="offers">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="deals-card card">
                            <div className="title">
                                Deals of the Week
                            </div>
                            <OwlCarousel items={1} className="owl-theme" loop nav dots={false} margin={8} >
                                <div>
                                    <Deals />
                                </div>
                                <div>
                                    <Deals />
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="offers-cards">
                            <SectionHeader />
                            <OwlCarousel items={3} className="owl-theme" loop nav autoPlay={true} margin={8} >
                                <div>
                                    <Product addText="add to cart"/>
                                    <Product addText="add to cart"/>
                                </div>
                                <div>
                                    <Product addText="add to cart"/>
                                    <Product addText="add to cart"/>
                                </div>
                                <div>
                                    <Product addText="add to cart"/>
                                    <Product addText="add to cart"/>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Offers;