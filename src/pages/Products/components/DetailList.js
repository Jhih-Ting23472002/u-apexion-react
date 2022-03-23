import React, { useEffect, useState } from 'react';
import '../productsDetail.scss';
import ProductsConfig from '../ProductsConfig';


function DetailList(props) {

  return (
    <>
      <div className="pr-detail-list">
        <div className="pr-detail-list-img">
          <img
            className="pr-detail-img"
            src={`http://localhost:3001/img/product_img/${props.product?.product_img??'M021S_BK004.jpeg'}`}
            alt=""
          />
        </div>
        <div className="pr-detail-p">
          <i className="pr-detail-p-i fa-regular fa-heart"></i>
          <ul>
            <li>#最新款式</li>
            <li className="li-h2">{props.product?.product_name??"重新整理"}</li>
            <li>{props.product?.material??'灰色科技棉防撕裂物料'}</li>
            <li>{props.product?.material_code??'編號:M021J_BK025'}</li>
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

                {/* <ul>
                  <li>
                    <a href="#/">
                      請選擇 <i className="fa-solid fa-angle-down"></i>
                    </a>
                    <ul className="dropdown">
                      <li>
                        <a href="#/" >Small</a>
                      </li>
                      <li>
                        <a href="#/">Middle</a>
                      </li>
                      <li>
                        <a href="#/">Large</a>
                      </li>
                    </ul>
                  </li>
                </ul> */}
              </div>
              <p className="pr-price">售價:   {props.product?.price??'7584'}</p>
            </div>
            <div className="pr-detail-quantity">
              <span>
                <label className="v_middle">數量 :</label>
                <input type="text" maxLength="2" defaultValue="1" />
                <a className="minus" href="#/">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
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
                </a>
                <a className="plus" href="#/">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
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
                </a>
              </span>
            </div>
          </div>
          <button className="pr-detail-button">加入購物車</button>
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
