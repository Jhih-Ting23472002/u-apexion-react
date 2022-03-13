import { useState } from 'react';

function TicketCalender() {
  const [monthSelected, setMonthSelected] = useState(0);

  window.onload = function () {
    //   initial();
    //   document.querySelector('.selyear').onchange = show;
    //       document.querySelector('.selmonth').onchange = show;
    show();
  };
  // 顯示日曆
  function show(e) {
    // console.log(e.target.value);
    // console.log('123');
    // 獲取滑鼠點選所選擇的年月值
    if (e) {
      setMonthSelected(e.target.value);
    } else {
      setMonthSelected(new Date().getMonth());
    }

    // 判斷是否為閏年,以便確定2月的天數
    // var flag = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
    const dayofmonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // 給date賦值,值為所選擇的某年某月一號
    const dt = new Date();
    dt.setFullYear(2022);
    dt.setMonth(monthSelected);
    dt.setDate(1);
    // 獲取date對應周幾
    const week = dt.getDay();
    // console.log(week);
    // 當月應該列印多少行
    const rows = Math.ceil((dayofmonth[dt.getMonth()] + week) / 7);
    // console.log(dayofmonth[dt.getMonth()]);
    // console.log(dt.getMonth());
    let k = 0;
    // 如果表格中有除表頭外的資料,進行資料刪除,避免上次月份的資料對下次有影響
    const table = document.querySelector('.tbcal');
    while (table.rows.length > 1) {
      table.deleteRow(1);
    }
    // 迴圈向表格中新增資料，生成日曆
    for (let i = 0; i < rows; i++) {
      let row = table.insertRow(i + 1);
      for (let j = 0; j < 7; j++) {
        let cell = row.insertCell(j);
        k++;

        if (k <= week || k > dayofmonth[dt.getMonth()] + week) {
          cell.innerHTML = '';
        } else {
          cell.innerHTML = k - week;
          // console.log(k);
        }
      }
    }
  }

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
  // const monthShows = [
  //   monthsArray[monthSelected - 1],
  //   monthsArray[monthSelected],
  //   monthsArray[monthSelected + 1],
  // ];

  console.log(monthSelected);

  // console.log(monthShows);
  return (
    <>
      <div className="ticket-calender">
        <div>
          <div className="ticket-calender-title">
            {/* <select className="selyear"></select>&nbsp;年&nbsp; */}
            <h3>2022 &nbsp; {monthTitle}</h3>
            {/* <select className="selmonth"></select>&nbsp;月&nbsp; */}
          </div>
          <div className="ticket-calender-date">
            <table className="tbcal">
              <tr>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
              </tr>
            </table>
          </div>
          <a class="ticket-date-back" href="/">
            <i class="fa-solid fa-left-long"></i>Back
          </a>
          <a class="ticket-date-next" href="/">
            Next<i class="fa-solid fa-right-long"></i>
          </a>
        </div>
        <div className="ticket-calender-month">
          <ul>
            <li
              value="0"
              onClick={e => {
                show(e);
              }}
            >
              Jan
            </li>
            <li
              value="1"
              onClick={e => {
                show(e);
              }}
            >
              Feb
            </li>
            <li
              value="1"
              onClick={e => {
                show(e);
              }}
            >
              Mar
            </li>
            <li
              value="3"
              onClick={e => {
                show(e);
              }}
            >
              Apr
            </li>
            <li
              value="4"
              onClick={e => {
                show(e);
              }}
            >
              May
            </li>
            <li
              value="5"
              onClick={e => {
                show(e);
              }}
            >
              Jun
            </li>
            <li
              value="6"
              onClick={e => {
                show(e);
              }}
            >
              Jul
            </li>
            <li
              value="7"
              onClick={e => {
                show(e);
              }}
            >
              Aug
            </li>
            <li
              value="8"
              onClick={e => {
                show(e);
              }}
            >
              Sep
            </li>
            <li
              value="9"
              onClick={e => {
                show(e);
              }}
            >
              Oct
            </li>
            <li
              value="10"
              onClick={e => {
                show(e);
              }}
            >
              Nov
            </li>
            <li
              value="11"
              onClick={e => {
                show(e);
              }}
            >
              Dec
            </li>
          </ul>
        </div>
        <div className="ticket-calender-month-mb">
          <ul>
            {monthsArray.map((v, i) => {
              return (
                <>
                  <li
                    value={i}
                    onClick={e => {
                      show(e);
                    }}
                  >
                    {v}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TicketCalender;
