import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';  
// import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import Product from '../Product/product'
import './trending.css'
import NewHead from '../SectionHeader/NewHead/newHead';

const Trending = (props) => {
    return ( 
        <div className="trend-section">
            <div className="container">
                <NewHead header="Trending Products"/>
                <OwlCarousel items={4} className="owl-theme" loop nav dots margin={15} >
                    <div>
                        <Product />
                    </div>
                    <div>
                        <Product />
                    </div>
                    <div>
                        <Product />
                    </div>
                    <div>
                        <Product />
                    </div>
                    <div>
                        <Product />
                    </div>
                    <div>
                        <Product />
                    </div>
                </OwlCarousel>
            </div>
        </div>
     );
}
 
export default Trending;