import React, { useEffect, useState } from 'react';
import '../Products.scss';
import ProductsConfig from '../ProductsConfig';

function NewProducts(post) {
  
  return (
    <>
      <div className="pr-card-list">
        <div  
          onClick={() =>
            post.setNewProductImg(ProductsConfig.IMG_PATH + '/' + post.image_photo)
          }
          className="pr-card-list-img"
        >
          <img src={ProductsConfig.IMG_PATH + '/' + post.product_img} alt="" />
        </div>
        <div className="pr-card-list-txt">
          <div>
            <h3>{post.product_name}</h3>
            <p>{post.material}</p>
          </div>
          <div className="pr-fas fa-star-div">
            <i className="fas fa-star"></i>
          </div>
          <div className="price">
            <div className="pr-currencySymbol">
              $ <p>{post.price}</p>
            </div>
            <i className="fa-solid fa-circle-plus fa-2xl"></i>
          </div>
        </div>
      </div>
    </>
  );
}
export default NewProducts;
