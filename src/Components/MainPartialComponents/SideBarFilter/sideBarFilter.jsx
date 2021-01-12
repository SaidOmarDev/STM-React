import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import {filterProducts} from '../../../actions/filterActions'

import Search from '../../SecondaryComponents/Search/search';
import Slider, {Range} from 'rc-slider'
import {FaAngleDown} from 'react-icons/fa'
import 'rc-slider/assets/index.css'
import './sideBarFilter.css'


const SideBarFilter = (props) => {
    const [priceRange, setPriceRange] = useState([ 0, 0]);
    const dispatch = useDispatch();
    
    const handleChange = (rangeValue)=>{
        setPriceRange(rangeValue)
    }
    const handleInputChange = (e)=>{
        // priceRange[0]= e.target.value
        // setPriceRange()
    }
    const filterHandler = (products, category) => {
        console.log(products);
        dispatch(filterProducts(products, category))
    }
    return ( 
        <div className="cart-summary shop-sidebar">
            <div className="categories">
                <h4>Categories</h4>
                <div className="content-bar">
                    <div className="head-bar" data-toggle="collapse" data-target="#first">
                        <h3>Clothes<FaAngleDown className="angle-icon"/></h3>
                    </div>
                    <div className="collapse bar-content" id="first">
                        <Search/>
                        <ul className="list-unstyled">
                            <li className=""><span className="cate-link" onClick={()=>filterHandler(props.products, "Clothes")}>View all</span><span>135</span></li>
                            <li><span className="cate-link">subCategory</span><span>37</span></li>
                            <li><span className="cate-link">subCategory</span><span>98</span></li>
                        </ul>
                    </div>
                </div>
                <div className="content-bar">
                    <div className="head-bar" data-toggle="collapse" data-target="#second">
                        <h3>Gadgets<FaAngleDown className="angle-icon"/></h3>
                    </div>
                    <div className="collapse bar-content" id="second">
                        <Search/>
                        <ul className="list-unstyled">
                            <li className=""><a href="#">View all</a><span>135</span></li>
                            <li><a href="#">subCategory</a><span>37</span></li>
                            <li><a href="#">subCategory</a><span>98</span></li>
                        </ul>
                    </div>
                </div>
                <div className="content-bar">
                    <div className="head-bar" data-toggle="collapse" data-target="#three">
                        <h3>Furniture<FaAngleDown className="angle-icon"/></h3>
                    </div>
                    <div className="collapse bar-content" id="three">
                        <Search/>
                        <ul className="list-unstyled">
                            <li className=""><a href="#">View all</a><span>135</span></li>
                            <li><a href="#">subCategory</a><span>37</span></li>
                            <li><a href="#">subCategory</a><span>98</span></li>
                        </ul>
                    </div>
                </div>
                <div className="content-bar">
                    <div className="head-bar" data-toggle="collapse" data-target="#four">
                        <h3>Electronics<FaAngleDown className="angle-icon"/></h3>
                    </div>
                    <div className="collapse bar-content" id="four">
                        <Search/>
                        <ul className="list-unstyled">
                            <li className=""><a href="#">View all</a><span>135</span></li>
                            <li><a href="#">subCategory</a><span>37</span></li>
                            <li><a href="#">subCategory</a><span>98</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="price-range">
                <h4>Price range</h4>
                {/* <Slider/> */}
                <Range 
                    min={0}
                    max={1000}
                    defaultValue={priceRange}
                    // value={priceRange}
                    onChange={handleChange}
                />
                <div className="input-group-wrapper">
                    <div className="input-group input-group-sm">
                        <div className="input-group-prepend">
                            <span className="input-group-text">EGP</span>
                        </div>
                        <input className="form-control" type="text" value={priceRange[0]} onChange={(e)=>handleInputChange}/>
                    </div>
                    <div className="input-group input-group-sm">
                        <div className="input-group-prepend">
                            <span className="input-group-text">EGP</span>
                        </div>
                        <input className="form-control" type="text" value={priceRange[1]} onChange={(e)=>handleInputChange}/>
                    </div>
                </div>
            </div>
            <div className="brands">
                <h4>Brands</h4>
                <ul className="list-unstyled">
                    <li><a href="#">BrandName</a></li>
                    <li><a href="#">BrandName</a></li>
                    <li><a href="#">BrandName</a></li>
                    <li><a href="#">BrandName</a></li>
                    <li><a href="#">BrandName</a></li>
                </ul>
            </div>
            <div className="colors">
                <h4>Colors</h4>
                <ul className="list-unstyled">
                    <li>
                        <div className="custom-control custom-checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" name="example1"/>
                            <label className="custom-control-label" htmlFor="customCheck1">BrandName</label>
                        </div>
                    </li>
                    <li>
                        <div className="custom-control custom-checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="customCheck2" name="example1"/>
                            <label className="custom-control-label" htmlFor="customCheck2">BrandName</label>
                        </div>
                    </li>
                    <li>
                        <div className="custom-control custom-checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="customCheck3" name="example1"/>
                            <label className="custom-control-label" htmlFor="customCheck3">BrandName</label>
                        </div>
                    </li>
                    <li>
                        <div className="custom-control custom-checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="customCheck4" name="example1"/>
                            <label className="custom-control-label" htmlFor="customCheck4">BrandName</label>
                        </div>
                    </li>
                    <li>
                        <div className="custom-control custom-checkbox mb-2">
                            <input type="checkbox" className="custom-control-input" id="customCheck5" name="example1"/>
                            <label className="custom-control-label" htmlFor="customCheck5">BrandName</label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default SideBarFilter;