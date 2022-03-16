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
              <div className="input-container ">
                <label for="" className="forgotpwd-label">
                  電子郵件
                </label>
                <input
                  type="email"
                  placeholder="youremail@email.com"
                  className="forgotpwd-input"
                />
              </div>
              <div className="input-container ">
                <label for="" className="forgotpwd-label">
                  手機號碼
                </label>
                <input type="text" placeholder="" className="forgotpwd-input" />
              </div>
            </form>
            <div className="forgotpwd-btn-container">
              <div className="forgotpwd-wrap-return">
                <input
                  type="submit"
                  className="forgotpwd-btn-return"
                  value="返回"
                />
              </div>
              <div>
                <input
                  type="submit"
                  className="forgotpwd-btn"
                  value="確認送出"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MemberForgotPwd;
