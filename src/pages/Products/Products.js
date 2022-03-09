import React from 'react';
import './Products.scss';

function Products() {
  return (
    <article>
      <div className="pr-home-mv-img">
        <div className="pr-home-mv-p">
          <h2 className="pr-home-h2">2022</h2>
          <p className="pr-home-p1">autumn and winter series</p>
          <p className="pr-home-p2">Take you to space!</p>
        </div>
        <img src="./product_img/product_01.jpg" alt="" />
      </div>
      {/*-------時裝照--------------------------*/}
      <div className="pr-home-fashion-img">
       
        <div className="slider_container">
          <div>
            <img src="./product_img/_CHA0849.jpg" alt="" />
          </div>
          <div>
            <img src="./product_img/_LLL6131.jpg" alt="" />
          </div>
          <div>
            <img src="./product_img/_CHA1089.jpg" alt="" />
          </div>
          <div>
            <img src="./product_img/_ARC0013.jpg" alt="" />
          </div>
          <div>
            <img src="./product_img/_CHA0433.jpg" alt="" />
          </div>
        </div>
        <div className="pr-home-fashion-div">
          <svg
            className="pr-home-fashion-svg"
            width="642"
            height="156"
            viewBox="0 0 642 156"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.93835 0H0V155.993H641.406V142.181H6.93835V0Z"
              fill="white"
            />
          </svg>
          <div className="pr-home-fashion-txt">
            <h2 className="pr-home-fashion-h2">Clothing Collection</h2>
            <p className="pr-home-fashion-p">From U-APEXION</p>
          </div>
        </div>
        <div class="slider_container2">
          <div><img src="./product_img/_CHA0912.jpg" alt="" /></div>
          <div><img src="./product_img/_LLL6122.jpg" alt="" /></div>
          <div><img src="./product_img/_CHA2055.jpg" alt="" /></div>
          <div><img src="./product_img/_ARC0233.jpg" alt="" /></div>
          <div><img src="./product_img/_CHA0448.jpg" alt="" /></div>
        </div>
      </div>
    </article>
  );
}
export default Products;
