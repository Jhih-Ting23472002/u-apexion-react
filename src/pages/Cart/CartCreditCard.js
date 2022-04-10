import React, { useState } from 'react';
import './CartCreditCard.css';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Link, useHistory } from 'react-router-dom';
import CartCreditCardModal from './CartCreditCardModal';

const CartCreditCard = props => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');
  // const [productFinalName, setProductFinalName] = useState('');
  //const [cartConfirmModalShow, setCartConfirmModalShow] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = useState(false);
  const history = useHistory();

  const {
    cartOrderListNumber,
    setCartOrderListNumber,
    tripSelected,
    tripPrice,
    memberName,
    productDetailList,
    cartTripTotal,
    cartCustomTotalPrice,
    suit,
    craft,
    customize,
    suitAmount, // 太空服數量
    shipAmount, // 太空船數量
    seatAmount, // 太空椅數量
  } = props;

  const ticketArr = [
    {
      trip: tripSelected,
      quantity: 1,
      people: memberName.length,
      price: parseInt(tripPrice) * memberName.length,
    },
  ];

  const productTina = [];
  for (let i in ticketArr) {
    const TinaName = ticketArr[i].trip;
    productTina.push(TinaName);
    console.log(productTina);
  }

  const productTinaQuantity = [];
  for (let i in ticketArr) {
    const TinaQuantity = ticketArr[i].quantity;
    productTinaQuantity.push(TinaQuantity);
  }

  const productTinaPrice = [];
  for (let i in ticketArr) {
    const TinaPrice = ticketArr[i].price;
    productTinaPrice.push(TinaPrice);
  }

  // 購買智婷每一筆商品名稱的陣列，初始值為空
  let productJTing = [];

  // 跑回圈，我不知道為何是 『 for in 』 ， 不能用 『 for of 或 for 』嗎？？？？？？
  for (let i in productDetailList) {
    // 跑回圈取到每一筆資料的名稱
    const JTingName = productDetailList[i].name;

    //把每一筆資料的名稱推送到 productJTing 這個空陣列
    productJTing.push(JTingName);
    console.log(productJTing);
  }

  //----------------------------------------------------------------

  // 購買智婷每一筆商品數量的陣列，初始值為空
  let productJTingQuantity = [];

  // 跑回圈，我不知道為何是 『 for in 』 ， 不能用 『 for of 或 for 』嗎？？？？？？
  for (let i in productDetailList) {
    // 跑回圈取到每一筆資料的數量
    const JTingQuantity = productDetailList[i].total;

    //把每一筆資料的數量推送到 JTingQuantity 這個空陣列
    productJTingQuantity.push(JTingQuantity);
    console.log(productJTingQuantity);
  }

  //----------------------------------------------------------------

  // 購買智婷每一筆商品價錢的陣列，初始值為空
  let productJTingPrice = [];

  // 跑回圈，我不知道為何是 『 for in 』 ， 不能用 『 for of 或 for 』嗎？？？？？？
  for (let i in productDetailList) {
    // 跑回圈取到每一筆資料的價錢
    const JTingPrice = productDetailList[i].price;

    //把每一筆資料的價錢推送到 JTingPrice 這個空陣列
    productJTingPrice.push(JTingPrice);
    console.log(productJTingPrice);
  }

  // 購買麥可太空衣商品名稱的陣列，初始值為空
  let productMichaelSuit = [];
  for (let i in suit) {
    // 跑回圈取到每一筆資料的國家
    const MichaelSuitName = suit[i].country;

    //把每一筆資料的國家推送到 productMichaelSuit 這個空陣列
    productMichaelSuit.push(MichaelSuitName);
  }

  let productMichaelSuitQuantity = [];
  for (let i in suit) {
    const MichaelSuitQuantity = suit[i].suitTotal;
    productMichaelSuitQuantity.push(MichaelSuitQuantity);
  }

  let productMichaelSuitPrice = [];
  for (let i in suit) {
    const MichaelSuitPrice = suit[i].suitPrice;
    productMichaelSuitPrice.push(MichaelSuitPrice);
    console.log(productMichaelSuitPrice);
  }

  // 購買麥可太空船商品名稱的陣列，初始值為空
  let productMichaelShip = [];
  for (let i in craft) {
    // 跑回圈取到每一筆資料的鐫刻文字
    const MichaelShipName = craft[i].craftString;

    //把每一筆資料的鐫刻文字推送到 productMichaelShip 這個空陣列
    productMichaelShip.push(MichaelShipName);
  }

  let productMichaelShipQuantity = [];
  for (let i in craft) {
    const MichaelShipQuantity = craft[i].craftTotal;
    productMichaelShipQuantity.push(MichaelShipQuantity);
  }

  let productMichaelShipPrice = [];
  for (let i in craft) {
    const MichaelShipPrice = craft[i].craftPrice;
    productMichaelShipPrice.push(MichaelShipPrice);
    console.log(productMichaelShipPrice);
  }

  // 購買麥可太空椅名稱的陣列，初始值為空
  let productMichaelSeat = [];
  for (let i in customize) {
    // 跑回圈取到每一筆資料的鐫刻文字
    const MichaelSeatName = customize[i].style;

    //把每一筆資料的鐫刻文字推送到 productMichaelShip 這個空陣列
    productMichaelSeat.push(MichaelSeatName);
    console.log(productMichaelSeat);
  }

  let productMichaelSeatQuantity = [];
  for (let i in customize) {
    const MichaelSeatQuantity = customize[i].seatTotal;
    productMichaelSeatQuantity.push(MichaelSeatQuantity);
    console.log(productMichaelSeatQuantity);
  }

  let productMichaelSeatPrice = [];
  for (let i in customize) {
    const MichaelSeatPrice = customize[i].seatPrice;
    productMichaelSeatPrice.push(MichaelSeatPrice);
    console.log(productMichaelSeatPrice);
  }

  let orderListNumber = Math.floor(Math.random() * 1000000 + 10000000); // 訂單編號
  const userId = localStorage.getItem('user_id');

  const productJTingTina = []; // JTingTina 商品名稱分別加總
  productJTingTina.push(
    productJTing,
    productTina,
    productMichaelSuit,
    productMichaelShip,
    productMichaelSeat
  );

  const productJTingTinaQuantity = []; // JTingTina 商品數量分別加總
  productJTingTinaQuantity.push(
    productJTingQuantity,
    productTinaQuantity,
    productMichaelSuitQuantity,
    productMichaelShipQuantity,
    productMichaelSeatQuantity
  );

  const productJTingTinaPrice = []; // JTingTina 商品價錢分別加總
  productJTingTinaPrice.push(
    productJTingPrice,
    productTinaPrice,
    productMichaelSuitPrice,
    productMichaelShipPrice,
    productMichaelSeatPrice
  );

  function formatMoney(n) {
    return (Math.round(n * 100) / 100).toLocaleString();
  }

  const sendOrderDeatilHandler = e => {
    setCartOrderListNumber(orderListNumber);
    //console.log('orderListNumber', orderListNumber);  測試是否印成功
    // alert('金額核對完畢，確認送出？');
    fetch('http://localhost:3001/cart/order-list-post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderListNumber,
        userId,
        productJTingTina, // productJTing + productTina
        productJTingTinaQuantity,
        productJTingTinaPrice,
      }),
    })
      .then(res => res.json())
      //setCartConfirmModalShow(true);
      // history.push('/vedio-end'); //轉跳至結尾影片(智婷)
      .then(data => {
        console.log(data);
        if ((data.affectedRows = 1)) {
          console.log(data.affectedRows);
          setModalShow(true);
        }
      });
  };
  console.log('show', modalShow);

  return (
    <>
      <div className="cart-background container-fluid">
        <div className="cart-container">
          <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
          />
          <form className="cart-creditcard-form mt-5">
            <input
              className="cart-creditcard-input mx-2"
              type="tel"
              name="number"
              placeholder="Card Number"
              value={number}
              onChange={e => setNumber(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
            ></input>

            <input
              className="cart-creditcard-input mx-2"
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
            ></input>

            <input
              className="cart-creditcard-input mx-2"
              type="text"
              name="expiry"
              placeholder="MM/YY Expiry"
              value={expiry}
              maxLength="4"
              onChange={e => setExpiry(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
            ></input>

            <input
              className="cart-creditcard-input mx-2"
              type="tel"
              name="cvc"
              maxLength="3"
              placeholder="CVC"
              value={cvc}
              onChange={e => setCvc(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
            ></input>
          </form>
          <div className="d-flex justify-content-center align-items-center mt-5">
            {/* <Link to={'/cart-complete'} className="mx-3"> */}
            <button
              type="button"
              onClick={() => {
                sendOrderDeatilHandler();
              }}
              className="btn card-confirm cart-link"
            >
              確認付款 (Confirm)
            </button>
            {/* </Link> */}
            <div className="card-trade mx-3">
              交易金額 $
              {formatMoney(
                props.cartTotalPrice + cartTripTotal + cartCustomTotalPrice
              )}
            </div>
          </div>
        </div>
      </div>
      <CartCreditCardModal
        show={modalShow}
        onHide={() => {
          history.push('/vedio-end');
        }}
      />
    </>
  );
};

export default CartCreditCard;
