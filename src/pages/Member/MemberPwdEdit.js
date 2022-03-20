import React from 'react';
import './MemberPwdEdit.css';
import MemberNavbar from '../../components/MemberNav';

function MemberPwdEdit() {
  return (
    <>
      <div className="member-container">
        <div className="member-shadow-container">
          {/* <div className="member-sidebar"></div> */}
          <MemberNavbar />

          <div className="member-right-wrap">
            <div className="member-title-wrap">
              <div className="member-title">
                <h1>更改密碼</h1>
              </div>
            </div>
            <div className="change-pwd-form-container">
              <form className="change-pwd-form">
                <div className="member-input-container ">
                  <label for="" className="member-label">
                    現在的密碼
                  </label>
                  <input type="text" placeholder="" className="member-input" />
                </div>
                <div className="member-input-container ">
                  <label for="" className="member-label">
                    新的密碼
                  </label>
                  <input type="text" placeholder="" className="member-input" />
                </div>
                <div className="member-input-container ">
                  <label for="" className="member-label">
                    確認密碼
                  </label>
                  <input type="text" placeholder="" className="member-input" />
                </div>
              </form>
              <div className="member-btn-container">
                <div className="member-return-btn-wrap">
                  <button className="member-circle-btn member-cancel-btn">
                    返回
                  </button>
                </div>
                <div>
                  <button className="member-circle-btn">確認送出</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberPwdEdit;
