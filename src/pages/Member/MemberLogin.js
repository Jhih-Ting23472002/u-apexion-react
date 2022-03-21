import React from 'react';
import './MemberLogin.css';

const MemberLogin = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-group">
          <div className="login-header">
            <h1>Hello,friend!</h1>

            <form className="login-form">
              <div>
                <input
                  type="text"
                  className="text-input  "
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="password"
                  className="text-input"
                  placeholder="Password"
                />
              </div>
              <div className="login-forgot-pwd">
                <a href="#/">
                  <small>忘記密碼</small>
                </a>
              </div>
            </form>

            <div className="login-btn-container">
              <button className="login-primary-btn">登入</button>
            </div>
            <div className="login-or">
              <hr className="bar" />
              <span>Or</span>
              <hr className="bar" />
            </div>
            <div className="login-btn-container">
              <button className="login-google-btn">
                <i class="fa-brands fa-google"></i>Google
              </button>
            </div>
            <div className="login-notyet">
              <a href="#/">
                <small>還沒有帳號?</small>
              </a>
            </div>
            <div className="login-btn-container">
              <button className="login-signup-btn">註冊</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MemberLogin;
