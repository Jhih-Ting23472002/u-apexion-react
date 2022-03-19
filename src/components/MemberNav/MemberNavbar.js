import React from 'react';
import styled from 'styled-components';
import './MemberNavbar.css';
import { Link, useLocation } from 'react-router-dom';
// import { Dropdown } from 'react-bootstrap';

const UserArticalAll = styled(Link)`
  display: block;
  ${props =>
    props.$active &&
    `
    background-color:#023E73;
    border-left:3px solid #05f2f2;
    text-decoration:none;
  `}
`;
// const UserArticalCat = styled.div`
//   display: block;
//   margin-left: 10px;
//   text-decoration: none;
// `;

export default function MemberNavbar() {
  const location = useLocation();
  return (
    <div
      className="nav user_nav-bg d-flex flex-column flex-shrink-0 p-3 user_nav"
      id="navbar"
    >
      <ul className="nav nav-pills flex-column mb-auto user_nav_ul">
        {/* <li>
          <div className="user-input-wrapper">
            <input
              className="user_nav-search-bar form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              required
            />
          </div>
        </li> */}
        <li>
          <div
            className="user_nav_title"
            style={{ marginTop: '15px', fontSize: '14px' }}
          >
            會員資料
          </div>
          <div className="user_nav_a-group">
            <UserArticalAll
              to="/member-person"
              $active={location.pathname === '/member-person'}
            >
              <div className="user_navIcon_adjust">
                <i class="fa-solid fa-user"></i>
                <a href="/#" className="user_nav_item">
                  個人檔案
                </a>
              </div>
            </UserArticalAll>
            <UserArticalAll
              to="/member-password-edit"
              $active={location.pathname === '/member-password-edit'}
            >
              <div className="user_navIcon_adjust">
                <i class="fa-solid fa-key"></i>
                <a href="/#" className="user_nav_item">
                  更改密碼
                </a>
              </div>
            </UserArticalAll>
            <UserArticalAll
              to="/member-address"
              $active={location.pathname === '/member-address'}
            >
              <div className="user_navIcon_adjust">
                <i class="fa-solid fa-map-pin"></i>
                <a href="/#" className="user_nav_item">
                  收件地址
                </a>
              </div>
            </UserArticalAll>
            {/* <UserArticalCat>
              <div className="user_navIcon_adjust">
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
            </UserArticalCat> */}
            <UserArticalAll to="/#" $active={location.pathname === '/#'}>
              <div className="user_navIcon_adjust">
                <i class="fa-solid fa-clipboard-list"></i>
                <a href="/#" className="user_nav_item">
                  歷史訂單
                </a>
              </div>
            </UserArticalAll>
          </div>
          <UserArticalAll to="/#" $active={location.pathname === '/#'}>
            <div className="user_navIcon_adjust">
              <i className="fa-solid fa-heart"> </i>
              <a href="/#" className="user_nav_item">
                我的收藏
              </a>
            </div>
          </UserArticalAll>
        </li>
        {/* <li>
          <div
            className="user_nav_title"
            style={{ marginTop: '15px', fontSize: '14px' }}
          >
            個人頁面
          </div>

          <div className="a-group">
            <UserArticalAll to="/#" $active={location.pathname === '/#'}>
              <div className="user_navIcon_adjust">
                <i className="fa-solid fa-address-card"> </i>
                <a href="/#" className="user_nav_item">
                  個人貼文
                </a>
              </div>
            </UserArticalAll>
            <UserArticalAll to="/#" $active={location.pathname === '/#'}>
              <div className="user_navIcon_adjust">
                <i className="fa-solid fa-heart"> </i>
                <a href="/#" className="user_nav_item">
                  按讚貼文
                </a>
              </div>
            </UserArticalAll>
            <UserArticalAll to="/#" $active={location.pathname === '/#'}>
              <div className="user_navIcon_adjust">
                <i className="fa-solid fa-bookmark"> </i>
                <a href="/#" className="user_nav_item">
                  個人珍藏
                </a>
              </div>
            </UserArticalAll>
          </div>
        </li> */}
      </ul>
    </div>
  );
}
