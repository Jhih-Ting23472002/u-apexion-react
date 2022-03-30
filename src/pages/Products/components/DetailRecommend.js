import React, { useEffect, useState } from 'react';
import '../productsDetail.scss';
import ProductsConfig from '../ProductsConfig';
import { Link } from 'react-router-dom';

function DetailRecommend(props) {
  const { product, ProductDetail } = props;
  // console.log(props);
//塞選品項排除自己
  const a = props.ProductDetail.filter((v, i) => {
    if (props.product.category == v.category && product.sid !== v.sid) {
      return v;
    }
  });
  // 
  const b = a.filter((v, i) => {
    if (props.product.class == v.class) {
      return v;
    }
  });
  const c = b.sort(() => Math.random() - 0.5).slice(0, 3);
  // console.log(c);

  return (
    <>
      {c.map(v => (
        <div key={v.sid} className="col-md-4">
          <Link to={'/product-detail/' + v.sid}
            className="card pr-card mb-5"
          >
            <img
              className="card-img-top"
              src={ProductsConfig.IMG_PATH + '/' + v.product_img}
              alt=""
            />
            <div className="card-body">
              <p className="card-text mb-3">{v.product_name}</p>
              <p className="card-text">{v.material}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
export default DetailRecommend;
