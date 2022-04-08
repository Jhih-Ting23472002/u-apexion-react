import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import './MemberAddressNew.css';
// import ModalHeader from 'react-bootstrap/ModalHeader';
import { createAddress } from '../../data/UserWebApi';
import { useHistory } from 'react-router-dom';

function MemberAddressNew(props) {
  // const { modalShow, setModalShow } = props;
  // const history = useHistory();
  const user_id = localStorage.getItem('user_id');
  console.log('user_id:', user_id);
  const [addressNewData, setaddressNewData] = useState({
    placename: '',
    recipientname: '',
    postalcode: '',
    address: '',
    phonenumber: '',
  });

  const handleAddressNew = e => {
    e.preventDefault();
    const fd = new FormData(e.target);
    console.log(fd);

    const dataObj = {};
    for (let i of fd) {
      dataObj[i[0]] = i[1];
    }

    dataObj.user_id = user_id;
    console.log('dataObj:', dataObj);

    createAddress(dataObj).then(obj => {
      console.log('obj:', obj);
      if (obj.success) {
        alert('新增成功');
        props.setModalShow(false);
        // history.push('/member-address'); //新增成功的話跳轉回地址清單頁
      }
    });

    setaddressNewData({
      placename: '',
      recipientname: '',
      postalcode: '',
      address: '',
      phonenumber: '',
    });
  };
  const handleChange = e => {
    const newData = { ...addressNewData, [e.target.name]: e.target.value };
    setaddressNewData(newData);
  };

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
          <form className="member-modal-form" onSubmit={handleAddressNew}>
            <div className="member-input-container modal-input-wrap">
              <label className="member-label">地點名稱</label>
              <input
                type="text"
                placeholder=""
                className="member-input"
                name="placename"
                value={addressNewData.placename}
                onChange={handleChange}
              />
            </div>
            <div className="member-input-container modal-input-wrap">
              <label className="member-label">姓名</label>
              <input
                type="text"
                placeholder=""
                className="member-input"
                name="recipientname"
                value={addressNewData.recipientname}
                onChange={handleChange}
              />
            </div>
            <div className="member-input-container modal-input-wrap">
              <label className="member-label">郵遞區號</label>
              <input
                type="text"
                placeholder=""
                className="member-input"
                name="postalcode"
                value={addressNewData.postalcode}
                onChange={handleChange}
              />
            </div>
            <div className="member-input-container modal-input-wrap">
              <label className="member-label">地址</label>
              <input
                type="text"
                placeholder=""
                className="member-input"
                name="address"
                value={addressNewData.address}
                onChange={handleChange}
              />
            </div>

            <div className="member-input-container modal-input-wrap">
              <label className="member-label">電話號碼</label>
              <input
                type="text"
                placeholder=""
                className="member-input"
                name="phonenumber"
                value={addressNewData.phonenumber}
                onChange={handleChange}
              />
            </div>
            <div className="member-footer">
              <button
                type="submit"
                className="member-modal-circle-btn"
                //  onClick={props.onHide}
              >
                確認新增
              </button>
              <button
                type="button"
                className="member-modal-circle-btn member-cancel-btn"
                onClick={() => {
                  props.setModalShow(false);
                }}
              >
                返回
              </button>
            </div>
          </form>
        </Modal.Body>
        {/* <div className="member-footer">
          <button className="member-modal-circle-btn" onClick={props.onHide}>
            確認送出
          </button>
          <button
            className="member-modal-circle-btn member-cancel-btn"
            onClick={props.onHide}
          >
            返回
          </button>
        </div> */}
      </Modal>
    </>
  );
}

export default MemberAddressNew;
