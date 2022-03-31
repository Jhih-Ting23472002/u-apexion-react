import React from 'react';
import cartTicket from '../../img/cartTicket.png';

const TripCard = props => {
  const {
    tripSelected,
    setTripSelected,
    tripPrice,
    setTripPrice,
    tripDate,
    setTripDate,
    mealSelected,
    setMealSelected,
    cartTripTotal,
    setCartTripTotal,
    memberName,
  } = props;

  //訂票資訊陣列 (餐點類型要解決)
  const ticketArr = [
    {
      trip: tripSelected,
      datestart: tripDate.dateSelected,
      dateend: tripDate.returnDate,
      meal: mealSelected,
      people: memberName.length,
      price: parseInt(tripPrice) * memberName.length,
      img: cartTicket,
    },
  ];

  console.log('購物車訂票資訊', ticketArr);
  console.log('tripPrice', tripPrice);
  let tripMoney = ticketArr[0].price;
  console.log(tripMoney);
  console.log(mealSelected);
  console.log(
    'tripDate:dateSelected',
    tripDate.dateSelected,
    'tripDate:returnDate',
    tripDate.returnDate,
    'mealSelected',
    mealSelected
  );
  setCartTripTotal(ticketArr[0].price);

  // setTripPrice(ticketArr[0].price);
  return (
    <>
      <div className="cart separated-line"></div>
      <div className="cart cart-order-item d-flex">
        <div className="cart cart-img-div col-4 cart-ticket-margin-y">
          <img src={cartTicket} alt="" />
        </div>
        <div className="cart content-detail col-8 d-flex">
          <div className="content-detail-inside">
            <div className="content-detail-inside-top-ticket">
              <div className="cart-ticket-destination">
                <h5 className="cart-trip-name">行程:{tripSelected}</h5>
                <h5 className="cart-trip-food">餐點:{ticketArr[0].meal}</h5>
              </div>
              <div className="cart-ticket-during">
                <h5 className="cart-start-time">
                  啟航 {tripDate.dateSelected}
                </h5>
                <h5 className="cart-gohome-time">回程 {tripDate.returnDate}</h5>
              </div>
            </div>
            <div className="content-detail-inside-bottom-ticket">
              <h5 className="cart-number-people">人數{ticketArr[0].people}</h5>
              <button className="btn cart-remove-btn">remove</button>
              <div className="cart-order-money">${tripMoney}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TripCard;
