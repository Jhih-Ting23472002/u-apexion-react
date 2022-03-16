import React from 'react';
import './MemberSignUp.css';

const MemberSignUp = () => {
  return (
    <>
      <div className="signup-container">
        <div className="signup-group">
          <div className="signup-header">
            <p>Welcome to U-APEXION!</p>

            <p>
              已經有帳號?<a href="#/">登入</a>
            </p>
          </div>
          <div className="signup-form-container">
            <div className="signup-form-title">
              <h1>創建帳戶</h1>
              <p>SIGNUP</p>
            </div>
            <form className="signup-form">
              <div className="member-input-container ">
                <label for="" className="member-label">
                  姓名
                </label>
                <input type="text" placeholder="" className="member-input" />
              </div>
              <div className="member-input-container completed">
                <label for="" className="member-label">
                  電子郵件
                </label>
                <input
                  type="email"
                  placeholder="youremail@email.com"
                  className="member-input"
                />
              </div>
              <div className="member-input-container">
                <label for="" className="member-label">
                  密碼
                </label>
                <input
                  type="password"
                  id="txtNewPassword"
                  placeholder=""
                  className="member-input"
                />
              </div>
              <div className="member-input-container">
                <label for="" className="member-label">
                  確認密碼
                </label>
                <input
                  type="password"
                  id="txtConfirmPassword"
                  placeholder=""
                  className="member-input"
                />
              </div>
              <div className="member-input-container ">
                <label for="" className="member-label">
                  手機
                </label>
                <div className="mobile-input-wrap">
                  {/* <select className="international-code-select">
                    <option> +886 </option>
                  </select> */}
                  <input
                    type="text"
                    placeholder=""
                    className="member-mobile-input"
                  />
                </div>
              </div>
              <div className="member-input-container">
                <label for="" className="member-label">
                  性別
                </label>

                <div class="member-gender">
                  <input type="radio" id="gender-female" name="gender" />
                  <label for="gender-female" className="member-label">
                    女性
                  </label>
                  <input type="radio" id="gender-male" name="gender" />
                  <label for="gender-male" className="member-label">
                    男性
                  </label>
                  <input type="radio" id="gender-other" name="gender" />
                  <label for="gender-other" className="member-label">
                    其他
                  </label>
                </div>
              </div>
              <div className="member-input-container">
                <label for="" className="member-label">
                  生日
                </label>
                <input type="date" placeholder="" className="member-input" />
              </div>

              <div className="member-input-container">
                <label for="" className="member-label">
                  國籍
                </label>
                <select className="member-country-select">
                  <option id="dropdown">請選擇</option>
                  <option>台灣</option>
                  <option>日本</option>
                  <option>美國</option>
                </select>
              </div>
            </form>

            <div className="member-btn-container">
              <div>
                <input
                  type="submit"
                  className="member-btn-confirm"
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
export default MemberSignUp;
