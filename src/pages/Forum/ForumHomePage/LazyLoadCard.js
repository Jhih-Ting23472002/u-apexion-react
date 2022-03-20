import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const LazyLoadCard = () => {
  return (
    <div className="card forum_card">
      <div className="card-body forum_card_body">
        <div className="card-user">
          <div className="forum_user-top">
            <div className="forum_user_top_left">
              <div className="forum_user-logo">
                {/* <img className="cover" src="" alt="" /> */}
              </div>
              <div className="user-title">
                <div className="user-name forum_user-name"></div>
                <PostDate>
                  {/* {new Date(post.art_create_time).toLocaleString()} */}
                </PostDate>
              </div>
            </div>
          </div>
          <div className="article-title">
            <PostTitle>{/* {post.art_title} */}</PostTitle>
          </div>
          <div className="article-text">
            <p className="article-ellipsis"></p>
          </div>
        </div>
        <div className="article-hashtag">
          <a href="#/" className="card-link forum_card-link"></a>
          <a href="#/" className="card-link forum_card-link"></a>
        </div>
      </div>
      <div className="article-like-box">
        <div className="article-like-box-group">
          <i className="fas fa-heart"></i>
          <div className="article-like-box-number"></div>
        </div>
        <div className="article-like-box-group">
          <i className="fas fa-comment"></i>
          <div className="article-like-box-number"></div>
        </div>
        <div className="article-like-box-group">
          <i className="fas fa-bookmark"></i>
          <div className="article-like-box-number"></div>
        </div>
      </div>
    </div>
  );
};

export const LazyLoadPosts = () => {
  const loadPages = [1, 2, 3, 4];
  return (
    <div>
      {loadPages.map(num => {
        return <LazyLoadCard />;
      })}
    </div>
  );
};
