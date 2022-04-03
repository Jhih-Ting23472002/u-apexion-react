import React from 'react';
import spaceSuit from '../../img/spaceSuit.png';

const SuitCard = props => {
  const { suit, setSuitPrice } = props;

  let price = 0;
  suit.map(v => (price += v.suitPrice));
  setSuitPrice(price); // 客製化衣服的錢 傳到 CartChoosePayment 這支檔案裡面

  // 我需要一個數量的變數，並把他推進從太空服來的資料裡面。

  return (
    <>
      {suit.map(v => (
        <React.Fragment key="2">
          <div className="cart separated-line"></div>
          <div className="cart cart-order-item d-flex">
            <div className="cart cart-img-div col-4">
              <img src={spaceSuit} alt="" />
            </div>
            <div className="cart content-detail col-8 d-flex">
              <div className="content-detail-inside">
                <div className="content-detail-inside-top-suit">
                  <h5 className="cart-suit-name">{v.country}</h5>
                  <div className="cart-ticket-country-badge">
                    <div className="cart-select-country-badge">
                      {v.markSuit}
                    </div>
                    <div className="cart-select-country-badge">
                      {v.suitImgName}
                    </div>
                  </div>
                </div>
                <div className="content-detail-inside-bottom-suit">
                  <div className="cart-empty-place"></div>
                  <button className="btn cart-remove-btn">remove</button>
                  <div className="cart-order-money">${v.suitPrice}</div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};
export default SuitCard;
