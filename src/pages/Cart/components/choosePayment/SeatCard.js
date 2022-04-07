import React from 'react';
import spaceSeat from '../../img/spaceSeat.png';

const SeatCard = props => {
  const { customize, setSeatPrice, setSeatAmount, seatAmount } = props;

  let price = 0;
  customize.map(v => (price += v.seatPrice));
  setSeatPrice(price); // 客製化椅子的錢 傳到 CartChoosePayment 這支檔案裡面

  let total = 0;
  customize.map(v => (total += v.seatTotal));
  setSeatAmount(total);

  function formatMoney(n) {
    return (Math.round(n * 100) / 100).toLocaleString();
  }

  return (
    <>
      {customize.map(v => (
        <React.Fragment key="1">
          <div className="cart separated-line"></div>
          <div className="cart cart-order-item d-flex">
            <div className="cart cart-img-div col-4">
              <img src={spaceSeat} alt="" />
            </div>
            <div className="cart content-detail col-8 d-flex">
              <div className="content-detail-inside">
                <div className="content-detail-inside-top">
                  <h5 className="cart-product-seat">太空艙座位</h5>
                  <div className="cart-select-color">{v.style}</div>
                </div>
                <div className="content-detail-inside-bottom">
                  <div className="cart-empty-place"></div>
                  <button className="btn cart-remove-btn">remove</button>
                  <div className="cart-order-money">
                    ${formatMoney(v.seatPrice)}
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
export default SeatCard;
