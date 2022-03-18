import React from 'react';
import './MemberAddress.css';

const MemberAddress = () => {
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
          </div>
        </div>
      </div>
    </>
  );
};
export default MemberAddress;
