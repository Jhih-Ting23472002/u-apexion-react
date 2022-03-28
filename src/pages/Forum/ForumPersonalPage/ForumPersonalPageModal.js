import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import './ticket.css';
import './ForumPersonalPageModal.css';
import { personPostsData } from './personPostsData';

function ForumPersonalPageModal(props) {
  const { imageIndex } = props;
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
        {personPostsData
          .filter((v, i) => {
            if (props.imageIndex == i) {
              return v;
            }
          })
          .map((image, i) => (
            <img
              src={image.photo}
              alt=""
              style={{ boxShadow: '6px 6px 10px black', borderRadius: '3px' }}
            />
          ))}
      </Modal.Body>
      <Modal.Footer className="forum-confirm-modal-footer">
        {personPostsData
          .filter((v, i) => {
            if (props.imageIndex == i) {
              return v;
            }
          })
          .map((image, i) => (
            <Link
              to={image.postsLink}
              onClick={props.onHide}
              className="forum-confirm-btn"
            >
              前往文章
            </Link>
          ))}
      </Modal.Footer>
    </Modal>
  );
}

export default ForumPersonalPageModal;
