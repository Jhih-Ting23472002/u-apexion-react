import React, { useContext, useEffect, useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import CartQuantity from '../pages/Products/CartQuantity';
import UserNameF from './UserNameF';
import SignOut from './SignOut';

function Navbar(props) {
  //購物車內數量
  const { cartTotal, setCartTotal } = useContext(CartQuantity);
  //登入
  const { userNavbar, setUserNavbar } = useContext(UserNameF);
  //離開
  const { signOut, setSignOut } = useContext(SignOut);
  //註冊連結
  const [register, setRegister] = useState('/member-sign-up');
  //是不是登入狀態個人頁連結
  const [personalPage, setPersonalPage] = useState('/member-login');
  // console.log(register)
  const { setProductDetailList } = props;

  useEffect(() => {
    if (localStorage.getItem('user_name')) {
      const userName = localStorage.getItem('user_name');
      setUserNavbar(userName);
      setSignOut('登出');
    } else {
      setUserNavbar('登入');
      setSignOut('註冊');
    }
  }, [signOut]);

  useEffect(() => {
    if (signOut === '登出') {
      setRegister('/member-login');

      setPersonalPage('/member-person');
    } else {
      setRegister('/member-sign-up');
      setPersonalPage('/member-login');
    }
  }, [signOut]);
  //console.log(register)

  return (
    <>
      <div className="topspace"></div>
      <nav>
        <div className="nav_container">
          <Link to="/" className="nav_UA-logo"></Link>
          <div className="nav_spa"></div>
          <ul className="nav_nav-bar">
            <li>
              <Link to="/travel-index">主題探索</Link>
            </li>
            <li>
              <Link to="/ticket-order">訂票</Link>
            </li>
            <li>
              <Link to="/products" onClick={() => setProductDetailList([])}>
                購物
              </Link>
            </li>
            <li>
              <Link to="/forum-home">論壇</Link>
            </li>
            <li>
              <Link to={personalPage}>{userNavbar}&nbsp;&nbsp;</Link>
            </li>
            <li></li>
            <li className="navbar-login">
              <Link
                to={register}
                onClick={() => {
                  setCartTotal(0);
                  setSignOut('註冊');
                  setUserNavbar('登入');
                  localStorage.clear();
                  // localStorage.removeItem('user_id');
                  // localStorage.removeItem('user_name');
                  // localStorage.removeItem('productLocalStorage');
                }}
              >
                {signOut}
              </Link>
            </li>
            <li>
              <Link to="/cart-payment">
                <img
                  className="nav_nav-bar-img"
                  src={require('./tools/Bag.png')}
                  alt=""
                />
                <div className="cartTotal">
                  <p>{cartTotal}</p>
                </div>
              </Link>
            </li>
          </ul>

          <Link to="#/" className="nav_menu">
            <svg
              className="three-line"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="30" height="30" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use xlinkHref="#image0_1482_20163" transform="scale(0.02)" />
                </pattern>
                <image
                  id="image0_1482_20163"
                  width="50"
                  height="50"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAZ0lEQVRoge3XQRGAMBQD0ZSpBXAGzsFOcMDp03Q6+xRsjpEAfGm273REhWbb6YgKWzqgyjJDuqQrHQEAAAAM0Wzv6YgKPMTZMGQ2XdKRjgAAAACGaLbPdEQFru5slhnSJT3pCAD/ewGYGBeNI3uTOwAAAABJRU5ErkJggg=="
                />
              </defs>
            </svg>
          </Link>
          <div className="phone-menu">
            <ul>
              <li>
                <Link to="/travel-index" data-text="&nbsp;Schedule">
                  &nbsp;Schedule
                </Link>
              </li>
              <li>
                <Link to="#/" data-text="&nbsp;Booking">
                  &nbsp;Booking
                </Link>
              </li>
              <li>
                <Link to="#/" data-text="&nbsp;Customize">
                  &nbsp;Customize
                </Link>
              </li>
              <li>
                <Link to="#/" data-text="&nbsp;Member">
                  &nbsp;Member
                </Link>
              </li>
              <li>
                <Link to="#/" data-text="&nbsp;Forum">
                  &nbsp;Forum
                </Link>
              </li>
              <li>
                <Link to="/products" data-text="&nbsp;Product">
                  &nbsp;Product
                </Link>
              </li>
              <li>
                <Link to="/cart-payment" data-text="&nbsp;Cart">
                  &nbsp;Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
