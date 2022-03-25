import React, { useEffect, useState } from 'react';
import './MemberAddress.css';
import MemberAddressNew from './MemberAddressNew';
import MemberNavbar from '../../components/MemberNav';
import { findMem } from '../../data/UserWebApi';

function MemberAddress() {
  const [modalShow, setModalShow] = useState(false);
  // const [address, setAddress] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3001/user/api/user-address')
  //     .then(res => res.json())
  //     .then(obj => {
  //       setAddress(obj);
  //     });
  // }, []);

  const [address, setAddress] = useState([]);

  useEffect(() => {
    (async () => {
      const obj = await (
        await fetch('http://localhost:3001/user/api/user-address')
      ).json();
      console.log(obj);
      setAddress(obj);
    })();
  }, []);
  console.log(address);

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
                    <th scope="col">郵遞地址</th>
                    <th scope="col">地址</th>
                    <th scope="col">電話號碼</th>
                    <th></th>
                  </tr>
                </thead>
                {/* {address.map(address => ( */}
                <tbody>
                  <tr>
                    <td>{address && address.place_name}</td>
                    <td>{address.recipient_name}</td>
                    <td>{address.postal_code}</td>
                    <td>{address.address}</td>
                    <td>{address.phone_number}</td>
                    <td className="editordelete-btn-td">
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
