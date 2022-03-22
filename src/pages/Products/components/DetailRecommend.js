import React, { useEffect, useState } from 'react';
import '../productsDetail.scss';
import ProductsConfig from '../ProductsConfig';

function DetailRecommend(props) {
   const { product, ProductDetail } = props
  console.log(props)
  // console.log(props.product.category)

  const a= props.ProductDetail.filter((v, i) => {
            if (props.product.category == v.category) {
              return v;
            }
          }) 
          console.log(a)

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
            <p className="card-text mb-3">
              {props.ProductDetail?.product_name ?? '重新整理'}
            </p>
            <p className="card-text">
              {props.ProductDetail?.material ?? '灰色科技棉防撕裂物料'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default DetailRecommend;
