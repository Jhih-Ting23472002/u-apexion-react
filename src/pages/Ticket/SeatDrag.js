import React, { FC, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

function Dragtest(props) {
  const [state, setState] = useState([
    { id: 1, name: 'A.1' },
    { id: 2, name: 'A.2' },
    { id: 3, name: 'A.3' },
    { id: 4, name: 'A.4' },
  ]);

  return (
    <>
      <ReactSortable list={state} setList={setState}>
        {state.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </ReactSortable>
    </>
  );
}

export default Dragtest;
