import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactPlayer from 'react-player';
import './CartCreditCardModal.css';

// import './CartCreditCardModal.css';

function CartCreditCardModal({ show, setShow, handleClose, handleShow }) {
  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="credit-video-end-wrap"
      >
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header> */}
        <Modal.Body className="credit-video-end">
          {/* <p>12345678</p> */}
          <div className="video-end">
            <ReactPlayer
              id="video-end-player"
              url="./end.mp4"
              // width="100%"
              // height="100%"
              playing={true}
            />
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default CartCreditCardModal;
