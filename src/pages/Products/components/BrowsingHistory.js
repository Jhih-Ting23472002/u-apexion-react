import React, { useEffect, useState } from 'react';
import '../productsDetail.scss';
import ProductsConfig from '../ProductsConfig';
import { Link } from 'react-router-dom';


function BrowsingHistory(props) {
  const { Storages } = props;
  const [Storage, setStorage] = useState([]);

  //console.log(typeof options)
  //console.log(props.Storages.productLocalStorage);

  // const sliceThree = Storage.slice(-3);
  //console.log(sliceThree);

  useEffect(() => {
    if (Storages.length !== 0) {
      const sliceThree = Storages.productLocalStorage.slice(-3);
      //console.log(sliceThree);
      setStorage(sliceThree);
    }
  }, [Storages.productLocalStorage]);

  return (
    <>
    {Storage.map((v,)=> (
      <div key={v.sid} className="col-md-4">
        <div className="card pr-card mb-5">
          <img
            className="card-img-top"
            src={ProductsConfig.IMG_PATH + '/' + v.product_img}
            alt=""
          />
          <div className="card-body">
            <p className="card-text mb-3">{v.product_name}</p>
            <p className="card-text">{v.material}</p>
          </div>
        </div>
      </div>
    ))}
     
    </>
  );
}
export default BrowsingHistory;
