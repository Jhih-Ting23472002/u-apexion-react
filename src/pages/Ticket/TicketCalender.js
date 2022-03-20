import { useState, useEffect } from 'react';
import _ from 'lodash';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function TicketCalender(props) {
  console.log(props.tripDays);
  const [monthSelected, setMonthSelected] = useState(0);
  const [monthShow, setMonthShow] = useState([0, 1, 2]);

  const [pickDate, setPickDate] = useState('');
  const [dateList, setDateList] = useState([]);

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
      setDateList(dateListDatas);
      console.log(dateListDatas);
      console.log(dateListDatas[0].departure_date);
      // console.log(date);
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
      setDateList(dateListDatas);
      console.log(dateListDatas);
      // console.log(date);
      console.log(dateList[0].departure_date);
    })();
  }, [monthSelected]);

  // 改變月份
  function monthHandler(e) {
    setMonthSelected(e.target.value);
    setMonthShow([
      monthSelected - 1 <= -1 ? '' : monthSelected - 1,
      monthSelected,
      monthSelected + 1,
    ]);
  }

  //   改變出發日期
  function dateHandler(e) {
    const dateSelected = new Date(
      2022,
      monthSelected,
      parseInt(e.target.innerText) + 1
    )
      .toISOString()
      .slice(0, 10);
    props.setDateDeperature(dateSelected);

    // const dateOfDeperature = dateSelected.split('-')[2];
    // const monthOfDeperature = dateSelected.split('-')[1];
    // const dateOfReturn = parseInt(dateOfDeperature) + parseInt(props.tripDays);
    const returnDate = new Date(
      2022,
      monthSelected,
      parseInt(e.target.innerText) + parseInt(props.tripDays)
    )
      .toISOString()
      .slice(0, 10);
    props.setDateBack(returnDate);

    // console.log(returnDate);
    console.log(props.tripDays);

    console.log(e.target.innerText);
    console.log(e);
    console.log(monthSelected + 1);
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
                          data-date={
                            item && (dateList[item - 1]?.departure_date ?? '0')
                          }
                          onClick={e => {
                            dateHandler(e);
                          }}
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
          <Link to="/ticket-trip-choose" className="ticket-date-back">
            <i className="fa-solid fa-left-long"></i>Back
          </Link>
          <Link to="/ticket-seat-choose" className="ticket-date-next">
            Next<i className="fa-solid fa-right-long"></i>
          </Link>
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
