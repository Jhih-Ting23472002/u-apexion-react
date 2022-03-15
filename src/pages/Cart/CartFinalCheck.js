import React from 'react';
import './CartFinalCheck.css';

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
          <div className="cart d-flex justify-content-center py-5 cart-check-list">
            準備好下達訂單嗎？請先確認所有資訊正確無誤 。
          </div>

          {/* 購物明細 */}
          <div className="cart-list-detail">
            <div className="cart-list-detail-line">
              <div className="list-detail-text">購物明細</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartFinalCheck;
