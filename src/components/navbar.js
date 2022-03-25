import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function navbar() {
  return (
    <>
      <div className="topspace"></div>
      <nav>
        <div className="nav_container">
          <a className="nav_UA-logo" href="#/"></a>
          <div className="nav_spa"></div>
          <ul className="nav_nav-bar">
            <li>
              <Link to="/travel-index">Schedule</Link>
            </li>
            <li>
              <Link to="#/">Booking</Link>
            </li>
            <li>
              <Link to="/products">Shop</Link>
            </li>
            <li>
              <Link to="/forum-home">Forum</Link>
            </li>
            <li>
              <Link to="#/">Login</Link>
            </li>
            <li></li>
            <li>
              <Link to="#/">Register</Link>
            </li>
            <li>
              <Link to="/cart-payment">
                <img
                  className="nav_nav-bar-img"
                  src={require('./tools/Bag.png')}
                  alt=""
                />
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
                <Link to="#/" data-text="&nbsp;Schedule">
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

export default navbar;
