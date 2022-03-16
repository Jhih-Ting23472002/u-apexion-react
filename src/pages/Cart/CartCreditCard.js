import React from 'react';
import './CartCreditCard.css';

const CartCreditCard = () => {
  return (
    <>
      <div className="cart-background container-fluid">
        <div className="cart-container container">
          <div className="cart-card-shape">
            <div className="cart-card-top">
              <div className="mr-5">
                <i class="fa-solid fa-credit-card cart-credit-card-icon"></i>
              </div>
              <div className="cart-card-top-inside">
                信用卡資料(Credit Card Information)
              </div>
            </div>
            <div className="cart-card-bottom">
              <div className="d-flex flex-column my-3 pl-4">
                <div className="mb-3">信用卡卡號(Card Number)</div>

                <div className="card-input-area">
                  <input type="number" className="card-input-border"></input>
                  <div className="card-dash-line">—</div>

                  <input type="number" className="card-input-border"></input>
                  <div className="card-dash-line">—</div>

                  <input type="number" className="card-input-border"></input>
                  <div className="card-dash-line">—</div>

                  <input type="number" className="card-input-border"></input>
                </div>
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default CartCreditCard;
