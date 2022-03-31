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
      className="back-view"
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="ticket-check-title">
        {' '}
        <h2>請輸入驗證碼</h2>
        <p>Input verification code,please</p>
      </Modal.Header>
      <Modal.Body className="ticket-check-body" style={{ color: '#00002D' }}>
        <input type="text" />
      </Modal.Body>
      <Modal.Footer style={{ color: '#ffff2D' }}>
        <Link
          to="/ticket-trip-choose"
          onClick={props.onHide}
          style={{
            backgroundColor: '#05DBF2',
            color: '#00002D',
            // filter: 'blur(2px)',
          }}
        >
          關閉
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

export default TicketOrderModal;
