import React, { useState } from 'react';
import './CustomizeSuit.css';
import whiteSuit from './images/spacesuit-white.png';
import orangeSuit from './images/spacesuit-orange.png';
import blueSuit from './images/spacesuit-blue.png';
import noSelect from './images/noselect.png';
import ta from './images/taiwan.png';
const allCountry = [
  '/customize_img/america.png',
  '/customize_img/canada.png',
  '/customize_img/china.png',
  '/customize_img/england.png',
  '/customize_img/japan.png',
  '/customize_img/korea.png',
  '/customize_img/spain.png',
  '/customize_img/taiwan.png',
  '/customize_img/ukraine.png',
];
const allMark = [
  '/customize_img/space-mark-01.png',
  '/customize_img/space-mark-02.png',
  '/customize_img/space-mark-03.png',
  '/customize_img/space-mark-04.png',
  '/customize_img/space-mark-05.png',
  '/customize_img/space-mark-06.png',
  '/customize_img/space-mark-07.png',
  '/customize_img/space-mark-08.png',
  '/customize_img/space-mark-09.png',
  '/customize_img/space-mark-10.png',
  '/customize_img/space-mark-11.png',
  '/customize_img/space-mark-12.png',
  '/customize_img/space-mark-13.png',
  '/customize_img/space-mark-14.png',
  '/customize_img/space-mark-15.png',
  '/customize_img/space-mark-16.png',
  '/customize_img/space-mark-17.png',
  '/customize_img/space-mark-18.png',
  '/customize_img/space-mark-19.png',
  '/customize_img/space-mark-20.png',
  '/customize_img/space-mark-21.png',
  '/customize_img/space-mark-22.png',
  '/customize_img/space-mark-23.png',
];

function CustomizeSuit() {
  //顏色
  const [opa, setOpa] = useState('');
  const [suitImg, setSuitImg] = useState('');
  //國家
  const [countrySelectSuit, setCountrySelectSuit] = useState('0');
  const [countryImgSuit, setCountryImgSuit] = useState('0');

  //徽章
  return (
    <>
      <section className="Customsuit-page-view">
        <div className="back-circle">
          <div className="image-mirrow">
            <img src={ta} className="suitCountryImg" />
            <img
              className="image-mirrow-img"
              src={suitImg.length === 0 ? whiteSuit : suitImg}
              style={{ opacity: opa }}
              alt=""
            />
          </div>
        </div>
        <svg
          className="right-page-svg"
          viewBox="0 0 913 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-5 0L420 0L200 1024L-5 1024L-5 0Z" fill="#323232" />
        </svg>
        <div className="suit-circle">
          <svg
            className="suit-circle-step"
            viewBox="0 0 512 675"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M505 46.7082C455.717 18.2707 398.53 2 337.543 2C152.227 2 2 152.228 2 337.543C2 522.858 152.227 673.086 337.543 673.086C398.53 673.086 455.717 656.815 505 628.378"
              stroke="#595959"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="63" cy="146" r="10" fill="#595959" />
            <circle cx="504" cy="628" r="8" fill="#595959" />
            <circle cx="154" cy="619" r="10" fill="#595959" />
            <circle cx="504" cy="49" r="8" fill="#595959" />
          </svg>
          <button className="suit-circle-btn">完成送出</button>
          <div className="maybe-use-canvus">
            <img
              src={suitImg.length === 0 ? whiteSuit : suitImg}
              alt=""
              style={{ opacity: opa }}
            />
          </div>
        </div>
        <div className="suit-card">
          <h1>請選擇太空服外觀</h1>
          <h3>Customize Your SpaceSuit</h3>
          <h2>25,000$</h2>
          <div className="suit-select-color">
            <div
              data-img={'/customize_img/spacesuit-white.png'}
              className="white suit-flag"
              onClick={e => {
                const newOpaClose = '0';
                setOpa(newOpaClose);
                // 讓seat-box-img 圖片淡出
                setTimeout(() => {
                  // 設置延遲
                  const newOpaOpen = '1';
                  setOpa(newOpaOpen);
                  // 讓圖片淡入
                  const newImg = whiteSuit;
                  setSuitImg(newImg);
                  // 載入圖片
                }, 700);
              }}
            ></div>
            <div
              data-img={'/customize_img/spacesuit-orange.png'}
              className="orange suit-flag"
              onClick={e => {
                const newOpaClose = '0';
                setOpa(newOpaClose);
                // 讓seat-box-img 圖片淡出
                setTimeout(() => {
                  // 設置延遲
                  const newOpaOpen = '1';
                  setOpa(newOpaOpen);
                  // 讓圖片淡入
                  const newImg = orangeSuit;
                  setSuitImg(newImg);
                  // 載入圖片
                }, 700);
              }}
            ></div>
            <div
              data-img={'/customize_img/spacesuit-blue.png'}
              className="blue suit-flag"
              onClick={e => {
                const newOpaClose = '0';
                setOpa(newOpaClose);
                // 讓seat-box-img 圖片淡出
                setTimeout(() => {
                  // 設置延遲
                  const newOpaOpen = '1';
                  setOpa(newOpaOpen);
                  // 讓圖片淡入
                  const newImg = blueSuit;
                  setSuitImg(newImg);
                  // 載入圖片
                }, 700);
              }}
            ></div>
          </div>
          <div className="country-select">
            {allCountry.map((v, i) => {
              return (
                <div
                  data-key={i + 1}
                  className="suit-flag"
                  key={i}
                  onClick={e => {}}
                >
                  <img
                    data-img={v}
                    src={v}
                    alt=""
                    onClick={e => {
                      //抓取圖片放入太空船
                      const closeOpa = '0';
                      setCountrySelectSuit(closeOpa);
                      setTimeout(() => {
                        // 設置延遲
                        const openOpa = '1';
                        setCountrySelectSuit(openOpa);
                        // 讓圖片淡入
                        setCountryImgSuit(e.target.dataset.img);
                        // console.log('1===', e.target.dataset.img);
                        // 載入圖片
                      }, 700);
                      // const newStep2 = {
                      //   ...craftStep,
                      //   fill2: '#05f2f2',
                      // };
                      // setCraftStep(newStep2);
                      // setStepClassname2('stepLine2');
                      // setTimeout(() => {
                      //   setStepClassname3('stepLine3');
                      // }, 2000);
                    }}
                  />
                </div>
              );
            })}
            <div className="suit-flag">
              <div className="no-select">
                <img src={noSelect} alt="" />
              </div>
            </div>
          </div>
          <div className="mark-select">
            {allMark.map((v, i) => {
              return (
                <div className="suit-mark" key={i}>
                  <img src={v} alt="" />
                </div>
              );
            })}
            <div className="suit-flag">
              <div className="no-select">
                <img src={noSelect} alt="" />
              </div>
            </div>
          </div>
        </div>

        <svg
          className="left-page-svg"
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

export default CustomizeSuit;
