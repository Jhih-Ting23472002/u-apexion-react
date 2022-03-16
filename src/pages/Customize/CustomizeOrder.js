import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './CustomizeOrder.css';
import ModalHeader from 'react-bootstrap/ModalHeader';
function CustomizeOrder(props) {
  return (
    <>
      <Modal
        // animation={false}
        className="customorder-view"
        {...props}
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <h1>客製化商品&nbsp;&nbsp;|&nbsp;&nbsp;訂單明細 </h1>
        </Modal.Header>
        <Modal.Body style={{ color: '#00002D' }}>
          <h1>訂單確認</h1>
          <p>你確定? 要確定耶~</p>
        </Modal.Body>
        <Modal.Footer className="customorder-footer">
          <button className="customorder-circle-btn" onClick={props.onHide}>
            確定送出
          </button>
          <button
            className="customorder-circle-btn cancel-btn"
            onClick={props.onHide}
          >
            取消
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomizeOrder;
