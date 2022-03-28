import React, { useContext } from 'react';
import '../Products.scss';
import ProductsConfig from '../ProductsConfig';
import { Link, withRouter } from 'react-router-dom';
import CartQuantity from '../CartQuantity';

function Recommend(props) {
  const { cartTotal, setCartTotal } = useContext(CartQuantity);

  //購物車用
  const { setProductDetailList } = props;
  const price = props.price;
  const img = props.product_img;
  const name = props.product_name;
  const pid = props.sid;
  const total = 1;

  function addCart() {
    setProductDetailList(function (prevData) {
      setCartTotal(cartTotal + 1);
      return [{ price, img, name, pid, total }, ...prevData];
    });
  }

  return (
    <>
      <div className="pr-card">
        <Link to={'/product-detail/' + props.sid} className="pr-img">
          <img src={ProductsConfig.IMG_PATH + '/' + props.product_img} alt="" />
        </Link>
        <div className="pr-content">
          <h4>{props.product_name}</h4>
          <p className="pr-p">$</p>
          <p>{props.price}</p>
          <p className="pr-p-p">{props.material}</p>
          {/* <button className="pr-card-button" onClick={() => addCart()}></button> */}
          <input
            type="button"
            value="+"
            name="Recommend"
            className="pr-card-button"
            onClick={() => addCart()}
          />
        </div>
      </div>
    </>
  );
}
export default withRouter(Recommend);
