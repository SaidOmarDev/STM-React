import React, { useState, useEffect } from 'react'
import {useSelector} from 'react-redux'

import BreadCrumb from '../../SecondaryComponents/BreadCrumb/breadCrumb'
import SideBarFilter from '../../MainPartialComponents/SideBarFilter/sideBarFilter'
import Product from '../../SecondaryComponents/Product/product'
// import Pagination from '../../SecondaryComponents/Pagination/pagination'
import Pagination from "react-js-pagination"
import './shopProducts.css'
import { Col, Container, Row } from 'react-bootstrap'

const ShopProducts = () => {
    const [currentPage,setCurrentPage] = useState(1)
    const [lastIndex,setLastIndex] = useState(6)
    const [firstIndex,setFirstIndex] = useState(0)
    const token = localStorage.getItem('apiToken')
    const filteredProducts = useSelector((state) => state.filtered.items)
    const products = useSelector((state) => state.products.items)
    let currentProducts = products.slice(firstIndex, lastIndex)
    let cart = useSelector((state) => state.cart.items)
    let wishlist = useSelector((state) => state.wishlist.items)

    if(!token){
        cart = []
        wishlist = []
    }

    useEffect(()=>{
        setLastIndex(currentPage * 6)
    },[currentPage])

    useEffect(()=>{
        setFirstIndex(lastIndex - 6)
    },[lastIndex])

    const handleChangePage = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return ( 
        <React.Fragment>
            <BreadCrumb pagename="Shop"/>
            <div className="shop">
                <Container>
                    <Row>
                        <Col md={4}>
                            <SideBarFilter products={products}/>
                        </Col>
                        <Col md={8} style={{position: "relative"}}>
                            <Row>
                                {filteredProducts.length>0 ? 
                                    filteredProducts.map(product=>(
                                        <Col xl={4} sm={6} key={product.id}>
                                            <Product
                                                addText="Add To Cart"
                                                product={product}
                                                inCart={cart.length > 0 && cart.filter(item => item.id === product.id).length > 0 }
                                                inWishlist={wishlist.length>0 && wishlist.filter(item => item.id === product.id).length > 0 }
                                            />
                                        </Col>
                                    ))
                                    :
                                    currentProducts.map(product=>(
                                        <Col xl={4} sm={6} key={product.id}>
                                            <Product
                                                addText="Add To Cart"
                                                product={product}
                                                inCart={cart.length > 0 && cart.filter(item => item.id === product.id).length > 0 }
                                                inWishlist={wishlist.length>0 && wishlist.filter(item => item.id === product.id).length > 0 }
                                            />
                                        </Col>
                                    ))
                                }

                            </Row>
                            <div className="cart-bottom">
                                {products.length > 6 ? (
                                    <Pagination 
                                        activePage={currentPage}
                                        itemsCountPerPage={6}
                                        totalItemsCount={products.length}
                                        pageRangeDisplayed={5}
                                        onChange={handleChangePage}
                                        itemClass="page-item"
                                        linkClass="page-link"
                                    />
                                    ): null
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
     );
}

export default ShopProducts;