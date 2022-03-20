import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
// import './MemberOrderHistory.css';
import MemberNavbar from '../../components/MemberNav';

function MemberCollect() {
  const CollectTitle = styled(Link)`
    display: block;
    margin: 0 20px;
    color: black;
    ${props =>
      props.$active &&
      `
    background-color:#fff;
    
    text-decoration:none;
  `}
  `;

  const location = useLocation();
  return (
    <>
      <div className="member-container">
        <div className="member-shadow-container">
          {/* <div className="member-sidebar"></div> */}
          <MemberNavbar />

          <div className="member-right-wrap">
            <div className="member-title-wrap">
              <div className="member-title">
                <CollectTitle
                  to="/member-collect"
                  $active={location.pathname === '/member-collect'}
                >
                  <a href="/#" className="">
                    <h1>商品收藏</h1>
                  </a>
                </CollectTitle>
                <CollectTitle
                  to="/member-collect"
                  $active={location.pathname === '/member-collect'}
                >
                  <a href="/#" className="">
                    <h1>行程收藏</h1>
                  </a>
                </CollectTitle>
              </div>
            </div>
            {/* <div className="member-information-container">
              <table className="table table-borderless table-dark alert-dismissible  member-information-form">
                <thead className="member-information-field-name">
                  <tr>
                    <th scope="col">訂單編號</th>
                    <th scope="col">訂單日期</th>
                    <th scope="col">金額總計</th>
                    <th scope="col">付款方式</th>
                    <th scope="col">訂單狀態</th>
                    <th scope="col">訂單明細</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">087-014256-002</th>
                    <td>2019-09-12 </td>
                    <td>UA$X,XXX</td>
                    <td>信用卡</td>
                    <td>已出貨</td>
                    <td>
                      <a href="/#">詳情</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default MemberCollect;
