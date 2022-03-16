import React from 'react';
import './CartFinalCheck.css';
import example from './img/example.png';
import spaceSuit from './img/spaceSuit.png';

const CartFinalCheck = () => {
  return (
    <>
      <div className="cart-background container-fluid">
        <div className="cart-container container">
          {/* 付款方式  訂購人資訊 最後確認 */}
          <div className="cart row d-flex justify-content-center process-text">
            <div className="cart step-text">付款方式</div>
            <div className="cart step-text">訂購人資訊</div>
            <div className="cart step-text">最後確認</div>
          </div>

          {/* 進度條球球 */}
          <div className="cart row d-flex justify-content-around process-line">
            <div className="cart cart-step-line"></div>
            <div className="cart-steps step-one cart-ml-7 d-flex align-items-center justify-content-center">
              1
            </div>
            <div className="cart-steps step-two cart-ml-7 d-flex align-items-center justify-content-center">
              2
            </div>
            <div className="cart-steps step-three cart-ml-7 d-flex align-items-center justify-content-center">
              3
            </div>
            <div className="cart-steps step-four cart-ml-7 d-flex align-items-center justify-content-center">
              4
            </div>
          </div>
          <div className="cart d-flex justify-content-center cart-check-list">
            準備好下達訂單嗎？請先確認所有資訊正確無誤 。
          </div>

          {/* 購物明細 */}
          <div className="cart-list">
            <div className="cart-list-line">
              <div className="list-detail-text">購物明細</div>
            </div>
            <div className="cart-order-item cart-list-detail d-flex">
              <div className="cart-img-div col-4">
                <img src={example} alt="" />
              </div>
              <div className="cart-list-detail-inside col-8">
                <h5 className="cart-product-list-group">商品名稱</h5>
                <div className="cart-product-list-group">1111111</div>
                <div className="cart-product-list-group">$xxxxx</div>
              </div>
            </div>
            <div className="cart-list-detail-line"></div>

            <div className="cart cart-order-item d-flex">
              <div className="cart cart-img-div col-4">
                <img src={spaceSuit} alt="" />
              </div>
              <div className="cart content-detail col-8">
                <h5 className="">個人宇航服</h5>
                <div className="">已選好的國旗</div>
                <div className="">已選好的徽章</div>
                <div className="">$XXXXX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartFinalCheck;
