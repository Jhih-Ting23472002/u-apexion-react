import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
// import { getPost } from '../../data/WebApi'
import PropTypes from 'prop-types';
import './ForumHomePage.css';
import ForumNav from '../../../components/Forum-Nav';
// import PublishPage from '../PublishPage'

const Root = styled.div`
  ${'' /* border: 1px solid red; */}
  width: 100%;
  margin: 0 auto;
  ${'' /* border: 1px solid red; */}/
`;
const AllDisplayFlex = styled.div`
  display: flex;
`;
const PostTitle = styled(Link)`
  font-size: 15px;
  font-weight: 600;
  color: black;
  text-decoration: none;
  letter-spacing: 1px;
  &:hover {
    color: #05f2f2;
    text-decoration: none;
  }
`;

const PostDate = styled.div`
  color: black;
  font-size: 12px;
  padding-top: 3px;
`;
const ForumSortNew = styled(Link)`
  display: flex;
  align-items: center;
  padding-right: 10px;
  border-radius: 10px;
  ${props =>
    props.$active &&
    `
    border: 1px solid #05f2f2; 
    background-color:#05f2f2;
    text-decoration: none;
  `}
`;

function Post({ post }) {
  return (
    <>
      <div className="card forum_card">
        <div className="card-body forum_card_body">
          <div className="card-user">
            <div className="forum_user-top">
              <div className="forum_user-logo">
                {/* <img className="cover" src="" alt="" /> */}
              </div>
              <div className="user-title">
                <div className="user-name forum_user-name">{post.name}</div>
                <PostDate>
                  {new Date(post.art_create_time).toLocaleString()}
                </PostDate>
              </div>
            </div>
            <div className="article-title">
              <PostTitle to={`/forum-home/posts/${post.sid}`}>
                {post.art_title}
              </PostTitle>
            </div>
            <div className="article-text">
              <p className="article-ellipsis">{post.art_content}</p>
            </div>
          </div>
          <div className="article-hashtag">
            <a href="#/" className="card-link forum_card-link">
              {post.hashtag1}
            </a>
            <a href="#/" className="card-link forum_card-link">
              {post.hashtag2}
            </a>
          </div>
        </div>
        <div className="article-like-box">
          <div className="article-like-box-group">
            <i className="fas fa-heart"></i>
            <div className="article-like-box-number">{post.article_likes}</div>
          </div>
          <div className="article-like-box-group">
            <i className="fas fa-comment"></i>
            <div className="article-like-box-number">{post.article_likes}</div>
          </div>
          <div className="article-like-box-group">
            <i className="fas fa-bookmark"></i>
            <div className="article-like-box-number">{post.article_save}</div>
          </div>
        </div>
      </div>
    </>
  );
}

Post.propTypes = {
  post: PropTypes.object,
};

export default function ForumHomePage() {
  const location = useLocation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/forum-list-connectTry')
      .then(res => res.json())
      .then(posts => setPosts(posts));
  }, []);

  return (
    <Root>
      <AllDisplayFlex>
        <ForumNav />
        <div className="artical">
          <div className="forum-sort-and-post">
            <div className="forum-sort">
              <div className="forum-sort-group">
                <div className="forum-sort-icon">
                  <a href="#/" className="forum_justify">
                    <i className="fas fa-sort"> </i>
                    <div className="forum_sort_text">SORT</div>
                  </a>
                </div>
                <div className="sort-new">
                  <ForumSortNew
                    to="/forum-home"
                    $active={location.pathname === '/forum-home'}
                    // className="forum_justify"
                  >
                    <i className="fas fa-clock"></i>
                    <div className="forum_sort_text">NEW</div>
                  </ForumSortNew>
                </div>
                <div className="sort-hot">
                  <a href="#/" className="forum_justify">
                    <i className="fas fa-burn"></i>
                    <div className="forum_sort_text"> HOT</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="forum-post">
              <div className="forum-post-group">
                <div className="forum-post">
                  <Link to="/publish">
                    <a href="#/" className="forum_justify">
                      <i className="fas fa-pen"></i>
                      <div className="forum_sort_text"> POST</div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{ marginLeft: '5px', marginRight: '5px' }}
          >
            <div className="col">
              <div className="card forum_card card-fixed">
                <div className="card-body forum_card_body">
                  <div className="card-user forum-card-user">
                    <div className="forum_user-top">
                      <div className="forum_user-logo">
                        <img
                          className="forum_user_logo_cover"
                          src="./forum_img/u-apexionLogo.png"
                          alt=""
                        />
                      </div>
                      <div className="forum-user-title">
                        <div className="user-name forum_user-name">
                          U-Apexion
                        </div>
                        <div
                          className="forum-post-time"
                          style={{ color: 'white' }}
                        >
                          5 min ago
                        </div>
                      </div>
                    </div>
                    <div className="article-title">
                      <h6>U-Apaxion板規-發文注意事項</h6>
                    </div>
                    <div className="article-text">
                      <p>
                        一、 禁止使用不雅字眼、中傷、歧視、挑釁或謾罵他人。 二、
                        為了創造更佳的內容體驗，全面禁止在文章與留言內留下個人聯絡方式或ID。三、
                        請勿...
                      </p>
                    </div>
                  </div>
                  <div className="article-hashtag">
                    <a href="#/" className="card-link forum_card-link">
                      #板規
                    </a>
                    <a href="#/" className="card-link forum_card-link">
                      #請查明後再發文
                    </a>
                  </div>
                </div>
                <div className="article-like-box">
                  <div className="article-like-box-group">
                    <i className="fas fa-heart"></i>
                    <div className="article-like-box-number">30</div>
                  </div>
                  <div className="article-like-box-group">
                    <i className="fas fa-comment"></i>
                    <div className="article-like-box-number">11</div>
                  </div>
                  <div className="article-like-box-group">
                    <i className="fas fa-bookmark"></i>
                    <div className="article-like-box-number">8</div>
                  </div>
                </div>
                <div className="forum-fixed-box">
                  <p
                    style={{
                      width: '40px',
                      marginBottom: '0',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                  >
                    FIXED
                  </p>
                  <i className="fas fa-thumbtack"></i>
                </div>
              </div>
              {posts.map(post => (
                <Post post={post} />
              ))}
              {/* <nav aria-label="Page navigation example">
                <ul className="pagination forum-pagination">
                  <li className="page-item forum-page-item">
                    <a
                      style={{ color: '#808080' }}
                      className="page-link forum-page-link"
                      href="#/"
                    >
                      <i className="fas fa-angle-double-left"></i>
                      Previous
                    </a>
                  </li>
                  <li className="page-item forum-page-item">
                    <a
                      style={{ color: '#05F2F2' }}
                      className="page-link forum-page-link"
                      href="#/"
                    >
                      1
                    </a>
                  </li>
                  <li className="page-item forum-page-item">
                    <a className="page-link forum-page-link" href="#/">
                      2
                    </a>
                  </li>
                  <li className="page-item forum-page-item">
                    <a className="page-link forum-page-link" href="#/">
                      3
                    </a>
                  </li>
                  <li className="page-item forum-page-item">
                    <a
                      style={{ display: 'inline' }}
                      className="page-link forum-page-link"
                      href="#/"
                    >
                      Next
                    </a>
                    <i
                      style={{ fontSize: '10px' }}
                      className="fas fa-angle-double-right"
                    ></i>
                  </li>
                </ul>
              </nav> */}
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
