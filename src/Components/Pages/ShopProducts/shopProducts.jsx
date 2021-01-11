import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchProducts} from '../../../actions/productActions'


import BreadCrumb from '../../SecondaryComponents/BreadCrumb/breadCrumb'
import SideBarFilter from '../../MainPartialComponents/SideBarFilter/sideBarFilter'
import Product from '../../SecondaryComponents/Product/product'
import Pagination from '../../SecondaryComponents/Pagination/pagination'
import './shopProducts.css'

const ShopProducts = () => {
    const products = useSelector((state) => state.products.items);
    const cart = useSelector((state) => state.cart.items);
    const wishlist = useSelector((state) => state.wishlist.items);
    
    return ( 
        <React.Fragment>
            <BreadCrumb pagename="Shop"/>
            <div className="shop">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <SideBarFilter/>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                {products.map(product=>(
                                    <div className="col-md-4" key={product.id}>
                                        <Product
                                            addText="Add To Cart"
                                            product={product}
                                            inCart={cart.length > 0 && cart.filter(item => item.id === product.id).length > 0 }
                                            inWishlist={wishlist.length>0 && wishlist.filter(item => item.id === product.id).length > 0 }
                                        />
                                    </div>
                                ))}
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