import React from 'react';
import styled from 'styled-components';
import './ForumNav.css';
import { Link, useLocation } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

const ForunArticalAll = styled(Link)`
  display: block;
  ${props =>
    props.$active &&
    `
    background-color:#023E73;
    border-left:3px solid #05f2f2;
    text-decoration:none;
  `}
`;
const ForunArticalCat = styled.div`
  display: block;
  margin-left: 10px;
  text-decoration: none;
`;

export default function ForumNav() {
  const location = useLocation();
  return (
    <div
      className="nav forum_nav-bg d-flex flex-column flex-shrink-0 p-3 forum_nav"
      id="navbar"
    >
      <ul className="nav nav-pills flex-column mb-auto forum_nav_ul">
        <li>
          <div
            className="forum_nav_title"
            style={{ marginTop: '15px', fontSize: '14px' }}
          >
            文章分類
          </div>
          <div className="forum_nav_a-group">
            <ForunArticalAll
              to="/forum-home"
              $active={
                location.pathname === '/forum-home' && '/forum-hot-posts'
              }
            >
              <div className="forum_navIcon_adjust">
                <i className="fa-solid fa-border-all"> </i>
                <a
                  href="/#"
                  className="forum_nav_item"
                  style={{ fontFamily: 'Noto', letterSpacing: '2px' }}
                >
                  全部
                </a>
              </div>
            </ForunArticalAll>
            <ForunArticalAll
              to="/forum-apexion-articles"
              $active={location.pathname === '/forum-apexion-articles'}
            >
              <div className="forum_navIcon_adjust">
                <i className="fa-solid fa-rocket"> </i>
                <a
                  href="/#"
                  className="forum_nav_item"
                  style={{ fontFamily: 'Noto', letterSpacing: '2px' }}
                >
                  U-Apextion文章
                </a>
              </div>
            </ForunArticalAll>
            <ForunArticalAll
              to="/forum-member-posts"
              $active={location.pathname === '/forum-member-posts'}
            >
              <div className="forum_navIcon_adjust">
                <i className="fa-solid fa-users"> </i>
                <a
                  href="/#"
                  className="forum_nav_item"
                  style={{ fontFamily: 'Noto', letterSpacing: '2px' }}
                >
                  會員文章
                </a>
              </div>
            </ForunArticalAll>
            <ForunArticalCat>
              <div className="forum_navIcon_adjust">
                <i className="fa-solid fa-sort"></i>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    style={{
                      backgroundColor: 'black',
                      border: '0',
                      fontWeight: '500',
                      textDecoration: 'none',
                      fontSize: '14px',
                      letterSpacing: '2px',
                    }}
                  >
                    分類
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    style={{
                      backgroundColor: 'black',
                      marginLeft: '-30px',
                      textDecoration: 'none',
                    }}
                  >
                    <Dropdown.Item
                      style={{
                        hoverBackground: 'none',
                        textDecoration: 'none',
                      }}
                      id="dropdown-item"
                      as={Link}
                      to="/posts-category/1"
                      // style={{ display: 'block' }}
                    >
                      事前準備
                    </Dropdown.Item>

                    <Dropdown.Item
                      style={{ hoverBackground: 'none' }}
                      id="dropdown-item"
                      as={Link}
                      to="/posts-category/2"
                    >
                      旅遊心得
                    </Dropdown.Item>

                    <Dropdown.Item
                      style={{ textDecoration: 'none' }}
                      id="dropdown-item"
                      as={Link}
                      to="/posts-category/3"
                    >
                      太空冷知識
                    </Dropdown.Item>

                    <Dropdown.Item
                      style={{ hoverBackground: 'none' }}
                      id="dropdown-item"
                      as={Link}
                      to="/posts-category/4"
                    >
                      星球介紹
                    </Dropdown.Item>
                    <Dropdown.Item
                      style={{ hoverBackground: 'none' }}
                      id="dropdown-item"
                      as={Link}
                      to="/posts-category/5"
                    >
                      音樂推薦
                    </Dropdown.Item>
                    <Dropdown.Item
                      style={{ hoverBackground: 'none' }}
                      id="dropdown-item"
                      as={Link}
                      to="/posts-category/6"
                    >
                      星座旅遊
                    </Dropdown.Item>

                    <Dropdown.Item
                      style={{ hoverBackground: 'none' }}
                      id="dropdown-item"
                      as={Link}
                      to="/posts-category/7"
                    >
                      電影場景旅遊
                    </Dropdown.Item>

                    <Dropdown.Item
                      style={{ hoverBackground: 'none' }}
                      id="dropdown-item"
                      as={Link}
                      to="/posts-category/8"
                    >
                      每月主打
                    </Dropdown.Item>

                    <Dropdown.Item
                      style={{ hoverBackground: 'none' }}
                      id="dropdown-item"
                      as={Link}
                      to="/posts-category/10"
                    >
                      注意事項
                    </Dropdown.Item>

                    <Dropdown.Item
                      style={{ hoverBackground: 'none' }}
                      id="dropdown-item"
                      as={Link}
                      to="/posts-category/13"
                    >
                      太空美食推薦
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </ForunArticalCat>
            <ForunArticalAll to="/#" $active={location.pathname === '/#'}>
              <div className="forum_navIcon_adjust">
                <i className="fa-solid fa-tag"> </i>
                <a
                  href="/#"
                  className="forum_nav_item"
                  style={{ fontFamily: 'Noto', letterSpacing: '2px' }}
                >
                  #Hashtags
                </a>
              </div>
            </ForunArticalAll>
          </div>
        </li>
        <li>
          <div
            className="forum_nav_title"
            style={{ marginTop: '15px', fontSize: '14px' }}
          >
            個人頁面
          </div>

          <div className="a-group">
            <ForunArticalAll
              to="/forum-personal"
              $active={location.pathname === '/'}
            >
              <div className="forum_navIcon_adjust">
                <i className="fa-solid fa-address-card"> </i>
                <a
                  href="/#"
                  className="forum_nav_item"
                  style={{ fontFamily: 'Noto', letterSpacing: '2px' }}
                >
                  個人貼文
                </a>
              </div>
            </ForunArticalAll>
            <ForunArticalAll to="/#" $active={location.pathname === '/#'}>
              <div className="forum_navIcon_adjust">
                <i className="fa-solid fa-heart"> </i>
                <a
                  href="/#"
                  className="forum_nav_item"
                  style={{ fontFamily: 'Noto', letterSpacing: '2px' }}
                >
                  按讚貼文
                </a>
              </div>
            </ForunArticalAll>
            <ForunArticalAll to="/#" $active={location.pathname === '/#'}>
              <div className="forum_navIcon_adjust">
                <i className="fa-solid fa-bookmark"> </i>
                <a
                  href="/#"
                  className="forum_nav_item"
                  style={{ fontFamily: 'Noto', letterSpacing: '2px' }}
                >
                  個人珍藏
                </a>
              </div>
            </ForunArticalAll>
          </div>
        </li>
      </ul>
    </div>
  );
}
