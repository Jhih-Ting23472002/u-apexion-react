import React from 'react';
import './MemberPerson.css';

const MemberPerson = () => {
  return (
    <>
      <div className="member-container">
        <div className="member-shadow-container">
          <div className="member-sidebar"></div>
          <div className="member-right-wrap">
            <div className="member-title-wrap">
              <div className="member-title">
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

                  <div class="member-gender-container">
                    <div class="member-gender">
                      <input type="radio" id="gender-female" name="gender" />
                      <label
                        for="gender-female"
                        className="member-gender-label"
                      >
                        女性
                      </label>
                    </div>
                    <div class="member-gender">
                      <input type="radio" id="gender-male" name="gender" />
                      <label for="gender-male" className="member-gender-label">
                        男性
                      </label>
                    </div>
                    <div className="member-gender">
                      <input type="radio" id="gender-other" name="gender" />
                      <label for="gender-other" className="member-gender-label">
                        其他
                      </label>
                    </div>
                  </div>
                </div>

                <div className="member-input-container">
                  <label for="" className="member-label">
                    生日
                  </label>
                  <input type="date" placeholder="" className="member-input" />
                </div>

                <div className="member-input-container country-wrap">
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
                <div className="member-btn-container person-btn-container">
                  <div className="member-return-btn-wrap">
                    <button className="member-circle-btn">取消更改</button>
                  </div>
                  <div>
                    <button className="member-circle-btn">確認送出</button>
                  </div>
                </div>
              </form>
              <div className="member-line-wrap">
                <div className="person-line"></div>
              </div>
              <div className="person-avatar-container">
                <div className="person-avatar-img"></div>
                <div className="person-avatar-upload">
                  <div className="member-btn-container">
                    <button className="member-circle-btn">選擇圖片</button>
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
