import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './MemberEditOrDelete.css';
// import ModalHeader from 'react-bootstrap/ModalHeader';
import { useState, useEffect } from 'react';
import { editAddress } from '../../data/UserWebApi';
import { removeAddress } from '../../data/UserWebApi';
import { useHistory } from 'react-router-dom';

function MemberEditOrDelete(props) {
  // const { modalShow, setModalShow } = props;
  const history = useHistory();
  const user_id = localStorage.getItem('user_id');
  const data = JSON.parse(localStorage.getItem('data'));
  console.log('user_id:', user_id);
  console.log('data:', data.sid);
  //   {
  //     address: "台北市"
  //     phone_number: "0988888999"
  //     place_name: "公司"
  //     postal_code: "106"
  //     recipient_name: "sam"
  //     sid: 3
  //     user_id: 1
  //   }
  const [editData, setEditData] = useState({
    placename: '',
    recipientname: '',
    postalcode: '',
    address: '',
    phonenumber: '',
    sid: '',
  });

  useEffect(() => {
    const newData = {
      ...editData,
      placename: data.place_name,
      recipientname: data.recipient_name,
      postalcode: data.postal_code,
      address: data.address,
      phonenumber: data.phone_number,
      sid: data.sid,
    };
    setEditData(newData);
  }, []);

  // 用戶修改時，即時更新state狀態
  const handleChange = e => {
    const editResult = { ...editData, [e.target.name]: e.target.value };
    setEditData(editResult);
  };

  // 用戶提交修改時，發送AJAX到後端
  const handleEditOrDelate = e => {
    e.preventDefault();
    // const fd = new FormData(e.target);
    // console.log(fd);

    // const dataObj = {};
    // for (let i of fd) {
    //   dataObj[i[0]] = i[1];
    // }

    // dataObj.user_id = user_id;
    // console.log('dataObj:', dataObj);

    editAddress(editData, user_id).then(obj => {
      console.log('obj:', obj);
      if (obj.success) {
        alert('修改成功');
        props.setModalShow(false);
        // history.push('/member-address'); //新增成功的話跳轉回地址清單頁
      }
    });
  };

  // 刪除資料
  const handleDelete = () => {
    removeAddress(data.sid, user_id).then(obj => {
      console.log('obj:', obj);
      if (obj.success) {
        alert('刪除成功');
        props.setModalShow(false);
        // history.push('/member-address'); //新增成功的話跳轉回地址清單頁
      }
    });
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
          <h1>修改或刪除&nbsp;&nbsp;|&nbsp;&nbsp;收件地址 </h1>
        </Modal.Header>
        <Modal.Body>
          <form className="member-modal-form" onSubmit={handleEditOrDelate}>
            <div className="member-input-container modal-input-wrap">
              <label className="member-label">地點名稱</label>
              <input
                type="text"
                placeholder=""
                className="member-input"
                name="placename"
                value={editData.placename}
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
                value={editData.recipientname}
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
                value={editData.postalcode}
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
                value={editData.address}
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
                value={editData.phonenumber}
                onChange={handleChange}
              />
            </div>
            <div className="member-footer">
              <button
                type="submit"
                className="member-modal-circle-btn"
                //  onClick={props.onHide}
              >
                確認修改
              </button>
              <button
                type="button"
                className="member-modal-circle-btn member-cancel-btn"
              >
                返回
              </button>
              <button
                type="button"
                className="member-modal-circle-btn"
                onClick={() => {
                  handleDelete();
                }}
              >
                確認刪除
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

export default MemberEditOrDelete;
