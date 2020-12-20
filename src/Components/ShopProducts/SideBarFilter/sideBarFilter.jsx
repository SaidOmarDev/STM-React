import React, { useState } from 'react'
import Nouislider from 'nouislider-react'
import "nouislider/distribute/nouislider.css";
import Search from '../../Search/search';
import './sideBarFilter.css'
import {FaAngleDown} from 'react-icons/fa'


const SideBarFilter = (props) => {
    const [priceRange, setPriceRange] = useState({minRange: 0, maxRange: 1000});
    
    const handleChange = (e)=>{
        setPriceRange(e.target.value)
    }
    return ( 
        <div className="cart-summary shop-sidebar">
            <div className="categories">
                <h4>Categories</h4>
                <div className="content-bar">
                    <div className="head-bar" data-toggle="collapse" data-target="#first">
                        <h3>Books<FaAngleDown className="angle-icon"/></h3>
                    </div>
                    <div className="collapse bar-content" id="first">
                        <Search/>
                        <ul className="list-unstyled">
                            <li className=""><a href="#">View all</a><span>135</span></li>
                            <li><a href="#">subCategory</a><span>37</span></li>
                            <li><a href="#">subCategory</a><span>98</span></li>
                        </ul>
                    </div>
                </div>
                <div className="content-bar">
                    <div className="head-bar" data-toggle="collapse" data-target="#second">
                        <h3>Food<FaAngleDown className="angle-icon"/></h3>
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
                        <h3>Accessories<FaAngleDown className="angle-icon"/></h3>
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
                        <h3>Clothes<FaAngleDown className="angle-icon"/></h3>
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
                <div className="content-bar">
                    <div className="head-bar" data-toggle="collapse" data-target="#five">
                        <h3>Phones<FaAngleDown className="angle-icon"/></h3>
                    </div>
                    <div className="collapse bar-content" id="five">
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
                <Nouislider 
                    range={{ min: 0, max: 1000 }} 
                    start={[5, 100]} 
                    connect
                    onChange={(e)=>handleChange} />
                <div className="input-group-wrapper">
                    <div className="input-group input-group-sm">
                        <div className="input-group-prepend">
                            <span className="input-group-text">EGP</span>
                        </div>
                        <input className="form-control" type="text" value={priceRange.minRange} onChange={(e)=>setPriceRange({...priceRange, minRange: e.target.value})}/>
                    </div>
                    <div className="input-group input-group-sm">
                        <div className="input-group-prepend">
                            <span className="input-group-text">EGP</span>
                        </div>
                        <input className="form-control" type="text" value={priceRange.maxRange} onChange={(e)=>setPriceRange({...priceRange, maxRange: e.target.value})}/>
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