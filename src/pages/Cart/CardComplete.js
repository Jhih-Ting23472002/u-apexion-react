import React from 'react';
import './CardComplete.css';

const CardComplete = () => {
  return (
    <>
      <div className="cart-background container-fluid">
        <div className="container cart-container">
          <div className="cart row d-flex justify-content-center process-text">
            <div className="cart step-text">付款方式</div>
            <div className="cart step-text">訂購人資訊</div>
            <div className="cart step-text">最後確認</div>
          </div>
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
          <div className="cart d-flex justify-content-center py-5 total-price-text deal-receipt">
            <p>付款已完成，交易金額為$xxxxx元。</p>
            <p>謝謝您的訂購，您的訂單編號為：20220129015648。</p>
          </div>

          {/* 購物明細 */}
          <div className="cart-list">
            <div className="payed-list-detail-head">
              <div className="list-detail-text">購物明細</div>
            </div>

            {/* 商品明細 */}
            <div className="deal-receipt-content d-flex flex-column">
              <div className="deal-receipt-title d-flex align-items-center">
                <div className="col-5 text-center quantity-detail-border-right">
                  商品明細
                </div>
                <div className="col-4 text-center quantity-detail-border-right">
                  數量
                </div>
                <div className="col-3 text-center">小記</div>
              </div>

              {/* aaa-衣服 bbb-褲子 */}
              <div className="product-trip-custom d-flex align-items-center">
                <div className="col-5 text-center">aaa-衣服</div>
                <div className="col-4 text-center">1</div>
                <div className="col-3 text-center">$100</div>
              </div>
              <div className="product-trip-custom d-flex align-items-center">
                <div className="col-5 text-center">bbb-褲子</div>
                <div className="col-4 text-center">2</div>
                <div className="col-3 text-center">$400</div>
              </div>

              {/* 共 2 項商品，數量 3 個，總金額$500  */}
              <div className="remind-money d-flex align-items-center">
                <div className="col-5"></div>
                <div className="col-4 text-center">
                  共 2 項商品，數量 3 個，總金額
                </div>
                <div className="col-3 text-center">$500</div>
              </div>

              {/* 本訂單已付款金額$500 */}
              <div className="remind-money-again d-flex align-items-center">
                <div className="col-5"></div>
                <div className="col-4 text-center">本訂單已付款金額</div>
                <div className="col-3 text-center">$500</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardComplete;
