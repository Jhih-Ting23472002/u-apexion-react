import React, { useEffect, useContext } from 'react';
import './CardComplete.css';
import { Link } from 'react-router-dom';
import CartQuantity from '../Products/CartQuantity';

const CardComplete = props => {
  const {
    productDetailList,
    totalProductItem,
    tripSelected,
    tripPrice,
    cartTotalPrice,
    cartOrderListNumber, // 訂單編號
  } = props;

  // let orderListNumber = Math.floor(Math.random() * 100000000000);
  // console.log('orderListNumber', orderListNumber);

  const { setCartTotal } = useContext(CartQuantity);
  useEffect(() => {
    setCartTotal(0);
  }, []);
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
            <div className="cart-steps step-two-on cart-ml-7 d-flex align-items-center justify-content-center">
              2
            </div>
            <div className="cart-steps step-three-on cart-ml-7 d-flex align-items-center justify-content-center">
              3
            </div>
            <div className="cart-steps step-four-on cart-ml-7 d-flex align-items-center justify-content-center">
              4
            </div>
          </div>
          <div className="cart d-flex justify-content-center py-5 total-price-text deal-receipt">
            <p>
              付款已完成，交易金額為${cartTotalPrice + +tripPrice}
              元。
            </p>
            <br />
            <p>謝謝您的訂購，您的訂單編號為：{cartOrderListNumber}。</p>
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
                  商品數量
                </div>
                <div className="col-3 text-center">小計</div>
              </div>

              {/* aaa-衣服 bbb-褲子 */}
              {productDetailList.map(v => (
                <div
                  key={v.pid}
                  className="product-trip-custom d-flex align-items-center"
                >
                  <div className="col-5 text-center">{v.name}</div>
                  <div className="col-4 text-center">{v.total}</div>
                  <div className="col-3 text-center">${v.price * v.total}</div>
                </div>
              ))}
              <div className="product-trip-custom d-flex align-items-center">
                <div className="col-5 text-center">{tripSelected}</div>
                <div className="col-4 text-center">1</div>
                <div className="col-3 text-center">${+tripPrice}</div>
              </div>

              {/* 共 2 項商品，總金額$500  */}
              <div className="remind-money d-flex align-items-center">
                <div className="col-5"></div>
                <div className="col-4 text-center">
                  共 {totalProductItem + 1} 項商品，總金額
                </div>
                <div className="col-3 text-center">
                  ${cartTotalPrice + +tripPrice}
                </div>
              </div>

              {/* 本訂單已付款金額$500 */}
              <div className="remind-money-again d-flex align-items-center">
                <div className="col-5"></div>
                <div className="col-4 text-center">本訂單已付款金額</div>
                <div className="col-3 text-center">
                  ${cartTotalPrice + +tripPrice}
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <Link className="col-2 btn cart-link to-other-page mt-5" to={''}>
              回首頁
            </Link>
            <div className="col-1"></div>
            <Link className="col-2 btn cart-link to-other-page mt-5" to={''}>
              繼續購物
            </Link>
            <div className="col-1"></div>
            <Link className="col-2 btn cart-link to-other-page mt-5" to={''}>
              登出
            </Link>
            <div className="col-1"></div>
            <button
              type="button"
              className="col-2 btn cart-link to-other-page mt-5"
              to={''}
            >
              會員專區
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardComplete;
