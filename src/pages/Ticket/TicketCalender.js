import { useState, useEffect } from 'react';
import _ from 'lodash';

function TicketCalender() {
  const [monthSelected, setMonthSelected] = useState(0);
  const [monthShow, setMonthShow] = useState([0, 1, 2]);

  const [pickDate, setPickDate] = useState('');
  const [date, setDate] = useState([]);

  //   初始畫面
  useEffect(() => {
    (async function () {
      const response = await fetch(
        `http://localhost:3001/ticket-date/api/date-list/${monthSelected}`,
        {
          method: 'GET',
        }
      );
      const dateListDatas = await response.json();
      setDate(dateListDatas);
      console.log(dateListDatas);
      console.log(date);
    })();
  }, []);

  //   更新畫面
  useEffect(() => {
    (async function () {
      const response = await fetch(
        `http://localhost:3001/ticket-date/api/date-list/${monthSelected}`,
        {
          method: 'GET',
        }
      );
      const dateListDatas = await response.json();
      setDate(dateListDatas);
      console.log(dateListDatas);
      console.log(date);
    })();
  }, [monthSelected]);

  // 顯示日曆
  function monthHandler(e) {
    // console.log(e.target.value);
    // console.log('123');
    // 獲取滑鼠點選所選擇的年月值
    setMonthSelected(e.target.value);
    setMonthShow([
      monthSelected - 1 <= -1 ? '' : monthSelected - 1,
      monthSelected,
      monthSelected + 1,
    ]);
  }

  const now = new Date();
  const nowY = 2022;
  const nowM = monthSelected + 1 || now.getMonth() + 1; //注意回傳為 0~11
  const days = new Date(nowY, nowM, 0).getDate();
  const firstDay = new Date(nowY, nowM - 1, 1).getDay();
  const daysDataArray = [];

  for (let i = 0; i < firstDay; i++) {
    daysDataArray.push('');
  }

  for (let i = 0; i < days; i++) {
    daysDataArray.push(i + 1);
  }

  const daysDisplayArray = _.chunk(daysDataArray, 7);

  const weekDayList = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];

  const monthsArray = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const monthTitle = monthsArray[monthSelected];

  return (
    <>
      <div className="ticket-calender">
        <div>
          <div className="ticket-calender-title">
            <h3>2022 &nbsp; {monthTitle}</h3>
          </div>
          <div className="ticket-calender-date">
            <table border="1" className="tbcal">
              <thead id="title">
                <tr>
                  {weekDayList.map(function (v, i) {
                    return <th key={i}>{v}</th>;
                  })}
                </tr>
              </thead>
              <tbody id="data">
                {daysDisplayArray.map((v, i) => {
                  return (
                    <tr key={i}>
                      {v.map((item, idx) => (
                        <td
                          key={idx}
                          data-date={item ? date[item - 1].departure_date : ''}
                          onClick={() => {}}
                        >
                          {item}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <a className="ticket-date-back" href="/">
            <i className="fa-solid fa-left-long"></i>Back
          </a>
          <a className="ticket-date-next" href="/">
            Next<i className="fa-solid fa-right-long"></i>
          </a>
        </div>
        <div className="ticket-calender-month">
          <ul>
            <li
              value="0"
              onClick={e => {
                monthHandler(e);
              }}
            >
              Jan
            </li>
            <li
              value="1"
              onClick={e => {
                monthHandler(e);
              }}
            >
              Feb
            </li>
            <li
              value="1"
              onClick={e => {
                monthHandler(e);
              }}
            >
              Mar
            </li>
            <li
              value="3"
              onClick={e => {
                monthHandler(e);
              }}
            >
              Apr
            </li>
            <li
              value="4"
              onClick={e => {
                monthHandler(e);
              }}
            >
              May
            </li>
            <li
              value="5"
              onClick={e => {
                monthHandler(e);
              }}
            >
              Jun
            </li>
            <li
              value="6"
              onClick={e => {
                monthHandler(e);
              }}
            >
              Jul
            </li>
            <li
              value="7"
              onClick={e => {
                monthHandler(e);
              }}
            >
              Aug
            </li>
            <li
              value="8"
              onClick={e => {
                monthHandler(e);
              }}
            >
              Sep
            </li>
            <li
              value="9"
              onClick={e => {
                monthHandler(e);
              }}
            >
              Oct
            </li>
            <li
              value="10"
              onClick={e => {
                monthHandler(e);
              }}
            >
              Nov
            </li>
            <li
              value="11"
              onClick={e => {
                monthHandler(e);
              }}
            >
              Dec
            </li>
          </ul>
        </div>
        <div className="ticket-calender-month-mb">
          <ul>
            <i className="fas fa-angle-left"></i>

            <li
              value={[monthShow[0]]}
              onClick={e => {
                monthHandler(e);
              }}
            >
              {monthsArray[monthShow[0]]}
            </li>
            <li
              value={[monthShow[1]]}
              onClick={e => {
                monthHandler(e);
              }}
            >
              {monthsArray[monthShow[1]]}
            </li>
            <li
              value={[monthShow[2]]}
              onClick={e => {
                monthHandler(e);
              }}
            >
              {monthsArray[monthShow[2]]}
            </li>
            <i
              onClick={e => {
                setMonthSelected(monthSelected + 1);
                monthHandler(e);
              }}
              className="fa-solid fa-angle-right"
            ></i>
          </ul>
        </div>
      </div>
    </>
  );
}

export default TicketCalender;
