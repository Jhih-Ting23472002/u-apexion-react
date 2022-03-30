import React, { useState } from 'react';
import './CustomizeSuit.css';
import whiteSuit from './images/spacesuit-white.png';
import orangeSuit from './images/spacesuit-orange.png';
import blueSuit from './images/spacesuit-blue.png';
import noSelect from './images/noselect.png';
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
  const [markSelectSuit, setMarkSelectSuit] = useState('0');
  const [markImgSuit, setMarkImgSuit] = useState('0');
  //進度條
  const [suitStep1, setSuitStep1] = useState('');
  const [suitStep2, setSuitStep2] = useState('');
  const [suitStep3, setSuitStep3] = useState('');
  const [suitStepColor, setSuitStepColor] = useState({
    fill1: '#595959',
    fill2: '#595959',
    fill3: '#595959',
  });
  return (
    <>
      <section className="Customsuit-page-view">
        <div className="back-circle">
          <div className="image-mirrow">
            <img
              className="suitMarkImg1"
              src={markImgSuit}
              style={{ opacity: markSelectSuit }}
            />
            <img
              className="suitCountryImg1"
              src={countryImgSuit}
              style={{ opacity: countrySelectSuit }}
            />
            <img
              className="image-mirrow-img"
              src={suitImg.length === 0 ? whiteSuit : suitImg}
              style={{ opacity: opa }}
              alt=""
            />
          </div>
        </div>
        {/* 背景右側 */}
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
            width="512"
            height="672"
            viewBox="0 0 512 672"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 副線 */}
            <path
              d="M503.992 45.5836C356.579 -39.3886 161.747 3.53697 62.5323 142.584C-46.3924 295.24 -3.81697 513.501 154.128 616.392C258.77 684.559 396.827 688.31 504.993 625.96"
              stroke="#595959"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* 主線1 */}
            <path
              className={suitStep1}
              d="M504 45.5836C356.741 -39.3886 162.111 3.53697 63 142.584"
              stroke="#595959"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* 主線2 */}
            <path
              className={suitStep2}
              d="M62.4692 142.168C-46.3421 294.823 -3.81096 513.085 153.969 615.976"
              stroke="#595959"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* 主線3 */}
            <path
              className={suitStep3}
              d="M154.2 615.136C258.553 683.408 396.271 687.116 504.206 624.523"
              stroke="#595959"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* 圓點順序上至下 */}
            <circle
              fill={suitStepColor.fill1}
              style={{ transition: ' .5s ease-in-out ' }}
              cx="504"
              cy="49"
              r="8"
            />
            <circle
              fill={suitStepColor.fill1}
              style={{ transition: ' .5s ease-in-out 1s' }}
              cx="63"
              cy="146"
              r="8"
            />
            <circle
              fill={suitStepColor.fill2}
              style={{ transition: ' .5s ease-in-out 1s' }}
              cx="154"
              cy="619"
              r="8"
            />
            <circle
              fill={suitStepColor.fill3}
              style={{ transition: ' .5s ease-in-out 1s' }}
              cx="504"
              cy="628"
              r="8"
            />
          </svg>

          <button className="suit-circle-btn">完成送出</button>
          <div className="maybe-use-canvus">
            <img
              className="suitMarkImg2"
              src={markImgSuit}
              style={{ opacity: markSelectSuit }}
            />
            <img
              src={countryImgSuit}
              className="suitCountryImg2"
              style={{ opacity: countrySelectSuit }}
            />
            <img
              className="suitcanvas"
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
                const newStep = {
                  ...suitStepColor,
                  fill1: '#05f2f2',
                };
                setSuitStepColor(newStep);
                setSuitStep1('suitStepLine');
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
                const newStep = {
                  ...suitStepColor,
                  fill1: '#05f2f2',
                };
                setSuitStepColor(newStep);
                setSuitStep1('suitStepLine');
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
                const newStep = {
                  ...suitStepColor,
                  fill1: '#05f2f2',
                };
                setSuitStepColor(newStep);
                setSuitStep1('suitStepLine');
              }}
            ></div>
          </div>
          <div className="country-select">
            {allCountry.map((v, i) => {
              return (
                <div
                  data-countrykey={i + 1}
                  className="suit-flag"
                  key={i}
                  onClick={e => {}}
                >
                  <img
                    data-country={v}
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
                        setCountryImgSuit(e.target.dataset.country);
                        // console.log('1===', e.target.dataset.img);
                        // 載入圖片
                      }, 800);
                      const newStep2 = {
                        ...suitStepColor,
                        fill2: '#05f2f2',
                      };
                      setSuitStepColor(newStep2);
                      setSuitStep2('suitStepLine');
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
                <div data-markkey={i + 1} className="suit-mark" key={i}>
                  <img
                    data-mark={v}
                    src={v}
                    alt=""
                    onClick={e => {
                      //抓取圖片放入太空船
                      const closeOpa = '0';
                      setMarkSelectSuit(closeOpa);
                      setTimeout(() => {
                        // 設置延遲
                        const openOpa = '1';
                        setMarkSelectSuit(openOpa);
                        // 讓圖片淡入
                        setMarkImgSuit(e.target.dataset.mark);
                        // console.log('1===', e.target.dataset.img);
                        // 載入圖片
                      }, 800);
                      const newStep3 = {
                        ...suitStepColor,
                        fill3: '#05f2f2',
                      };
                      setSuitStepColor(newStep3);
                      setSuitStep3('suitStepLine');
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
