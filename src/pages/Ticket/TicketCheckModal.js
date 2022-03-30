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
      {/* <Modal.Header
        closeButton
        style={{ backgroundColor: '#05DBF2', color: '#00002D' }}
      >
        <Modal.Title id="contained-modal-title-vcenter">輸入錯誤</Modal.Title>
      </Modal.Header> */}
      <Modal.Body style={{ color: '#00002D' }}>
        <h4>確認信</h4>
        <p>請輸入驗證碼</p>
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
