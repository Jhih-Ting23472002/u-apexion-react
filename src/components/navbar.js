import React from 'react';
import './navbar.css';

function navbar() {
  return (
    <>
      <div className="topspace"></div>
      <nav>
        <div className="nav_container">
          <a href="/" className="nav_UA-logo"></a>
          <div className="nav_spa"></div>
          <ul className="nav_nav-bar">
            <li>
              <a href="#/">Schedule</a>
            </li>
            <li>
              <a href="#/">Booking</a>
            </li>
            <li>
              <a href="#/">Shop</a>
            </li>
            <li>
              <a href="/forum-home">Forum</a>
            </li>
            <li>
              <a href="#/">Login</a>
            </li>
            <li></li>
            <li>
              <a href="#/">Register</a>
            </li>
            <li>
              <a href="#/">
                <img
                  className="nav_nav-bar-img"
                  src={require('./tools/Bag.png')}
                  alt=""
                />
              </a>
            </li>
          </ul>
          <a href="#/" className="nav_menu">
            <svg
              className="bagpig"
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
          </a>
        </div>
      </nav>
    </>
  );
}

export default navbar;
