import React from 'react';
import './MemberPerson.css';
import MemberNavbar from '../../components/MemberNav';
import { useEffect, useState, useContext } from 'react';
import { reviseMem, findMem } from '../../data/UserWebApi';
import UserNameF from '../../components/UserNameF';

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

  // useEffect(() => {
  //   (async function () {
  //     const response = await fetch('http://localhost:3001/user/api/getuser');
  //     const getUser = await response.json();
  //     setUserAll(getUser);
  //     const userId = localStorage.getItem('user_id');
  //     console.log(getUser);
  //     console.log(userAll);
  //     const newUserName = userAll?.find(v => v.sid === parseInt(userId));
  //     // setUserNavbar(newUserName.name);
  //   })();
  // }, []);

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
    console.log(newUserName?.name);
    setUserNavbar(newUserName?.name);
  }, [userAll]);

  return (
    <>
      <div className="member-container">
        <div className="member-shadow-container">
          <MemberNavbar />
          <div className="member-right-wrap">
            <div className="member-title-wrap">
              <div className="member-title">
                <h1>修改檔案</h1>
              </div>
            </div>
            <div className="person-form-container">
              <form className="person-form" onSubmit={handleRevise}>
                <div className="member-input-container ">
                  <label htmlFor="name" className="member-label">
                    姓名
                  </label>
                  {memInfo?.name ?? 'name'}
                </div>
                <div className="member-input-container ">
                  <label htmlFor="mobile" className="member-label">
                    手機
                  </label>
                  {memInfo?.mobile ?? ''}
                </div>
                <div className="member-input-container">
                  <label htmlFor="gender" className="member-label">
                    性別
                  </label>
                  {memInfo?.gender ?? ''}
                </div>
                <div className="member-input-container">
                  <label htmlFor="birthday" className="member-label">
                    生日
                  </label>
                  {memInfo?.birthday ?? ''}
                </div>

                <div className="member-input-container">
                  <label htmlFor="country" className="member-label">
                    國籍
                  </label>
                  {memInfo?.country ?? ''}
                </div>
                {/* <div className="member-btn-container person-btn-container">
                  <div className="member-return-btn-wrap">
                    <button className="member-circle-btn">取消更改</button>
                  </div>
                  <div>
                    <button className="member-circle-btn">確認送出</button>
                  </div>
                </div> */}
              </form>
              {/* <div className="member-line-wrap">
                <div className="person-line"></div>
              </div>
              <div className="person-avatar-container">
                <div className="person-avatar-img"></div>
                <div className="person-avatar-upload">
                  <div className="member-btn-container">
                    <input type="file" id="file-uploader" className=""></input>
                  </div>
                </div>
                <div className="person-avatar-txt">
                  <p>檔案大小:最大1MB</p>
                  <p>檔案限制: .JEPG, .PNG</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MemberPerson;
