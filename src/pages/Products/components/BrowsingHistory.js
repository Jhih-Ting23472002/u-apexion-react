import React, { useEffect, useState } from 'react';
import '../productsDetail.scss';
import ProductsConfig from '../ProductsConfig';
import { Link } from 'react-router-dom';
import { object } from 'prop-types';

function BrowsingHistory(props) {
const [productLocalStorage,setProductLocalStorage]=useState([])

  //console.log(typeof options)
  console.log(props.Storages.productLocalStorage);
  // const arr = props.Storages.productLocalStorage
  // setProductLocalStorage(arr)

  // const sliceThree= productLocalStorage.slice(-3);
  //  console.log(sliceThree);

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
