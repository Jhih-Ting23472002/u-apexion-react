import React from 'react';
import spaceSuit from '../../img/spaceSuit.png';

const SuitCard = ()=>{
    return (
        <>
            <div className="cart separated-line"></div>
            <div className="cart cart-order-item d-flex">
                <div className="cart cart-img-div col-4">
                    <img src={spaceSuit} alt="" />
                </div>
                <div className="cart content-detail col-8 d-flex">
                    <div className="content-detail-inside">
                        <div className="content-detail-inside-top-suit">
                            <h5 className="cart-suit-name">個人宇航服</h5>
                            <div className="cart-ticket-country-badge">
                                <div className="cart-select-country-badge">
                                    已選好的國旗
                                </div>
                                <div className="cart-select-country-badge">
                                    已選好的徽章
                                </div>
                            </div>
                        </div>
                        <div className="content-detail-inside-bottom-suit">
                            <div className="cart-empty-place"></div>
                            <button className="btn cart-remove-btn">remove</button>
                            <div className="cart-order-money">$XXXXX</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SuitCard