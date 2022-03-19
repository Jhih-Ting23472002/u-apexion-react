import React from 'react';
import '../ProductsList.scss';
import ProductsConfig from '../ProductsConfig';


function ListCards(post) {
  return (
    <>
      <div className="col-md-4">
        <div className="card pr-card mb-5">
          <img
            className="card-img-top"
            src={ProductsConfig.IMG_PATH+'/'+ (post.product_img)}
            alt=""
          />
          <div className="card-body">
            <p className="card-text mb-3">{post.product_name}</p>
            <p className="card-text">{post.material}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default ListCards;
