import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link, useHistory } from 'react-router-dom';
import { getPost, getResponse } from '../../../data/WebApi';
import './ForumSinglePostPage.css';
import ForumNav from '../../../components/Forum-Nav';
import * as ReactBootstrap from 'react-bootstrap';
// import PropTypes from 'prop-types'

// import ForumNav from '../../components/Forum-Nav'

const Root = styled.div`
  width: 100%;
  ${'' /* border: 1px solid pink; */}
  margin: 0 auto;
  ${'' /* padding: 5%; */}
`;
const SinglePost = styled.div`
  width: 63%;
  padding-top: 1%;
`;
const AllDisplayFlex = styled.div`
  display: flex;
`;

const SinglePostContainer = styled.div`
  width: 95%;
  padding: 3%;
  background-color: white;
  ${'' /* margin: 3%; */}
  margin-left:auto;
  margin-right: auto;
`;
const SinglePostTopLeft = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  display: flex;
`;
const SinglePostTopLeftFlex = styled.div`
  display: flex;
`;
const SinglePostTopRightFlex = styled.div`
  ${'' /* border: 1px solid pink; */}
  display: flex;
  padding: 5px;
  font-size: 16px;
`;
const SinglePostTopImg = styled.div`
  border: 1px solid black;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const SinglePostTopUser = styled.div`
  ${'' /* border: 1px solid red; */}
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${'' /* padding: 0 10px; */}
`;

const SinglePostName = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: black;
  font-weight: 500;
  margin-bottom: 5px;
  letter-spacing: 2px;
`;
const SinglePostTime = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.7);
`;

const SingleTopRight = styled.div`
  color: black;
`;

const SinglePostCat = styled(Link)`
  color: #05f2f2;
  font-weight: 500;
  font-size: 14px;
`;

const SinglePostTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const SinglePostContent = styled.div`
  font-size: 16px;
  color: black;、
  white-space:pre-wrap;
  line-height: 30px;
  letter-spacing:2px;
`;
const SinglePostHashtag = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #05f2f2;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const SinglePostTopRightEDIT = styled(Link)`
  padding-right: 10px;
`;
const SinglePostTopRightDELETE = styled.div``;

const SinglePostResponses = styled.div``;

const SinglePostImg = styled.div`
  width: 50%;
  display: block;
  margin: 10px auto;
`;

const userId = localStorage.getItem('user_id');
console.log(userId);

export default function ForumSinglePostPage() {
  const [post, setPost] = useState(null);
  const [response, setResponse] = useState(null);
  const [value, setValue] = useState();
  const [messages, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { sid } = useParams();
  const history = useHistory();
  const [imgSrc, setImgSrc] = useState();

  function SinglePostResponsesArea({ name, res_content, res_time, imgs }) {
    return (
      <div className="forum_response_area">
        <div className="forum_response_user">
          <div className="forum_response_user_img">
            <img src={`http://localhost:3000/index_img/${imgs}`} alt="" />
          </div>
          <div className="forum_response_user_name_time">
            <div className="forum_user_name">@{name}</div>
            <div className="forum_post_time">{res_time}</div>
          </div>
        </div>
        <div className="forum_response_message_area">
          <div className="forum_message">{res_content}</div>
          <div className="forum_likes_icon">
            <i className="fa-solid fa-heart">{/* <a href="#"></a> */}</i>
            {/* 33 */}
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    getPost(sid).then(post => {
      setPost(post);
      // console.log(post.art_photo);
      setImgSrc('http://localhost:3001/img/' + post.art_photo);
    });
    getResponse(sid).then(response => setResponse(response));
  }, []);

  const fetchMessage = () => {
    return fetch(`http://localhost:3001/forum_index/res-list/${sid}`)
      .then(res => res.json())
      .then(data => {
        setMessage(data);
      });
  };

  const handleInputChange = e => {
    setValue(e.target.value);
  };

  const handleDeletePost = e => {
    if (parseInt(userId) !== parseInt(post.forum_user_sid)) {
      console.log(post.forum_user_sid);
      console.log('userId', userId);
      console.log('clicked');
      return;
    } else {
      alert('確認刪除嗎？');
      fetch(`http://localhost:3001/forum_index/list-delete/${sid}`).then(res =>
        res.json()
      );
      setLoading(true);
    }
  };

  const userId = localStorage.getItem('user_id');

  const handleFormSubmit = e => {
    // e.preventDefault()
    fetch(`http://localhost:3001/forum_index/res-list/${sid}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        res_content: value,
        res_user: userId,
      }),
    })
      .then(res => res.json())
      .then(data => {
        setValue('');
        fetchMessage();
      });
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  const spinner = () => {
    if (loading) {
      setTimeout(() => history.push('/forum-home'), 2000);
      return (
        <div
          classname="spinner_bg"
          style={{
            width: '100%',
            height: '100%',
            zIndex: 999,
            backgroundColor: 'black',
            position: 'relative',
            textAlign: 'center',
            color: 'white',
            fontSize: '16px',
          }}
        >
          Loading....
          <ReactBootstrap.Spinner
            animation="grow"
            style={{
              // backgroundColor: '#fff',
              position: 'absolute',
              top: '7%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              width: '60px',
              height: '60px',
            }}
          ></ReactBootstrap.Spinner>
        </div>
      );
    }
  };

  return (
    <Root>
      <AllDisplayFlex>
        <ForumNav />
        <SinglePost>
          {spinner()}
          <SinglePostContainer>
            <SinglePostTopLeft>
              <SinglePostTopLeftFlex>
                <SinglePostTopUser>
                  <SinglePostName>{post && post.name}</SinglePostName>
                  <SinglePostTime>
                    {post && new Date(post.art_create_time).toLocaleString()}
                  </SinglePostTime>
                </SinglePostTopUser>
              </SinglePostTopLeftFlex>
              <SinglePostTopRightFlex>
                <SinglePostTopRightEDIT
                  to={
                    post && userId == post.forum_user_sid
                      ? `/publish-edit/${sid}`
                      : `/forum-home/posts/${sid}`
                  }
                >
                  <button
                    className="SinglePostTopRightFlexBtn"
                    disabled={
                      post && userId == post.forum_user_sid ? false : true
                    }
                  >
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                </SinglePostTopRightEDIT>
                <SinglePostTopRightDELETE onClick={handleDeletePost}>
                  <button
                    className="SinglePostTopRightFlexBtn"
                    disabled={
                      post && userId == post.forum_user_sid ? false : true
                    }
                  >
                    <i class="fa-regular fa-trash-can"></i>
                  </button>
                </SinglePostTopRightDELETE>
              </SinglePostTopRightFlex>
            </SinglePostTopLeft>
            <SingleTopRight></SingleTopRight>
            <SinglePostCat>
              {post && post.for_category}
              <br />
            </SinglePostCat>
            <SinglePostTitle>{post && post.art_title}</SinglePostTitle>
            <SinglePostContent>
              <div
                dangerouslySetInnerHTML={{
                  __html: post && post.art_content.split('\r\n').join('<br/>'),
                }}
              />
            </SinglePostContent>
            <SinglePostImg>
              <img src={imgSrc} alt="" />
              {/* {post && post.art_photo} */}
            </SinglePostImg>
            <SinglePostHashtag>
              {post && post.hashtag1}&nbsp;&nbsp; &nbsp; &nbsp;
              {post && post.hashtag2}
            </SinglePostHashtag>
          </SinglePostContainer>
          <SinglePostResponses>
            <div>
              <div className="forum_responses">
                <div className="forum_responses_number">
                  {(response && response.length) || 0} Responses
                </div>

                {response &&
                  response.map((v, i) => {
                    return (
                      <SinglePostResponsesArea
                        key={v.res_art_sid}
                        name={v.name}
                        res_time={new Date(v.res_time).toLocaleString()}
                        res_content={v.res_content}
                        imgs={v.imgs}
                      ></SinglePostResponsesArea>
                    );
                  })}
              </div>
              <div className="forum_response_here">
                <div className="forum_response_block">
                  <form action="" onSubmit={handleFormSubmit}>
                    <input
                      type="text"
                      placeholder="response here"
                      value={value}
                      onChange={handleInputChange}
                      // onFocus={handleInputFocus}
                    />
                    <div className="forum_button_group">
                      <button>Cancel</button>
                      <button>
                        <i className="fa-thin fa-paper-plane-top"></i>Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </SinglePostResponses>
        </SinglePost>
        {/* col-right */}
        <div className="forum-col-right ">
          <div className="col forum_right_colum">
            <div className="forum_right_card">
              <div className="forum_right__user_img">
                <img
                  className="forum_img"
                  src={`http://localhost:3000/index_img/${post && post.imgs}`}
                  alt=""
                />
                {/* ????????why????? */}
              </div>
              <Link
                className="forum_right_user_name"
                style={{ display: 'block' }}
              >
                @ {post && post.name}
              </Link>
              <div className="forum_right_usermedel">
                <i className="fa-solid fa-medal forum_medal"></i>
                120 [8]
              </div>
            </div>
          </div>
        </div>
      </AllDisplayFlex>
    </Root>
  );
}
