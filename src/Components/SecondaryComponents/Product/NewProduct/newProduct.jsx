import React from 'react';
import RateStars from '../../RateStars/rate-stars'
import {BiHeart} from 'react-icons/bi'
import { FaHeart } from 'react-icons/fa';
import './newProduct.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { addToWishlist } from '../../../../actions/wishlistActions';

const NewProduct = (props) => {
    const token = useSelector(state => state.auth.token)
    const loading = useSelector(state => state.cart.loading)
    const dispatch = useDispatch();
    const history = useHistory();
    
    const addToWishListHandler = (product)=>{
        if(token){
            dispatch(addToWishlist(product));
        }else{
            history.push("/login");
        }
    }

    return ( 
        <div className="new-product">
            {props.proType === 'review' ? null :  
                <>
                    <div className="badges">
                        <span className="status badge badge-primary">New</span>
                    </div>
                    {props.inWishlist ? (<span className="fav active" ><FaHeart className="fav-icon"/></span>) : (<span className="fav"  onClick={()=>addToWishListHandler(props.product)}><BiHeart className="fav-icon"/></span>)}
                    
                </>
            }
            <div className="card">
                <div className="pro-img">
                    <Link to={`/productDetails/${props.product.id}`}><img src={props.product.image} alt="product" /></Link>
                </div>
                <div className="pro-desc">
                    <div className="pro-info">
                        <span className="categ">{props.product.category}</span>
                        <Link to={`/productDetails/${props.product.id}`}><h4 className="pro-name line-clamp elip-text">{props.product.name}</h4></Link>
                        <div>
                            {props.proType === 'review' ? null : <RateStars />}
                            <span className="price">
                                <span className="aft-dis">EGP {props.product.price}</span>
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