import { before } from 'lodash';
import React, { useState, useEffect } from 'react';
import './CustomizeCraft.css';
import spaceCraft from './images/spacecraft.png';

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

function CustomizeCraft() {
  const [countryImg, setCountryImg] = useState({});
  const [classNameSwitch, setClassNameSwitch] = useState(0);
  const [countryClass, setCountryClass] = useState('suit-flag');
  const [craftString, setCraftString] = useState('');
  const [labelSt, setLabelSt] = useState('請輸入名稱(8個字元內)');
  // const CountrySwitch = e => {
  //   setClassNameSwitch(true);
  //   if (classNameSwitch === true) {
  //     e.currentTarget.className = 'suit-flag' ? 'click-country' : '';
  //     setClassNameSwitch(false);
  //   }

  //   console.log(classNameSwitch);
  // };
  // useEffect(()=>{

  // })
  return (
    <>
      <section className="Customcraft-page-view">
        <div className="craft-tools">
          <div className="craft-step">
            <svg
              viewBox="0 0 859 707"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M412.669 6.28442H6.23389V62.3875"
                stroke="#595959"
                strokeWidth="2"
              />
              <path
                d="M346.592 700.716H6.23389V657.08"
                stroke="#595959"
                strokeWidth="2"
              />
              <path
                d="M418.903 6.28445C418.903 9.72722 416.112 12.5181 412.669 12.5181C409.226 12.5181 406.436 9.72722 406.436 6.28445C406.436 2.84169 409.226 0.0507812 412.669 0.0507812C416.112 0.0507812 418.903 2.84169 418.903 6.28445Z"
                fill="#595959"
              />
              <path
                d="M12.4673 62.3875C12.4673 65.8302 9.67643 68.6212 6.23367 68.6212C2.79091 68.6212 0 65.8302 0 62.3875C0 58.9447 2.79091 56.1538 6.23367 56.1538C9.67643 56.1538 12.4673 58.9447 12.4673 62.3875Z"
                fill="#595959"
              />
              <circle cx="346.592" cy="700.716" r="6.23367" fill="#595959" />
              <circle cx="6.23367" cy="657.08" r="6.23367" fill="#595959" />
              <path d="M569.758 700.716H854.013" stroke="#595959" />
              <ellipse
                rx="4.98694"
                ry="6.23367"
                transform="matrix(-1 0 0 1 854.013 700.716)"
                fill="#595959"
              />
              <ellipse
                rx="4.98694"
                ry="6.23367"
                transform="matrix(-1 0 0 1 569.758 700.716)"
                fill="#595959"
              />
            </svg>
          </div>
          <div className="craft-img">
            <img src={spaceCraft} alt="" />
            <p className="craft-string">{craftString}</p>
          </div>
        </div>
        <div className="craft-main-area">
          <div className="craft-area-view1">
            <img src={spaceCraft} alt="" />
          </div>
          <div className="craft-lorem">
            <p>
              高貴的太空船，搭配高貴的貴賓所設計的高貴外觀，再加上高貴的行程，配上同行高貴旅遊夥伴，一起進入高貴的宇宙，一切都變得特別的高貴了。
            </p>
          </div>
          <div className="craft-area-view2">
            <img src={spaceCraft} alt="" />
            <p className="craft-string2">{craftString}</p>
          </div>
        </div>
        <svg
          className="left-page-svg"
          viewBox="0 0 913 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-5 0L420 0L200 1024L-5 1024L-5 0Z" fill="#323232" />
        </svg>

        <div className="craft-card">
          <h1>請選擇太空船外觀</h1>
          <h3>Customize Your SpaceCraft</h3>
          <h2>20,000$</h2>
          <div className="craft-in-label">
            <input
              type="text"
              pattern="[A-z][0-9][-]{1,8}"
              value={craftString}
              onChange={e => {
                setCraftString(e.target.value);
                e.target.value.length === 0
                  ? setLabelSt('請輸入名稱(8個字元內)')
                  : setLabelSt('');
              }}
            />
            <label>{labelSt}</label>
          </div>

          <div className="country-select">
            {allCountry.map((v, i) => {
              return (
                <div
                  className={countryClass}
                  //關鍵在這邊的 className 更改大家都一起改
                  key={i}
                  onClick={e => {
                    setClassNameSwitch(0);
                    console.log(classNameSwitch);
                    // const newCountryClass = {...countryClass,class:'click-country'}
                    setCountryClass(
                      classNameSwitch === 0 ? 'suit-flag' : 'click-country'
                    );
                    console.log(e.currentTarget.className);

                    setClassNameSwitch(classNameSwitch === 0 ? 1 : 0);

                    console.log(classNameSwitch);
                  }}
                >
                  <img
                    data={v}
                    src={v}
                    alt=""
                    onClick={e => {
                      setCountryImg(e.target.data);
                      // console.log(e.target.data);
                    }}
                  />
                </div>
              );
            })}
            <div className="suit-flag">
              <div className="no-select">
                <img src={require('./images/noselect.png')} alt="" />
              </div>
            </div>
          </div>
          <button className="craft-circle-btn">完成送出</button>
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

export default CustomizeCraft;
