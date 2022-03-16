import React from 'react';
import './productsDetail.scss';

function ProductsDetail() {
  return (
    <article>
      <div className="pr-detail">
        {/*---------------分類選單-----------------------------------------------------*/}
        <div className="pr-list-nbr">
          <div className="pr-list-nbr-a">
            <a href="#/">男士精品</a>
            <a href="#/">女士精品</a>
            <a href="#/">鞋款</a>
            <a href="#/">配件與腕錶</a>
          </div>
          <div className="div-wrap">
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
        {/*---------------分類選單-----------------------------------------------------*/}
        <div className="pr-detail-list">
          <div className="pr-detail-list-img">
            <img
              className="pr-detail-img"
              src="./product_img/M021J_BK019.jpg"
              alt=""
            />
          </div>
          <div className="pr-detail-p">
          <i class="pr-detail-p-i fa-regular fa-heart fa-2x"></i>
            <ul>
              <li>#最新款式</li>
              <li className="li-h2">防風飛行夾克</li>
              <li>灰色科技棉防撕裂物料</li>
              <li>編號:M021J_BK025</li>
            </ul>
            <div>

            <div className="primary-navigation">
            <p>尺寸:</p>
            <div role="navigation" className="primary-navigation">
              <ul>
                <li>
                  <a href="#/">
                    請選擇 <i className="fa-solid fa-angle-down"></i>
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a href="#/">Small</a>
                    </li>
                    <li>
                      <a href="#/">Middle</a>
                    </li>
                    <li>
                      <a href="#/">Large</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
export default ProductsDetail;
