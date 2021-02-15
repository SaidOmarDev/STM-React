import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../../../actions/productActions'
import Ads from '../../MainPartialComponents/Ads/ads'
import DelivryServices from '../../MainPartialComponents/Delivery-Services/delivery-services'
import NewProducts from '../../MainPartialComponents/NewProducts/newProducts'
import Offers from '../../MainPartialComponents/Offers/offers'
import Adsslider from '../../MainPartialComponents/Slider/slider'
import Trending from '../../MainPartialComponents/Trending/trending'

const Home = (props) => {
    // useEffect(() => {
    //     props.fetchProducts();
    // })
    return ( 
        <div className="home">
            <Adsslider />
            <DelivryServices />
            <Offers />
            <Trending />
            <NewProducts />
            <Ads />
        </div>
     );
}


export default connect(null, {fetchProducts})(Home);