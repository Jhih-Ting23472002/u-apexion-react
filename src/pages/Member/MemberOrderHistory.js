// import React, { useState } from 'react';
// import './MemberOrderHistory.css';
import MemberNavbar from '../../components/MemberNav';
import React, { useEffect, useState } from 'react';
import { getOrderHistory } from '../../data/UserWebApi';

function MemberOrderHistory() {
  const user_id = localStorage.getItem('user_id');
  console.log(user_id);
  const [orderHistory, setOrderHistory] = useState([]);
  const [listDetail, setListDetail] = useState(false);

  const getUserOrderHistory = async () => {
    const res = getOrderHistory(user_id).then(obj => {
      console.log(obj);
      setOrderHistory(obj);
    });
  };

  const handleListDetail = () => {
    setListDetail(true);
    // console.log(listDetail);
    setTimeout(() => {
      if (listDetail == true) {
        setListDetail(false);
      }
    }, 500);
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
                        <tr key={v[i]} style={{ height: '60px' }}>
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
                            <i
                              class="fa-solid fa-arrow-down-1-9 listDetail-icon"
                              onClick={handleListDetail}
                              style={{
                                transition: '0.5s',
                                cursor: 'pointer',
                              }}
                            ></i>
                            <div
                              className="list-detail"
                              style={{
                                display: listDetail === true ? 'none' : 'block',
                              }}
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
                                style={{ marginBottom: '10px' }}
                                dangerouslySetInnerHTML={{
                                  __html: JSON.parse(
                                    v.order_product_name
                                  )[1].join('<br />'),
                                }}
                              ></div>
                              <div
                                style={{
                                  fontWeight: '400',
                                  // textDecoration: 'underline',
                                  color: '#05f2f2',
                                }}
                              >
                                太空服-徽章:
                              </div>
                              <div
                                style={{ marginBottom: '10px' }}
                                dangerouslySetInnerHTML={{
                                  __html: JSON.parse(
                                    v.order_product_name
                                  )[2].join('<br />'),
                                }}
                              ></div>
                              <div
                                style={{
                                  fontWeight: '400',
                                  // textDecoration: 'underline',
                                  color: '#05f2f2',
                                }}
                              >
                                太空船-字樣:
                              </div>
                              <div
                                style={{ marginBottom: '10px' }}
                                dangerouslySetInnerHTML={{
                                  __html: JSON.parse(
                                    v.order_product_name
                                  )[3].join('<br />'),
                                }}
                              ></div>
                              <div
                                style={{
                                  fontWeight: '400',
                                  // textDecoration: 'underline',
                                  color: '#05f2f2',
                                }}
                              >
                                太空椅-顏色:
                              </div>
                              <div
                                style={{ marginBottom: '10px' }}
                                dangerouslySetInnerHTML={{
                                  __html: JSON.parse(
                                    v.order_product_name
                                  )[4].join('<br />'),
                                }}
                              ></div>
                            </div>
                            {/* 服飾 */}
                          </td>
                          <td style={{ width: '20%', lineHeight: '25px' }}>
                            <i
                              class="fa-solid fa-arrow-down-1-9 listDetail-icon"
                              onClick={handleListDetail}
                              style={{
                                transition: '0.5s',
                                cursor: 'pointer',
                              }}
                            ></i>
                            <div
                              className="detail-list"
                              style={{
                                display: listDetail === true ? 'none' : 'block',
                                transition: 'all 1s ease-in-out',
                              }}
                            >
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
                              <div style={{ marginBottom: '10px' }}>
                                $
                                {JSON.parse(v.order_product_price)[1].reduce(
                                  (a, b) => a + b
                                )}
                              </div>
                              <div
                                style={{
                                  fontWeight: '400',
                                  color: '#05f2f2',
                                }}
                              >
                                太空服-徽章：
                              </div>
                              <div style={{ marginBottom: '10px' }}>
                                $
                                {JSON.parse(v.order_product_price)[2].reduce(
                                  (a, b) => a + b
                                )}
                              </div>
                              <div
                                style={{
                                  fontWeight: '400',
                                  color: '#05f2f2',
                                }}
                              >
                                太空服-字樣：
                              </div>
                              <div style={{ marginBottom: '10px' }}>
                                $
                                {JSON.parse(v.order_product_price)[3].reduce(
                                  (a, b) => a + b
                                )}
                              </div>
                              <div
                                style={{
                                  fontWeight: '400',
                                  color: '#05f2f2',
                                }}
                              >
                                太空椅-顏色：
                              </div>
                              <div>
                                $
                                {JSON.parse(v.order_product_price)[4].reduce(
                                  (a, b) => a + b
                                )}
                              </div>
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
