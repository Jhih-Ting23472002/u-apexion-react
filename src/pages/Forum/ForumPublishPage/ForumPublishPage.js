import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import './ForumPublishPage.css';
import ForumPublishPageModal from './ForumPublishPageModal';
import ForumNav from '../../../components/Forum-Nav';

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

export default function ForumPublishPage(props) {
  const [posts, setPosts] = useState([]);
  const [titleValue, setTitleValue] = useState('');
  const [contentValue, setContentValue] = useState('');
  const [categoryValue, setCategoryValue] = useState(null);
  const [hashtagOneValue, setHashtagOneValue] = useState('');
  const [hashtagtwoValue, setHashTagTwoValue] = useState('');
  const [fileSrc, setFileSrc] = useState(null);
  const [postApiError, setPostApiError] = useState(null);
  const { setNewPost, newpost } = props;
  const [modalShow, setModalShow] = useState(false);

  const userId = localStorage.getItem('user_id');
  const userImg = localStorage.getItem('user_img');
  // console.log(userId);

  const user_name = localStorage.getItem('user_name');

  let history = useHistory();

  const handleKeyIn = () => {
    setTitleValue('全世界第一本太空旅行準備書！');
    setHashtagOneValue('#全世界第一');
    setHashTagTwoValue('#太空旅行準備書');
    setContentValue(
      '經過一九六○年代，前蘇聯與美國的太空競賽，讓外太空從一個大部分未知的空間，變成各國太空人的遊樂場，許多人都認為在當時可預見的未來，一般人也能夠進行太空旅行，而接下來的日子裡，這個預想還沒完全實現，只有許多電影、電視、電玩早已在畫面上滿足人類探訪太空的夢想，直到二○○一年四月二十八日，丹尼斯．迪托成為第415位進入太空的地球人，而且也是第一位自費進行太空旅行者。<br/><br/>丹尼斯．迪托在《去你的太空》提到：「我所付的錢，大約可以付得起一萬個蘇聯太空計劃工作人員至少一年的薪資」「相信我，簽支票還算是整個計畫中最簡單的一環。」當時迪托參加的是為期八天，一項定期執行的蘇聯太空計畫，該任務僅需兩位太空人升空，但執行任務的「聯合號」上卻有三個位子，因此迪托在第一家太空旅行社──太空冒險公司──執行長艾瑞克的協助下，在這個計畫中爭得「一席之地」，為了這趟太空旅行，迪托接受了為期六個月，總數超過900小時的訓練課程。<br/><br/>由於太空船以高速運動、再加上重力不同等因素，在太空中的生活會以和地球不同的節奏進行，要明確的訂出「清醒時間」與「睡眠時間」，並訂定各階段活動的時間表以盡量維持身體循環的節奏。此外，許多生活細節也要格外注意，例如：在地球上張開嘴巴嚼食，頂多只是不雅的行為，但若在微重力的狀態下，飛散的食物碎屑，可是會造成致命的危險，許多在地球上理所當然的行為，在零重力的狀態下，都會有不同的規則和需要注意的細節。<br/><br/>當然，這本「完全升空指南」如果要歸類為書架上的「實用工具書」，那你得先有太空旅行計畫才行，如果你對太空旅行有興趣，書中也介紹了幾種不同的太空套裝行程與相關網站，不妨參考一下，不然就像莽斯特一樣看書過乾癮，總有一天等到旅行社降價！'
    );
  };

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
    e.preventDefault();
    const fd = new FormData(document.form1);
    // alert('確認送出嗎？');
    fetch('http://localhost:3001/forum_index/forumArticle_insert', {
      // 修改
      method: 'POST',
      body: fd,
    })
      .then(res => res.json())
      .then(data => {
        /*
        setTimeout(() => {
          if (newpost === true) {
            setNewPost(false);
          } else {
            setNewPost(true);
          }
          

        }, 20000);
        */
        // console.log(data);
        if (data.success) {
          setNewPost(np => !np);
          setModalShow(true);
        }
        // history.push('/forum-home');
      });
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
                    <div className="forum_user-logo" onClick={handleKeyIn}>
                      <img
                        className="forum_cover"
                        src={`http://localhost:3000/index_img/${userImg}`}
                        alt=""
                      />
                    </div>
                    <div className="user-title">
                      <div className="forum_user-name">{user_name}</div>
                      <div className="forum_post-time">
                        {new Date().getFullYear() +
                          '-' +
                          (new Date().getMonth() + 1) +
                          '-' +
                          new Date().getDate() +
                          '-' +
                          new Date().getHours() +
                          ':' +
                          new Date().getMinutes() +
                          ':' +
                          new Date().getSeconds()}
                      </div>
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
                  <input
                    type="text"
                    value={userId}
                    name="forum_user_sid"
                    style={{ display: 'none' }}
                  />
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
        <ForumPublishPageModal
          show={modalShow}
          onHide={() => {
            history.push('/forum-home');
          }}
        />
      </AllDisplayFlex>
    </Root>
  );
}
