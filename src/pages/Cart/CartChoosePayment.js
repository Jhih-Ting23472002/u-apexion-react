import React, { useState, useContext } from 'react';
import './CartChoosePayment.css';
import ProcessLine from './components/ProcessLine';
import ProductCard from './components/choosePayment/ProductCard';
import TripCard from './components/choosePayment/TripCard';
import SuitCard from './components/choosePayment/SuitCard';
import SeatCard from './components/choosePayment/SeatCard';
import ShipCard from './components/choosePayment/ShipCard';
import { Link } from 'react-router-dom';

const CartChoosePayment = props => {
  const [suitPrice, setSuitPrice] = useState(0); // 客製化衣服的錢
  const [shipPrice, setShipPrice] = useState(0); // 客製化太空船的錢
  const [seatPrice, setSeatPrice] = useState(0); // 客製化椅子的錢

  props.setCartCustomTotalPrice(suitPrice + shipPrice + seatPrice); // 客製化衣服的錢 + 客製化太空船的錢 + 客製化椅子的錢

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
            您的購物袋裡有以下商品，目前總金額是 $
            {props.cartTotalPrice +
              props.cartTripTotal +
              props.cartCustomTotalPrice}
            。
          </div>

          <ProductCard
            productDetailList={props.productDetailList} // 刪除資料 state, setState 都要給
            setProductDetailList={props.setProductDetailList} // 刪除資料 state, setState 都要給
            cartTotalPrice={props.cartTotalPrice}
            setCartTotalPrice={props.setCartTotalPrice}
            totalProductItem={props.totalProductItem}
            setTotalProductItem={props.setTotalProductItem}
          />

          <TripCard
            setMealArr={props.setMealArr}
            tripSelected={props.tripSelected}
            setTripSelected={props.setTripSelected}
            tripPrice={props.tripPrice}
            setTripPrice={props.setTripPrice}
            tripDate={props.tripDate}
            setTripDate={props.setTripDate}
            mealSelected={props.mealSelected}
            setMealSelected={props.setMealSelected}
            memberName={props.memberName}
            cartTripTotal={props.cartTripTotal} // 票券總金額
            setCartTripTotal={props.setCartTripTotal} // 票券總金額
            cartTicketAmount={props.cartTicketAmount} // 票券數量
            setCartTicketAmount={props.setCartTicketAmount}
          />

          <SuitCard
            suit={props.suit}
            setSuit={props.setSuit}
            // suitPrice={suitPrice}
            setSuitPrice={setSuitPrice}
            setSuitAmount={props.setSuitAmount}
            suitAmount={props.suitAmount}
          />

          <ShipCard
            craft={props.craft}
            setCraft={props.setCraft}
            // shipPrice={shipPrice}
            setShipPrice={setShipPrice}
            setShipAmount={props.setShipAmount}
            shipAmount={props.shipAmount}
          />

          <SeatCard
            customize={props.customize}
            setCustomize={props.setCustomize}
            setSeatPrice={setSeatPrice}
            setSeatAmount={props.setSeatAmount}
            seatAmount={props.seatAmount}
          />

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
              <h5 className="cart-should-pay-text">
                共
                {props.totalProductItem +
                  props.cartTicketAmount +
                  props.suitAmount +
                  props.shipAmount +
                  props.seatAmount}
                件商品
              </h5>
              <h5 className="cart-should-pay-text">
                小計:&nbsp;$
                {props.cartTotalPrice +
                  props.cartTripTotal +
                  props.cartCustomTotalPrice}
              </h5>
              <div className="cart-should-pay-separated-line"></div>
              <h5 className="cart-should-pay-total-price">
                應付總金額: $
                {props.cartTotalPrice +
                  props.cartTripTotal +
                  props.cartCustomTotalPrice}
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
