// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import styled from 'styled-components';
import './ForumPersonalSavePageModal.css';

function ForumPersonalSavePageModal(props) {
  return (
    <Modal
      className="back-view forum_back_view"
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="forum-confirm-deatil"></Modal.Header>
      <Modal.Body className="forum-modal-body">
        <img src="./index_img/ig2.png" alt="" />
      </Modal.Body>
      <Modal.Footer className="forum-confirm-modal-footer">
        <Button onClick={props.onHide} className="forum-confirm-btn">
          前往文章
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ForumPersonalSavePageModal;
