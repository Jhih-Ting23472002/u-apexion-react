import React, { useEffect, useState } from 'react';
import './MemberAddress.css';
import MemberAddressNew from './MemberAddressNew';
import MemberEditOrDelete from './MemberEditOrDelete';
import MemberNavbar from '../../components/MemberNav';
import { findMem } from '../../data/UserWebApi';
import { getAddress } from '../../data/UserWebApi';

function MemberAddress() {
  const user_id = localStorage.getItem('user_id');
  const [modalShow, setModalShow] = useState(false);
  const [editmodalShow, setEditModalShow] = useState(false);
  // const [address, setAddress] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3001/user/api/user-address')
  //     .then(res => res.json())
  //     .then(obj => {
  //       setAddress(obj);
  //     });
  // }, []);

  const [address, setAddress] = useState([]);

  const getUserAddress = async () => {
    const res = getAddress(user_id).then(obj => {
      console.log('obj:', obj);
      setAddress(obj.list);
    });
  };

  //  [
  //    { address: "台北市"
  //      phone_number: "0988888999"
  //      place_name: "公司"
  //      postal_code: "106"
  //      recipient_name: "sam"
  //      sid: 3
  //    }
  // ]

  // 只限第一次進入網頁
  // useEffect(()=>{
  //   getUserAddress();
  // },[])

  // 第一次進入網頁會做，modal的狀態只要有更新，也會再做
  useEffect(() => {
    getUserAddress();
  }, [modalShow, editmodalShow]);
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
                    <th scope="col">郵遞區號</th>
                    <th scope="col">地址</th>
                    <th scope="col">電話號碼</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {address &&
                    address.map((element, i) => {
                      return (
                        <tr key={element[i]}>
                          <td>{element.place_name}</td>
                          <td>{element.recipient_name}</td>
                          <td>{element.postal_code}</td>
                          <td>{element.address}</td>
                          <td>{element.phone_number}</td>
                          <td className="editordelete-btn-td">
                            <button
                              className="editordelete-btn"
                              onClick={() => {
                                setEditModalShow(true);
                                localStorage.setItem(
                                  'data',
                                  JSON.stringify(element)
                                );
                              }}
                            >
                              修改或刪除
                            </button>
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
      <MemberAddressNew show={modalShow} setModalShow={setModalShow} />
      <MemberEditOrDelete
        show={editmodalShow}
        setModalShow={setEditModalShow}
      />
    </>
  );
}
export default MemberAddress;
