import React from 'react';
import './TravelChoose.css';
import { useEffect, useState } from 'react';

function TravelChoosePF() {
  const [TravelChooseM, setTravelChooseF] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        'http://localhost:3001/travel-choose-pmf/api/travel-choosef'
      );
      const TravelChooseF = await response.json();
      setTravelChooseF(TravelChooseF);
      console.log(TravelChooseF);
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
                  <a href="/travel-choose">
                    <button className="itemBuyButton">全部行程</button>
                  </a>
                </div>
                <div className="col-12 col-sm-12 col-md-3 mb-3">
                  <a href="/travelchoose-pricef">
                    <button className="itemBuyButton">價格由少至多</button>
                  </a>
                  <a href="/travelchoose-pricem">
                    <button className="itemBuyButton">價格由多至少</button>
                  </a>
                </div>
                <div className="col-12 col-sm-12 col-md-3 mb-3">
                  <a href="/travelchoose-dayf">
                    <button className="itemBuyButton">天數由少至多</button>
                  </a>
                  <a href="/travelchoose-daym">
                    <button className="itemBuyButton">天數由多至少</button>
                  </a>
                </div>
                <div className="choosesearch col-12 col-sm-12 col-md-3 mb-3">
                  <section className="webdesigntuts-workshopchoose">
                    <form action="" method="">
                      <input
                        type="search"
                        placeholder="請輸入產品名/關鍵字/產品代碼 ex.巨蟹座 or 火星 or UAT-001"
                        name="search"
                      />
                      <button>Search</button>
                    </form>
                  </section>
                </div>
              </div>
            </div>
            <div className="list">
              {TravelChooseM.map((c, i) => {
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
                              <p className="choosep">
                                Pistachio stuffed kofta balls served with a
                                persian style tomato sauce.
                              </p>
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
                              './travelimg/travelproductimg/' + c.travel_image
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
      <hr className="generalHr" />
    </>
  );
}

export default TravelChoosePF;
