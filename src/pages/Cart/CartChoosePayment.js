import React from 'react';
import './CartChoosePayment.css';
import example from './img/example.png';

const CartChoosePayment = () => {
  return (
    <>
      <div className="cart-background container-fluid">
        <div className="cart container cart-container">
          <div className="cart row d-flex justify-content-center">
            <div className="cart step-text cart-ml-6">付款方式</div>
            <div className="cart step-text cart-ml-6">訂購人資訊</div>
            <div className="cart step-text cart-ml-6">最後確認</div>
          </div>
          <div className="cart row d-flex justify-content-center process-line">
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
          <div className="cart d-flex justify-content-center py-5 total-price-text">
            您的購物袋裡有以下商品，目前總金額是 NT$xxxxxx。
          </div>
          <button className="btn cart-btn-check" type="button">
            結帳
          </button>
          <div className="cart separated-line"></div>
          <div className="cart cart-order-item d-flex">
            <div className="cart cart-img-div col-4">
              <img src={example} alt="" />
            </div>
            <div className="cart content-detail col-8 d-flex">
              <div className="content-detail-inside">
                <div className="content-detail-inside-top">
                  <h4 className="cart-product-name">商品名稱</h4>
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
                  <button className="cart-remove-btn">remove btn</button>
                  <div className="cart-order-money">$888</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart separated-line"></div>
          <div className="cart cart-order-item d-flex">
            <div className="cart cart-img-div col-4">
              <img src={example} alt="" />
            </div>
            <div className="cart content-detail col-8 d-flex">
              <div className="content-detail-inside">
                <div className="content-detail-inside-top">
                  <h4 className="cart-product-name">商品名稱</h4>
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
                  <button className="cart-remove-btn">remove btn</button>
                  <div className="cart-order-money">$XXXXX</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart separated-line"></div>
          <div className="cart cart-order-item d-flex">
            <div className="cart cart-img-div col-4">
              <img src={example} alt="" />
            </div>
            <div className="cart content-detail col-8 d-flex">
              <div className="content-detail-inside">
                <div className="content-detail-inside-top">
                  <h4 className="cart-product-name">商品名稱</h4>
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
                  <button className="cart-remove-btn">remove btn</button>
                  <div className="cart-order-money">$XXXXX</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartChoosePayment;
