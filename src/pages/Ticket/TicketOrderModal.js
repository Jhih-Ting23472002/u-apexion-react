import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import './ticket.css';
import './TicketOrderModal.css';

function TicketOrderModal(props) {
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
        <h2>**輸入錯誤**</h2>
        <h2>請輸入正確人數</h2>
        <p>Input correct number,please</p>
      </Modal.Header>
      <Modal.Body className="ticket-error-body" style={{ color: '#00002D' }}>
        <p>人數上限為4人，請重新輸入。</p>
      </Modal.Body>
      <Modal.Footer
        className="ticket-error-footer"
        style={{ color: '#ffff2D' }}
      >
        <Button onClick={props.onHide} className="ticket-error-btn">
          關閉
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TicketOrderModal;
