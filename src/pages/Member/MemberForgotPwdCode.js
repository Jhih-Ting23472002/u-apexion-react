import React, { useState } from 'react';
import './MemberForgotPwd.css';
// import { Link } from 'react-router-dom';
import { verifyCodeConfirm } from '../../data/UserWebApi';
import MemberForgotPwdCodeModal from './MemberForgotPwdCodeModal';

const MemberForgotPwdCode = props => {
  const { setStep } = props;
  const [validCode, setValidCode] = useState('');
 
  const [modalShow, setModalShow] = useState(false);
  const verify_code = localStorage.getItem('verify_code');

  const codeConfirmHandle = () => {
    verifyCodeConfirm(validCode, verify_code).then(obj => {
      console.log('obj:', obj);
      if (obj.success) {
        setModalShow(true);
        // alert('驗證成功');
        setStep(3);
      } else {
        alert(obj.errorMessage);
      }
    });
  };

  return (
    <>
      <div className="forgotpwd-form-title">
        <h1>忘記密碼設定</h1>
        <p>請輸入驗證碼後送出</p>
      </div>
      <div className="member-input-container ">
        <label htmlFor="" className="member-label">
          驗證碼
        </label>
        <input
          type="text"
          value={validCode}
          onChange={e => setValidCode(e.target.value)}
          placeholder="請輸入驗證碼"
          className="member-input"
        />
      </div>
      <div className="member-btn-container">
        <div className="member-return-btn-wrap">
          <button
            className="member-circle-btn"
            onClick={() => {
              setStep(1);
            }}
          >
            回上一步
          </button>
        </div>
        <div>
          <button
            className="member-circle-btn"
            type="submit"
            onClick={() => {
              codeConfirmHandle();
            }}
          >
            確認送出
          </button>
        </div>
      </div>
      <MemberForgotPwdCodeModal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
      />
    </>
  );
};
export default MemberForgotPwdCode;
