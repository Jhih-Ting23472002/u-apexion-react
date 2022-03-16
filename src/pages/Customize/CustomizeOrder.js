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
        <Modal.Header closeButton className="customorder-header">
          <h1>客製化商品&nbsp;&nbsp;|&nbsp;&nbsp;訂單明細 </h1>
        </Modal.Header>
        <Modal.Body>
          <div className="customorder-body">
            <h2>太空服：</h2>
            
          </div>
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
