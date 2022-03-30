import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import TicketCheckModal from './TicketCheckModal';

function TicketInput(props) {
  const [checkModalShow, setCheckModalShow] = useState(false);
  const { setMemberName } = props;
  const [userEmail, setUserEmail] = useState('');
  const inputAr = [];
  const inputHtml = (
    <>
      <div className="inputWrap">
        <label>成員</label>
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
        <label>成員</label>
        <div className="inputGroup">
          <p>請上傳影本及3個月內的健檢報告</p>
          <label className="uploadButton" for="">
            <input
              type="file"
              name="memberFiles[]"
              id="file"
              value=""
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
            />
            <i className="fas fa-cloud-upload-alt"></i>
          </label>
        </div>
      </div>
    </>
  );
  {
    for (let i = 0; i < props.count; i++) {
      inputAr.push(inputHtml);
    }
  }
  console.log(inputAr);

  let memberNameArr = [];

  useEffect(() => {
    const usermail = localStorage.getItem('user_email');
    setUserEmail(usermail);
  }, []);

  function getMemberHandler(e) {
    fetch(`http://localhost:3001/user/api/ticket-order-checkmail`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        account: userEmail,
      }),
    }).then(res => res.json());
    setCheckModalShow(true);
    console.log(e);
    document.querySelectorAll('.memberNames').forEach(v => {
      console.log(v.value);
      memberNameArr.push(v.value);
      console.log(memberNameArr);
      setMemberName(memberNameArr);
    });
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
