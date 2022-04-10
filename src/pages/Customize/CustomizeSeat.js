import React, { useState, useContext, useEffect } from 'react';
import './CustomizeSeat.css';
import CustomizeOrder from './CustomizeOrder';
import CartQuantity from '../Products/CartQuantity';

function CustomizeSeat(props) {
  //最外面app參數
  const { setCustomize, craft, suit } = props;
  const { cartTotal, setCartTotal } = useContext(CartQuantity);

  const [modalShow, setModalShow] = useState(false);
  const [color, setColor] = useState({});
  const [style, setStyle] = useState('');
  const [seatImg, setSeatImg] = useState('/customize_img/spaceseat-white.png');
  const [seatPrice, setPrice] = useState(15000);
  const [opa, setOpa] = useState('');
  const [seatTotal, setTotal] = useState(1);
  const [suitSize, setSuitSize] = useState({
    s1: '35px',
    s2: '35px',
    s3: '35px',
  });
  const [seatDataBox, setSeatDataBox] = useState(' translateY(50px)');
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.seatData').innerHTML = style;
    }, 300);
  }, [style]);
  function addCart() {
    setCustomize(function (prevData) {
      setCartTotal(cartTotal + 1);
      setModalShow(true);
      return [...prevData, { style, seatPrice, seatTotal, seatImg }];
    });
  }

  return (
    <>
      <section className="Customseat-page-view">
        <div className="seat-backcolor seatMoveLeft1" style={color}>
          <img src={require('./images/seat-backimg.png')} alt="" />
        </div>
        <div className="seat-box-img seatMoveLeft2">
          {/* 想讓他變換時  先讓他歸0 再變成1 */}
          <img src={seatImg} alt="" style={{ opacity: opa }} />
        </div>
        <div className="seat-card seatMoveRight2">
          <h1>請選擇太空椅外觀</h1>
          <h3>Customize Your Seat</h3>
          <h2>15,000$</h2>
          <div className="seatDataBox" style={{ transform: seatDataBox }}>
            <h4 className="seatData">1</h4>
          </div>
          <div className="seat-select-color">
            <div
              style={{ width: suitSize.s1, height: suitSize.s1 }}
              className="white suit-flag"
              onClick={e => {
                const newSeatDataBoxHide = 'translateY(50px)';
                setSeatDataBox(newSeatDataBoxHide);
                setTimeout(() => {
                  const newSeatDataBoxShow = 'translateY(0px)';
                  setSeatDataBox(newSeatDataBoxShow);
                }, 700);
                const newOpaClose = '0';
                setOpa(newOpaClose);
                // 讓seat-box-img 圖片淡出
                const newColor = { ...color, background: 'white' };
                setColor(newColor);
                // 改變.seat-backcolor的背景顏色
                setStyle('銀河白太空座椅');
                setTimeout(() => {
                  // 設置延遲
                  const newOpaOpen = '1';
                  setOpa(newOpaOpen);
                  // 讓圖片淡入
                  const newImg = '/customize_img/spaceseat-white.png';
                  setSeatImg(newImg);
                  // 載入圖片
                }, 700);
                const newSize = {
                  ...suitSize,
                  s1: '40px',
                  s2: '30px',
                  s3: '30px',
                };
                setSuitSize(newSize);
              }}
            ></div>
            <div
              className="orange suit-flag"
              style={{ width: suitSize.s2, height: suitSize.s2 }}
              onClick={e => {
                const newSeatDataBoxHide = 'translateY(50px)';
                setSeatDataBox(newSeatDataBoxHide);
                setTimeout(() => {
                  const newSeatDataBoxShow = 'translateY(0px)';
                  setSeatDataBox(newSeatDataBoxShow);
                }, 700);
                const newOpaClose = '0';
                setOpa(newOpaClose);
                const newColor = { ...color, background: '#EE6A26' };
                setColor(newColor);
                setStyle('火源橘太空座椅');
                setTimeout(() => {
                  const newOpaOpen = '1';
                  setOpa(newOpaOpen);
                  const newImg = '/customize_img/spaceseat-orange.png';
                  setSeatImg(newImg);
                }, 700);
                const newSize = {
                  ...suitSize,
                  s1: '30px',
                  s2: '40px',
                  s3: '30px',
                };
                setSuitSize(newSize);
              }}
            ></div>
            <div
              className="blue suit-flag"
              style={{ width: suitSize.s3, height: suitSize.s3 }}
              onClick={e => {
                const newSeatDataBoxHide = 'translateY(50px)';
                setSeatDataBox(newSeatDataBoxHide);
                setTimeout(() => {
                  const newSeatDataBoxShow = 'translateY(0px)';
                  setSeatDataBox(newSeatDataBoxShow);
                }, 700);
                const newOpaClose = '0';
                setOpa(newOpaClose);
                const newColor = { ...color, background: '#0072D6' };
                setColor(newColor);
                setStyle('能源藍太空座椅');
                setTimeout(() => {
                  const newOpaOpen = '1';
                  setOpa(newOpaOpen);
                  const newImg = '/customize_img/spaceseat-blue.png';
                  setSeatImg(newImg);
                }, 700);
                const newSize = {
                  ...suitSize,
                  s1: '30px',
                  s2: '30px',
                  s3: '40px',
                };
                setSuitSize(newSize);
              }}
            ></div>
          </div>
          <div className="seat-lorem">
            <p>
              這是一個高級的座位，經由高級的大師以高級的手法所打造，給予高級的貴賓享受高級的旅程。
            </p>
          </div>
          <button className="seat-circle-btn" onClick={() => addCart()}>
            完成送出
          </button>
        </div>

        <svg
          className="right-page-svg seatMoveRight1"
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
      <CustomizeOrder
        show={modalShow}
        onHide={() => setModalShow(false)}
        setCustomize={setCustomize}
        seatColor={style}
        craft={craft}
        suit={suit}
      />
    </>
  );
}

export default CustomizeSeat;
