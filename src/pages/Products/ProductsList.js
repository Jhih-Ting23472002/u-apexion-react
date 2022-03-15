import React from 'react';
import './ProductsList.scss';
import { Form, FormControl, Button } from 'react-bootstrap';

function ProductsList() {
  return (
    <article>
      <div className="pr-list">
        {/*---------------分類選單-----------------------------------------------------*/}
        <div className="pr-list-nbr">
          <div className="pr-list-nbr-a">
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
        {/* ------手機------------------*/}
        <div className="sp-wrap">
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
        <div className="pr-list-img">
          <img src="./product_img/cover5_1440_1200.jpeg" alt="" />
        </div>
        <div className="pr-list-img-text">
          <p>
            2021-2022 秋冬季高級時裝
            <br />
            2021-2022 秋冬季高級訂製系列由 Maria Grazia Chiuri
            設計，展現獨特主題。
            <br />
            重新「活在當下」的意思是將焦點轉向有形的物質。
          </p>
        </div>
        <div className="pr-list-dropdowns">
          <p>件商品</p>
          <div className="primary-navigation">
            <div role="navigation" className="primary-navigation">
              <ul>
                <li>
                  <a href="#/">
                    價格 <i className="fa-solid fa-angle-down"></i>
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a href="#/">由高到低</a>
                    </li>
                    <li>
                      <a href="#/">由低到高</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#/">
                    顏色 <i className="fa-solid fa-angle-down"></i>
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a href="#/">黑色</a>
                    </li>
                    <li>
                      <a href="#/">白色</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* 卡片開始 */}
        <div className="pr-list-cards">
          <div className="col-md-4">
            <div className="card pr-card mb-5">
              <img
                className="card-img-top"
                src="./product_img/M021J_BK019.jpg"
                alt=""
              />
              <div className="card-body">
                <p className="card-text mb-3">太空飛行員外套</p>
                <p className="card-text">灰色科技棉、馬海毛和羊駝毛提花</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card pr-card mb-5">
              <img src="./product_img/M021J_BK019.jpg" alt="" />
              <div className="card-body">
                <p className="card-text mb-3">太空飛行員外套</p>
                <p className="card-text">灰色科技棉、馬海毛和羊駝毛提花</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card pr-card mb-5">
              <img src="./product_img/M021J_BK019.jpg" alt="" />
              <div className="card-body">
                <p className="card-text mb-3">太空飛行員外套</p>
                <p className="card-text">灰色科技棉、馬海毛和羊駝毛提花</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card pr-card mb-5">
              <img src="./product_img/M021J_BK019.jpg" alt="" />
              <div className="card-body">
                <p className="card-text mb-3">太空飛行員外套</p>
                <p className="card-text">灰色科技棉、馬海毛和羊駝毛提花</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card pr-card mb-5">
              <img src="./product_img/M021J_BK019.jpg" alt="" />
              <div className="card-body">
                <p className="card-text mb-3">太空飛行員外套</p>
                <p className="card-text">灰色科技棉、馬海毛和羊駝毛提花</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card pr-card mb-5">
              <img src="./product_img/M021J_BK019.jpg" alt="" />
              <div className="card-body">
                <p className="card-text mb-3">太空飛行員外套</p>
                <p className="card-text">灰色科技棉、馬海毛和羊駝毛提花</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
export default ProductsList;
