import React, { useEffect, useState, useContext } from 'react';
import '../productsDetail.scss';
import ProductsConfig from '../ProductsConfig';
import { useParams } from 'react-router-dom';
import CartQuantity from '../CartQuantity';

function DetailList(props) {
  const { cartTotal, setCartTotal } = useContext(CartQuantity);
  const [money, setMoney] = useState(false);

  const [total, setTotal] = useState(1);
  const [twd, setTwd] = useState(0);
  const price = props.product.price;
  const img = props.product.product_img;
  const name = props.product.product_name;
  const pid = props.product.sid;
  const { sid } = useParams();

  const { setProductDetailList } = props;
  function onTotal(e) {
    setTotal(e.target.value);
  }

  function addCart() {
    setProductDetailList(function (prevData) {
      setCartTotal(cartTotal + total);
      return [{ price, img, name, pid, total }, ...prevData];
    });
  }
  useEffect(() => {
    (async function () {
      const response = await fetch(
        'http://localhost:3001/product/api/DailyForeignExchangeRates'
      );
      const ExchangeRates = await response.json();
      setTwd(ExchangeRates.USDTWD['Exrate']);
      console.log(ExchangeRates.USDTWD['Exrate']);
    })();
  }, []);

  useEffect(() => {
    setTotal(1);
    setMoney(false)
  }, [sid]);

  const moneyClickHandler = e => {
    setMoney(true);
  };


  return (
    <>
      <div className="pr-detail-list">
        <div className="pr-detail-list-img">
          <img
            className="pr-detail-img"
            src={`http://localhost:3001/img/product_img/${
              props.product?.product_img ?? 'www.jpg'
            }`}
            alt=""
          />
        </div>
        <div className="pr-detail-p">
          <i className="pr-detail-p-i fa-regular fa-heart"></i>
          <ul>
            <li>#最新款式</li>
            <li className="li-h2">
              {props.product?.product_name ?? '重新整理'}
            </li>
            <li>{props.product?.material ?? '灰色科技棉防撕裂物料'}</li>
            <li>{props.product?.material_code ?? '編號:M021J_BK025'}</li>
          </ul>
          <div>
            <div className="primary-navigation">
              <p>尺寸 :</p>
              <div role="navigation" className="primary-navigation">
                <select class="form-control info-select">
                  <option value="請選擇">請選擇</option>
                  <option value="Small">Small</option>
                  <option value="Middle">Middle</option>
                  <option value="Large">Large</option>
                </select>
              </div>
              <p className="pr-price">US${props.product?.price ?? '0'}</p>
              <div
                className="pr-price-display"

                onClick={moneyClickHandler}
              >
                <div
                  className="pr-price-tw"
                  style={{ opacity: money === true ? '0' : '1' }}
                >
                  試算台幣
                </div>
                <div
                  className="pr-price-tw2"
                  style={{ opacity: money === true ? '1' : '0' }}
                >
                  約NTD:{Math.floor(props.product.price * twd)}
                </div>
              </div>
            </div>
            <div className="pr-detail-quantity">
              <span>
                <label className="v_middle">數量</label>
                <input
                  type="text"
                  maxLength="2"
                  value={total}
                  onChange={onTotal}
                />
                <div
                  className="minus"
                  onClick={() => {
                    if (total - 1 >= 1) setTotal(total - 1);
                  }}
                >
                  <svg
                    className="plus-svg"
                    viewBox="0 0 15 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 7.5H10.5"
                      stroke="#000001"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 1H4C2.34315 1 1 2.34315 1 4V11C1 12.6569 2.34315 14 4 14H11C12.6569 14 14 12.6569 14 11V4C14 2.34315 12.6569 1 11 1Z"
                      stroke="#000001"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div
                  className="plus"
                  onClick={() => {
                    if (total !== 5) setTotal(total + 1);
                  }}
                >
                  <svg
                    className="plus-svg"
                    viewBox="0 0 15 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 4.5V10.5"
                      stroke="#000001"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.5 7.5H10.5"
                      stroke="#000001"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 1H4C2.34315 1 1 2.34315 1 4V11C1 12.6569 2.34315 14 4 14H11C12.6569 14 14 12.6569 14 11V4C14 2.34315 12.6569 1 11 1Z"
                      stroke="#000001"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </span>
            </div>
          </div>
          <button className="pr-detail-button" onClick={() => addCart()}>
            加入購物車
          </button>
          <span className="pr-detail-list-detail">
            <p>
              <label className="p_middle">描述</label>
              <br />
              這款針織毛線衫以圖案設計演繹雋永的單品。此款式以灰色科技棉、馬海毛和羊駝毛提花製作，並以品牌經典的栗子主題圖案為特色。底部綴以「DIOR」刺繡，而棱紋飾面為衣領、袖口和下擺帶來對比元素。這款毛線衫設計時尚而精緻，可配搭任何牛仔褲或長褲，展現當代造型。
              <br />
              前胸綴以「CD Heart」貼布
              <br />
              棱紋圓領配 V 領縫線
            </p>
          </span>
        </div>
      </div>
    </>
  );
}
export default DetailList;
