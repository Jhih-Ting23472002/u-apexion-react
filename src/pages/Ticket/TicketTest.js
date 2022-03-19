import { useState } from 'react';
import _ from 'lodash';

const myYear = 2022;
const myMonth = 2;

function TicketTest() {
  const now = new Date();
  const nowY = myYear ? myYear : now.getFullYear();

  const nowM = myMonth ? myMonth : now.getMonth() + 1; //注意回傳為 0~11

  const weekDayList = ['日', '一', '二', '三', '四', '五', '六'];

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

  return (
    <>
      <h1 className="calender-test">日曆</h1>
      <h2 id="yearAndMonth" className="calender-test">
        {nowY + '/' + nowM}
      </h2>
      <table border="1" className="calender-test">
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
                  <td key={idx}>{item}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default TicketTest;
