import React from 'react';
import './MemberForgotPwd.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { accountAndMobileCheck } from '../../data/UserWebApi';
import MemberForgotPwdCode from './MemberForgotPwdCode';
import MemberForgotPwdNew from './MemberForgotPwdNew';

const MemberForgotPwd = () => {
  const [account, setAccount] = useState('');
  const [mobile, setMobile] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');
  const [forgotPwdCode, setForgetPwdCode] = useState(false);
  const [forgotPwdNew, setForgetPwdNew] = useState(false);

  const handleForgetPwdSubmit = e => {
    e.preventDefault();
    accountAndMobileCheck(account, mobile)
      // .then(res => res.json())
      //.then(obj => console.log(obj));
      .then(obj => {
        console.log('obj:', obj);
        if (obj.code == '200') {
          alert(obj.error);
          //呼叫 發送驗證信
        } else {
          alert(obj.error);
        }
      });
  };

  return (
    <>
      <div className="forgotpwd-container">
        <div className="forgotpwd-group">
          <div className="forgotpwd-form-container">
            <div className="forgotpwd-form-title">
              <h1>忘記密碼設定</h1>
              <p>請輸入註冊新會員時的電子郵件及電話號碼後送出</p>
            </div>
            <form className="forgotpwd-form" onSubmit={handleForgetPwdSubmit}>
              <div className="member-input-container ">
                <label htmlFor="" className="member-label">
                  電子郵件
                </label>
                <input
                  type="text"
                  placeholder="youremail@email.com"
                  className="member-input"
                  value={account}
                  onChange={e => {
                    setAccount(e.target.value);
                  }}
                />
              </div>
              <div className="member-input-container ">
                <label htmlFor="" className="member-label">
                  手機號碼
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="member-input"
                  value={mobile}
                  onChange={e => {
                    setMobile(e.target.value);
                  }}
                />
              </div>
              {/* <div className="member-input-container ">
                <label htmlFor="" className="member-label">
                  驗證碼
                </label>
                <input type="text" placeholder="" className="member-input" />
              </div> */}
              <div className="member-btn-container">
                <div className="member-return-btn-wrap">
                  <Link
                    to="/member-login"
                    style={{
                      textDecoration: 'none',
                    }}
                  >
                    <button className="member-circle-btn member-cancel-btn">
                      返回
                    </button>
                  </Link>
                </div>
                <div>
                  <button className="member-circle-btn">確認送出</button>
                </div>
              </div>
            </form>
            {/* <div className="member-btn-container">
              <div className="member-return-btn-wrap">
                <button className="member-circle-btn member-cancel-btn">
                  返回
                </button>
              </div>
              <div>
                <button className="member-circle-btn">確認送出</button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <MemberForgotPwdCode
        forgotPwdCode={forgotPwdCode}
        setForgetPwdCode={setForgetPwdCode}
      />
      <MemberForgotPwdNew
        forgotPwdNew={forgotPwdNew}
        setForgetPwdNew={setForgetPwdNew}
      />
    </>
  );
};
export default MemberForgotPwd;
