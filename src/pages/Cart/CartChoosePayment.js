import React from 'react';
import './CartChoosePayment.css';
import example from './img/example.png';
import cartTicket from './img/cartTicket.png';
import spaceSuit from './img/spaceSuit.png';
import spaceSeat from './img/spaceSeat.png';
import spaceShip from './img/spaceShip.png';
import { Link } from 'react-router-dom';

const CartChoosePayment = () => {
  return (
    <>
      <div className="cart-background container-fluid">
        <div className="cart container cart-container">
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
          <div className="cart d-flex justify-content-center py-5 total-price-text">
            您的購物袋裡有以下商品，目前總金額是 NT$xxxxxx。
          </div>

          <div className="cart separated-line"></div>
          <div className="cart cart-order-item d-flex">
            <div className="cart cart-img-div col-4">
              <img src={example} alt="" />
            </div>
            <div className="cart content-detail col-8 d-flex">
              <div className="content-detail-inside">
                <div className="content-detail-inside-top">
                  <h5 className="cart-product-name">商品名稱</h5>
                  <select className="cart-select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="content-detail-inside-bottom">
                  <div className="cart-empty-place"></div>
                  <button className="btn cart-remove-btn">remove</button>
                  <div className="cart-order-money">$xxxxx</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart separated-line"></div>
          <div className="cart cart-order-item d-flex">
            <div className="cart cart-img-div col-4">
              <img src={example} alt="" />
            </div>
            <div className="cart content-detail col-8 d-flex">
              <div className="content-detail-inside">
                <div className="content-detail-inside-top">
                  <h5 className="cart-product-name">商品名稱</h5>
                  <select className="cart-select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="content-detail-inside-bottom">
                  <div className="cart-empty-place"></div>
                  <button className="btn cart-remove-btn">remove</button>
                  <div className="cart-order-money">$XXXXX</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart separated-line"></div>
          <div className="cart cart-order-item d-flex">
            <div className="cart cart-img-div col-4 cart-ticket-margin-y">
              <img src={cartTicket} alt="" />
            </div>
            <div className="cart content-detail col-8 d-flex">
              <div className="content-detail-inside">
                <div className="content-detail-inside-top-ticket">
                  <div className="cart-ticket-destination">
                    <h5 className="cart-trip-name">行程:泰坦星</h5>
                    <h5 className="cart-trip-food">太空餐點</h5>
                  </div>
                  <div className="cart-ticket-during">
                    <h5 className="cart-start-time">啟航 2022/03/10 </h5>
                    <h5 className="cart-gohome-time">回程 2022/03/15 </h5>
                  </div>
                </div>
                <div className="content-detail-inside-bottom-ticket">
                  <h5 className="cart-number-people">人數 5</h5>
                  <button className="btn cart-remove-btn">remove</button>
                  <div className="cart-order-money">$XXXXX</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart separated-line"></div>
          <div className="cart cart-order-item d-flex">
            <div className="cart cart-img-div col-4">
              <img src={spaceSuit} alt="" />
            </div>
            <div className="cart content-detail col-8 d-flex">
              <div className="content-detail-inside">
                <div className="content-detail-inside-top-suit">
                  <h5 className="cart-suit-name">個人宇航服</h5>
                  <div className="cart-ticket-country-badge">
                    <div className="cart-select-country-badge">
                      已選好的國旗
                    </div>
                    <div className="cart-select-country-badge">
                      已選好的徽章
                    </div>
                  </div>
                </div>
                <div className="content-detail-inside-bottom-suit">
                  <div className="cart-empty-place"></div>
                  <button className="btn cart-remove-btn">remove</button>
                  <div className="cart-order-money">$XXXXX</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart separated-line"></div>
          <div className="cart cart-order-item d-flex">
            <div className="cart cart-img-div col-4">
              <img src={spaceSeat} alt="" />
            </div>
            <div className="cart content-detail col-8 d-flex">
              <div className="content-detail-inside">
                <div className="content-detail-inside-top">
                  <h5 className="cart-product-seat">太空艙座位</h5>
                  <div className="cart-select-color">已選好的顏色</div>
                </div>
                <div className="content-detail-inside-bottom">
                  <div className="cart-empty-place"></div>
                  <button className="btn cart-remove-btn">remove</button>
                  <div className="cart-order-money">$XXXXX</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart separated-line"></div>
          <div className="cart cart-order-item d-flex">
            <div className="cart cart-img-div col-4">
              <img src={spaceShip} alt="" className="spaceship-height" />
            </div>
            <div className="cart content-detail col-8 d-flex">
              <div className="content-detail-inside">
                <div className="content-detail-inside-top-spaceship">
                  <div className="cart-spaceship">
                    <h5 className="cart-spaceship-name">spacecraft</h5>
                    <h5 className="cart-spaceship-text">鐫刻文字</h5>
                  </div>
                  <div className="cart-country-flag">
                    <div className="cart-empty-flag"></div>
                    <h5 className="cart-country-flag-text">已選好的國旗</h5>
                  </div>
                </div>
                <div className="content-detail-inside-bottom-spaceship">
                  <div className="cart-number-people"></div>
                  <button className="btn cart-remove-btn">remove</button>
                  <div className="cart-order-money">$XXXXX</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart separated-line"></div>
          <div className="cart-user-option-should-pay">
            <div className="cart-user-option col-7">
              <select className="cart-user-option-text">
                <option>選擇運送區域</option>
              </select>
              <select className="cart-user-option-text">
                <option>選擇付款方式</option>
              </select>
              <select className="cart-user-option-text">
                <option>選擇送貨方式</option>
              </select>
            </div>
            <div className="cart-should-pay col-5">
              <h5 className="cart-should-pay-text">共n件商品</h5>
              <h5 className="cart-should-pay-text">小計:$xxxxx</h5>
              <div className="cart-should-pay-separated-line"></div>
              <h5 className="cart-should-pay-total-price">應付總金額:$xxxxx</h5>
              <div className="cart-button">
                <button className="btn continue-btn">繼續購物</button>
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
