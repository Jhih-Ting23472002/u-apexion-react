import React, { useEffect, useState } from 'react';
import '../Products.scss';
import ProductsConfig from '../ProductsConfig';

function Recommend(post) {
  return (
    <>
    <div className="pr-card">
      <a href="#/" className="pr-img">
        <img src={ProductsConfig.IMG_PATH+'/'+ (post.product_img)} alt="" />
      </a>
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
export default Recommend;
