import React from 'react'
import RateStars from '../../RateStars/rate-stars';
import './reviews.css'
import avatar from '../../../assets/images/avatar.png'

const Reviews = (props) => {
    return ( 
        <React.Fragment>
            <div className="avg-rating">
                <div className="row">
                    <div className="col-md-4">
                        <h2>30 Reviews</h2>
                        <RateStars/>
                        <span className="overall-rating">4.1 Overall rating</span>
                        <p>
                            <span className="d-block">26 out of 30 (80%)</span>
                            Customers recommended this product
                        </p>
                    </div>
                    <div className="col-md-8">
                        <div className="star-numbers">
                            <div className="star-number">
                                <span>5</span>
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="w-100">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width: "75%",backgroundColor: "#42d697"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <span className="rating-number">13</span>
                        </div>
                        <div className="star-numbers">
                            <div className="star-number">
                                <span>4</span>
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="w-100">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width: "40%",backgroundColor: "#a7e453"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <span className="rating-number">8</span>
                        </div>
                        <div className="star-numbers">
                            <div className="star-number">
                                <span>3</span>
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="w-100">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width: "25%",backgroundColor: "#ffda75"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <span className="rating-number">5</span>
                        </div>
                        <div className="star-numbers">
                            <div className="star-number">
                                <span>2</span>
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="w-100">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width: "17%",backgroundColor: "#fea569"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <span className="rating-number">3</span>
                        </div>
                        <div className="star-numbers">
                            <div className="star-number">
                                <span>1</span>
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="w-100">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width: "7%",backgroundColor: "#f34770"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <span className="rating-number">1</span>
                        </div>
                    </div>
                </div>
            </div><hr />
            <div className="reviews">
                <div className="row">
                    <div className="col-md-6">
                        <div className="customer-reviews">
                            <div className="customer-info">
                                <div className="main-cust-info">
                                    <img src={avatar} alt=""/>
                                    <div className="sub-info">
                                        <h5 className="name">Customer Name</h5>
                                        <p className="date">May 29, 2020</p>
                                    </div>
                                </div>
                                <div>
                                    <RateStars/>
                                    <p><span>83%</span> of users found this review helpful</p>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, adipisci? Sunt nulla similique praesentium adipisci magnam eius ipsa quis veritatis fugiat corrupti numquam voluptatem minus, unde repellat, nisi ducimus facere.</p>
                        </div><hr/>
                    </div>
                    <div className="col-md-6">
                        <div className="customer-reviews">
                            <div className="customer-info">
                                <div className="main-cust-info">
                                    <img src={avatar} alt=""/>
                                    <div className="sub-info">
                                        <h5 className="name">Customer Name</h5>
                                        <p className="date">May 29, 2020</p>
                                    </div>
                                </div>
                                <div>
                                    <RateStars/>
                                    <p><span>83%</span> of users found this review helpful</p>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, adipisci? Sunt nulla similique praesentium adipisci magnam eius ipsa quis veritatis fugiat corrupti numquam voluptatem minus, unde repellat, nisi ducimus facere.</p>
                        </div><hr/>
                    </div>
                    <div className="col-md-6">
                        <div className="customer-reviews">
                            <div className="customer-info">
                                <div className="main-cust-info">
                                    <img src={avatar} alt=""/>
                                    <div className="sub-info">
                                        <h5 className="name">Customer Name</h5>
                                        <p className="date">May 29, 2020</p>
                                    </div>
                                </div>
                                <div>
                                    <RateStars/>
                                    <p><span>83%</span> of users found this review helpful</p>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, adipisci? Sunt nulla similique praesentium adipisci magnam eius ipsa quis veritatis fugiat corrupti numquam voluptatem minus, unde repellat, nisi ducimus facere.</p>
                        </div><hr/>
                    </div>
                    <div className="col-md-6">
                        <div className="customer-reviews">
                            <div className="customer-info">
                                <div className="main-cust-info">
                                    <img src={avatar} alt=""/>
                                    <div className="sub-info">
                                        <h5 className="name">Customer Name</h5>
                                        <p className="date">May 29, 2020</p>
                                    </div>
                                </div>
                                <div>
                                    <RateStars/>
                                    <p><span>83%</span> of users found this review helpful</p>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, adipisci? Sunt nulla similique praesentium adipisci magnam eius ipsa quis veritatis fugiat corrupti numquam voluptatem minus, unde repellat, nisi ducimus facere.</p>
                        </div><hr/>
                    </div>
                </div>
                <form action="">
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="fname">Full Name</label>
                            <input type="text" className="form-control" id="fname" placeholder="Full Name"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="E-mail Address"/>
                        </div>
                        <div className="form-group col">
                            <label htmlFor="review-msg">Comment</label>
                            <textarea className="form-control" name="review-msg" id="review-msg" rows="10"></textarea>
                        </div>
                    </div>
                    <button className="btn">Post Review</button>
                </form>
            </div>
        </React.Fragment>
     );
}
 
export default Reviews;