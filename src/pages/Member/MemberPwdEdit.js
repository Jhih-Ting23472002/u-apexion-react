import React from 'react';
import './MemberPwdEdit.css';
import MemberNavbar from '../../components/MemberNav';
import { editPassword } from '../../data/UserWebApi';
import { useState, useEffect } from 'react';
import MemberPwdEditModal from './MemberPwdEditModal';

function MemberPwdEdit() {
  const [pwdEdit, setPwdEdit] = useState({
    pwdold: '',
    pwdnew: '',
    pwdconfirm: '',
  });
  const [modalShow, setModalShow] = useState(false);

  const user_id = localStorage.getItem('user_id');

  const changeHandler = e => {
    // console.log(e.target.value);
    const newData = { ...pwdEdit, [e.target.name]: e.target.value };
    setPwdEdit(newData);
  };

  const submitHandler = e => {
    e.preventDefault();

    // 判斷新密碼與確認密碼是否一致
    if (pwdEdit.pwdnew === pwdEdit.pwdconfirm) {
      // 如果一致，就把舊密碼與新密碼送到後端
      let pswData = {};
      pswData.old = pwdEdit.pwdold;
      pswData.new = pwdEdit.pwdnew;
      pswData.user_id = user_id;
      // console.log('pswData', pswData);
      editPassword(pswData).then(obj => {
        // console.log('obj.success:', obj.success);
        if (obj.success) {
          setModalShow(true);
        }
      });
    } else {
      alert('新密碼不一致');
    }
  };
  return (
    <>
      <div className="member-container">
        <div className="member-shadow-container">
          {/* <div className="member-sidebar"></div> */}
          <MemberNavbar />

          <div className="member-right-wrap">
            <div className="member-title-wrap">
              <div className="member-title">
                <h1>更改密碼</h1>
              </div>
            </div>
            <div className="change-pwd-form-container">
              <form className="change-pwd-form" onSubmit={submitHandler}>
                <div className="member-input-container ">
                  <label htmlFor="" className="member-label">
                    現在的密碼
                  </label>
                  <input
                    type="password"
                    className="member-input"
                    name="pwdold"
                    value={pwdEdit.pwdold}
                    onChange={changeHandler}
                  />
                </div>
                <div className="member-input-container ">
                  <label htmlFor="" className="member-label">
                    新的密碼
                  </label>
                  <input
                    type="password"
                    className="member-input"
                    name="pwdnew"
                    value={pwdEdit.pwdnew}
                    onChange={changeHandler}
                  />
                </div>
                <div className="member-input-container ">
                  <label htmlFor="" className="member-label">
                    確認密碼
                  </label>
                  <input
                    type="password"
                    className="member-input"
                    name="pwdconfirm"
                    value={pwdEdit.pwdconfirm}
                    onChange={changeHandler}
                  />
                </div>
                <div className="member-btn-container">
                  <div className="member-return-btn-wrap">
                    <button
                      className="member-circle-btn member-cancel-btn"
                      onClick={() => {
                        setPwdEdit({
                          pwdold: '',
                          pwdnew: '',
                          pwdconfirm: '',
                        });
                      }}
                    >
                      返回
                    </button>
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
      </div>
      <MemberPwdEditModal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          setPwdEdit({
            pwdold: '',
            pwdnew: '',
            pwdconfirm: '',
          });
        }}
      />
    </>
  );
}

export default MemberPwdEdit;
