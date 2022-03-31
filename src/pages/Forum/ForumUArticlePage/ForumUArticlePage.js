import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import ForumNav from '../../../components/Forum-Nav';

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
`;

const PostDate = styled.div`
  color: black;
  font-size: 12px;
`;
const ForumSortNew = styled(Link)`
  display: flex;
  align-items: center;
  background-color: black;
  padding-right: 10px;
  border-radius: 30px;
  border: 4px double #05f2f2;
  ${props =>
    props.$active &&
    `
    text-decoration: none;
    background-color: #05f2f2;
    color: black;
    border: 4px double black;
  `};
`;

function Post({ post }) {
  const [likes, setLikes] = useState(post.article_likes);
  const [save, setSave] = useState(post.article_save);
  return (
    <>
      <div className="card forum_card">
        <div className="card-body forum_card_body">
          <div className="card-user">
            <div className="forum_user-top">
              <div className="forum_user_top_left">
                <div className="forum_user-logo">
                  <img
                    className="cover"
                    src={`./index_img/${post.imgs}`}
                    alt=""
                  />
                </div>
                <div className="user-title">
                  <div className="user-name forum_user-name">{post.name}</div>
                  <PostDate>
                    {new Date(post.art_create_time).toLocaleString()}
                  </PostDate>
                </div>
              </div>
            </div>
            <div className="article-title">
              <PostTitle to={`/forum-home/posts/${post.forum_sid}`}>
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
          <div
            className="article-like-box-group"
            onClick={() => setLikes(likes + 1)}
          >
            <i className="fas fa-heart"></i>
            <div className="article-like-box-number">{likes}</div>
          </div>
          <div className="article-like-box-group">
            <i className="fas fa-comment"></i>
            <div className="article-like-box-number">
              {post.article_comments}
            </div>
          </div>
          <div
            className="article-like-box-group"
            onClick={() => setSave(save + 1)}
          >
            <i className="fas fa-bookmark"></i>
            <div className="article-like-box-number">{save}</div>
          </div>
        </div>
      </div>
    </>
  );
}

Post.propTypes = {
  post: PropTypes.object,
};

export default function ForumUArticlePage() {
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/forum_index/UApexion-article')
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
                    to="/forum-apexion-articles"
                    $active={location.pathname === '/forum-apexion-articles'}
                    // class="forum_justify"
                  >
                    <i class="fas fa-clock"></i>
                    <div className="forum_sort_new">NEW</div>
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
          <div className="searchOutline">
            <input
              type="text"
              placeholder="Search..."
              className="searchInput"
              onChange={event => {
                setSearchTerm(event.target.value);
              }}
            />
            <a href="#/" class="search-btn">
              <i class="fas fa-search"></i>
            </a>
          </div>
          <div class="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
            <div class="col">
              {posts
                .filter(v => {
                  if ((v.forum_user_sid = 2 && searchTerm === '')) {
                    return v;
                  } else if (
                    (v.forum_user_sid = 2 && v.art_title.includes(searchTerm))
                  ) {
                    return v;
                  }
                })
                .map(post => (
                  <Post post={post} />
                ))}
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
