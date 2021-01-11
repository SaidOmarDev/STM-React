import React from 'react';
import RateStars from '../../RateStars/rate-stars'
import {BiHeart} from 'react-icons/bi'
import './newProduct.css'

const NewProduct = (props) => {
    return ( 
        <div className="new-product">
            {props.proType === 'review' ? null :  
                <>
                    <div className="badges">
                        <span className="status badge badge-primary">New</span>
                    </div>
                    <span className="fav" data-toggle="tooltip" data-placement="left" title="add to wishlist"><BiHeart className="fav-icon"/></span>
                </>
            }
            <div className="card">
                <div className="pro-img">
                    <a href="#"><img src="./images/deals.png" alt="product" /></a>
                </div>
                <div className="pro-desc">
                    <div className="pro-info">
                        <span className="categ">Cake Tools</span>
                        <a href="#"><h4 className="pro-name">Product Name</h4></a>
                        <div>
                            {props.proType === 'review' ? null : <RateStars />}
                            <span className="price">
                                <span className="aft-dis">$9.9</span>
                                {props.proType === 'review' ? null : <span className="bef-dis">$12.5</span>}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {props.proType === 'review' && 
                <>
                    <span className="qun">
                        <span>Qun: 3</span>
                        <span>Total: 150 EGP</span>
                    </span>
                </>
            }
        </div>
     );
}
 
export default NewProduct;