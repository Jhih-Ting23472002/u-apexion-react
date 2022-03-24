import React, { useState } from 'react';
import './CartCreditCard.css';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Link } from 'react-router-dom';

const CartCreditCard = (props) => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');

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
              <button type="button" className="btn card-confirm cart-link">
                確認付款 (Confirm)
              </button>
            </Link>
            <div className="card-trade mx-3">交易金額 {props.tripPrice}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCreditCard;
