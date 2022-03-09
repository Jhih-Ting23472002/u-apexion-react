import { useState } from 'react';
import { Redirect } from 'react-router-dom';

function TicketInput(props) {
  const inputAr = [];
  const inputHtml = (
    <>
      <div className="inputWrap">
        <label>USER1</label>
        <div className="inputGroup">
          <input type="text" placeholder="請輸入護照英文姓名" />
          <span></span>
        </div>
      </div>
      <div className="inputWrap">
        <label>USER1</label>
        <div className="inputGroup">
          <p>請上傳影本及3個月內的健檢報告</p>
          <label className="uploadButton" for="">
            <input
              type="file"
              name="file"
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
  return <>{inputAr}</>;
}

export default TicketInput;
