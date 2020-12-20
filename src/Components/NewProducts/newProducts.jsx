import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import './newProducts.css'
import NewProduct from '../Product/NewProduct/newProduct';
import NewHead from '../SectionHeader/NewHead/newHead';

const NewProducts = (props) => {
    return ( 
        <div className="new-section">
            <div className="container">
                <NewHead header="New Products"/>
                <OwlCarousel items={4} className="owl-theme" loop dots margin={15} >
                    <div>
                        <NewProduct />
                        <NewProduct />
                    </div>
                    <div>
                        <NewProduct />
                        <NewProduct />
                    </div>
                    <div>
                        <NewProduct />
                        <NewProduct />
                    </div>
                    <div>
                        <NewProduct />
                        <NewProduct />
                    </div>
                    <div>
                        <NewProduct />
                        <NewProduct />
                    </div>
                </OwlCarousel>
            </div>
        </div>
     );
}
 
export default NewProducts;