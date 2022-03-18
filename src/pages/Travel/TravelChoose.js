import React from 'react';
import './TravelChoose.css';
import { useEffect, useState } from 'react';

function TravelChoose() {
  const [TravelProduct, setTravelProduct] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        'http://localhost:3001/travel-choose/api/travel-product'
      );
      const TravelProduct = await response.json();
      setTravelProduct(TravelProduct);
      console.log(TravelProduct);
    })();
  }, []);
  return (
    <>
      <section className="py-5">
        <div className="container choosecontainer">
          <div className="position-relative">
            <div className="text-white px-3 pt-3 my-4">
              <div className="row align-items-center filters">
                <div className="col-12 col-sm-12 col-md-3 mb-3">
                  <select className="form-control w-100 choosesearch">
                    <option value="all">全部行程</option>
                    <option value="planet">星球之旅</option>
                    <option value="starsign">星座之旅</option>
                    <option value="moviescene">電影場景</option>
                  </select>
                </div>
                <div className="col-12 col-sm-12 col-md-3 mb-3">
                  <select className="form-control w-100 choosesearch">
                    <option>價格排序</option>
                    <option>價格由少至多</option>
                    <option>價格由多至少</option>
                  </select>
                </div>
                <div className="col-12 col-sm-12 col-md-3 mb-3">
                  <select className="form-control w-100 choosesearch">
                    <option>天數排序</option>
                    <option>天數由少至多</option>
                    <option>天數由多至少</option>
                  </select>
                </div>
                <div className="col-12 col-sm-6 col-md-3 mb-3">
                  <input
                    className="choosesearch form-control"
                    placeholder="產品名/關鍵字/產品代碼"
                  />
                </div>
              </div>
            </div>
            <div className="list">
              {TravelProduct.map((c, i) => {
                return (
                  <React.Fragment key={i}>
                    <div className="item pl-4">
                      <div className="d-flex align-items-stretch mb-5">
                        <div className="col-sm-6 col-md-8">
                          <div className="row align-items-center">
                            <div className="col-md-8 info">
                              <h4 className="chooseh4 pb-2 border-bottom">
                                {c.travel_name}
                              </h4>
                              <p className="choosep">{c.travel_description}</p>
                              <ul className="chooseitinerary">
                                <li>類別:{c.travel_tags}</li>
                                <li>產品代碼:{c.travel_number}</li>
                                <li>去程:{c.travel_outbound}</li>
                                <li>回程:{c.travel_inbound}</li>
                              </ul>
                            </div>
                            <div className="col-md-4 text-md-center choosedetails">
                              <p className="day">{c.travel_day}</p>
                              <p className="price">${c.travel_price}</p>
                              <button className="itemBuyButton">Details</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4 image">
                          <img
                            src={
                              './travelimg/travelproductimg/oz.jpg' +
                              c.travel_image
                            }
                            loading="lazy"
                            className="img-fluid rounded"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <div className="morechoose">
        <button className="tourButton">更多行程</button>
      </div>
      <hr className="generalHr" />
    </>
  );
}

export default TravelChoose;
