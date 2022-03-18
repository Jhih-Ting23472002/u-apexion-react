import React from 'react';
import './MemberForgotPwd.css';

const MemberForgotPwd = () => {
  return (
    <>
      <div className="forgotpwd-container">
        <div className="forgotpwd-group">
          <div className="forgotpwd-form-container">
            <div className="forgotpwd-form-title">
              <h1>再次設定密碼</h1>
              <p>請輸入註冊新會員時的電子郵件及電話號碼後送出</p>
            </div>
            <form className="forgotpwd-form">
              <div className="member-input-container ">
                <label for="" className="member-label">
                  電子郵件
                </label>
                <input
                  type="email"
                  placeholder="youremail@email.com"
                  className="member-input"
                />
              </div>
              <div className="member-input-container ">
                <label for="" className="member-label">
                  手機號碼
                </label>
                <input type="text" placeholder="" className="member-input" />
              </div>
            </form>
            <div className="member-btn-container">
              <div className="member-btn-return-wrap">
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
    </>
  );
};
export default MemberForgotPwd;
