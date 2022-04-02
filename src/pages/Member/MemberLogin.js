import React from 'react';
import { useState } from 'react';
import './MemberLogin.css';
// import { login } from './WebApi';
import { Link, useHistory } from 'react-router-dom';

const MemberLogin = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();

    fetch('http://localhost:3001/user/api/auth-list', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        account,
        password,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.code == '401') {
          alert(data.error);
        } else {
          console.log(data);
          localStorage.setItem('user_id', data.info.sid);
          localStorage.setItem('user_email', data.info.account);
          localStorage.setItem('user_passport', data.info.passport_name);
          //localStorage.setItem('user_name', data.info.name);
          localStorage.setItem('user_img', data.info.imgs);
          localStorage.setItem('user_avatar', data.info.avatar);
          localStorage.getItem('user_id');
          localStorage.getItem('user_email');
          history.push('/member-person'); //登入成功後導入會員頁
        }
      });
  };

  return (
    <>
      <div className="login-container">
        <div className="login-group">
          <div className="login-header">
            <h1>Hello,friend!</h1>

            <form className="login-form" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  value={account}
                  className="text-input  "
                  placeholder="Email"
                  name="account"
                  onChange={e => {
                    setAccount(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  type="password"
                  value={password}
                  className="text-input"
                  placeholder="Password"
                  name="password"
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="login-forgot-pwd">
                <Link
                  to="/member-forgot-pwd"
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  {/* <a href="#/"> */}
                  <small>忘記密碼</small>
                  {/* </a> */}
                </Link>
              </div>

              {/* <div className="login-btn-container">
                <button className="login-primary-btn">登入</button>
              </div> */}
              <div className="login-btn-container">
                <button className="login-primary-btn">登入</button>
              </div>
              <div className="login-or">
                <hr className="bar" />
                <span>Or</span>
                <hr className="bar" />
              </div>
              <div className="login-btn-container">
                <button className="login-google-btn">Google</button>
              </div>
              <div className="login-notyet">
                <a href="#/">
                  <small>還沒有帳號?</small>
                </a>
              </div>
              <div className="login-btn-container">
                <Link
                  to="/member-sign-up"
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <button className="login-signup-btn">註冊</button>
                </Link>
              </div>
            </form>
            {/* <div className="login-btn-container">
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default MemberLogin;
