import { useHistory, Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './CustomizeOrder.css';

function CustomizeOrder(props) {
  const history = useHistory();
  const [modalStyle, setModelStyle] = useState('');
  //app最外層傳入
  const { seatColor, craft, suit } = props;
  function send() {
    setModelStyle('blur(20px)');
    setTimeout(() => {
      history.push('/cart-payment');
    }, 800);
  }
  // console.log(suit[0].suitImgName);

  return (
    <>
      <Modal
        // animation={false}
        style={{ filter: modalStyle }}
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
                  <td>{suit[0].suitImgName}</td>
                </tr>
                <tr>
                  <th>國家：</th>
                  <td>{suit[0].country}</td>
                </tr>
                <tr>
                  <th>徽章：</th>
                  <td>{suit[0].markSuit}</td>
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
                  <td>{craft[0].craftString}</td>
                </tr>
                <tr>
                  <th>國家：</th>
                  <td>{craft[0].country}</td>
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
                  <td>{seatColor}</td>
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
          <button
            // to="/cart-payment"
            onClick={() => {
              send();
            }}
            className="customorder-circle-btn"
          >
            確認送出
          </button>
          <button
            onClick={props.onHide}
            className="customorder-circle-btn cancel-btn"
          >
            取消
          </button>
        </div>
      </Modal>
    </>
  );
}

export default CustomizeOrder;
