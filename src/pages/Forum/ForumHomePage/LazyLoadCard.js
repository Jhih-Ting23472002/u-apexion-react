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
    <div
      className="card forum_card"
      style={{
        border: '0',
        opacity: '0.5',
        boxShadow: '5px 5px 8px rgba(225,225,225,0.5)',
      }}
    >
      <div
        className="card-body forum_card_body"
        style={{ width: '100%', height: '150px', backgroundColor: 'gray' }}
      ></div>
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
