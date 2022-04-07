import React from 'react';
import spaceShip from '../../img/spaceShip.png';

const ShipCard = props => {
  const { craft, setShipPrice, setShipAmount, shipAmount } = props;

  let price = 0;
  craft.map(v => (price += v.craftPrice));
  setShipPrice(price); // 客製化太空船的錢 傳到 CartChoosePayment 這支檔案裡面

  let total = 0;
  craft.map(v => (total += v.craftTotal));
  setShipAmount(total);
  // 有抓到太空船數量的值了

  function formatMoney(n) {
    return (Math.round(n * 100) / 100).toLocaleString();
  }

  return (
    <>
      {craft.map(v => (
        <React.Fragment key="1">
          <div className="cart separated-line"></div>
          <div className="cart cart-order-item d-flex">
            <div className="cart cart-img-div col-4">
              <img src={spaceShip} alt="" className="spaceship-height" />
            </div>
            <div className="cart content-detail col-8 d-flex">
              <div className="content-detail-inside">
                <div className="content-detail-inside-top-spaceship">
                  <div className="cart-spaceship">
                    <h5 className="cart-spaceship-name">宇航艇外觀</h5>
                    <h5 className="cart-spaceship-text">
                      鐫刻文字：{v.craftString}
                    </h5>
                  </div>
                  <div className="cart-country-flag">
                    <div className="cart-empty-flag"></div>
                    <h5 className="cart-country-flag-text">{v.country}</h5>
                  </div>
                </div>
                <div className="content-detail-inside-bottom-spaceship">
                  <div className="cart-number-people"></div>
                  <button className="btn cart-remove-btn">remove</button>
                  <div className="cart-order-money">
                    ${formatMoney(v.craftPrice)}
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

export default ShipCard;
