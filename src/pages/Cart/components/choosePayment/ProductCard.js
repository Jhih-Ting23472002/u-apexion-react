import React from 'react';
import example from '../../img/example.png'

const ProductCard = ()=>{
    return (
        <>
            <div className="cart separated-line"></div>
            <div className="cart cart-order-item d-flex">
                <div className="cart cart-img-div col-4">
                    <img src={example} alt="" />
                </div>
                <div className="cart content-detail col-8 d-flex">
                    <div className="content-detail-inside">
                        <div className="content-detail-inside-top">
                            <h5 className="cart-product-name">商品名稱</h5>
                            <select className="cart-select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="content-detail-inside-bottom">
                            <div className="cart-empty-place"></div>
                            <button className="btn cart-remove-btn">remove</button>
                            <div className="cart-order-money">$xxxxx</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard