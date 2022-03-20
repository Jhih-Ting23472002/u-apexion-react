import React from 'react';
import './ProductsList.scss';
import ListCards from './components/ListCards';
import ProductsConfig from './ProductsConfig';
import { useState, useEffect } from 'react';

function ProductsList() {
  const [ProductList, setProductList] = useState([]);
  const [AllList, setAllList] = useState('');
  const [ProductNavbar, setProductNavbar] = useState('/men');
  const [ListImg, setListImg] = useState('./product_img/cover5_1440_1200.jpeg');

  useEffect(() => {
    (async function () {
      const response = await fetch(ProductsConfig.MEN_List);
      const menList = await response.json();
      setProductList(menList.allMen);
      const a='COUNT(1)';
      setAllList(menList.allRows[a]);
      console.log(menList.allRows);
    })();
  }, []);

  const ProductMenList = async function () {
    const responseMen = await fetch(ProductsConfig.MEN_List);
    const menList = await responseMen.json();
    setProductList(menList.allMen);
    
  };
  const ProductWomanList = async function () {
    const responseWoman = await fetch(ProductsConfig.Woman_List);
    const WomanList = await responseWoman.json();
    setProductList(WomanList);
  };
  const ProductShoesList = async function () {
    const responseShoes = await fetch(ProductsConfig.Shoes_List);
    const ShoesList = await responseShoes.json();
    setProductList(ShoesList);
  };

  return (
    <article>
      <div className="pr-list">
        {/*---------------分類選單-----------------------------------------------------*/}
        <div className="pr-list-nbr">
          <div className="pr-list-nbr-a">
            <a
              href="#men"
              onClick={() => {
                setProductNavbar('#men');
                ProductMenList();
                const newImg = './product_img/cover5_1440_1200.jpeg';
                setListImg(newImg);
              }}
              className={ProductNavbar === '#men' ? 'active' : ''}
            >
              男士精品
            </a>
            <a
              href="#woman"
              onClick={() => {
                setProductNavbar('#woman');
                ProductWomanList();
                const newImg = './product_img/624946556.jpeg';
                setListImg(newImg);
              }}
              className={ProductNavbar === '#woman' ? 'active' : ''}
            >
              女士精品
            </a>
            <a
              href="#Shoes"
              onClick={() => {
                setProductNavbar('#Shoes');
                ProductShoesList();
                const newImg = './product_img/sneaker-release.jpg';
                setListImg(newImg);
              }}
              className={ProductNavbar === '#Shoes' ? 'active' : ''}
            >
              鞋款
            </a>
            <a href="#watch">配件與腕錶</a>
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
        {/* ------------------------*/}
        <div className="pr-list-img">
          <img src={ListImg} alt="" />
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
          <p>{AllList}件商品</p>
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
          {ProductList.map((newProduct, i) => {
            const {
              sid,
              product_name,
              material,
              product_img,
              image_photo,
              price,
            } = newProduct;
            return (
              <ListCards
                key={sid}
                sid={sid}
                product_name={product_name}
                material={material}
                product_img={product_img}
                image_photo={image_photo}
                price={price}
              />
            );
          })}
        </div>
      </div>
    </article>
  );
}
export default ProductsList;
