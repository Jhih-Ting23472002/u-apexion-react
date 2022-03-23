import React, { useEffect, useState } from 'react';
import './MemberAddress.css';
import MemberAddressNew from './MemberAddressNew';
import MemberNavbar from '../../components/MemberNav';

function MemberAddress() {
  const [modalShow, setModalShow] = useState(false);
  const [address, setAddress] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/user/user-address-api')
      .then(r => r.json())
      .then(obj => {
        setAddress(obj);
      });
  }, []);

  return (
    <>
      <div className="member-container">
        <div className="member-shadow-container">
          {/* <div className="member-sidebar"></div> */}
          <MemberNavbar />

          <div className="member-right-wrap">
            <div className="member-title-wrap">
              <div className="member-title">
                <h1>收件地址</h1>
              </div>
            </div>
            <div className="member-information-container">
              <table className="table table-borderless table-dark alert-dismissible  member-information-form">
                <thead className="member-information-thead">
                  <tr>
                    <th scope="col">地點名稱</th>
                    <th scope="col">姓名</th>
                    <th scope="col">地址</th>
                    <th scope="col">電話號碼</th>
                    <th></th>
                  </tr>
                </thead>
                {/* {address.map(address => ( */}
                <tbody>
                  <tr>
                    <th scope="row">{address && address.place_name}</th>
                    <td>{address.recipient_name}</td>
                    <td>106台北市大安區復興南路一段390號2樓</td>
                    <td>02-6631-6588</td>
                    <td>
                      <button
                        className="editordelete-btn"
                        onClick={() => setModalShow(true)}
                      >
                        修改或刪除
                      </button>
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
                {/* ))} */}
              </table>
              <div className="member-btn-container create-btn-container">
                <button
                  className="member-circle-btn"
                  onClick={() => setModalShow(true)}
                >
                  輸入地址
                </button>
              </div>
            </div>
            {/* <div className="member-btn-container">
              <button
                className="member-circle-btn"
                onClick={() => setModalShow(true)}
              >
                輸入地址
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <MemberAddressNew show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
export default MemberAddress;
