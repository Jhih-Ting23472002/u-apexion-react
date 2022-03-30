import React, { useState, useEffect,useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import './CustomizeOrder.css';
import ModalHeader from 'react-bootstrap/ModalHeader';


function CustomizeOrder(props) {
  //app最外層傳入
  const { setCustomize, seatColor } = props;

  //座位價格
  const [seatPrice, setSeatPrice] = useState(1500);


  return (
    <>
      <Modal
        // animation={false}
        className="customorder-view"
        {...props}
        centered
        backdrop="static"
      >
        <Modal.Header closeButton className="customorder-header">
          <h1>客製化商品&nbsp;&nbsp;|&nbsp;&nbsp;訂單明細 </h1>
        </Modal.Header>
        <Modal.Body>
          <div className="customorder-body">
            <h2>太空服：</h2>
            <div className="custombody-list">
              <table>
                <tr>
                  <th>顏色：</th>
                  <td>Blue</td>
                </tr>
                <tr>
                  <th>國家：</th>
                  <td>Canada</td>
                </tr>
                <tr>
                  <th>徽章：</th>
                  <td>NASA 50years</td>
                </tr>
              </table>
              <h3>25,000$</h3>
              <div className="custombody-btn">
                <button className="customorder-circle-btn">更改</button>
              </div>
            </div>
          </div>
          <div className="customorder-body">
            <h2>太空船：</h2>
            <div className="custombody-list">
              <table>
                <tr>
                  <th>字樣：</th>
                  <td>AKB-50</td>
                </tr>
                <tr>
                  <th>國家：</th>
                  <td>Canada</td>
                </tr>
              </table>
              <h3>20,000$</h3>
              <div className="custombody-btn">
                <button className="customorder-circle-btn">更改</button>
              </div>
            </div>
          </div>
          <div className="customorder-body">
            <h2>太空椅：</h2>
            <div className="custombody-list">
              <table>
                <tr>
                  <th>顏色：</th>
                  <td>{seatColor.background}</td>
                </tr>
              </table>
              <h3>15,000$</h3>
              <div className="custombody-btn">
                <button className="customorder-circle-btn">更改</button>
              </div>
            </div>
          </div>
          <div className="custombody-totalprice">
            <h3>總價：</h3>
            <h2>60,000$</h2>
          </div>
        </Modal.Body>
        <div className="customorder-footer">
          <button className="customorder-circle-btn" onClick={props.onHide} >
            確定送出
          </button>
          <button
            className="customorder-circle-btn cancel-btn"
            onClick={props.onHide}
          >
            取消
          </button>
        </div>
      </Modal>
    </>
  );
}

export default CustomizeOrder;
