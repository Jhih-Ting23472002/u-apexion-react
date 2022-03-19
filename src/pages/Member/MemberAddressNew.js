import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './MemberAddressNew.css';
// import ModalHeader from 'react-bootstrap/ModalHeader';

function MemberAddressNew(props) {
  return (
    <>
      <Modal
        // animation={false}
        className="member-view"
        {...props}
        centered
        backdrop="static"
      >
        <Modal.Header closeButton className="member-modal-header">
          <h1>新增&nbsp;&nbsp;|&nbsp;&nbsp;收件地址 </h1>
        </Modal.Header>
        <Modal.Body>
          <form className="member-modal-form">
            <div className="member-input-container modal-input-wrap">
              <label for="" className="member-label">
                地點名稱
              </label>
              <input type="text" placeholder="" className="member-input" />
            </div>
            <div className="member-input-container modal-input-wrap">
              <label for="" className="member-label">
                姓名
              </label>
              <input type="text" placeholder="" className="member-input" />
            </div>
            <div className="member-input-container modal-input-wrap">
              <label for="" className="member-label">
                郵遞區號
              </label>
              <input type="text" placeholder="" className="member-input" />
            </div>
            <div className="member-input-container modal-input-wrap">
              <label for="" className="member-label">
                縣市
              </label>
              <input type="text" placeholder="" className="member-input" />
            </div>
            <div className="member-input-container modal-input-wrap">
              <label for="" className="member-label">
                區鄉鎮
              </label>
              <input type="text" placeholder="" className="member-input" />
            </div>
            <div className="member-input-container modal-input-wrap">
              <label for="" className="member-label">
                路段巷弄號樓
              </label>
              <input type="text" placeholder="" className="member-input" />
            </div>

            <div className="member-input-container modal-input-wrap">
              <label for="" className="member-label">
                電話號碼
              </label>
              <input type="text" placeholder="" className="member-input" />
            </div>
          </form>
        </Modal.Body>
        <div className="member-footer">
          <button className="member-modal-circle-btn" onClick={props.onHide}>
            確認送出
          </button>
          <button
            className="member-modal-circle-btn member-cancel-btn"
            onClick={props.onHide}
          >
            返回
          </button>
        </div>
      </Modal>
    </>
  );
}

export default MemberAddressNew;
