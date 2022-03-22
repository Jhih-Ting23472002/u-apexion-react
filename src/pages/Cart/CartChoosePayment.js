import React from 'react';
import './CartChoosePayment.css';
import ProcessLine from './components/ProcessLine'
import ProductCard from './components/choosePayment/ProductCard'
import TripCard from './components/choosePayment/TripCard';
import SuitCard from './components/choosePayment/SuitCard'
import SeatCard from './components/choosePayment/SeatCard'
import ShipCard from './components/choosePayment/ShipCard'
import { Link } from 'react-router-dom';

const CartChoosePayment = (props) => {
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
            您的購物袋裡有以下商品，目前總金額是 NT$xxxxxx。
          </div>

          <ProductCard />
          
          <TripCard tripPrice={props.tripPrice}/>

          <SuitCard />

          <SeatCard />

          <ShipCard />

          
          <div className="cart separated-line"></div>
          <div className="cart-user-option-should-pay">
            <div className="cart-user-option col-7">
              <select className="cart-user-option-text">
                <option>選擇運送區域</option>
                <option>運送區域：國內</option>
                <option>運送區域：國外</option>
              </select>
              <select className="cart-user-option-text">
                <option>選擇付款方式</option>
                <option>信用卡</option>
                <option>ATM轉帳</option>
              </select>
              <select className="cart-user-option-text">
                <option>選擇送貨方式</option>
                <option>宅配到府</option>
                <option>自取</option>
              </select>
            </div>
            <div className="cart-should-pay col-5">
              <h5 className="cart-should-pay-text">共n件商品</h5>
              <h5 className="cart-should-pay-text">小計:$xxxxx</h5>
              <div className="cart-should-pay-separated-line"></div>
              <h5 className="cart-should-pay-total-price">應付總金額:$xxxxx</h5>
              <div className="cart-button">
                <Link to={'/products'} className="btn continue-btn">繼續購物</Link>
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
