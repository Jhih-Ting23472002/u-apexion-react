import './ticket.css';
import stepCircle from './img/stepCircle.png';
import stepCircleMb from './img/stepCircle-mb.png';
import menu01 from './img/menu01.jpg';
import menu02 from './img/menu02.jpg';
import menu03 from './img/menu03.jpg';
import menu04 from './img/menu04.jpg';
import { useState, useEffect } from 'react';

function TicketMeal() {
  const [demoImg, setDemoImg] = useState(menu01);
  const [active, setActive] = useState([true, false, false, false]);

  useEffect(() => {
    switch (demoImg) {
      case menu01:
        setActive([true, false, false, false]);
        break;
      case menu02:
        setActive([false, true, false, false]);
        break;
      case menu03:
        setActive([false, false, true, false]);
        break;
      case menu04:
        setActive([false, false, false, true]);
        break;
      default:
        console.log(`nothing!`);
    }
  }, [demoImg]);

  const getDemoImg = function (e) {
    setDemoImg(e.currentTarget.dataset.value);
    console.log(e);
    console.log(e.currentTarget);
    console.log(e.currentTarget.dataset.value);
  };

  console.log(demoImg);
  return (
    <>
      (
      <div className="ticket-container">
        <div className="step-circle">
          <img className="step-circle-img" src={stepCircle} alt="" />
          <img className="step-circle-mb" src={stepCircleMb} alt="" />
          <div className="ticket-steps">
            <p>STEP</p>
            <p>4</p>
          </div>
        </div>
        <div className="ticket-menu">
          <div className="ticket-menu-wrap">
            <div className="ticket-menu-title">
              <h2>請選擇 首日機上餐點</h2>
              <p>Select your meal the first day on the rocket,please</p>
            </div>
            <div className="menu-main">
              <div className="menu-list">
                <div
                  className={active[0] ? 'menu-clicked' : 'menu'}
                  data-value="menu01"
                  onClick={e => {
                    getDemoImg(e);
                  }}
                >
                  <div className="menu-img">
                    <img src={menu01} alt="" />
                  </div>
                  <div className="menu-detail">
                    <h3>太空拉麵</h3>
                    <p>
                      歐里庇得斯曾經說過，有遠大抱負的人不可忽略眼前的工作。這不禁令我重新仔細的思考。
                    </p>
                  </div>
                </div>
                <div
                  className={active[1] ? 'menu-clicked' : 'menu'}
                  data-value="menu02"
                  onClick={e => {
                    getDemoImg(e);
                  }}
                >
                  <div className="menu-img">
                    <img src={menu02} alt="" />
                  </div>
                  <div className="menu-detail">
                    <h3>太空炒飯</h3>
                    <p>
                      歐里庇得斯曾經說過，有遠大抱負的人不可忽略眼前的工作。這不禁令我重新仔細的思考。
                    </p>
                  </div>
                </div>
                <div
                  className={active[2] ? 'menu-clicked' : 'menu'}
                  data-value="menu03"
                  onClick={e => {
                    getDemoImg(e);
                  }}
                >
                  <div className="menu-img">
                    <img src={menu03} alt="" />
                  </div>
                  <div className="menu-detail">
                    <h3>太空咖哩</h3>
                    <p>
                      歐里庇得斯曾經說過，有遠大抱負的人不可忽略眼前的工作。這不禁令我重新仔細的思考。
                    </p>
                  </div>
                </div>
                <div
                  className={active[3] ? 'menu-clicked' : 'menu'}
                  data-value="menu04"
                  onClick={e => {
                    getDemoImg(e);
                  }}
                >
                  <div className="menu-img">
                    <img src={menu04} alt="" />
                  </div>
                  <div className="menu-detail">
                    <h3>太空炒麵</h3>
                    <p>
                      歐里庇得斯曾經說過，有遠大抱負的人不可忽略眼前的工作。這不禁令我重新仔細的思考。
                    </p>
                  </div>
                </div>
              </div>
              <div className="menu-demo-area">
                <img src={'./ticket_img/' + demoImg + '.jpg'} alt="" />
              </div>
            </div>
            <div className="menu-select-area">
              <div>
                <label htmlFor="">USER1</label>
                <select name="" id="">
                  <option value="">太空拉麵</option>
                  <option value="">太空炒飯</option>
                  <option value="">太空咖哩</option>
                  <option value="">太空炒麵</option>
                </select>
              </div>
              <div>
                <label htmlFor="">USER2</label>
                <select name="" id="">
                  <option value="">太空拉麵</option>
                  <option value="">太空炒飯</option>
                  <option value="">太空咖哩</option>
                  <option value="">太空炒麵</option>
                </select>
              </div>
              <div>
                <label htmlFor="">USER3</label>
                <select name="" id="">
                  <option value="">太空拉麵</option>
                  <option value="">太空炒飯</option>
                  <option value="">太空咖哩</option>
                  <option value="">太空炒麵</option>
                </select>
              </div>
              <div>
                <label htmlFor="">USER4</label>
                <select name="" id="">
                  <option value="">太空拉麵</option>
                  <option value="">太空炒飯</option>
                  <option value="">太空咖哩</option>
                  <option value="">太空炒麵</option>
                </select>
              </div>
            </div>
            <a className="ticket-meal-back" href="/">
              <i className="fa-solid fa-left-long"></i>Back
            </a>
            <a className="ticket-meal-next" href="/">
              Next<i className="fa-solid fa-right-long"></i>
            </a>
          </div>
        </div>
      </div>
      )
    </>
  );
}

export default TicketMeal;
