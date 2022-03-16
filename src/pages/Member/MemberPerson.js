import React from 'react';
import './MemberPerson.css';

const MemberPerson = () => {
  return (
    <>
      <div className="person-bg-container">
        <div className="person-container">
          <div className="person-sidebar">

          </div>
          <div className="person-title">

          </div>
          <form className="person-form">
          <div className="input-container ">
                <label for="" className="signup-label">
                  姓名
                </label>
                <input type="text" placeholder="" className="signup-input" />
              </div>
              
              <div className="input-container">
                <label for="" className="signup-label">
                  性別
                </label>

                <div class="signup-gender">
                  <input
                    type="radio"
                    id="gender-female"
                    name="gender"
                    // className="signup-input"
                  />
                  <label for="gender-female" className="signup-label">
                    女性
                  </label>
                  <input type="radio" id="gender-male" name="gender" />
                  <label for="gender-male" className="signup-label">
                    男性
                  </label>
                  <input type="radio" id="gender-other" name="gender" />
                  <label for="gender-other" className="signup-label">
                    其他
                  </label>
                </div>
              </div>
              <div className="input-container">
                <label for="" className="signup-label">
                  生日
                </label>
                <input
                  type="date"
                  placeholder=""
                  className="signup-date-input"
                />
              </div>
              <div className="input-container">
                <label for="" className="signup-label">
                  手機
                </label>
                <div className="signup-wrap">
                  <select className="international-code-select">
                    <option> +886 </option>
                  </select>
                  <input
                    type="text"
                    placeholder=""
                    className="signup-mobile-input"
                  />
                </div>
              </div>
              <div className="input-container">
                <label for="" className="signup-label">
                  國籍
                </label>
                <select className="signup-country-select">
                  <option id="dropdown">請選擇</option>
                  <option>台灣</option>
                  <option>日本</option>
                  <option>美國</option>
                </select>
              </div>
          </form>
          <div className="signup-btn-container">
              <input type="submit" className="signup-btn" value="確認送出" />
            </div>

          </div>
        </div>
      
    </>
  );
};
export default MemberPerson;
