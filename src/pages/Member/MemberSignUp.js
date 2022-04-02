import React from 'react';
import './MemberSignUp.css';
// import styled from 'styled-components';
import { useState } from 'react';
import { registerMem } from '../../data/UserWebApi';
import { Link, useHistory } from 'react-router-dom';
import MemberSignUpModal from './MemberSignUpModal';

const MemberSignUp = () => {
  const [registerData, setRegisterData] = useState({
    name: '',
    account: '',
    password: '',
    mobile: '',
    gender: '',
    birthday: '',
    country: '',
  });
  const [modalShow, setModalShow] = useState(false);
  // const [vCode, setVcode] = useState('');
  // const [errorMessageMail, setErrorMessageMail] = useState('');

  const history = useHistory();
  // const verify_code = localStorage.getItem('verify_code');
  //function
  const handleRegister = e => {
    e.preventDefault();
    registerMem(registerData).then(obj => {
      console.log(obj);
      if (obj.success) {
        setModalShow(true);
      }
      // history.push('/member-login'); //登入成功後導入會員頁
    });
  };
  const handleChange = e => {
    const newData = { ...registerData, [e.target.name]: e.target.value };
    setRegisterData(newData);
  };

  return (
    <>
      <div className="signup-container">
        <div className="signup-group">
          <div className="signup-header">
            <p>Welcome to U-APEXION!</p>
            <Link
              to="/member-login"
              style={{
                textDecoration: 'none',
              }}
            >
              <p>
                已經有帳號?<a href="#/">登入</a>
              </p>
            </Link>
          </div>
          <div className="signup-form-container">
            <div className="signup-form-title">
              <h1>創建帳戶</h1>
              <p>SIGNUP</p>
            </div>
            <form className="signup-form" onSubmit={handleRegister}>
              <div className="member-input-container ">
                <label htmlFor="name" className="member-label">
                  姓名
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="member-input"
                  name="name"
                  value={registerData.name}
                  onChange={handleChange}
                  requried
                />
              </div>

              <div className="member-input-container ">
                <label htmlFor="name" className="member-label">
                  護照英文姓名
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="member-input"
                  name="passport"
                  value={registerData.passport}
                  onChange={handleChange}
                  requried
                />
              </div>

              <div className="member-input-container completed">
                <label htmlFor="account" className="member-label">
                  電子郵件
                </label>
                <input
                  type="email"
                  placeholder="youremail@email.com"
                  className="member-input"
                  name="account"
                  value={registerData.account}
                  onChange={handleChange}
                  requried
                />
              </div>

              <div className="member-input-container">
                <label htmlFor="password" className="member-label">
                  密碼
                </label>
                <input
                  type="password"
                  id="txtNewPassword"
                  placeholder=""
                  className="member-input"
                  name="password"
                  value={registerData.password}
                  onChange={handleChange}
                />
              </div>

              {/* <div className="member-input-container">
                <label for="" className="member-label">
                  確認密碼
                </label>
                <input
                  type="password"
                  id="txtConfirmPassword"
                  placeholder=""
                  className="member-input"
                  name="confirmpassword"
                />
              </div> */}
              <div className="member-input-container ">
                <label htmlFor="mobile" className="member-label">
                  手機
                </label>

                <input
                  type="text"
                  placeholder=""
                  className="member-input"
                  name="mobile"
                  value={registerData.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="member-input-container">
                <label htmlFor="gender" className="member-label">
                  性別
                </label>
                <select
                  className="member-select"
                  name="gender"
                  value={registerData.gender}
                  onChange={handleChange}
                >
                  <option id="dropdown">請選擇</option>
                  <option>女性</option>
                  <option>男性</option>
                  <option>其他</option>
                </select>
              </div>

              {/* <div className="member-input-container">
                <label className="member-label">性別</label>

                <div className="member-gender-container">
                  <div className="member-gender">
                    <input
                      type="radio"
                      id="gender-female"
                      name="female"
                      value={registerData.female}
                      onChange={handleChange}
                    />
                    <label className="member-gender-label">女性</label>
                  </div>
                  <div className="member-gender">
                    <input
                      type="radio"
                      id="gender-male"
                      name="male"
                      value={registerData.male}
                      onChange={handleChange}
                    />
                    <label className="member-gender-label">男性</label>
                  </div>
                  <div className="member-gender">
                    <input
                      type="radio"
                      id="gender-other"
                      name="other"
                      value={registerData.other}
                      onChange={handleChange}
                    />
                    <label className="member-gender-label">其他</label>
                  </div>
                </div>
              </div> */}
              <div className="member-input-container">
                <label htmlFor="birthday" className="member-label">
                  生日
                </label>
                <input
                  type="date"
                  placeholder=""
                  className="member-input"
                  name="birthday"
                  value={registerData.birthday}
                  onChange={handleChange}
                />
              </div>

              <div className="member-input-container">
                <label htmlFor="country" className="member-label">
                  國籍
                </label>
                <select
                  className="member-select"
                  name="country"
                  value={registerData.country}
                  onChange={handleChange}
                >
                  <option id="dropdown">請選擇</option>
                  <option>台灣</option>
                  <option>日本</option>
                  <option>韓國</option>
                  <option>美國</option>
                </select>
              </div>
              <div className="member-btn-container">
                <button className="member-circle-btn">確認送出</button>
              </div>
            </form>

            {/* <div className="member-btn-container">
              <button className="member-circle-btn">確認送出</button>
            </div> */}
          </div>
        </div>
      </div>
      <MemberSignUpModal
        show={modalShow}
        onHide={() => {
          //setModalShow(false);
          history.push('/member-login'); //登入成功後導入會員頁
        }}
      />
    </>
  );
};
export default MemberSignUp;
