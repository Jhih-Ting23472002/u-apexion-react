import React, { useState } from 'react';
// import './MemberOrderHistory.css';
import MemberNavbar from '../../components/MemberNav';

function MemberOrderHistory() {
  return (
    <>
      <div className="member-container">
        <div className="member-shadow-container">
          {/* <div className="member-sidebar"></div> */}
          <MemberNavbar />

          <div className="member-right-wrap">
            <div className="member-title-wrap">
              <div className="member-title">
                <h1>歷史訂單</h1>
              </div>
            </div>
            <div className="member-information-container">
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
                  {/* <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MemberOrderHistory;
