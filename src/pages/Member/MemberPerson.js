import React from 'react';
import './MemberPerson.css';

const MemberPerson = () => {
  return (
    <>
      <div className="person-container">
        <div className="person-shadow-container">
          <div className="person-sidebar"></div>
          <div className="person-wrap">
            <div className="person-title-wrap">
              <div className="person-title">
                <h1>個人檔案</h1>
              </div>
            </div>
            <div className="person-form-container">
              <form className="person-form">
                <div className="member-input-container ">
                  <label for="" className="member-label">
                    姓名
                  </label>
                  <input type="text" placeholder="" className="member-input" />
                </div>
                <div className="member-input-container ">
                  <label for="" className="member-label">
                    手機
                  </label>

                  <input type="text" placeholder="" className="member-input" />
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
                <div className="member-btn-container">
                  <div>
                    <input
                      type="submit"
                      className="member-btn-confirm"
                      value="確認送出"
                    />
                  </div>
                </div>
              </form>
              <div className="member-line-wrap">
                <div className="person-line"></div>
              </div>
              <div className="person-avatar-container">
                <div className="person-avatar-img"></div>
                <div className="person-avatar-upload">
                  <div>
                    <input
                      type="submit"
                      className="member-btn-confirm"
                      value="選擇圖片"
                    />
                  </div>
                </div>
                <div className="person-avatar-txt">
                  <p>檔案大小:最大1MB</p>
                  <p>檔案限制: .JEPG, .PNG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MemberPerson;
