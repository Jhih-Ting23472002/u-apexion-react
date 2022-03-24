import React from 'react';
import cartTicket from '../../img/cartTicket.png';

const TripCard = (props)=>{
    return (
        <>
            <div className="cart separated-line"></div>
            <div className="cart cart-order-item d-flex">
                <div className="cart cart-img-div col-4 cart-ticket-margin-y">
                <img src={cartTicket} alt="" />
                </div>
                <div className="cart content-detail col-8 d-flex">
                    <div className="content-detail-inside">
                        <div className="content-detail-inside-top-ticket">
                            <div className="cart-ticket-destination">
                                <h5 className="cart-trip-name">行程:{props.tripSelected}</h5>
                                <h5 className="cart-trip-food">太空餐點</h5>
                            </div>
                            <div className="cart-ticket-during">
                                <h5 className="cart-start-time">啟航 2022/03/10 </h5>
                                <h5 className="cart-gohome-time">回程 2022/03/15 </h5>
                            </div>
                        </div>
                        <div className="content-detail-inside-bottom-ticket">
                            <h5 className="cart-number-people">人數 5</h5>
                            <button className="btn cart-remove-btn">remove</button>
                            <div className="cart-order-money">{props.tripPrice}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TripCard;