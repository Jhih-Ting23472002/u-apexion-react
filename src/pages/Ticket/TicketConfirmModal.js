import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import './ticket.css';
import './TicketConfirmModal.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import config from './Config';

function TicketOrderModal(props) {
  const {
    mealSelected,
    tripSelected,
    tripDate,
    seatNumberDemo,
    tripDays,
    tripPrice,
    memberName,
  } = props;
  console.log(mealSelected, tripSelected, tripDate, seatNumberDemo);
  const memberAPI = config.TK_ORDER_API;
  // const [memberData, setMemberData] = useState([]);
  // const memberDataArray = memberData.map((v, i) => {
  //   return v;
  // });

  console.log('價格', tripPrice);
  // console.log('人數', memberData.length);
  // console.log('成員名子', memberDataArray);
  // console.log('成員ttt', memberDataArray[0]);
  // console.log('成員rrr', memberDataArray[1]);
  console.log('餐點名稱', mealSelected.rrr);
  console.log('餐點名稱', mealSelected.rrr);
  // console.log('餐點名稱', mealSelected[memberDataArray[0]]);

  const abc = mealSelected.map((v, i) => {
    return v + i;
  });
  console.log('餐點的map', abc);

  // const [seatNumberDemo, setSeatNumberDemo] = useState([]);
  // useEffect(() => {
  //   (async function () {
  //     const response = await fetch(memberAPI, {
  //       method: 'GET',
  //     });
  //     const memberListDatas = await response.json();
  //     console.log(memberListDatas.member_name);
  //     console.log(memberListDatas[0].member_name);
  //     const memberArray = memberListDatas[0].member_name.split(',');
  //     console.log(memberArray);
  //     setMemberData(memberArray);
  //   })();
  // }, []);

  return (
    <Modal
      className="back-view"
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="ticket-confirm-title">
        {' '}
        <h2>請確認您的訂票內容</h2>
        <p>Confirm the details of your travel,please</p>
        {/* <Modal.Title id="contained-modal-title-vcenter">輸入錯誤</Modal.Title> */}
      </Modal.Header>
      <Modal.Body className="ticket-confirm-modal-body">
        <div className="ticket-confirm-wrap">
          <div className="ticket-confirm-content">
            <p>行程</p>
            <p>
              {tripSelected}
              {tripDays}日遊
            </p>
          </div>
          <div className="ticket-confirm-content">
            <p>日程</p>
            <p>
              {tripDate.dateSelected} - {tripDate.returnDate}
            </p>
          </div>
          <div className="ticket-confirm-content">
            <p>艙位</p>
            <div className="ticket-confirm-seat">
              <div>
                {memberName.map((v, i) => {
                  return <p>{v}&nbsp;:&nbsp;</p>;
                })}
              </div>
              <div>
                {seatNumberDemo.map((v, i) => {
                  return <p>{v.name}</p>;
                })}
              </div>
            </div>
          </div>
          <div className="ticket-confirm-content">
            <p>餐點</p>
            <div className="ticket-confirm-seat">
              <div>
                {memberName.map((v, i) => {
                  return <p>{v}&nbsp;:&nbsp;</p>;
                })}
              </div>
              <div>
                {mealSelected.map((v, i) => {
                  return <p>{v.memberData[i]}</p>;
                })}
              </div>
            </div>
          </div>
          <div className="ticket-confirm-content ticket-confirm-price">
            ${tripPrice * memberName.length}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="ticket-confirm-modal-footer">
        <Button onClick={props.onHide} className="ticket-confirm-btn">
          修改
        </Button>
        <div>
          <Button onClick={props.onHide} className="ticket-confirm-btn">
            加購客製化服務
          </Button>
          <Link
            to="/cart-payment"
            onClick={props.onHide}
            className="ticket-confirm-btn"
          >
            確認送出
          </Link>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default TicketOrderModal;
