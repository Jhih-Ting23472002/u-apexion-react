import React from 'react';
import './CustomizeSeat.css';
function CustomizeSeat() {
  return (
    <>
     
      <section className="Customseat-page-view">
        <div className="seat-backcolor">
          <img src={require('./images/seat-backimg.png')} alt="" />
        </div>
        <div className="seat-box-img">
          <img src={require('./images/spaceseat-white.png')} alt="" />
        </div>
        <div className="seat-card">
          <h1>請選擇太空椅外觀</h1>
          <h3>Customize Your Seat</h3>
          <h2>15,000$</h2>
          <div className="seat-select-color">
            <div className="white suit-flag"></div>
            <div className="orange suit-flag"></div>
            <div className="blue suit-flag"></div>
          </div>
          <div className="seat-lorem">
            <p>
              這是一個高級的座位，經由高級的大師以高級的手法所打造，給予高級的貴賓享受高級的旅程。
            </p>
          </div>
          <button className="seat-circle-btn">完成送出</button>
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
    </>
  );
}

export default CustomizeSeat;
