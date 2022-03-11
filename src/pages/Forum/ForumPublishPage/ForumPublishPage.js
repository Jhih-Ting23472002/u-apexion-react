import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import './ForumPublishPage.css';
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

export default function ForumPublishPage() {
  const [posts, setPosts] = useState([]);
  const [titleValue, setTitleValue] = useState(null);
  const [contentValue, setContentValue] = useState(null);
  const [categoryValue, setCategoryValue] = useState(null);
  const [hashtagOneValue, setHashtagOneValue] = useState(null);
  const [hashtagtwoValue, setHashTagTwoValue] = useState(null);
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

  const handleFormSubmit = e => {
    // e.preventDefault()
    fetch('http://localhost:3000/forum_index/forumArticle_insert', {
      // 修改
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        art_category_sid: categoryValue,
        art_title: titleValue,
        art_content: contentValue,
        hashtag1: hashtagOneValue,
        hashtag2: hashtagtwoValue,
      }),
    })
      .then(res => res.jon())
      .then(data => {
        return fetch('http://localhost:3000/forum-list-connectTry')
          .then(res => res.json())
          .then(posts => setPosts(posts));
      });
    history.push('/');
  };

  return (
    <Root>
      <AllDisplayFlex>
        <ForumNav />
        <div class="forum_artical">
          <div class="row">
            <div class="col">
              <div class="forum_card">
                <div class="forum_card-user">
                  <div class="forum_user-top-left">
                    <div class="forum_user-logo">
                      <img
                        class="forum_cover"
                        src="./forum_img/u-apexionLogo.png"
                        alt=""
                      />
                    </div>
                    <div class="user-title">
                      <div class="forum_user-name">U-Apexion</div>
                      <div class="forum_post-time">2022/4/20 17:20pm</div>
                    </div>
                  </div>
                  <div class="forum_user-top-right">
                    <i class="fas fa-info"></i>
                    <a href="/forum-home/posts/31">
                      <p>rules</p>
                    </a>
                  </div>
                </div>
              </div>

              <form style={{ margin: '0 20px' }} onSubmit={handleFormSubmit}>
                <label for="categories" class="form-label">
                  Categories 文章分類
                </label>
                <select
                  class="form-select mb-3 col-12"
                  aria-label="Default select example"
                  onChange={handleCategoryChange}
                  value={categoryValue}
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
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Title 標題
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    value={titleValue}
                    onChange={handleInputChange}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    HashTag 1
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    value={hashtagOneValue}
                    onChange={handleHashtagOneChange}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    HashTag 2
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    value={hashtagtwoValue}
                    onChange={handleHashtagTwoChange}
                  />
                </div>
                <div class="mb-3">
                  <label for="text" class="form-label">
                    Text 內文
                  </label>
                  <div class="textarea">
                    <textarea
                      name="text"
                      id="text"
                      style={{ width: '100%', height: '200px' }}
                      value={contentValue}
                      onChange={handleTextareaChange}
                    ></textarea>
                  </div>
                </div>
                <div class="forum_btn-group">
                  <div class="btn-left">
                    <button class="forum_btn">
                      <i class="fas fa-image"></i>上傳照片
                    </button>
                  </div>
                  <div class="btn-right">
                    <button type="submit" class="forum_btn forum_btn-white">
                      儲存草稿
                    </button>
                    <button type="submit" class="forum_btn">
                      <i class="fas fa-paper-plane"></i>發佈貼文
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* col-right */}
        <div class="forum-col-right">
          <div class="col">
            <div class="card-2">
              <ul class="list-group forum-list-group">
                <li class="list-group-item forum-list-group-item">
                  <p style={{ fontSize: '16px' }}>
                    {/* <i class="far fa-star"></i> */}
                    發文前必讀
                  </p>
                  <ul>
                    <li>
                      <i class="fas fa-link forum_link"></i>
                      <Link
                        to="/forum-home/posts/31"
                        className="forum_link_item"
                      >
                        請查明發文版規後，再進行貼文
                      </Link>
                    </li>
                    <li>
                      <i class="fas fa-link forum_link"></i>
                      <a href="#/" className="forum_link_item">
                        有任何疑問 請洽u-apexion客服
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="list-group-item forum-list-group-item">
                  <p style={{ fontSize: '16px' }}>
                    {/* <i class="far fa-star"></i> */}
                    本月推薦
                  </p>
                  <ul>
                    <li>
                      <i class="fas fa-link forum_link"></i>
                      <a href="#/" className="forum_link_item">
                        主打行程
                      </a>
                    </li>
                    <li>
                      <i class="fas fa-link forum_link"></i>
                      <a href="#/" className="forum_link_item">
                        主打服裝＆飾品
                      </a>
                    </li>
                    <li>
                      <i class="fas fa-link forum_link"></i>
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
