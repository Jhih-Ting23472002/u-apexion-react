import React, { useState } from 'react';
import './CartChoosePayment.css';
import ProcessLine from './components/ProcessLine';
import ProductCard from './components/choosePayment/ProductCard';
import TripCard from './components/choosePayment/TripCard';
import SuitCard from './components/choosePayment/SuitCard';
import SeatCard from './components/choosePayment/SeatCard';
import ShipCard from './components/choosePayment/ShipCard';
import { Link } from 'react-router-dom';

const CartChoosePayment = props => {
  // const [userOption, setUserOption] = useState({
  //   a: '',
  //   b: '',
  //   c: ''
  // })

  function doSetUserOption(type = 'delivery-area', value) {
    // props.setCartDeliveryArea(userOption)
    const options = { ...props.userOption };
    options[type] = value;
    props.setUserOption(options);
    // 除錯檢查用 console.log(options);
  }

  return (
    <>
      <div className="cart-background container-fluid">
        <div className="cart container cart-container">
          <div className="cart row d-flex justify-content-center process-text">
            <div className="cart step-text">付款方式</div>
            <div className="cart step-text">訂購人資訊</div>
            <div className="cart step-text">最後確認</div>
          </div>
          <ProcessLine />
          <div className="cart d-flex justify-content-center py-5 total-price-text">
            您的購物袋裡有以下商品，目前總金額是 ${props.cartTotalPrice}。
          </div>

          <ProductCard
            productDetailList={props.productDetailList} // 刪除資料 state, setState 都要給
            setProductDetailList={props.setProductDetailList} // 刪除資料 state, setState 都要給
          />

          <TripCard
            tripSelected={props.tripSelected}
            setTripSelected={props.setTripSelected}
            tripPrice={props.tripPrice}
            setTripPrice={props.setTripPrice}
          />

          <SuitCard />

          <SeatCard />

          <ShipCard />

          <div className="cart separated-line"></div>
          <div className="cart-user-option-should-pay">
            <div className="cart-user-option col-7">
              <select
                className="cart-user-option-text"
                onChange={e => {
                  doSetUserOption('deliveryArea', e.target.value);
                }}
              >
                <option value="">選擇運送區域</option>
                <option value="國內">運送區域：國內</option>
                <option value="國外">運送區域：國外</option>
              </select>
              <select
                className="cart-user-option-text"
                onChange={e => {
                  doSetUserOption('paymentMethod', e.target.value);
                }}
              >
                <option>選擇付款方式</option>
                <option>信用卡</option>
                <option>ATM轉帳</option>
              </select>
              <select
                className="cart-user-option-text"
                onChange={e => {
                  doSetUserOption('deliveryWay', e.target.value);
                }}
              >
                <option>選擇送貨方式</option>
                <option>宅配到府</option>
                <option>自取</option>
              </select>
            </div>
            <div className="cart-should-pay col-5">
              <h5 className="cart-should-pay-text">共n件商品</h5>
              <h5 className="cart-should-pay-text">小計:{props.tripPrice}</h5>
              <div className="cart-should-pay-separated-line"></div>
              <h5 className="cart-should-pay-total-price">
                應付總金額:{props.tripPrice}
              </h5>
              <div className="cart-button">
                <Link to={'/products'} className="btn continue-btn">
                  繼續購物
                </Link>
                <Link
                  className="btn next-btn cart-link"
                  to={'/cart-information'}
                >
                  下一步
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartChoosePayment;
