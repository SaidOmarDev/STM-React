import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';  
import Product from '../../Product/product'
import NewHead from '../../SectionHeader/NewHead/newHead';
import './related.css'

const Related = (props) => {
    return ( 
        <div className="related-section">
            <div className="container">
                <NewHead header="Related Products"/>
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
 
export default Related;