import React, { useEffect, useState } from 'react';
import '../Products.scss';
import ProductsConfig from '../ProductsConfig';
import { Link, useParams, withRouter } from 'react-router-dom';

function Recommend(post) {
  const { id } = useParams();

  return (
    <>
      <div className="pr-card">
        <Link to={'/products-list/product-detail/' + post.sid} className="pr-img">
          <img src={ProductsConfig.IMG_PATH + '/' + post.product_img} alt="" />
        </Link>
        <div className="pr-content">
          <h4>{post.product_name}</h4>
          <p className="pr-p">$</p>
          <p>{post.price}</p>
          <p className="pr-p-p">{post.material}</p>
          <input type="button" value="+" name="" className="pr-card-button" />
        </div>
      </div>
    </>
  );
}
export default withRouter(Recommend);
