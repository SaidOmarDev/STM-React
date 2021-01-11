import React from 'react'
import OrderProduct from './OrderProduct/orderProduct'
import './order.css'

const Order = (props) => {
    return ( 
        <div className="order">
            <div className="card">
                <div className="card-header">
                    <p>
                        <span className="order-id">Order ID: 6123456789</span>
                        <span>Order Date: 16 December 2018</span>
                    </p>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-8">
                            <h5>Delivery to</h5>
                            <ul className="list-unstyled">
                                <li>Michael Jackson</li>
                                <li>
                                    Phone +1234567890 
                                    Email: myname@gmail.com
                                </li>
                                <li>Location: Home number, Building name, Street 123,</li>
                                <li>P.O. Box: 100123</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Payment</h5>
                            <ul className="list-unstyled">
                                <li className="pay-code">Visa **** 4216</li>
                                <li>Subtotal: $356</li>
                                <li>Shipping fee: $56</li>
                                <li className="order-total">Total: $456</li>
                            </ul>
                        </div>
                    </div>
                    <div className="order-products">
                        <OrderProduct />
                        <OrderProduct />
                        <OrderProduct />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Order;