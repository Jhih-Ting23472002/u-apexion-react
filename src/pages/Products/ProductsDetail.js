import React, { useEffect, useState } from 'react';
import './productsDetail.scss';
import DetailRecommend from './components/DetailRecommend';
import BrowsingHistory from './components/BrowsingHistory';
import DetailList from './components/DetailList';
import { useParams, Link } from 'react-router-dom';
import ProductsConfig from './ProductsConfig';

function ProductsDetail({ setProductDetailList }) {
  const { sid } = useParams();

  const [ProductDetail, setProductDetail] = useState([]);
  const [Storages, setStorage] = useState([]);
  const [product, setProduct] = useState({});
  // console.log(typeof Storages)

  //找到網址列的sid
  //const product = ProductDetail.find((v, i) => v.sid === parseInt(sid));

  useEffect(() => {
    (async function () {
      const response = await fetch(ProductsConfig.Product);
      const allDetail = await response.json();
      // console.log(allDetail);
      setProductDetail(allDetail);

      const newProduct = allDetail.find((v, i) => v.sid === parseInt(sid));
      setProduct(newProduct);
      const data = localStorage.getItem('productStorage')
        ? JSON.parse(localStorage.getItem('productStorage'))
        : {
            productLocalStorage: [],
          };

      data.productLocalStorage.push(newProduct);
      localStorage.setItem('productStorage', JSON.stringify(data));

      setStorage(data);
    })();
  }, []);

  useEffect(() => {
    if (ProductDetail.length === 0) return;

    const newProduct = ProductDetail.find((v, i) => v.sid === parseInt(sid));
    setProduct(newProduct);
    const data = localStorage.getItem('productStorage')
      ? JSON.parse(localStorage.getItem('productStorage'))
      : {
          productLocalStorage: [],
        };

    data.productLocalStorage.push(newProduct);
    localStorage.setItem('productStorage', JSON.stringify(data));

    setStorage(data);
  }, [sid]);
  //歷史紀錄
  //useEffect(() => {
  // if (!product.sid) return;

  // const data = localStorage.getItem('productStorage')
  //   ? JSON.parse(localStorage.getItem('productStorage'))
  //   : {
  //       productLocalStorage: [],
  //     };
  // data.productLocalStorage.push(product);
  // localStorage.setItem('productStorage', JSON.stringify(data));
  // setStorage(data);
  //}, [product]);

  return (
    <article>
      <div className="pr-detail">
        {/*---------------分類選單-----------------------------------------------------*/}
        <div className="pr-list-nbr">
          <div className="pr-list-nbr-a">
            <a href="http://localhost:3000/products-list#men">男士精品</a>
            <a href="http://localhost:3000/products-list">女士精品</a>
            <a href="http://localhost:3000/products-list">鞋款</a>
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
        <DetailList product={product} />
        {/* 相關商品卡片開始 */}
        <div className="pr-detail-cards1">
          <h4>相關商品</h4>
          <DetailRecommend product={product} ProductDetail={ProductDetail} />
        </div>
        {/* 最近瀏覽卡片開始 */}
        <div className="pr-detail-cards1">
          <h4>瀏覽紀錄</h4>
          {/* <BrowsingHistory Storages={Storages} /> */}
        </div>
      </div>
    </article>
  );
}
export default ProductsDetail;
