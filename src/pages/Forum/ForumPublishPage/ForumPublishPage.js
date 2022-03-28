import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import './ForumPublishPage.css';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import ForumNav from '../../../components/Forum-Nav';
// import PropTypes from 'prop-types'

const Root = styled.div`
  width: 100%;
  ${'' /* border: 1px solid pink; */}
  margin: 0 auto;
  ${'' /* padding: 5%; */}
`;

const AllDisplayFlex = styled.div`
  display: flex;
`;

const ErrorMessage = styled.div`
  font-size: 16px;
  color: red;
`;

export default function ForumPublishPage() {
  const [posts, setPosts] = useState([]);
  const [titleValue, setTitleValue] = useState(null);
  const [contentValue, setContentValue] = useState(null);
  const [categoryValue, setCategoryValue] = useState(null);
  const [hashtagOneValue, setHashtagOneValue] = useState(null);
  const [hashtagtwoValue, setHashTagTwoValue] = useState(null);
  const [fileSrc, setFileSrc] = useState(null);
  const [postApiError, setPostApiError] = useState(null);
  let history = useHistory();

  const handleInputChange = e => {
    setTitleValue(e.target.value);
  };
  const handleTextareaChange = e => {
    setContentValue(e.target.value);
  };

  const handleCategoryChange = e => {
    setCategoryValue(e.target.value);
  };

  const handleHashtagOneChange = e => {
    setHashtagOneValue(e.target.value);
  };
  const handleHashtagTwoChange = e => {
    setHashTagTwoValue(e.target.value);
  };
  const imgChangeHandler = e => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = function () {
      setFileSrc(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  const handleFormSubmit = e => {
    // e.preventDefault()
    const fd = new FormData(document.form1);
    alert('確認送出嗎？');
    fetch('http://localhost:3001/forum_index/forumArticle_insert', {
      // 修改
      method: 'POST',
      // headers: {
      //   'Content-Type': 'multipart/form-data',
      // },
      // body: JSON.stringify({
      //   art_category_sid: categoryValue,
      //   art_title: titleValue,
      //   art_content: contentValue,
      //   hashtag1: hashtagOneValue,
      //   hashtag2: hashtagtwoValue,
      // }),
      body: fd,
    })
      .then(res => res.jon())
      .then(data => {
        return fetch('http://localhost:3001/forum-list-connectTry')
          .then(res => res.json())
          .then(posts => setPosts(posts));
      })
      .catch(error => {
        setPostApiError(error.message);
      });
    history.push('/forum-home');
  };

  return (
    <Root>
      <AllDisplayFlex>
        <ForumNav />
        <div className="forum_artical">
          <div className="row">
            <div className="col">
              <div className="forum_card">
                <div className="forum_card-user">
                  <div className="forum_user-top-left">
                    <div className="forum_user-logo">
                      <img
                        className="forum_cover"
                        src="./forum_img/u-apexionLogo.png"
                        alt=""
                      />
                    </div>
                    <div className="user-title">
                      <div className="forum_user-name">U-Apexion</div>
                      <div className="forum_post-time">2022/4/20 17:20pm</div>
                    </div>
                  </div>
                  <div className="forum_user-top-right">
                    <i className="fas fa-info"></i>
                    <a href="/forum-home/posts/31">
                      <p>rules</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* form表單開始 */}
              <form
                style={{ margin: '0 20px' }}
                onSubmit={handleFormSubmit}
                name="form1"
              >
                <label
                  for="categories"
                  className="form-label publish-page-label"
                >
                  Categories 文章分類
                </label>
                <select
                  className="form-select mb-4 col-12"
                  aria-label="Default select example"
                  onChange={handleCategoryChange}
                  value={categoryValue}
                  name="art_category_sid"
                  style={{ height: '40px', borderRadius: '5px' }}
                  required
                >
                  <option selected></option>
                  <option value="1">事前準備</option>
                  <option value="2">旅遊心得</option>
                  <option value="3">太空冷知識</option>
                  <option value="4">星球介紹</option>
                  <option value="5">音樂推薦</option>
                  <option value="6">星座</option>
                  <option value="7">太空美食</option>
                  <option value="8">每月主打</option>
                  <option value="10">注意事項</option>
                </select>
                <div className="mb-4">
                  <label
                    for="exampleInputEmail1"
                    className="form-label publish-page-label"
                  >
                    Title 標題
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    value={titleValue}
                    name="art_title"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    for="exampleInputEmail1"
                    className="form-label publish-page-label"
                  >
                    HashTag 1
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    value={hashtagOneValue}
                    name="hashtagone"
                    onChange={handleHashtagOneChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    for="exampleInputEmail1"
                    className="form-label publish-page-label"
                  >
                    HashTag 2
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    value={hashtagtwoValue}
                    name="hashtagtwo"
                    onChange={handleHashtagTwoChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label for="text" className="form-label publish-page-label">
                    Text 內文
                  </label>
                  <div className="textarea">
                    <textarea
                      name="art_content"
                      id="text"
                      style={{ width: '100%', height: '200px' }}
                      value={contentValue}
                      onChange={handleTextareaChange}
                    ></textarea>
                  </div>
                </div>
                <div className="forum_btn-group">
                  <div className="btn-left" style={{ width: '180px' }}>
                    <div
                      className="forum_btn"
                      style={{
                        cursor: 'pointer',
                        display: 'flex',
                        marginBottom: '15px',
                      }}
                      onClick={e => {
                        document.querySelector('#avatar').click();
                      }}
                    >
                      <i className="fas fa-image"></i>上傳照片/照片預覽
                      <input
                        type="file"
                        id="avatar"
                        name="avatar"
                        accept="image/*"
                        onChange={imgChangeHandler}
                        style={{ display: 'none' }}
                      />
                    </div>
                    <img style={{ width: '180px' }} src={fileSrc} alt="" />
                  </div>
                  <div className="btn-right">
                    <button type="submit" className="forum_btn forum_btn-white">
                      儲存草稿
                    </button>
                    <button type="submit" className="forum_btn">
                      <i className="fas fa-paper-plane"></i>發佈貼文
                    </button>
                  </div>
                </div>
              </form>
              {/* <ErrorMessage>{postApiError.toString()}</ErrorMessage> */}
              <div>{postApiError}</div>
            </div>
          </div>
        </div>

        {/* col-right */}
        <div className="forum-col-right">
          <div className="col">
            <div className="card-2">
              <ul className="list-group forum-list-group">
                <li className="list-group-item forum-list-group-item">
                  <p style={{ fontSize: '16px' }}>
                    {/* <i className="far fa-star"></i> */}
                    發文前必讀
                  </p>
                  <ul>
                    <li>
                      <i className="fas fa-link forum_link"></i>
                      <Link
                        to="/forum-home/posts/31"
                        className="forum_link_item"
                      >
                        請查明發文版規後，再進行貼文
                      </Link>
                    </li>
                    <li>
                      <i className="fas fa-link forum_link"></i>
                      <a href="#/" className="forum_link_item">
                        有任何疑問 請洽u-apexion客服
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="list-group-item forum-list-group-item">
                  <p style={{ fontSize: '16px' }}>
                    {/* <i className="far fa-star"></i> */}
                    本月推薦
                  </p>
                  <ul>
                    <li>
                      <i className="fas fa-link forum_link"></i>
                      <a href="#/" className="forum_link_item">
                        主打行程
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-link forum_link"></i>
                      <a href="#/" className="forum_link_item">
                        主打服裝＆飾品
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-link forum_link"></i>
                      <a href="#/" className="forum_link_item">
                        客製化推薦
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AllDisplayFlex>
    </Root>
  );
}
