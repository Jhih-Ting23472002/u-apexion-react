import React from 'react';
import spaceSeat from '../../img/spaceSeat.png';

const SeatCard = props => {
  const { customize } = props;
  return (
    <>
      {customize.map(v => (
        <React.Fragment>
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
        </React.Fragment>
      ))}
    </>
  );
};
export default SeatCard;
