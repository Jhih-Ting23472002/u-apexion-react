import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './MemberForgotPwd.css';

import { pwdNewConfirm } from '../../data/UserWebApi';
import MemberForgotPwdNewModal from './MemberForgotPwdNewModal';

const MemberForgotPwd = () => {
  const history = useHistory();

  const [pwdNew, setPwdNew] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  const [modalShow, setModalShow] = useState(false);

  const handleChange = e => {
    const newData = { ...pwdNew, [e.target.name]: e.target.value };
    setPwdNew(newData);
  };

  const forgotsid = localStorage.getItem('forgotsid');

  const pwdNewConfirmHandle = () => {
    if (pwdNew.newPassword !== pwdNew.confirmPassword) {
      alert('輸入的新密碼與確認密碼不符');
      return;
    }
    pwdNewConfirm(pwdNew.newPassword, forgotsid).then(obj => {
      console.log('obj:', obj);
      if (obj.success) {
        // alert('更改成功');
        setModalShow(true);
        // history.push('/member-login');
      } else {
        alert(obj.errorMessage);
      }
    });
  };

  return (
    <>
      <div className="forgotpwd-form-title">
        <h1>忘記密碼設定</h1>
        <p>請輸入新的密碼及確認密碼後送出</p>
      </div>
      <div className="member-input-container ">
        <label htmlFor="" className="member-label">
          新的密碼
        </label>
        <input
          type="password"
          value={pwdNew.newPassword}
          name="newPassword"
          onChange={handleChange}
          placeholder=""
          className="member-input"
        />
      </div>
      <div className="member-input-container ">
        <label htmlFor="" className="member-label">
          確認密碼
        </label>
        <input
          type="password"
          value={pwdNew.confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
          placeholder=""
          className="member-input"
        />
      </div>
      {pwdNew.newPassword !== pwdNew.confirmPassword && (
        <div className=" confirmpassword-p">
          <p
            style={{ color: 'red', display: 'flex', justifyContent: 'center' }}
          >
            新的密碼與確認密碼不相符
          </p>
        </div>
      )}
      <div className="member-btn-container">
        <div>
          <button
            className="member-circle-btn"
            type="button"
            onClick={() => {
              pwdNewConfirmHandle();
            }}
          >
            確認送出
          </button>
        </div>
      </div>
      <MemberForgotPwdNewModal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          history.push('/member-login');
        }}
      />
    </>
  );
};
export default MemberForgotPwd;
