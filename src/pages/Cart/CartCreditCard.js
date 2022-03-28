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

  const { cartOrderListNumber, setCartOrderListNumber } = props;

  let orderListNumber = Math.floor(Math.random() * 100000 + 10000000); // 訂單編號

  const sendOrderDeatilHandler = e => {
    setCartOrderListNumber(orderListNumber);
    console.log('orderListNumber', orderListNumber);
    alert('資料都對嗎？');
    fetch('http://localhost:3001/cart/order-list-post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderListNumber,
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
              交易金額 ${props.cartTotalPrice + +props.tripPrice.substring(1)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCreditCard;
