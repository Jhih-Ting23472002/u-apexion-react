// import React, { useState } from 'react';
// import './MemberOrderHistory.css';
import MemberNavbar from '../../components/MemberNav';
import React, { useEffect, useState } from 'react';
import { getOrderHistory } from '../../data/UserWebApi';

function MemberOrderHistory() {
  const user_id = localStorage.getItem('user_id');
  console.log(user_id);
  const [orderHistory, setOrderHistory] = useState([]);

  const getUserOrderHistory = async () => {
    const res = getOrderHistory(user_id).then(obj => {
      console.log(obj);
      setOrderHistory(obj);
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
                    <th scope="col">訂單明細</th>
                    <th scope="col">訂單金額</th>
                    <th scope="col">出貨狀態</th>
                    {/* <th scope="col">訂單明細</th> */}
                  </tr>
                </thead>
                <tbody>
                  {orderHistory &&
                    orderHistory.map((v, i) => {
                      return (
                        <tr key={v[i]} style={{ height: '220px' }}>
                          <td style={{ width: '15%' }}>
                            {v.order_list_checked}
                          </td>
                          <td style={{ width: '20%' }}>
                            {v.order_created_time}
                          </td>
                          <td
                            style={{ width: '25%', lineHeight: '25px' }}
                            // dangerouslySetInnerHTML={{
                            //   __html: JSON.parse(v.order_product_name)[0].join(
                            //     '<br />'
                            //   ),
                            // }}
                          >
                            <div
                              style={{
                                fontWeight: '400',
                                // textDecoration: 'underline',
                                color: '#05f2f2',
                              }}
                            >
                              服飾:
                            </div>
                            <div
                              style={{ marginBottom: '10px' }}
                              dangerouslySetInnerHTML={{
                                __html: JSON.parse(
                                  v.order_product_name
                                )[0].join('<br />'),
                              }}
                            ></div>
                            <div
                              style={{
                                fontWeight: '400',
                                // textDecoration: 'underline',
                                color: '#05f2f2',
                              }}
                            >
                              主題旅遊:
                            </div>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: JSON.parse(
                                  v.order_product_name
                                )[1].join('<br />'),
                              }}
                            ></div>
                            {/* 服飾 */}
                          </td>
                          <td style={{ width: '20%', lineHeight: '25px' }}>
                            <div
                              style={{
                                fontWeight: '400',
                                // textDecoration: 'underline',
                                color: '#05f2f2',
                              }}
                            >
                              服飾：
                            </div>
                            <div style={{ marginBottom: '10px' }}>
                              $
                              {JSON.parse(v.order_product_price)[0].reduce(
                                (a, b) => a + b
                              )}
                            </div>
                            <div
                              style={{
                                fontWeight: '400',
                                color: '#05f2f2',
                              }}
                            >
                              主題之旅：
                            </div>
                            <div>
                              $
                              {JSON.parse(v.order_product_price)[1].reduce(
                                (a, b) => a + b
                              )}
                            </div>
                          </td>
                          <td>備貨中</td>
                        </tr>
                      );
                    })}
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
