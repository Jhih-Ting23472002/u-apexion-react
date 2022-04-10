import React, { useState, useContext, useRef, useEffect } from 'react';
import './CustomizeCraft.css';
//購物車數量
import CartQuantity from '../Products/CartQuantity';
import { useHistory } from 'react-router-dom';
const allCountry = [
  '/customize_img/美國.png',
  '/customize_img/加拿大.png',
  '/customize_img/中華人民共和國.png',
  '/customize_img/中華民國.png',
  '/customize_img/日本.png',
  '/customize_img/大韓民國.png',
  '/customize_img/西班牙.png',
  '/customize_img/英國.png',
  '/customize_img/烏克蘭.png',
  '/customize_img/德國.png',
];

function CustomizeCraft(props) {
  const { cartTotal, setCartTotal } = useContext(CartQuantity);
  const { setCraft } = props;
  const history = useHistory();
  const [craftBase64, setCraftBase64] = useState('');

  const [stepClassname1, setStepClassname1] = useState('');
  const [stepClassname2, setStepClassname2] = useState('');
  const [stepClassname3, setStepClassname3] = useState('');
  const [craftStep, setCraftStep] = useState({
    fill1: '#595959',
    fill2: '#595959',
  });
  const [craftLeftOut, setCraftLeftOut] = useState('');
  const [craftRightOut, setCraftRightOut] = useState('');
  const [countryImg, setCountryImg] = useState('');
  //console.log(countryImg)
  const [craftCountryStyle, setCraftCountryStyle] = useState('0');
  const [craftString, setCraftString] = useState('');
  const [labelSt, setLabelSt] = useState('請輸入名稱(8個字元內)');
  const [country, setCountry] = useState('');
  const [craftPrice, setPrice] = useState(20000);
  const [craftTotal, setTotal] = useState(1);
  const [craftDataBox, setCraftDataBox] = useState(' translateY(50px)');

  const printRef = useRef(null);
  useEffect(() => {
    if (!printRef) return;
    //畫太空船
    const ctx = printRef.current.getContext('2d');
    const imageCraft = new Image();
    imageCraft.src = '/customize_img/spacecraft.png';
    ctx.drawImage(imageCraft, 0, 0, 70, 400);
    //畫國旗
    ctx.rotate((-90 * Math.PI) / 180);
    //畫筆轉90度
    ctx.filter = 'contrast(0.8)';
    const imageCraftCountry = new Image();
    imageCraftCountry.src = countryImg;
    // console.log(countryImg);
    ctx.drawImage(imageCraftCountry, -63, 24, 38, 23);
    ctx.filter = 'contrast(1)';
    //畫字串
    ctx.fillText(craftString, -285, 38.5);
    ctx.font = '10px sans-serif';
    //畫筆回轉90度(回歸)
    ctx.rotate((90 * Math.PI) / 180);

    const canvasSave = document.querySelector('.craftCanvasOnly');
    const d = canvasSave.toDataURL('image/png');
    setCraftBase64(d);
    setTimeout(() => {
      document.querySelector('.craftData').innerHTML = country;
    }, 300);
  }, [countryImg, craftString, printRef, craftBase64, country]);

  function addCart() {
    setCraft(function (prevData) {
      setCartTotal(cartTotal + 1);
      setTimeout(() => {
        history.push('/customize-seat');
      }, 1500);

      return [
        ...prevData,
        { craftString, country, craftPrice, craftTotal, craftBase64 },
      ];
    });
  }

  return (
    <>
      <section className="Customcraft-page-view">
        <canvas
          ref={printRef}
          className="craftCanvasOnly"
          width={90}
          height={400}
        />
        <div
          className="craft-tools craftMoveLeft2"
          style={{ animation: craftLeftOut }}
        >
          <div className="craft-step">
            <svg
              viewBox="0 0 859 707"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* 圓形1 */}
              <path
                d="M418.903 6.28445C418.903 9.72722 416.112 12.5181 412.669 12.5181C409.226 12.5181 406.436 9.72722 406.436 6.28445C406.436 2.84169 409.226 0.0507812 412.669 0.0507812C416.112 0.0507812 418.903 2.84169 418.903 6.28445Z"
                fill={craftStep.fill1}
                style={{ transition: '.5s ease-in-out' }}
              />

              {/* 線1 背景底線 */}
              <path
                d="M412.669 6.28442H6.23389V62.3875"
                stroke="#595959"
                strokeWidth="3"
              />
              {/* 線1 主線 */}
              <path
                className={stepClassname1}
                d="M412.669 6.28442H6.23389V62.3875"
                stroke={craftStep.fill1}
                strokeWidth="3"
              />

              {/* 圓形2 */}
              <path
                d="M12.4673 62.3875C12.4673 65.8302 9.67643 68.6212 6.23367 68.6212C2.79091 68.6212 0 65.8302 0 62.3875C0 58.9447 2.79091 56.1538 6.23367 56.1538C9.67643 56.1538 12.4673 58.9447 12.4673 62.3875Z"
                fill={craftStep.fill1}
                style={{ transition: ' .5s ease-in-out 1.5s' }}
              />

              {/* 圓形3 */}
              <path
                d="M12.4673 657.234C12.4673 660.676 9.67643 663.467 6.23367 663.467C2.79091 663.467 0 660.676 0 657.234C0 653.791 2.79091 651 6.23367 651C9.67643 651 12.4673 653.791 12.4673 657.234Z"
                fill={craftStep.fill2}
                style={{ transition: ' .5s ease-in-out ' }}
              />
              {/* 背景線2 */}
              <path
                d="M6.23389 656.5V700.716H346.5"
                stroke="#595959"
                strokeWidth="3"
              />
              {/* 主線2 */}
              <path
                className={stepClassname2}
                d="M6.23389 656.5V700.716H346.5"
                stroke="#595959"
                strokeWidth="2"
              />
              {/* 圓形4 */}
              <path
                d="M353.467 701.234C353.467 704.676 350.676 707.467 347.234 707.467C343.791 707.467 341 704.676 341 701.234C341 697.791 343.791 695 347.234 695C350.676 695 353.467 697.791 353.467 701.234Z"
                fill={craftStep.fill2}
                style={{ transition: ' .5s ease-in-out 1s' }}
              />
              {/* 圓形5 */}
              <path
                d="M576.467 701.234C576.467 704.676 573.676 707.467 570.234 707.467C566.791 707.467 564 704.676 564 701.234C564 697.791 566.791 695 570.234 695C573.676 695 576.467 697.791 576.467 701.234Z"
                fill={craftStep.fill2}
                style={{ transition: ' .5s ease-in-out 1.5s' }}
              />

              {/* 背景按鈕線 */}
              <path
                d="M569.758 700.716H854.013"
                stroke="#595959"
                strokeWidth="3"
              />
              {/* 按鈕主線 */}
              <path
                className={stepClassname3}
                d="M569.758 700.716H854.013"
                strokeWidth="2"
              />
              {/* 圓形6 */}
              <path
                d="M860.467 701.234C860.467 704.676 857.676 707.467 854.234 707.467C850.791 707.467 848 704.676 848 701.234C848 697.791 850.791 695 854.234 695C857.676 695 860.467 697.791 860.467 701.234Z"
                fill={craftStep.fill2}
                style={{ transition: ' .5s ease-in-out 1.5s' }}
              />
            </svg>
          </div>
          <div id="canvasCraft" className="craft-img" width="120" height="600 ">
            <div
              className="craft-filter2"
              style={{ opacity: craftCountryStyle }}
            >
              <img
                width="65"
                height="39"
                className="craft-area-view1-country2"
                src={countryImg}
                alt=""
                style={{ opacity: craftCountryStyle }}
              />
            </div>
            <img src={'/customize_img/spacecraft.png'} alt="" />
            <p className="craft-string">{craftString}</p>
          </div>
        </div>
        <div
          className="craft-main-area craftMoveLeft3"
          style={{ animation: craftLeftOut }}
        >
          <div className="craft-area-view1">
            <div
              className="craft-filter"
              style={{ opacity: craftCountryStyle }}
            >
              <img
                className="craft-area-view1-country"
                src={countryImg}
                alt=""
                style={{ opacity: craftCountryStyle }}
              />
            </div>
            <img
              className="craft-area-view1-pic"
              src={'/customize_img/spacecraft.png'}
              alt=""
            />
          </div>
          <div className="craft-lorem">
            <p>
              高貴的太空船，搭配高貴的貴賓所設計的高貴外觀，再加上高貴的行程，配上同行高貴旅遊夥伴，一起進入高貴的宇宙，一切都變得特別的高貴了。
            </p>
          </div>
          <div className="craft-area-view2">
            <img
              className="craft-area-view2-pic"
              src={'/customize_img/spacecraft.png'}
              alt=""
            />
            <p className="craft-string2">{craftString}</p>
          </div>
        </div>
        <svg
          style={{ animation: craftLeftOut }}
          className="left-page-svg craftMoveLeft1"
          viewBox="0 0 913 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-5 0L420 0L200 1024L-5 1024L-5 0Z" fill="#323232" />
        </svg>

        <div
          className="craft-card craftMoveRight2"
          style={{ animation: craftRightOut }}
        >
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
                const newStep = {
                  ...craftStep,
                  fill1: '#05f2f2',
                };
                setCraftStep(newStep);
                setStepClassname1('stepLine');
              }}
            />
            <label>{labelSt}</label>
          </div>
          <div className="craftDataBox" style={{ transform: craftDataBox }}>
            <h4 className="craftData">3</h4>
          </div>
          <div className="country-select">
            {allCountry.map((v, i) => {
              return (
                <div
                  className="suit-flag"
                  //關鍵在這邊的 className 更改大家都一起改
                  key={i}
                  data-craftimg={v.slice(15, -4)}
                  onClick={e => {
                    const newCraftDataBoxHide = 'translateY(50px)';
                    setCraftDataBox(newCraftDataBoxHide);
                    setTimeout(() => {
                      const newCraftDataBoxShow = 'translateY(0px)'
                      setCraftDataBox(newCraftDataBoxShow);
                    }, 700);
                    //抓取圖片放入太空船
                    const closeOpa = '0';
                    setCraftCountryStyle(closeOpa);
                    setTimeout(() => {
                      // 設置延遲
                      const openOpa = '1';
                      setCraftCountryStyle(openOpa);
                      // 讓圖片淡入
                      setCountryImg(e.target.dataset.img);
                      // console.log('1===', e.target.dataset.img);
                      // 載入圖片
                    }, 700);
                    const newStep2 = {
                      ...craftStep,
                      fill2: '#05f2f2',
                    };
                    setCraftStep(newStep2);
                    setStepClassname2('stepLine2');
                    setTimeout(() => {
                      setStepClassname3('stepLine3');
                    }, 2000);
                    //點選國旗變色

                    document.querySelectorAll('.suit-flag').forEach(v => {
                      v.classList.remove('click-country');
                    });
                    e.currentTarget.classList.add('click-country');
                    setCountry(e.currentTarget.dataset.craftimg);
                  }}
                >
                  <img data-img={v} src={v} alt="" />
                </div>
              );
            })}
            <div className="suit-flag">
              <div className="no-select">
                <img src={'/customize_img/noselect.png'} alt="" />
              </div>
            </div>
          </div>
          <button
            className="craft-circle-btn"
            onClick={() => {
              const newLeftOut = 'craftMoveLeftOut 1.4s ease-in-out forwards ';
              setCraftLeftOut(newLeftOut);
              const newRightOut = 'suitsMoveRightOut 1.4s ease-in-out forwards';
              setCraftRightOut(newRightOut);
              addCart();
            }}
          >
            完成送出
          </button>
        </div>

        <svg
          style={{ animation: craftRightOut }}
          className="right-page-svg craftMoveRight1"
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
