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
              {/* 信用卡卡號區 */}
              <div className="d-flex flex-column my-5 pl-4">
                <div className="mb-3">信用卡卡號(Card Number)</div>

                <div className="card-number-area">
                  <input type="number" className="card-input-border"></input>
                  <div className="card-dash-line mx-3">—</div>

                  <input type="number" className="card-input-border"></input>
                  <div className="card-dash-line mx-3">—</div>

                  <input type="number" className="card-input-border"></input>
                  <div className="card-dash-line mx-3">—</div>

                  <input type="number" className="card-input-border"></input>
                </div>
              </div>

              {/* 有效期限區 */}
              <div className="d-flex flex-column my-5 pl-4">
                <div className="mb-3">有效期限(Expiration Date)</div>

                <div className="card-expiration-area">
                  <input
                    type="number"
                    min="1"
                    max="12"
                    className="card-input-border"
                  ></input>
                  <div className="month-year">月 (Month) /</div>

                  <input type="number" className="card-input-border"></input>
                  <div className="month-year">年 (Year)</div>
                </div>
              </div>

              {/* 檢查碼  */}
              <div className="d-flex flex-column my-5 pl-4">
                <div className="mb-3">檢查碼(Card Verification 後三碼)</div>

                <div className="card-expiration-area">
                  <input type="number" className="card-input-border"></input>
                </div>
              </div>

              {/* 確認付款 */}
              <div className="d-flex my-5 pl-4 align-items-center">
                <button className="btn card-confirm cart-link col-4">
                  確認付款 (Confirm)
                </button>
                <div className="col-4 card-trade">交易金額 $xxxxxx</div>
                <div className=""></div>
                <div className="col-4 d-flex justify-content-around">
                  <i class="fab fa-cc-visa cart-credit-card-icon"></i>
                  <i class="fab fa-cc-mastercard cart-credit-card-icon"></i>
                  <i class="fab fa-cc-jcb cart-credit-card-icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCreditCard;
