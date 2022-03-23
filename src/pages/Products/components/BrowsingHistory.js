import React, { useEffect, useState } from 'react';
import '../productsDetail.scss';
import ProductsConfig from '../ProductsConfig';
import { Link } from 'react-router-dom';

function BrowsingHistory() {
//  console.log(props.Storages);
// const newStorages=[...props];
// console.log(newStorages);

// const a=function getStorageValue(defaultValue) {

//   if (typeof window !== "undefined") {
//     const saved = localStorage.getItem('productStorage');
//     const initial = saved !== null ? JSON.parse(saved) : defaultValue;
//     return initial;
//   }
// }
// console.log(a);

  return (
    <>
      <div className="col-md-4">
        <div className="card pr-card mb-5">
          <img
            className="card-img-top"
            //src={`http://localhost:3001/img/product_img/${props.Storages?.productLocalStorage??'M021S_BK004.jpeg'}`}
            alt=""
          />
          <div className="card-body">
            <p className="card-text mb-3"></p>
            <p className="card-text">灰色科技棉、馬海毛和羊駝毛提花</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default BrowsingHistory;
