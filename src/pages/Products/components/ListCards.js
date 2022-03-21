import React from 'react';
import '../ProductsList.scss';
import ProductsConfig from '../ProductsConfig';
import { Link } from 'react-router-dom';

function ListCards(props) {
  return (
    <>
      <div className="col-md-4">
        <Link to={'/products-list/product-detail/' + props.sid} className="card pr-card mb-5">
          <img
            className="card-img-top"
            src={ProductsConfig.IMG_PATH+'/'+ (props.product_img)}
            alt=""
          />
          <div className="card-body">
            <p className="card-text mb-3">{props.product_name}</p>
            <p className="card-text">{props.material}</p>
          </div>
        </Link>
      </div>
    </>
  );
}
export default ListCards;
