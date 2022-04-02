import React from 'react';
import './MemberPerson.css';
import MemberNavbar from '../../components/MemberNav';
import { useEffect, useState, useContext } from 'react';
import { reviseMem, findMem } from '../../data/UserWebApi';
import UserNameF from '../../components/UserNameF';
import SignOut from '../../components/SignOut';

const MemberPerson = () => {
  const [memInfo, setMemInfo] = useState({
    name: '',
    mobile: '',
    gender: '',
    birthday: '',
    country: '',
  });

  //先從localStorage拿id (你們的user_id)
  const sid = localStorage.getItem('user_id');
  // const mem_id = getMemId('mem_id');

  //這個步驟先把資料丟到欄位裡
  useEffect(() => {
    findMem(sid).then(obj => {
      setMemInfo(obj[0]);
    });
  }, []);

  const handleRevise = e => {
    e.preventDefault();
    reviseMem(memInfo, sid).then(obj => {
      console.log(obj);
      if (obj.success) {
        alert('修改成功');
      }
      // history.push('/member-login'); //登入成功後導入會員頁
    });
  };

  // const handleChange = e => {
  //   const newData = { ...memInfo, [e.target.name]: e.target.value };
  //   setMemInfo(newData);
  // };

  //找會員id用
  const { setUserNavbar } = useContext(UserNameF);
  const [userAll, setUserAll] = useState([]);
  const { signOut, setSignOut } = useContext(SignOut);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3001/user/api/getuser');
      const data = await res.json();
      // console.log(data);
      setUserAll(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem('user_id');
    const newUserName = userAll?.find(v => v.sid === parseInt(userId));
    localStorage.setItem('user_name', newUserName?.name);
    setUserNavbar(newUserName?.name);
    setSignOut('登出');
  }, [userAll]);

  const imgurl = 'http://localhost:3001/img/';

  return (
    <>
      <div className="member-container">
        <div className="member-shadow-container">
          <MemberNavbar />
          <div className="member-right-wrap">
            <div className="member-title-wrap">
              <div className="member-title">
                <h1>個人檔案</h1>
              </div>
            </div>
            <div className="person-form-container">
              <form className="person-form" onSubmit={handleRevise}>
                <div className="member-input-container ">
                  <label htmlFor="name" className="member-label">
                    姓名
                  </label>
                  <input
                    disabled="disabled"
                    type="text"
                    placeholder=""
                    className="member-input"
                    value={memInfo?.name ?? 'name'}
                    name="name"
                    // onChange={handleChange}
                  />
                </div>
                <div className="member-input-container ">
                  <label htmlFor="mobile" className="member-label">
                    手機
                  </label>

                  <input
                    disabled="disabled"
                    type="text"
                    placeholder=""
                    className="member-input"
                    value={memInfo?.mobile ?? ''}
                    name="mobile"
                    // onChange={handleChange}
                  />
                </div>
                <div className="member-input-container">
                  <label htmlFor="gender" className="member-label">
                    性別
                  </label>
                  <input
                    disabled="disabled"
                    className="member-select"
                    value={memInfo?.gender ?? ''}
                    name="gender"
                    // onChange={handleChange}
                  >
                    {/* <option id="dropdown">請選擇</option>
                    <option>女性</option>
                    <option>男性</option>
                    <option>其他</option> */}
                  </input>
                </div>

                {/* <div className="member-input-container">
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
                </div> */}

                <div className="member-input-container">
                  <label htmlFor="birthday" className="member-label">
                    生日
                  </label>
                  <input
                    disabled="disabled"
                    type="date"
                    placeholder=""
                    className="member-input"
                    value={memInfo?.birthday ?? ''}
                    name="birthday"
                    // onChange={handleChange}
                  />
                </div>

                <div className="member-input-container">
                  <label htmlFor="country" className="member-label">
                    國籍
                  </label>
                  <input
                    disabled="disabled"
                    className="member-select"
                    value={memInfo?.country ?? ''}
                    name="country"
                    // onChange={handleChange}
                  >
                    {/* <option id="dropdown">請選擇</option>
                    <option>台灣</option>
                    <option>日本</option>
                    <option>韓國</option>
                    <option>美國</option> */}
                  </input>
                </div>
                {/* <div className="member-btn-container person-btn-container">
                  <div className="member-return-btn-wrap">
                    <button type="button" className="member-circle-btn">
                      取消更改
                    </button>
                  </div>
                  <div>
                    <button type="submit" className="member-circle-btn">
                      確認送出
                    </button>
                  </div>
                </div> */}
              </form>
              <div className="member-line-wrap">
                <div className="person-line"></div>
              </div>
              <div className="person-avatar-container">
                <img
                  className="person-avatar-img"
                  //如果沒有上傳照片??，就給預設的照片
                  src={`http://localhost:3001/img/${
                    memInfo.avatar ?? 'bdeb89f5-bcd8-4261-b721-3ec0ce4889db.jpg'
                  }`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MemberPerson;
