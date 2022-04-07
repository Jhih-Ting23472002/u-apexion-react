import './ticket.css';
import stepCircle from './img/stepCircle.png';
import stepCircleMb from './img/stepCircle-mb.png';
import menu01 from './img/menu01.jpg';
import menu02 from './img/menu02.jpg';
import menu03 from './img/menu03.jpg';
import menu04 from './img/menu04.jpg';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TicketConfirmModal from './TicketConfirmModal';
import config from './Config';
import { motion } from 'framer-motion';

function TicketMeal(props) {
  const [modalShow, setModalShow] = useState(false);
  const [demoImg, setDemoImg] = useState('menu01');
  const [active, setActive] = useState([true, false, false, false]);
  const [menuTitle, setMenuTitle] = useState('太空拉麵');
  const [menuContent, setMenuContent] = useState(
    '叉燒肉脂肪偏多，雞肉則是舒肥的方式料理，湯頭屬於濃郁系，熱愛日式口味的拉麵控絕對會愛。'
  );
  const {
    mealSelected,
    tripSelected,
    tripDate,
    seatNumberDemo,
    setMealSelected,
    change,
    setChange,
    tripDays,
    tripPrice,
    memberName,
  } = props;

  const memberAPI = config.TK_ORDER_API;
  // const [memberData, setMemberData] = useState([]);

  // const [seatNumberDemo, setSeatNumberDemo] = useState([]);
  // useEffect(() => {
  //   (async function () {
  //     const response = await fetch(memberAPI, {
  //       method: 'GET',
  //     });
  //     const memberListDatas = await response.json();
  //     // console.log(memberListDatas.member_name);
  //     console.log(memberListDatas[0].member_name);
  //     const memberArray = memberListDatas[0].member_name.split(',');
  //     console.log('餐點頁面', memberArray);
  //     setMemberData(memberArray);
  //   })();
  // }, []);

  useEffect(() => {
    switch (demoImg) {
      case 'menu01':
        setActive([true, false, false, false]);
        setMenuTitle('太空拉麵');
        setMenuContent(
          '叉燒肉脂肪偏多，雞肉則是舒肥的方式料理，湯頭屬於濃郁系，熱愛日式口味的拉麵控絕對會愛。'
        );
        break;
      case 'menu02':
        setActive([false, true, false, false]);
        setMenuTitle('太空炒飯');
        setMenuContent(
          '米飯炒得較鬆軟，搭配著一旁的酸豆使口味更為豐富，上頭排骨有厚度，搭配著醬油和蔥末一起吃很有味。'
        );
        break;
      case 'menu03':
        setActive([false, false, true, false]);
        setMenuTitle('太空咖哩');
        setMenuContent(
          '香辣濃稠咖哩搭配上，與宮城特產的「發芽米」，以各百分之50的黃金比例，調配出太空白米飯。'
        );
        break;
      case 'menu04':
        setActive([false, false, false, true]);
        setMenuTitle('太空炒麵');
        setMenuContent(
          '蔬菜的甜味加上肉絲的鮮香，油麵把鮮美湯汁吸得飽飽的，咕嚕咕嚕滑順入喉的美味，每每讓人欲罷不能。'
        );
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

  const mealSelectedHandler = function (e) {
    console.log(e.target.dataset.user);
    const newMealState = mealSelected;
    console.log(newMealState);
    newMealState[e.target.dataset.user] = e.target.value;

    setMealSelected(newMealState);
    const nowChange = change + 1;
    setChange(nowChange);
    console.log('newMealState', newMealState);
    console.log('mealSelected', mealSelected);
  };

  console.log(demoImg);
  return (
    <>
      (
      <div className="ticket-container">
        <motion.div
          className="step-circle"
          animate={{ x: [0, 0], rotate: [70, 0] }}
          transition={{ duration: 2 }}
        >
          <img className="step-circle-img" src={stepCircle} alt="" />
          <img className="step-circle-mb" src={stepCircleMb} alt="" />
          <div className="ticket-steps">
            <p>STEP</p>
            <p>4</p>
          </div>
        </motion.div>
        <div className="step-circle-mb-wrap">
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
              <div className="menu-word-mb">
                <h3>{menuTitle}</h3>
                <p>{menuContent}</p>
              </div>
              <div className="menu-list">
                <div
                  className={demoImg === 'menu01' ? 'menu-clicked' : 'menu'}
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
                      叉燒肉脂肪偏多，雞肉則是舒肥的方式料理，湯頭屬於濃郁系，熱愛日式口味的拉麵控絕對會愛。
                    </p>
                  </div>
                </div>
                <div
                  className={demoImg === 'menu02' ? 'menu-clicked' : 'menu'}
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
                      米飯炒得較鬆軟，搭配著一旁的酸豆使口味更為豐富，上頭排骨有厚度，搭配著醬油和蔥末一起吃很有味。
                    </p>
                  </div>
                </div>
                <div
                  className={demoImg === 'menu03' ? 'menu-clicked' : 'menu'}
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
                      香辣濃稠咖哩搭配上，與宮城特產的「發芽米」，以各百分之50的黃金比例，調配出太空白米飯。
                    </p>
                  </div>
                </div>
                <div
                  className={demoImg === 'menu04' ? 'menu-clicked' : 'menu'}
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
                      蔬菜的甜味加上肉絲的鮮香，油麵把鮮美湯汁吸得飽飽的，咕嚕咕嚕滑順入喉的美味，每每讓人欲罷不能。
                    </p>
                  </div>
                </div>
              </div>
              <div className="menu-demo-area">
                <img src={'./ticket_img/' + demoImg + '.jpg'} alt="" />
              </div>
            </div>
            <div className="menu-select-area">
              {memberName.map((v, i) => {
                return (
                  <div key={i}>
                    <label htmlFor="">{v}</label>
                    <select
                      onChange={e => mealSelectedHandler(e)}
                      data-user={v}
                      name=""
                      id=""
                    >
                      <option value="">請選擇餐點</option>
                      <option value="太空拉麵">太空拉麵</option>
                      <option value="太空炒飯">太空炒飯</option>
                      <option value="太空咖哩">太空咖哩</option>
                      <option value="太空炒麵">太空炒麵</option>
                    </select>
                  </div>
                );
              })}
            </div>
            <Link
              to="/ticket-seat-choose"
              className="ticket-meal-back"
              href="/"
            >
              <i className="fa-solid fa-left-long"></i>Back
            </Link>
            <p className="ticket-meal-next" onClick={() => setModalShow(true)}>
              Next<i className="fa-solid fa-right-long"></i>
            </p>
          </div>
        </div>
      </div>
      <TicketConfirmModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        mealSelected={mealSelected}
        tripSelected={tripSelected}
        tripDate={tripDate}
        seatNumberDemo={seatNumberDemo}
        tripDays={tripDays}
        tripPrice={tripPrice}
        memberName={memberName}
      />
      )
    </>
  );
}

export default TicketMeal;
