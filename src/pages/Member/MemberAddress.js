import React, { useState } from 'react';
import './MemberAddress.css';
import MemberAddressNew from './MemberAddressNew';

function MemberAddress() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="member-container">
        <div className="member-shadow-container">
          <div className="member-sidebar"></div>
          <div className="member-right-wrap">
            <div className="member-title-wrap">
              <div className="member-title">
                <h1>收件地址</h1>
              </div>
            </div>
            <div className="member-field-name-wrap">
              <div className="member-field-name">
                <p>地點名稱</p>
                <p>姓名</p>
                <p>地址</p>
                <p>電話號碼</p>
              </div>
            </div>
            <div className="member-btn-container">
              <button
                className="member-circle-btn"
                onClick={() => setModalShow(true)}
              >
                輸入地址
              </button>
            </div>
          </div>
        </div>
      </div>
      <MemberAddressNew show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
export default MemberAddress;
