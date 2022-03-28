import { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function TicketCalender(props) {
  const didMountRef = useRef(false);
  console.log(props.tripDays);
  const [monthSelected, setMonthSelected] = useState(new Date().getMonth());
  const [monthShow, setMonthShow] = useState([0, 1, 2]);

  // const [pickDate, setPickDate] = useState('');
  const [dateList, setDateList] = useState([]);
  const [seatList, setSeatList] = useState({});

  console.log('座位設為狀態1', dateList);
  console.log('座位設為狀態2', seatList);
  // console.log('座位數量', seatList.seat_ordered_count);

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

      const myDateListDatas = [...dateListDatas[0]];
      console.log(myDateListDatas);
      if (dateListDatas[0] && dateListDatas[0].length) {
        myDateListDatas.forEach(v => {
          v.timestamp = new Date(v.departure_date).getTime();
        });
      }
      console.log(
        '抓到的資料',
        myDateListDatas[0].departure_date.toLocaleString()
      );
      setDateList(myDateListDatas);

      const mySeatList = {};
      if (dateListDatas[1] && dateListDatas[1].length) {
        dateListDatas[1].forEach(v => {
          const t = new Date(v.deperature_date).getTime();
          mySeatList[t] = v.seat_ordered_count;
        });
      }
      console.log(mySeatList);
      setSeatList(mySeatList);

      console.log(dateListDatas);
      // console.log(
      //   '第一筆日期',
      //   new Date(dateListDatas[0][0].departure_date).toISOString()
      // );
      // console.log(date);

      if (didMountRef.current) {
        // didUpdate
        document.querySelectorAll('.seat-avalible').forEach(v => {
          v.style.backgroundColor = 'white';
          v.style.color = 'black';
        });
        document.querySelectorAll('.disabled').forEach(v => {
          v.style.backgroundColor = 'rgb(216, 216, 216)';
          v.style.color = 'white';
        });
      } else {
        didMountRef.current = true;
      }
    })();
  }, [monthSelected]);
  /*
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
      setDateList(dateListDatas[0]);
      console.log('日期', dateListDatas[0]);
      console.log('座位', dateListDatas[1]);
      // console.log('座位', seatList);
      console.log('all', dateListDatas);

      // console.log(date);
      console.log(dateList[0].departure_date);
    })();
  }, [monthSelected]);
*/
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
    console.log('日期的e', e);
    //判斷td不包含disbled的className
    if (!e.currentTarget.classList.contains('disabled')) {
      const dateSelected = new Date(
        2022,
        monthSelected,
        parseInt(e.target.innerText) + 1
      )
        .toISOString()
        .slice(0, 10);
      props.setDateDeperature(dateSelected);
      const returnDate = new Date(
        2022,
        monthSelected,
        parseInt(e.target.innerText) + parseInt(props.tripDays)
      )
        .toISOString()
        .slice(0, 10);
      props.setDateBack(returnDate);
      //點擊時全部的td樣式還原
      document.querySelectorAll('.seat-avalible').forEach(v => {
        v.style.backgroundColor = 'white';
        v.style.color = 'black';
      });
      document.querySelectorAll('.disabled').forEach(v => {
        v.style.backgroundColor = 'rgb(216, 216, 216)';
        v.style.color = 'white';
      });
      //被點擊的td變換顏色
      e.currentTarget.style.backgroundColor = '#023e73';
      e.currentTarget.style.color = 'white';
      console.log(
        '目前點擊的datadate',
        e.currentTarget.dataset.date.slice(0, 10)
      );
      console.log('我到這裡了');
      console.log(
        '我要抓的人',
        document.querySelector(
          `td[data-date='${e.currentTarget.dataset.date}']`
        )
      );
      let abc = e.currentTarget.dataset.date.split('-');
      // let abc = '2022-04-12'.split('-');
      abc.splice(
        2,
        1,
        (parseInt(e.currentTarget.dataset.date.split('-')[2]) + 1).toString()
      );

      props.setTripDate({ dateSelected: dateSelected, returnDate: returnDate });
      const def = abc.join('-');
      console.log('揮手揮手!!!!!!!!!!!!!!!!', abc);
      console.log('揮手揮手!!!!!!!!!!!!!!!!', def);
      console.log('我要看到的人', '2022-04-12'.split('-').splice(1, 1, '5'));
      console.log('我要看到的人', abc);
      console.log('我要看到的人', '2022-04-12'.split('-'));

      // '2022-04-12'.split('-').splice(2, 1, '2022-04-12'.split('-')[2] + 1)

      for (let i = 1; i < parseInt(props.tripDays); i++) {
        const tdClicked = e.currentTarget.dataset.date.split('-');
        tdClicked.splice(
          2,
          1,
          (parseInt(e.currentTarget.dataset.date.split('-')[2]) + i).toString()
        );
        const siblingsdataClicked = tdClicked.join('-');
        document.querySelector(
          `td[data-date='${siblingsdataClicked}']`
        ).style.backgroundColor = '#05F2F2';
        document.querySelector(
          `td[data-date='${siblingsdataClicked}']`
        ).style.color = 'white';

        const toFindLastTd = e.currentTarget.dataset.date.split('-');
        toFindLastTd.splice(
          2,
          1,
          (
            parseInt(e.currentTarget.dataset.date.split('-')[2]) +
            parseInt(props.tripDays) -
            1
          ).toString()
        );
        const lastdataClicked = toFindLastTd.join('-');
        document.querySelector(
          `td[data-date='${lastdataClicked}']`
        ).style.backgroundColor = '#023e73';
        document.querySelector(
          `td[data-date='${lastdataClicked}']`
        ).style.color = 'white';
      }
      // console.log(returnDate);
      console.log(props.tripDays);
      console.log(e.target.innerText);
      console.log(e);
      console.log(monthSelected + 1);
    }
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
  console.log('月曆', daysDisplayArray);

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
                          className={
                            dateList[item - 1]?.trip_available ?? ''
                              ? 'seat-avalible'
                              : 'disabled'
                          }
                          value={idx}
                          key={idx}
                          data-date={
                            // item && (dateList[item - 1]?.departure_date ?? '0')
                            item && (dateList[item - 1]?.departure_date ?? '0')
                          }
                          onClick={e => {
                            dateHandler(e);
                          }}
                        >
                          <p>{item}</p>

                          {/* {dateList[item - 1]?.trip_available?? '' &&
                            seatList[dateList[item - 1]?.timestamp ?? '']
                              ? 'SEAT:' +
                                seatList[dateList[item - 1]?.timestamp ?? '']
                              : 'SEAT:0'} */}
                          {dateList[item - 1]?.trip_available ?? '' ? (
                            <span className="seat-count">
                              {seatList[dateList[item - 1]?.timestamp ?? '']
                                ? 'SEAT:' +
                                  (30 -
                                    parseInt(
                                      seatList[
                                        dateList[item - 1]?.timestamp ?? ''
                                      ]
                                    ))
                                : 'SEAT:30'}
                            </span>
                          ) : (
                            <span className="no-seat">SEAT:0</span>
                          )}

                          {/* {seatList.map((v, i) => {
                            if (
                              item & dateList[item - 1]?.departure_date ??
                              '' === v.departure_date ??
                              ''
                            ) {
                              return
                              v.seat_ordered_count ?? '';
                            }
                          })} */}
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
