import React from 'react';

const SuitCard = props => {
  const { suit, setSuitPrice, setSuitAmount, suitAmount } = props;

  let price = 0;
  suit.map(v => (price += v.suitPrice));
  setSuitPrice(price); // 客製化衣服的錢 傳到 CartChoosePayment 這支檔案裡面

  // 我需要一個數量的變數，並把他推進從太空服來的資料裡面。
  let total = 0;
  suit.map(v => (total += v.suitTotal));
  setSuitAmount(total);
  // 有抓到太空衣數量的值了

  function formatMoney(n) {
    return (Math.round(n * 100) / 100).toLocaleString();
  }
  return (
    <>
      {suit.map(v => (
        <React.Fragment key="2">
          <div className="cart separated-line"></div>
          <div className="cart cart-order-item d-flex">
            <div className="cart cart-img-div col-4">
              <img
                src={suit[0].suitBase64}
                alt=""
                className="spaceship-height"
              />
            </div>
            <div className="cart content-detail col-8 d-flex">
              <div className="content-detail-inside">
                <div className="content-detail-inside-top-suit">
                  <h5 className="cart-suit-name">國旗：{v.country}</h5>
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
                  <div className="cart-order-money">
                    ${formatMoney(v.suitPrice)}
                  </div>
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
