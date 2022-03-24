import React, { useState } from 'react';
import './CustomizeSeat.css';
import CustomizeOrder from './CustomizeOrder';
import whiteSeat from './images/spaceseat-white.png';
import orangeSeat from './images/spaceseat-orange.png';
import blueSeat from './images/spaceseat-blue.png';

function CustomizeSeat() {
  const [modalShow, setModalShow] = useState(false);
  const [color, setColor] = useState({});
  const [seatImg, setSeatImg] = useState('');
  const [opa, setOpa] = useState('');

  return (
    <>
      <section className="Customseat-page-view">
        <div className="seat-backcolor" style={color}>
          <img src={require('./images/seat-backimg.png')} alt="" />
        </div>
        <div className="seat-box-img">
          {/* 想讓他變換時  先讓他歸0 再變成1 */}
          <img src={seatImg} alt="" style={{ opacity: opa }} />
        </div>
        <div className="seat-card">
          <h1>請選擇太空椅外觀</h1>
          <h3>Customize Your Seat</h3>
          <h2>15,000$</h2>
          <div className="seat-select-color">
            <div
              className="white suit-flag"
              onClick={() => {
                const newOpaClose = '0';
                setOpa(newOpaClose);
                // 讓seat-box-img 圖片淡出
                const newColor = { ...color, background: 'white' };
                setColor(newColor);
                // 改變.seat-backcolor的背景顏色
                setTimeout(() => {
                  // 設置延遲
                  const newOpaOpen = '1';
                  setOpa(newOpaOpen);
                  // 讓圖片淡入
                  const newImg = whiteSeat;
                  setSeatImg(newImg);
                  // 載入圖片
                },700);
              }}
            ></div>
            <div
              className="orange suit-flag"
              onClick={() => {
                const newOpaClose = '0';
                setOpa(newOpaClose);
                const newColor = { ...color, background: '#EE6A26' };
                setColor(newColor);
                setTimeout(() => {
                  const newOpaOpen = '1';
                  setOpa(newOpaOpen);
                  const newImg = orangeSeat;
                  setSeatImg(newImg);
                }, 700);
              }}
            ></div>
            <div
              className="blue suit-flag"
              onClick={() => {
                const newOpaClose = '0';
                setOpa(newOpaClose);
                const newColor = { ...color, background: '#0072D6' };
                setColor(newColor);
                setTimeout(() => {
                  const newOpaOpen = '1';
                  setOpa(newOpaOpen);
                  const newImg = blueSeat;
                  setSeatImg(newImg);
                }, 700);
              }}
            ></div>
          </div>
          <div className="seat-lorem">
            <p>
              這是一個高級的座位，經由高級的大師以高級的手法所打造，給予高級的貴賓享受高級的旅程。
            </p>
          </div>
          <button
            className="seat-circle-btn"
            onClick={() => setModalShow(true)}
          >
            完成送出
          </button>
        </div>

        <svg
          className="right-page-svg"
          viewBox="0 0 913 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M918 1024L6.10352e-05 1900L410 -5.79779e-05L918 0.000244141L918 1024Z"
            fill="#000000"
          />
        </svg>
      </section>
      <CustomizeOrder show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default CustomizeSeat;
