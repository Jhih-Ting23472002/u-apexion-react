import React from 'react';
import './productsDetail.scss';
import DetailRecommend from './components/DetailRecommend';
import BrowsingHistory from './components/BrowsingHistory';
import DetailList from './components/DetailList';

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
                <input id="search_submit" defaultValue="" type="submit" />
              </form>
            </div>
          </div>
        </div>
        {/*---------------商品資訊-----------------------------------------------------*/}
        <DetailList />
        {/* 相關商品卡片開始 */}
        <div className="pr-detail-cards1">
          <h4>相關商品</h4>
          <DetailRecommend />
        </div>
        {/* 最近瀏覽卡片開始 */}
        <div className="pr-detail-cards1">
          <h4>瀏覽紀錄</h4>
          <BrowsingHistory />
        </div>
      </div>
    </article>
  );
}
export default ProductsDetail;
