import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useHistory, useParams } from 'react-router-dom';
import './ForumPublishUpdatePage.css';
import ForumNav from '../../../components/Forum-Nav';
import { getPost } from '../../../data/WebApi';
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
export default function ForumPublishPage(props) {
  const [posts, setPosts] = useState([]);
  const [titleValue, setTitleValue] = useState();
  const [contentValue, setContentValue] = useState();
  const [categoryValue, setCategoryValue] = useState();
  const [hashtagOneValue, setHashtagOneValue] = useState();
  const [hashtagtwoValue, setHashTagTwoValue] = useState();
  const [fileSrc, setFileSrc] = useState(null);
  // const { setNewPost, newpost } = props;
  const [newImg, setNewImg] = useState(false);

  const { sid } = useParams();
  const userImg = localStorage.getItem('user_img');
  const history = useHistory();

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
    setNewImg(true);
    fileReader.onload = function () {
      setFileSrc(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const fd = new FormData(document.form1);
    alert('確認修改嗎？');
    fetch(`http://localhost:3001/forum_index/forumArticle_update/${sid}`, {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
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
      .then(res => res.json())
      .then(data => {
        // setTimeout(() => {
        //   if (newpost === true) {
        //     setNewPost(false);
        //   } else {
        //     setNewPost(true);
        //   }
        // }, 20000);
      });
    history.push('/forum-home');
  };

  useEffect(() => {
    getPost(sid).then(post => {
      setTitleValue(post.art_title);
      setContentValue(post.art_content);
      setCategoryValue(post.art_category_sid);
      setHashtagOneValue(post.hashtag1);
      setHashTagTwoValue(post.hashtag2);
      setFileSrc(post.art_photo);
    });
  }, []);
  // 照片加入？？

  // console.log(titleValue);

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
                        src={`http://localhost:3000/index_img/${userImg}`}
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
                  // ????
                  value={categoryValue}
                  onChange={handleCategoryChange}
                  name="art_category_sid"
                  style={{ height: '40px', borderRadius: '5px' }}
                  required
                >
                  <option selected></option>
                  <option value="1">事前準備</option>
                  <option value="2">旅遊心得</option>
                  <option value="3">太空冷知識</option>
                  <option value="4">星球介紹</option>
                  <option value="5">音樂薦推</option>
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
                    // defaultValue={titleValue}
                    value={titleValue}
                    name="art_title"
                    onChange={handleInputChange}
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
                    onChange={handleHashtagTwoChange}
                    name="hashtagtwo"
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
                  <div className="btn-left">
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
                        // value={fileSrc}
                        style={{ display: 'none' }}
                      />
                    </div>
                    <img
                      style={{ width: '180px' }}
                      src={
                        newImg === true
                          ? `${fileSrc}`
                          : `http://localhost:3001/img/${fileSrc}`
                      }
                      alt=""
                    />
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
