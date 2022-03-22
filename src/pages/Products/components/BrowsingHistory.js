import React, { useEffect, useState } from 'react';
import '../productsDetail.scss';
import ProductsConfig from '../ProductsConfig';
import { Link } from 'react-router-dom';


function BrowsingHistory(props) {
  const { ProductDetail } = props;
  return (
    <>
      <div className="col-md-4">
        <div className="card pr-card mb-5">
          <img
            className="card-img-top"
            src="./product_img/M021J_BK019.jpg"
            alt=""
          />
          <div className="card-body">
            <p className="card-text mb-3">太空飛行員外套</p>
            <p className="card-text">灰色科技棉、馬海毛和羊駝毛提花</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default BrowsingHistory;
