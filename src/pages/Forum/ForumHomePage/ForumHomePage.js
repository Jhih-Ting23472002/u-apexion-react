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
  font-weight: bold;
  color: black;
  text-decoration: none;
  &:hover {
    color: #05f2f2;
    text-decoration: none;
  }
`;

const PostDate = styled.div`
  color: black;
  font-size: 12px;
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
      <div class="card forum_card">
        <div class="card-body forum_card_body">
          <div class="card-user">
            <div class="forum_user-top">
              <div class="forum_user-logo">
                {/* <img class="cover" src="" alt="" /> */}
              </div>
              <div class="user-title">
                <div class="user-name forum_user-name">
                  user_sid{post.user_sid}
                </div>
                <PostDate>
                  {new Date(post.art_create_time).toLocaleString()}
                </PostDate>
              </div>
            </div>
            <div class="article-title">
              <PostTitle to={`/forum-home/posts/${post.sid}`}>
                {post.art_title}
              </PostTitle>
            </div>
            <div class="article-text">
              <p className="article-ellipsis">{post.art_content}</p>
            </div>
          </div>
          <div class="article-hashtag">
            <a href="#/" class="card-link forum_card-link">
              {post.hashtag1}
            </a>
            <a href="#/" class="card-link forum_card-link">
              {post.hashtag2}
            </a>
          </div>
        </div>
        <div class="article-like-box">
          <div class="article-heart-group">
            <i class="fas fa-heart"></i>
          </div>
          <div class="article-comments-group">
            <i class="fas fa-comment"></i>
          </div>
          <div class="article-save-group">
            <i class="fas fa-bookmark"></i>
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
        <div class="artical">
          <div class="forum-sort-and-post">
            <div class="forum-sort">
              <div class="forum-sort-group">
                <div class="forum-sort-icon">
                  <a href="#/" class="forum_justify">
                    <i class="fas fa-sort"> </i>
                    <div className="forum_sort_text">SORT</div>
                  </a>
                </div>
                <div class="sort-new">
                  <ForumSortNew
                    to="/forum-home"
                    $active={location.pathname === '/forum-home'}
                    // class="forum_justify"
                  >
                    <i class="fas fa-clock"></i>
                    <div className="forum_sort_text">NEW</div>
                  </ForumSortNew>
                </div>
                <div class="sort-hot">
                  <a href="#/" class="forum_justify">
                    <i class="fas fa-burn"></i>
                    <div className="forum_sort_text"> HOT</div>
                  </a>
                </div>
              </div>
            </div>
            <div class="forum-post">
              <div class="forum-post-group">
                <div class="forum-post">
                  <Link to="/publish">
                    <a href="#/" class="forum_justify">
                      <i class="fas fa-pen"></i>
                      <div className="forum_sort_text"> POST</div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
            <div class="col">
              <div class="card forum_card card-fixed">
                <div class="card-body forum_card_body">
                  <div class="card-user forum-card-user">
                    <div class="forum_user-top">
                      <div class="forum_user-logo">
                        <img
                          class="forum_user_logo_cover"
                          src="./forum_img/u-apexionLogo.png"
                          alt=""
                        />
                      </div>
                      <div class="forum-user-title">
                        <div class="user-name forum_user-name">U-Apexion</div>
                        <div class="forum-post-time">5 min ago</div>
                      </div>
                    </div>
                    <div class="article-title">
                      <h6>U-Apaxion板規-發文注意事項</h6>
                    </div>
                    <div class="article-text">
                      <p>
                        一、 禁止使用不雅字眼、中傷、歧視、挑釁或謾罵他人。 二、
                        為了創造更佳的內容體驗，全面禁止在文章與留言內留下個人聯絡方式或ID。三、
                        請勿...
                      </p>
                    </div>
                  </div>
                  <div class="article-hashtag">
                    <a href="#/" class="card-link forum_card-link">
                      #板規
                    </a>
                    <a href="#/" class="card-link forum_card-link">
                      #請查明後再發文
                    </a>
                  </div>
                </div>
                <div class="article-like-box">
                  <div class="article-heart-group">
                    <i class="fas fa-heart"></i>
                  </div>
                  <div class="article-comments-group">
                    <i class="fas fa-comment"></i>
                  </div>
                  <div class="article-save-group">
                    <i class="fas fa-bookmark"></i>
                  </div>
                </div>
                <div class="forum-fixed-box">
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
                  <i class="fas fa-thumbtack"></i>
                </div>
              </div>
              {posts.map(post => (
                <Post post={post} />
              ))}
              {/* <nav aria-label="Page navigation example">
                <ul class="pagination forum-pagination">
                  <li class="page-item forum-page-item">
                    <a
                      style={{ color: '#808080' }}
                      class="page-link forum-page-link"
                      href="#/"
                    >
                      <i class="fas fa-angle-double-left"></i>
                      Previous
                    </a>
                  </li>
                  <li class="page-item forum-page-item">
                    <a
                      style={{ color: '#05F2F2' }}
                      class="page-link forum-page-link"
                      href="#/"
                    >
                      1
                    </a>
                  </li>
                  <li class="page-item forum-page-item">
                    <a class="page-link forum-page-link" href="#/">
                      2
                    </a>
                  </li>
                  <li class="page-item forum-page-item">
                    <a class="page-link forum-page-link" href="#/">
                      3
                    </a>
                  </li>
                  <li class="page-item forum-page-item">
                    <a
                      style={{ display: 'inline' }}
                      class="page-link forum-page-link"
                      href="#/"
                    >
                      Next
                    </a>
                    <i
                      style={{ fontSize: '10px' }}
                      class="fas fa-angle-double-right"
                    ></i>
                  </li>
                </ul>
              </nav> */}
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
