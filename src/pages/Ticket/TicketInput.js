import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import TicketCheckModal from './TicketCheckModal';

function TicketInput(props) {
  const [checkModalShow, setCheckModalShow] = useState(false);
  const { setMemberName, userPassport } = props;
  const [userEmail, setUserEmail] = useState('');
  const [userPassName, setUserPassName] = useState(true);
  const inputAr = [];
  // const inputHtml = (
  //   <>
  //     <div className="inputWrap">
  //       <label>成員</label>
  //       <div className="inputGroup">
  //         <input
  //           className="memberNames"
  //           name="memberName[]"
  //           type="text"
  //           defaultValue={userPassport}
  //           placeholder="請輸入護照英文姓名"
  //         />
  //         <span></span>
  //       </div>
  //     </div>
  //     <div className="inputWrap">
  //       <label>成員</label>
  //       <div className="inputGroup">
  //         <p>請上傳影本及3個月內的健檢報告</p>
  //         <label className="uploadButton" for="">
  //           <input
  //             type="file"
  //             name="memberFiles[]"
  //             id="file"
  //             value=""
  //             style={{
  //               position: 'absolute',
  //               top: '0%',
  //               left: '0%',
  //               width: '20px',
  //               height: '100px',
  //               cursor: 'pointer',
  //               overflow: 'hidden',
  //               fontSize: '0px',
  //               opacity: '0',
  //             }}
  //           />
  //           <i className="fas fa-cloud-upload-alt"></i>
  //         </label>
  //       </div>
  //     </div>
  //   </>
  // );
  {
    for (let i = 1; i <= props.count; i++) {
      inputAr.push(
        <>
          <div className="inputWrap">
            <label className="input-check-label">成員{i}</label>
            <div className="input-check inputGroup">
              <input
                className="memberNames"
                name="memberName[]"
                type="checkbox"
                onChange={e => passportHandler(e)}
              />
              <span>與登入帳號的護照名稱相同</span>
            </div>
          </div>
          <div className="inputWrap">
            <label>成員{i}</label>
            <div className="inputGroup">
              <input
                className="memberNames"
                name="memberName[]"
                type="text"
                placeholder="請輸入護照英文姓名"
              />
              <span></span>
            </div>
          </div>
          <div className="inputWrap">
            <label>成員{i}</label>
            <div className="inputGroup">
              <p>請上傳護照影本及3個月內的健檢報告</p>
              <label className="uploadButton" for="">
                <input
                  type="file"
                  name="memberFiles[]"
                  id="file"
                  style={{
                    position: 'absolute',
                    top: '0%',
                    left: '0%',
                    width: '20px',
                    height: '100px',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    fontSize: '0px',
                    opacity: '0',
                  }}
                  onChange={e => {
                    inputChangeHandler(e);
                  }}
                />
                <i className="fas fa-cloud-upload-alt"></i>
              </label>
            </div>
          </div>
        </>
      );
    }
  }
  console.log(inputAr);

  let memberNameArr = [];

  useEffect(() => {
    const usermail = localStorage.getItem('user_email');
    setUserEmail(usermail);
  }, []);

  function getMemberHandler(e) {
    // fetch(`http://localhost:3001/user/api/ticket-order-checkmail`, {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     account: userEmail,
    //   }),
    // }).then(res => res.json());
    setCheckModalShow(true);
    console.log(e);
    document.querySelectorAll('.memberNames').forEach(v => {
      console.log(v.value);
      memberNameArr.push(v.value);
      console.log(memberNameArr);
      setMemberName(memberNameArr);
    });
  }

  function inputChangeHandler(e) {
    console.log(e.target.value);
    e.target.parentNode.previousSibling.innerHTML = e.target.value;
    console.log(e.target.parentNode.previousSibling);
    // e.currentTarget.previousSibling.innerHTML = e.currentTarget.value;
    console.log(e);
  }

  function passportHandler(e) {
    setUserPassName(!userPassName);
    if (userPassName) {
      console.log(e);
      console.log(
        e.target.parentNode.parentNode.nextSibling.lastChild.firstChild
      );
      e.target.parentNode.parentNode.nextSibling.lastChild.firstChild.value =
        userPassport;
    } else {
      e.target.parentNode.parentNode.nextSibling.lastChild.firstChild.value =
        '';
    }
  }

  return (
    <>
      {inputAr}{' '}
      <button
        onClick={e => {
          getMemberHandler(e);
        }}
        className="tickitConfirmBtn"
      >
        確認送出
      </button>
      <TicketCheckModal
        show={checkModalShow}
        onHide={() => setCheckModalShow(false)}
      />
    </>
  );
}

export default TicketInput;
