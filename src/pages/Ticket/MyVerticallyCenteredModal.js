import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        輸入錯誤
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>輸入錯誤</h4>
        <p>
          人數上限為4人，請重新輸入。
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>關閉</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal