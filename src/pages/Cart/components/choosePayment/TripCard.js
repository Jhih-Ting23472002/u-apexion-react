import React from 'react';
import cartTicket from '../../img/cartTicket.png';

const TripCard = props => {
  const {
    setMealArr,
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
    cartTicketAmount,
    setCartTicketAmount,
  } = props;

  let mealArray = [];
  for (let i in mealSelected) {
    mealArray.push(mealSelected[i]);
  }

  console.log('購物車mealArray', mealArray);
  // console.log('購物車mealfinal', mealfinal);
  //訂票資訊陣列 (餐點類型要解決)
  const ticketArr = [
    {
      trip: tripSelected,
      dateStart: tripDate.dateSelected,
      dateEnd: tripDate.returnDate,
      meal: mealArray, // 是有抓到值啦，但這個值要怎麼傳下去啊
      people: memberName.length,
      price: (parseInt(tripPrice) || 0) * memberName.length,
      img: cartTicket,
      amount: tripDate ? 1 : 0,
    },
  ];

  console.log('購物車訂票資訊', ticketArr);
  console.log('tripPrice', tripPrice);
  console.log(parseInt(tripPrice), memberName.length);
  let tripMoney = ticketArr[0].price;
  console.log(tripMoney);
  console.log(
    'tripDate:dateSelected',
    tripDate.dateSelected,
    'tripDate:returnDate',
    tripDate.returnDate,
    'mealSelected',
    mealSelected[0]
  );
  let ticketAmount = 0;
  ticketArr.map(v => (ticketAmount += v.amount));
  setCartTripTotal(ticketArr[0].price);
  setCartTicketAmount(ticketAmount);
  // setMealArr(mealArray)
  // setTripPrice(ticketArr[0].price);
  return (
    <>
      {tripSelected &&
        ticketArr.map(v => (
          <React.Fragment key="1">
            <div className="cart separated-line"></div>
            <div className="cart cart-order-item d-flex">
              <div className="cart cart-img-div col-4 cart-ticket-margin-y">
                <img src={v.img} alt="" />
              </div>
              <div className="cart content-detail col-8 d-flex">
                <div className="content-detail-inside">
                  <div className="content-detail-inside-top-ticket">
                    <div className="cart-ticket-destination">
                      <h5 className="cart-trip-name">行程:{v.trip}</h5>
                      <h5 className="cart-trip-food">
                        餐點:
                        {v.meal.map(m => {
                          return m + '/';
                        })}
                      </h5>
                    </div>
                    <div className="cart-ticket-during">
                      <h5 className="cart-start-time">啟航 {v.dateStart}</h5>
                      <h5 className="cart-gohome-time">回程 {v.dateEnd}</h5>
                    </div>
                  </div>
                  <div className="content-detail-inside-bottom-ticket">
                    <h5 className="cart-number-people">人數{v.people}</h5>
                    <button className="btn cart-remove-btn">remove</button>
                    <div className="cart-order-money">${v.price}</div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
    </>
  );
};

export default TripCard;
