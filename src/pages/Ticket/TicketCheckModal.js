import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import './ticket.css';
import './TicketCheckModal.css';

function TicketOrderModal(props) {
  const history = useHistory();
  return (
    <Modal
      className="back-view ticket-check-wrap"
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="ticket-check-title">
        {' '}
        <h2>請輸入驗證碼</h2>
        <p>Input verification code,please</p>
      </Modal.Header>
      <Modal.Body className="ticket-check-body" style={{ color: '#00002D' }}>
        <input class="code-input" type="text" />
      </Modal.Body>
      <Modal.Footer
        style={{ color: '#ffff2D' }}
        className="ticket-check-footer"
      >
        <Link
          to="/ticket-trip-choose"
          onClick={props.onHide}
          className="ticket-check-btn"
        >
          確認送出，前往訂票
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

export default TicketOrderModal;
