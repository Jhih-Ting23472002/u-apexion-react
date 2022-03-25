import React, { useEffect, useState } from 'react';
import example from '../../img/example.png';
import { useCart } from '../../utils/useCart';
import ProductsConfig from '../../../Products/ProductsConfig';

const ProductCard = props => {
  const { productDetailList, setProductDetailList } = props; // 把props裡面的 state, setState 解構
  console.log(productDetailList);

  //const [list, updateList] = useState(productDetailList);

  function handleRemoveItem(event) {
    // remove 的 func
    const id = +event.target.getAttribute('data-id'); // getAttribute('data-id')是要給 button的id

    console.log({ id }); // 看看是否成功抓到id

    setProductDetailList(productDetailList.filter(v => v.id !== id));
    // filter(v => v.id !== id)) 這句話的意思是，只有return true 不相等的id會被保留，return false 相等的id會被刪除
    // filter(v => v.id === id)) 這句話的意思是，只有return true 相等的id會被保留 ，return false 不相等的id會被刪除


    // productDetailList(function (v) {
    //   return v.filter(item => item.id !== productDetailList.id);
    // });
  }

  // const handleRemoveItem = e => {
  //   updateList(list.filter(item => item.name !== name));
  // };

  return (
    <>
      {productDetailList.map(v => (
        <React.Fragment key={v.id}>
          {/* 用 React.Fragment  來給key的值 key={v.id} ，因為現在最外層不是<div>  */}
          <div className="cart separated-line"></div>
          <div className="cart cart-order-item d-flex">
            <div className="cart cart-img-div col-4">
              <img src={ProductsConfig.IMG_PATH + '/' + v.img} alt="" />
            </div>
            <div className="cart content-detail col-8 d-flex">
              <div className="content-detail-inside">
                <div className="content-detail-inside-top">
                  <h5 className="cart-product-name">{v.name}</h5>
                  <select className="cart-select">
                    <option>{v.total}</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="content-detail-inside-bottom">
                  <div className="cart-empty-place"></div>
                  <button
                    className="btn cart-remove-btn"
                    data-id={v.id} // button 要給他id，不然他不知道你的 id 是指誰～
                    onClick={handleRemoveItem} // 這樣 onClick 啟動handleRemoveItem 的時候 button 才抓得到id
                  >
                    remove
                  </button>
                  <div className="cart-order-money">${v.price * v.total}</div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default ProductCard;
