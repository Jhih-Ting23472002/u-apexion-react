import React, { useState } from 'react';
import './CartCreditCard.css';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Link } from 'react-router-dom';

const CartCreditCard = props => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');
  // const [productFinalName, setProductFinalName] = useState('');

  const {
    cartOrderListNumber,
    setCartOrderListNumber,
    tripSelected,
    tripPrice,
    productDetailList,
  } = props;

  // 購買智婷每一筆商品名稱的陣列，初始值為空
  let productJTing = [];

  // 跑回圈，完全不懂我到底會什麼？一直拖別人後腿，我不知道為何是 『 for in 』 ， 不能用 『 for of 或 for 』嗎？？？？？？
  for (let i in productDetailList) {
    // 跑回圈取到每一筆資料的名稱
    const JTingName = productDetailList[i].name;

    //把每一筆資料的名稱推送到 productJTing 這個空陣列
    productJTing.push(JTingName);
    console.log(productJTing);
  }

  //----------------------------------------------------------------

  // 購買智婷每一筆商品數量的陣列，初始值為空
  let productJTingQuantity = [];

  // 跑回圈，完全不懂我到底會什麼？一直拖別人後腿，我不知道為何是 『 for in 』 ， 不能用 『 for of 或 for 』嗎？？？？？？
  for (let i in productDetailList) {
    // 跑回圈取到每一筆資料的數量
    const JTingQuantity = productDetailList[i].total;

    //把每一筆資料的數量推送到 JTingQuantity 這個空陣列
    productJTingQuantity.push(JTingQuantity);
    console.log(productJTingQuantity);
  }

  //----------------------------------------------------------------

  // 購買智婷每一筆商品價錢的陣列，初始值為空
  let productJTingPrice = [];

  // 跑回圈，完全不懂我到底會什麼？一直拖別人後腿，我不知道為何是 『 for in 』 ， 不能用 『 for of 或 for 』嗎？？？？？？
  for (let i in productDetailList) {
    // 跑回圈取到每一筆資料的價錢
    const JTingPrice = productDetailList[i].price;

    //把每一筆資料的價錢推送到 JTingPrice 這個空陣列
    productJTingPrice.push(JTingPrice);
    console.log(productJTingPrice);
  }

  let orderListNumber = Math.floor(Math.random() * 1000000 + 10000000); // 訂單編號
  const userId = localStorage.getItem('user_id');

  const sendOrderDeatilHandler = e => {
    setCartOrderListNumber(orderListNumber);
    //console.log('orderListNumber', orderListNumber);  測試是否印成功
    alert('金額核對完畢，確認送出？');
    fetch('http://localhost:3001/cart/order-list-post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderListNumber,
        userId,
        productJTing,
        productJTingQuantity,
        productJTingPrice,
      }),
    }).then(res => res.json());
  };

  return (
    <>
      <div className="cart-background container-fluid">
        <div className="cart-container">
          <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
          />
          <form className="cart-creditcard-form mt-5">
            <input
              className="cart-creditcard-input mx-2"
              type="tel"
              name="number"
              placeholder="Card Number"
              value={number}
              onChange={e => setNumber(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
            ></input>

            <input
              className="cart-creditcard-input mx-2"
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
            ></input>

            <input
              className="cart-creditcard-input mx-2"
              type="text"
              name="expiry"
              placeholder="MM/YY Expiry"
              value={expiry}
              maxLength="4"
              onChange={e => setExpiry(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
            ></input>

            <input
              className="cart-creditcard-input mx-2"
              type="tel"
              name="cvc"
              maxLength="3"
              placeholder="CVC"
              value={cvc}
              onChange={e => setCvc(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
            ></input>
          </form>
          <div className="d-flex justify-content-center align-items-center mt-5">
            <Link to={'/cart-complete'} className="mx-3">
              <button
                type="button"
                onClick={sendOrderDeatilHandler}
                className="btn card-confirm cart-link"
              >
                確認付款 (Confirm)
              </button>
            </Link>
            <div className="card-trade mx-3">
              交易金額 ${props.cartTotalPrice + +props.tripPrice}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCreditCard;
