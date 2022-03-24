import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import './ticket.css';
import './TicketConfirmModal.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function TicketOrderModal(props) {
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
            <p>泰坦星5日遊</p>
          </div>
          <div className="ticket-confirm-content">
            <p>日程</p>
            <p>022/1/24 - 2022/1/28</p>
          </div>
          <div className="ticket-confirm-content">
            <p>艙位</p>
            <div>
              <p>USE1 FD.3 /</p>
              <p>USE2 FD.4 /</p>
              <p>USE3 FD.5 /</p>
              <p>USE4 FD.6</p>
            </div>
          </div>
          <div className="ticket-confirm-content">
            <p>餐點</p>
            <div>
              <p>USE1 太空炒麵 /</p>
              <p>USE2 太空咖哩 /</p>
              <p>USE3 太空咖哩 /</p>
              <p>USE4 太空咖哩</p>
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
