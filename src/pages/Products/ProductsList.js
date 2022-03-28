import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductsList.scss';
import ListCards from './components/ListCards';
import ProductsConfig from './ProductsConfig';
import { useState, useEffect } from 'react';

function ProductsList() {
  // 1. 從伺服器來的原始資料
  const [ProductList, setProductList] = useState([]);
  // 2. 用於網頁上經過各種處理(排序、搜尋、過濾)後的資料
  const [displayProducts, setDisplayProducts] = useState([]);

  const [AllList, setAllList] = useState('');
  const [ProductNavbar, setProductNavbar] = useState('#men');
  const [ListImg, setListImg] = useState('./product_img/cover5_1440_1200.jpeg');
  const [searchTerm, setSearchTerm] = useState('');

  const [colourType, setColourType] = useState('');
// console.log(colourType);


  useEffect(() => {
    (async function () {
      const response = await fetch(ProductsConfig.MEN_List);
      const menList = await response.json();
      setProductList(menList.allMen);
      const a = 'COUNT(1)';
      setAllList(menList.allRows[a]);
      // console.log(menList.allRows);
    })();
  }, []);

  const ProductMenList = async function () {
    const responseMen = await fetch(ProductsConfig.MEN_List);
    const menList = await responseMen.json();
    setProductList(menList.allMen);
    setDisplayProducts(menList.allMen);
    const a = 'COUNT(1)';
    setAllList(menList.allRows[a]);
  };
  const ProductWomanList = async function () {
    const responseWoman = await fetch(ProductsConfig.Woman_List);
    const WomanList = await responseWoman.json();
    setProductList(WomanList.allWoman);
    setDisplayProducts(WomanList.allWoman);
    const a = 'COUNT(1)';
    setAllList(WomanList.allRows[a]);
  };
  const ProductShoesList = async function () {
    const responseShoes = await fetch(ProductsConfig.Shoes_List);
    const ShoesList = await responseShoes.json();
    setProductList(ShoesList.allShoes);
    setDisplayProducts(ShoesList.allShoes);
    const a = 'COUNT(1)';
    setAllList(ShoesList.allRows[a]);
  };
  //顏色分類
  // function colourCart(e){
  //   setColourType(e.target.value);
  //   const c = colourType;
  //   setProductList(ProductList.filter((v) => {return c == v.style}));
  //   console.log(c)
  // }

  const handleSort = (products, colourType) => {
    let newProducts = [...ProductList]
    if (colourType === '1') {
        newProducts = [...newProducts].sort((a, b) => a.price - b.price)
      }
    console.log(newProducts)
    return newProducts
  };

  useEffect(() => {
    let newProducts = [];
    // 處理排序
    newProducts = handleSort(newProducts, colourType);
    setProductList(newProducts);
  }, [colourType]);

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
                  placeholder="請輸商品關鍵字..."
                  onChange={event => {
                    setSearchTerm(event.target.value);
                    // console.log(event.target.value);
                  }}
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
          <p>商品{AllList}項</p>
          <div className="primary-navigation">
            {/* <div role="navigation" className="primary-navigation">
              <ul>
                <li>
                <option value="">價格排序</option><i className="fa-solid fa-angle-down"></i>
                  <ul className="dropdown">
                    <li>
                    <option value="1">由低至高</option>
                    </li>
                    <li>
                    <option value="2">由高至低</option>
                    </li>
                  </ul>
                </li>
                <li>
                <option value="">顏色</option><i className="fa-solid fa-angle-down"></i>
                  <ul className="dropdown">
                    <li>
                    <option value="3">黑色</option>
                    </li>
                    <li>
                    <option value="ˋ">白色</option>
                    </li>
                  </ul>
                </li>
              </ul>
    
            </div> */}
            {/* <div>
              <select class="form-control info-select">
                <option value="">價格排序</option>
                <option value="1">由低至高</option>
                <option value="2">由高至低</option>
              </select>
            </div> */}
          </div>
          <div>
            <select
              class="form-control info-select"
              value={colourType}
              onChange={e => setColourType(e.target.value)}
            >
              <option selected value="">
                顏色
              </option>
              <option value="BK">黑色</option>
              <option value="WH">白色</option>
              <option value="GR">綠色</option>
            </select>
          </div>
        </div>
        {/* 卡片開始 */}
        <div className="pr-list-cards">
          {ProductList.filter(v => {
            if (v.product_name.includes(searchTerm)) {
              return v;
            }
          }).map((newProduct, i) => {
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
