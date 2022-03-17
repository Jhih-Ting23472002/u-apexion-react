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
      {/* <Modal.Header
        closeButton
        style={{ backgroundColor: '#05DBF2', color: '#00002D' }}
      >
        <Modal.Title id="contained-modal-title-vcenter">輸入錯誤</Modal.Title>
      </Modal.Header> */}
      <Modal.Body  style={{ color: '#00002D' }}>
        <h4>輸入錯誤</h4>
        <p>人數上限為4人，請重新輸入。</p>
      </Modal.Body>
      <Modal.Footer style={{ color: '#ffff2D' }}>
        <Button
          onClick={props.onHide}
          style={{
            backgroundColor: '#05DBF2',
            color: '#00002D',
            // filter: 'blur(2px)',
          }}
        >
          關閉
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TicketOrderModal;
