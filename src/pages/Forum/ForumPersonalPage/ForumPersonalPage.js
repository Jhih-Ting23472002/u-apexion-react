import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ForumPersonalPage.css';
import Modal from 'react-bootstrap/Modal';
import ForumPersonalPageModal from './ForumPersonalPageModal';

export default function ForumPersonalPage() {
  const [modalShow, setModalShow] = useState(false);
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
            <div className="col-4 person_posts_photos_single">
              <div className="person_posts_single_photo">
                <img src="./index_img/space1.jpg" alt="" />
              </div>
            </div>
            <div className="col-4 person_posts_photos_single">
              <div className="person_posts_single_photo">
                <img src="./index_img/training.jpg" alt="" />
              </div>
            </div>
            <div className="col-4 person_posts_photos_single">
              <div className="person_posts_single_photo">
                <img src="./index_img/rocket.png" alt="" />
              </div>
            </div>
            <div className="col-4 person_posts_photos_single">
              <div className="person_posts_single_photo">
                <img src="./index_img/floor.jpg" alt="" />
              </div>
            </div>
            <div className="col-4 person_posts_photos_single">
              <div className="person_posts_single_photo">
                <img src="./index_img/ig1.png" alt="" />
              </div>
            </div>
            <div className="col-4 person_posts_photos_single">
              <div
                className="person_posts_single_photo"
                onClick={() => {
                  setModalShow(true);
                  console.log(modalShow);
                }}
              >
                <img src="./index_img/ig2.png" alt="" />
              </div>
            </div>
            <div className="col-4 person_posts_photos_single">
              <div className="person_posts_single_photo">
                <img src="./index_img/ig3.png" alt="" />
              </div>
            </div>
            <div className="col-4 person_posts_photos_single">
              <div className="person_posts_single_photo">
                <img src="./index_img/ig4.png" alt="" />
              </div>
            </div>
            <div className="col-4 person_posts_photos_single">
              <div className="person_posts_single_photo">
                <img src="./index_img/ig5.png" alt="" />
              </div>
            </div>
            <div className="col-4 person_posts_photos_single">
              <div className="person_posts_single_photo">
                <img src="./index_img/ig6.png" alt="" />
              </div>
            </div>
            <div className="col-4 person_posts_photos_single">
              <div className="person_posts_single_photo">
                <img src="./index_img/ig7.png" alt="" />
              </div>
            </div>
            <div className="col-4 person_posts_photos_single">
              <div className="person_posts_single_photo">
                <img src="./index_img/ig8.png" alt="" />
              </div>
            </div>
            <div className="col-4 person_posts_photos_single">
              <div className="person_posts_single_photo">
                <img src="./index_img/ig9.png" alt="" />
              </div>
            </div>
            <div className="col-4 person_posts_photos_single">
              <div className="person_posts_single_photo">
                <img src="./index_img/ig12.png" alt="" />
              </div>
            </div>
            <div className="col-4 person_posts_photos_single">
              <div
                className="person_posts_single_photo"
                onClick={() => {
                  setModalShow(true);
                  console.log(modalShow);
                }}
              >
                <img src="./index_img/ig11.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ForumPersonalPageModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
