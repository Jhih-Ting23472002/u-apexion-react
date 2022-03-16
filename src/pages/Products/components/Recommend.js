import React from 'react';
import '../Products.scss';

function Recommend() {
  return (
    <>
    <div className="pr-card">
      <a href="#/" className="pr-img">
        <img src="./product_img/M021J_BK019.jpg" alt="" />
      </a>
      <div className="pr-content">
        <h4>太空飛行員外套</h4>
        <p className="pr-p">$</p>
        <p>1650</p>
        <p className="pr-p-p">黑色科技棉防撕裂物料</p>
        <input type="button" value="+" name="" className="pr-card-button" />
      </div>
    </div>
    </>
  );
}
export default Recommend;
