import React from 'react';
import './CartInformation.css';

const CartInformation = () => {
  return (
    <>
      <div className="cart-background container-fluid">
        <div className="cart-container container">
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
          <div className="cart-chosen-way">
            <div className="cart-delivery-area">運送區域：國內</div>
            <div className="cart-payment-way">付款方式：信用卡</div>
            <div className="cart-delivery-way">配送方式：宅配到府</div>
          </div>

          <div className="cart-consumer-information-part">
            <div className="cart-information-line">
              <div className="consumer-recipient-information">訂購人資訊</div>
            </div>
            <div className="consumer-information-area">
              <div className="consumer-information-name-mobile-email">
                <label className="consumer-recipient-label-margin">姓名</label>
                <input
                  className="consumer-recipient-input"
                  placeholder="請填寫真實姓名"
                ></input>
              </div>
              <div className="consumer-information-name-mobile-email">
                <label className="consumer-recipient-label-margin">手機</label>
                <input
                  className="consumer-recipient-input"
                  placeholder="您的手機號碼"
                ></input>
                <div className="mobile-or-telephone">手機市話可擇一填寫</div>
              </div>
              <div className="consumer-information-name-mobile-email">
                <label className="consumer-recipient-label-margin">市話</label>
                <input
                  className="consumer-recipient-input"
                  placeholder="您的市話號碼"
                ></input>
                <div className="mobile-or-telephone">手機市話可擇一填寫</div>
              </div>
              <div className="consumer-information-name-mobile-email">
                <label className="consumer-recipient-label-margin">email</label>
                <input
                  className="consumer-recipient-input"
                  placeholder="您的email"
                ></input>
              </div>
            </div>
          </div>

          <div className="cart-recipient-information-part">
            <div className="cart-information-line">
              <div className="consumer-recipient-information">收件人資訊</div>
            </div>
            <div className="recipient-information-area">
              <div className="recipient-information-name-mobile-email-address">
                <label className="cart-checkbox-label">
                  同訂購人資料
                  <input type="checkbox" className="cart-checkbox" />
                  <span class="cart-checkmark"></span>
                </label>
              </div>
              <div className="recipient-information-name-mobile-email-address">
                <label className="consumer-recipient-label-margin">
                  收件人
                </label>
                <input
                  className="consumer-recipient-input"
                  placeholder="請填寫真實姓名"
                ></input>
              </div>
              <div className="recipient-information-name-mobile-email-address">
                <label className="consumer-recipient-label-margin">
                  聯絡電話
                </label>
                <input
                  className="consumer-recipient-input"
                  placeholder="您的手機號碼"
                ></input>
                <div className="mobile-or-telephone">
                  宅配人員將以此資料聯繫
                </div>
              </div>
              <div className="recipient-information-name-mobile-email-address">
                <label className="consumer-recipient-label-margin">email</label>
                <input
                  className="consumer-recipient-input"
                  placeholder="您的email"
                ></input>
                <div className="mobile-or-telephone">
                  交易通知將會發送到此email
                </div>
              </div>
              <div className="recipient-information-name-mobile-email-address">
                <label className="consumer-recipient-label-margin">
                  收件地址
                </label>
                <div className="select-consumer-recipient-input">
                  <div className="select-consumer-recipient-input-top mb-3">
                    <select className="select-city mb-3">
                      <option>請選擇縣市</option>
                    </select>
                    <select className="select-district">
                      <option>請選擇鄉鎮市區</option>
                    </select>
                  </div>
                  <div className="select-consumer-recipient-input-bottom">
                    <input
                      className="recipient-input-address"
                      placeholder="您的地址"
                    ></input>
                  </div>
                </div>
                <div className="mobile-or-telephone">需專人簽收</div>
              </div>
              <div className="recipient-information-name-mobile-email-address">
                <label className="consumer-recipient-label-margin">
                  配送時間
                </label>
                <input
                  className="consumer-recipient-input"
                  value="不限時"
                  disabled
                ></input>
                <div className="mobile-or-telephone">
                  因為疫情的關係，現在只有不限時。造成您的不便敬請見諒。
                </div>
              </div>
            </div>
          </div>
          <div className="previous-next-btn">
            <div className="col-3"></div>
            <button className="btn next-btn position">
              <i className="arrow left"></i>上一步
            </button>
            <div className="col-2"></div>
            <button className="btn next-btn position">
              下ㄧ步<i className="arrow right"></i>
            </button>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartInformation;
