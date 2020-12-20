import React from 'react'
import Ads from '../Ads/ads'
import DelivryServices from '../Delivery-Services/delivery-services'
import NewProducts from '../NewProducts/newProducts'
import Offers from '../Offers/offers'
import Slider from '../Slider/slider'
import Trending from '../Trending/trending'

const Home = (props) => {
    return ( 
        <div className="home">
            <Slider />
            <DelivryServices />
            <Offers />
            <Trending />
            <NewProducts />
            <Ads />
        </div>
     );
}
 
export default Home;