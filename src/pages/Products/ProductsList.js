import React from 'react';
import './ProductsList.scss';
import { Form, FormControl, Button } from 'react-bootstrap';

function ProductsList() {
  return (
    <article>
      <div className="pr-list">
        {/*---------------分類選單-----------------------------------------------------*/}
        <div className="pr-list-nbr">
          <div>
            <a href="#/">男士精品</a>
            <a href="#/">女士精品</a>
            <a href="#/">鞋款</a>
            <a href="#/">配件與腕錶</a>
          </div>
          <div>
            <div className="wrap">
              <form action="" autoComplete="on">
                <input
                  id="search"
                  name="search"
                  type="text"
                  placeholder="請輸入關鍵字?"
                />
                <input id="search_submit" value="" type="submit" />
              </form>
            </div>
          </div>
        </div>
        <div className="pr-list-img">
          <img src="./product_img/cover5_1440_1200.jpeg" alt="" />
        </div>
        <div className="pr-list-img-text">
          <p>
            2021-2022 秋冬季高級時裝<br/>2021-2022 秋冬季高級訂製系列由 Maria Grazia
            Chiuri 設計，展現獨特主題。<br/>
            重新「活在當下」的意思是將焦點轉向有形的物質。
          </p>
        </div>
        <div className="pr-list-card">

        </div>

      </div>
    </article>
  );
}
export default ProductsList;
