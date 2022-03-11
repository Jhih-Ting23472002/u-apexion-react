import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getCategory } from '../../../data/WebApi';
// import PropTypes from 'prop-types'
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
              <PostTitle to={`/posts/${post.sid}`}>{post.art_title}</PostTitle>
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

// Post.propTypes = {
//   post: PropTypes.object,
// }

export default function ForumPostCategoryPage() {
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const { art_category_sid } = useParams();
  console.log(useParams(art_category_sid));

  useEffect(() => {
    getCategory(art_category_sid).then(post => setPosts(post));
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
                    to="/"
                    $active={location.pathname === '/'}
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
