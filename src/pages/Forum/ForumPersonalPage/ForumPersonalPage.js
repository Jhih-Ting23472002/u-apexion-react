import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ForumPersonalPage.css';
import ForumPersonalPageModal from './ForumPersonalPageModal';
import { personPostsData } from './personPostsData';
import styled from 'styled-components';

const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 50px;
  right: 15%;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: gray;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #bebebe;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #d9d8d8;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export default function ForumPersonalPage() {
  const [modalShow, setModalShow] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [bgcolor, setBgColor] = useState(false);

  const colorHandler = e => {
    setBgColor(true);
    if (bgcolor === true) {
      setBgColor(false);
    }
  };

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
        className="forum_personal_background"
        style={{ backgroundColor: bgcolor === true ? 'white' : 'black' }}
      >
        <div>
          <CheckBoxWrapper>
            <CheckBox id="checkbox" type="checkbox" />
            <CheckBoxLabel htmlFor="checkbox" onClick={colorHandler} />
          </CheckBoxWrapper>
        </div>
        <div
          calssName="forum_personal_container"
          style={{
            width: '60%',
            margin: '0 auto',
            paddingTop: '20px',
            paddingBottom: '20px',
          }}
        >
          <div
            className="forum_person col"
            style={{
              color: bgcolor === true ? 'black' : 'white',
              borderBottom:
                bgcolor === true ? '0.5px solid black' : '0.5px solid white',
            }}
          >
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
              <Link
                to="/forum-personal"
                className="forum_person_posts"
                style={{
                  cursor: 'pointer',
                  color: bgcolor === true ? 'black' : 'white',
                }}
              >
                <i class="fa-solid fa-rectangle-list"></i>
                貼文
              </Link>
              <Link
                to="forum-personal-saved"
                className="forum_person_saves"
                style={{
                  cursor: 'pointer',
                  color: bgcolor === true ? 'black' : 'white',
                  borderTop:
                    bgcolor === true ? '3px solid white' : '3px solid black',
                }}
              >
                <i class="fa-solid fa-bookmark"></i>
                珍藏
              </Link>
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
      </div>
      <ForumPersonalPageModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        imageIndex={imageIndex}
      />
    </>
  );
}
