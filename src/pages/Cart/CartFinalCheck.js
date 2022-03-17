import React from 'react';
import './CartFinalCheck.css';
import example from './img/example.png';
import spaceSuit from './img/spaceSuit.png';
import spaceSeat from './img/spaceSeat.png';
import spaceShip from './img/spaceShip.png';
import cartTicket from './img/cartTicket.png';
import { Link } from 'react-router-dom';

const CartFinalCheck = () => {
  return (
    <>
      <div className="cart-background container-fluid">
        <div className="cart-container container">
          {/* 付款方式  訂購人資訊 最後確認 */}
          <div className="cart row d-flex justify-content-center process-text">
            <div className="cart step-text">付款方式</div>
            <div className="cart step-text">訂購人資訊</div>
            <div className="cart step-text">最後確認</div>
          </div>

          {/* 進度條球球 */}
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
          <div className="cart d-flex justify-content-center cart-check-list">
            準備好下達訂單嗎？請先確認所有資訊正確無誤 。
          </div>

          {/* 購物明細 */}
          <div className="cart-list">
            <div className="cart-list-line">
              <div className="list-detail-text">購物明細</div>
            </div>

            {/* 衣服褲子 */}
            <div className="cart-order-item cart-list-detail d-flex">
              <div className="cart-img-div col-4">
                <img src={example} alt="" />
              </div>
              <div className="cart-list-detail-inside col-8">
                <h5 className="cart-product-list-group">商品名稱</h5>
                <div className="cart-product-list-group">1111111</div>
                <div className="cart-product-list-group">$xxxxx</div>
              </div>
            </div>
            <div className="cart-list-detail-line"></div>

            {/* 個人宇航服 */}
            <div className="cart-order-item cart-list-detail d-flex">
              <div className="cart-img-div col-4">
                <img src={spaceSuit} alt="" />
              </div>
              <div className="cart-list-detail-inside col-8">
                <h5 className="cart-product-list-group">個人宇航服</h5>
                <div className="cart-product-list-group">已選好的國旗</div>
                <div className="cart-product-list-group">已選好的徽章</div>
                <div className="cart-product-list-group">$XXXXX</div>
              </div>
            </div>
            <div className="cart-list-detail-line"></div>

            {/* 太空艙座位 */}
            <div className="cart-order-item cart-list-detail d-flex">
              <div className="cart-img-div col-4">
                <img src={spaceSeat} alt="" />
              </div>
              <div className="cart-list-detail-inside col-8">
                <h5 className="cart-product-list-group">太空艙座位</h5>
                <div className="cart-product-list-group">顏色</div>
                <div className="cart-product-list-group">$XXXXX</div>
              </div>
            </div>
            <div className="cart-list-detail-line"></div>

            {/* 太空船 spacecraft */}
            <div className="cart-order-item cart-list-detail d-flex">
              <div className="cart-img-div col-4">
                <img src={spaceShip} alt="" className="spaceship-height" />
              </div>
              <div className="cart-list-detail-inside col-8">
                <h5 className="cart-product-list-group">spacecraft</h5>
                <div className="cart-product-list-group">鐫刻文字</div>
                <div className="cart-product-list-group">已選好的國旗</div>
                <div className="cart-product-list-group">$XXXXX</div>
              </div>
            </div>
            <div className="cart-list-detail-line"></div>

            {/* 票券 ticket */}
            <div className="cart-order-item cart-list-detail d-flex">
              <div className="cart-img-div col-4">
                <img src={cartTicket} alt="" />
              </div>

              <div className="cart-list-detail-inside col-8 flex-column limit-width">
                <div className="d-flex justify-content-between need-width">
                  <div className="cart-product-list-group">行程：泰坦星</div>
                  <div className="cart-product-list-group">餐點</div>
                </div>
                <div className="d-flex justify-content-between need-width">
                  <div className="cart-product-list-group">日程</div>
                  <div className="cart-product-list-group">
                    2022/4/1 - 2022/5/1
                  </div>
                </div>
                <div className="d-flex justify-content-between need-width">
                  <div className="cart-product-list-group">人數5</div>
                  <div className="cart-product-list-group">$XXXXX</div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end final-total-price">
              <div className="mb-4">共n件商品，總金額$xxxxx</div>
              <div>本訂單需付款金額為$xxxxxx</div>
            </div>
          </div>

          {/* 收件人資訊 */}
          <div className="cart-list">
            <div className="cart-list-line">
              <div className="list-detail-text">收件人資訊</div>
            </div>
            <div className="recipient-final-info">
              <div className="d-flex mt-4">
                <p className="col-3">配送方式：</p>
                <p className="col-6">宅配到府</p>
                <div className="col-3"></div>
              </div>
              <div className="d-flex mt-5">
                <p className="col-3">付款方式：</p>
                <p className="col-6">信用卡</p>
                <div className="col-3"></div>
              </div>
              <div className="d-flex mt-5">
                <p className="col-3">收件者：</p>
                <p className="col-6">某某某</p>
                <div className="col-3"></div>
              </div>
              <div className="d-flex mt-5">
                <p className="col-3">email：</p>
                <p className="col-6">aaabbb@ccc.com</p>
                <div className="col-3"></div>
              </div>
              <div className="d-flex mt-5">
                <p className="col-3">聯絡電話：</p>
                <p className="col-6">0911222333</p>
                <div className="col-3"></div>
              </div>
              <div className="d-flex mt-5">
                <p className="col-3">寄送地址：</p>
                <p className="col-6">台北市某某區</p>
                <div className="col-3"></div>
              </div>
              <div className="d-flex my-5">
                <p className="col-3">配送時間：</p>
                <p className="col-6">不限時</p>
                <div className="col-3"></div>
              </div>
            </div>
          </div>
          <div className="previous-next-btn">
            <div className="col-3"></div>
            <Link
              className="btn next-btn position cart-link"
              to={'/cart-information'}
            >
              <i className="arrow left"></i>上一步
            </Link>
            <div className="col-2"></div>
            <Link
              className="btn next-btn position cart-link"
              to={''}
            >
              下ㄧ步<i className="arrow right"></i>
            </Link>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartFinalCheck;
