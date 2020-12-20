import React from 'react'
import BreadCrumb from '../BreadCrumb/breadCrumb'
import SideBarFilter from './SideBarFilter/sideBarFilter'
import './shopProducts.css'
import Product from '../Product/product'
import Pagination from '../Pagination/pagination'

const ShopProducts = (props) => {
    return ( 
        <React.Fragment>
            <BreadCrumb />
            <div className="shop">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <SideBarFilter/>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-4"><Product addText="Add To Cart"/></div>
                                <div className="col-md-4"><Product addText="Add To Cart"/></div>
                                <div className="col-md-4"><Product addText="Add To Cart"/></div>
                                <div className="col-md-4"><Product addText="Add To Cart"/></div>
                                <div className="col-md-4"><Product addText="Add To Cart"/></div>
                                <div className="col-md-4"><Product addText="Add To Cart"/></div>
                                <div className="col-md-4"><Product addText="Add To Cart"/></div>
                                <div className="col-md-4"><Product addText="Add To Cart"/></div>
                                <div className="col-md-4"><Product addText="Add To Cart"/></div>
                            </div>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default ShopProducts;