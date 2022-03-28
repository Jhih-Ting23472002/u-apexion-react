import React, { FC, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

function Dragtest(props) {
  const { seatNumberDemo } = props;

  //生命週期關係無法更新畫面
  console.log('位子號碼', seatNumberDemo);

  // const seatNumberState = [];
  // seatNumber.map((v, i) => {
  //   seatNumberState.push({ id: i, name: v });
  //   return seatNumberState;
  // });
  // console.log('seatNumberState', seatNumberState);
  const [state, setState] = useState(seatNumberDemo);
  return (
    <>
      <ReactSortable list={state} setList={setState}>
        {seatNumberDemo.map(item => (
          <div className="seat-number-demo" key={item.id}>{item.name}</div>
        ))}
      </ReactSortable>
    </>
  );
}

export default Dragtest;
