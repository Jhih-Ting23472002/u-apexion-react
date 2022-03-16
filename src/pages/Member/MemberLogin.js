import React from 'react';
import './MemberLogin.css';

const MemberLogin = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-shadow-container"></div>

        <div className="login-group">
          <div className="login-header">
            <h1>Hello,friend!</h1>

            <form className="login-form">
              <div>
                <input type="text" className="text-input" placeholder="Email" />
              </div>
              <div>
                <input
                  type="password"
                  className="text-input input-pwd"
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
              <input type="submit" className="login-primary-btn" value="登入" />
            </div>
            <div className="login-or">
              <hr className="bar" />
              <span>Or</span>
              <hr className="bar" />
            </div>
            <div className="login-btn-container">
              <input
                type="submit"
                className="login-google-btn"
                value="Google"
              />
            </div>
            <div className="login-notyet">
              <a href="#/">
                <small>還沒有帳號?</small>
              </a>
            </div>
            <div className="login-btn-container">
              <input type="submit" className="login-signup-btn" value="註冊" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MemberLogin;
