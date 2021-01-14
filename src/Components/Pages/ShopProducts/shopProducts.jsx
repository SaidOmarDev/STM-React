import React from 'react'
import {useSelector} from 'react-redux'


import BreadCrumb from '../../SecondaryComponents/BreadCrumb/breadCrumb'
import SideBarFilter from '../../MainPartialComponents/SideBarFilter/sideBarFilter'
import Product from '../../SecondaryComponents/Product/product'
import Pagination from '../../SecondaryComponents/Pagination/pagination'
import './shopProducts.css'

const ShopProducts = () => {
    const filteredProducts = useSelector((state) => state.filtered.items);
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
                            <SideBarFilter products={products}/>
                        </div>
                        <div className="col-md-8" style={{position: "relative"}}>
                            <div className="row">
                                {filteredProducts.length>0 ? 
                                    filteredProducts.map(product=>(
                                        <div className="col-md-4" key={product.id}>
                                            <Product
                                                addText="Add To Cart"
                                                product={product}
                                                inCart={cart.length > 0 && cart.filter(item => item.id === product.id).length > 0 }
                                                inWishlist={wishlist.length>0 && wishlist.filter(item => item.id === product.id).length > 0 }
                                            />
                                        </div>
                                    ))
                                    :
                                    products.map(product=>(
                                        <div className="col-md-4" key={product.id}>
                                            <Product
                                                addText="Add To Cart"
                                                product={product}
                                                inCart={cart.length > 0 && cart.filter(item => item.id === product.id).length > 0 }
                                                inWishlist={wishlist.length>0 && wishlist.filter(item => item.id === product.id).length > 0 }
                                            />
                                        </div>
                                    ))
                                }

                            </div>
                            <div className="cart-bottom">
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}

export default ShopProducts;