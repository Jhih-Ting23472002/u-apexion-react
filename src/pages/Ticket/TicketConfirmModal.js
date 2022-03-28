import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import './ticket.css';
import './TicketConfirmModal.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function TicketOrderModal(props) {
  const { mealSelected, tripSelected, tripDate, seatNumberDemo, tripDays } =
    props;
  console.log(mealSelected, tripSelected, tripDate, seatNumberDemo);

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
            <div>
              <p>USER1 {seatNumberDemo[0].name} /</p>
              <p>USER2 {seatNumberDemo[1].name} /</p>
              <p>USER3 {seatNumberDemo[2].name} /</p>
              <p>USER4 {seatNumberDemo[3].name}</p>
            </div>
          </div>
          <div className="ticket-confirm-content">
            <p>餐點</p>
            <div>
              <p>USER1 {mealSelected.USER1} /</p>
              <p>USER2 {mealSelected.USER2} /</p>
              <p>USER3 {mealSelected.USER3} /</p>
              <p>USER4 {mealSelected.USER4} </p>
            </div>
          </div>
          <div className="ticket-confirm-content ticket-confirm-price">
            $4,000
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
