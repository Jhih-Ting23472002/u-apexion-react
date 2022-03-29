// import React, { useState } from 'react';
// import './MemberOrderHistory.css';
import MemberNavbar from '../../components/MemberNav';
import React, { useEffect, useState } from 'react';
import { getOrderHistory } from '../../data/UserWebApi';

function MemberOrderHistory() {
  const user_id = localStorage.getItem('user_id');
  const [orderHistory, setOrderHistory] = useState([]);

  const getUserOrderHistory = async () => {
    const res = getOrderHistory(user_id).then(obj => {
      console.log('obj:', obj);
      setOrderHistory(obj.list);
    });
  };
  useEffect(() => {
    getUserOrderHistory();
  }, []);
  console.log(orderHistory);

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
                <thead className="member-information-thead">
                  <tr>
                    <th scope="col">訂單編號</th>
                    <th scope="col">訂單日期</th>
                    <th scope="col">金額總計</th>
                    <th scope="col">付款方式</th>
                    <th scope="col">訂單狀態</th>
                    <th scope="col">訂單明細</th>
                  </tr>
                </thead>
                <tbody>
                  {orderHistory &&
                    orderHistory.map((element, i) => {
                      return (
                        <tr key={element[i]}>
                          <td>{element.order_number}</td>
                          <td>{element.order_date}</td>
                          <td>{element.order_total}</td>
                          <td>{element.order_pay_method}</td>
                          <td>{element.order_status}</td>
                          <td>
                            <a href="/#">詳情</a>
                          </td>
                        </tr>
                      );
                    })}

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
