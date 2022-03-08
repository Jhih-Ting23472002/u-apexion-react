import React from 'react';
import './CartChoosePayment.css';

const CartChoosePayment = () => {
  return (
    <>
      <div className="cart container-fluid">
        <div className="cart container">
          <div className="cart row d-flex justify-content-center">
            <div className="cart step-text ml-6">付款方式</div>
            <div className="cart step-text ml-6">訂購人資訊</div>
            <div className="cart step-text ml-6">最後確認</div>
          </div>
          <div className="cart row d-flex justify-content-center process-line">
            <div className="cart step-line"></div>
            <div className="steps step-one ml-7 d-flex align-items-center justify-content-center">
              1
            </div>
            <div className="steps step-two ml-7 d-flex align-items-center justify-content-center">
              2
            </div>
            <div className="steps step-three ml-7 d-flex align-items-center justify-content-center">
              3
            </div>
            <div className="steps step-four ml-7 d-flex align-items-center justify-content-center">
              4
            </div>
          </div>
          <div className="cart d-flex justify-content-center py-5 total-price-text">
            您的購物袋裡有以下商品，目前總金額是 NT$xxxxxx。
          </div>
          <button className="btn">結帳</button>
        </div>
      </div>
    </>
  );
};

export default CartChoosePayment;
