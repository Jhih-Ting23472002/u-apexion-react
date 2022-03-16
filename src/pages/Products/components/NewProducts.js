import React from 'react';
import '../Products.scss';

function NewProducts() {
  return (
    <>
      <div className="pr-card-list">
        <a href="#/" className="pr-card-list-img">
          <img src="./product_img/M021J_BK019.jpg" alt="" />
        </a>
        <div className="pr-card-list-txt">
          <div>
            <h3>太空飛行員外套</h3>
            <p>黑色科技棉防撕裂物料</p>
          </div>
          <div className="pr-fas fa-star-div">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <div className="price">
            <div className="pr-currencySymbol">
              $ <p>2,599</p>
            </div>
            <input
              type="button"
              value="+"
              name=""
              className="pr-card-list-button"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default NewProducts;
