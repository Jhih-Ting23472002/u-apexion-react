import React from 'react';
import spaceShip from '../../img/spaceShip.png';

const ShipCard = (props) => {
    return (
        <>
            <div className="cart separated-line"></div>
            <div className="cart cart-order-item d-flex">
                <div className="cart cart-img-div col-4">
                    <img src={spaceShip} alt="" className="spaceship-height" />
                </div>
                <div className="cart content-detail col-8 d-flex">
                    <div className="content-detail-inside">
                        <div className="content-detail-inside-top-spaceship">
                            <div className="cart-spaceship">
                                <h5 className="cart-spaceship-name">spacecraft</h5>
                                <h5 className="cart-spaceship-text">鐫刻文字</h5>
                            </div>
                            <div className="cart-country-flag">
                                <div className="cart-empty-flag"></div>
                                <h5 className="cart-country-flag-text">已選好的國旗</h5>
                            </div>
                        </div>
                        <div className="content-detail-inside-bottom-spaceship">
                            <div className="cart-number-people"></div>
                            <button className="btn cart-remove-btn">remove</button>
                            <div className="cart-order-money">$XXXXX</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShipCard