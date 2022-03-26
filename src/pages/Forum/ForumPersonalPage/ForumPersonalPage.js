import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ForumPersonalPage.css';
// import Modal from 'react-bootstrap/Modal';
import ForumPersonalPageModal from './ForumPersonalPageModal';
import { personPostsData } from './personPostsData';

export default function ForumPersonalPage() {
  const [modalShow, setModalShow] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const handleImageClick = e => {
    setModalShow(true);
    const index = e.target.attributes.getNamedItem('data-index').value;
    setImageIndex(index);
    console.log(modalShow);
    console.log(e.target.attributes.getNamedItem('data-index').value);
  };

  return (
    <>
      <div
        calssName="forum_personal_container"
        style={{
          width: '60%',
          margin: '0 auto',
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        <div className="forum_person col">
          <div className="forum_person_left">
            <div className="forum_person_img"></div>
          </div>
          <div className="forum_person_right">
            <div className="forum_person_email">Amanda Chiu</div>
            <div className="forum_person_nickname">amandachius@gmail.com</div>
          </div>
        </div>
        <div className="forum_person_bottom col">
          <div className="forum_person_bottom_icon">
            <div className="forum_person_posts" style={{ cursor: 'pointer' }}>
              <i class="fa-solid fa-rectangle-list"></i>
              貼文
            </div>
            <div className="forum_person_saves" style={{ cursor: 'pointer' }}>
              <i class="fa-solid fa-bookmark"></i>
              珍藏
            </div>
          </div>
          <div className="person_posts_photos">
            {personPostsData.map((v, i) => (
              <div className="col-4 person_posts_photos_single">
                <div className="person_posts_single_photo">
                  <img
                    src={v.photo}
                    alt=""
                    data-index={i}
                    onClick={handleImageClick}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ForumPersonalPageModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        imageIndex={imageIndex}
      />
    </>
  );
}
