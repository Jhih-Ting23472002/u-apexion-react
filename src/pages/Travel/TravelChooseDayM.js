import React from 'react';
import './TravelChooseDayM.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function TravelChooseDM() {
  const [TravelChooseM, setTravelChooseM] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        'http://localhost:3001/travel-choose-dmf/api/travel-choosem'
      );
      const TravelChooseM = await response.json();
      setTravelChooseM(TravelChooseM);
      console.log(TravelChooseM);
    })();
  }, []);

  useEffect(() => {
    //開啟載入資料指示
    setLoading(true);

    //載入資料
    setTravelChooseM([]);
    //X秒後,開啟載入資料指示
    setTimeout(() => setLoading(false), 2500);
  }, []);

  const spinner = (
    <>
      <div class="centerWrap d-none d-xl-block">
        <div class="bb8"></div>
        <span class="quote"></span>
      </div>
      <div class="talign-center d-block d-xl-none">
        <div
          class="choosespinner icon-choosespinner-5"
          aria-hidden="true"
        ></div>
      </div>
    </>
  );

  const display = (
    <>
      <div className="container choosecontainer">
        <div className="position-relative">
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
                            <p className="choosep">{c.travel_description}</p>
                            <ul className="chooseitinerary">
                              <li>類別:{c.travel_tags}</li>
                              <li>產品代碼:{c.travel_number}</li>
                              <li>去程:{c.travel_outbound}</li>
                              <li>回程:{c.travel_inbound}</li>
                            </ul>
                          </div>
                          <div className="col-md-4 text-md-center choosedetails">
                            <p className="day">旅遊天數:{c.travel_day}days</p>
                            <p className="price">${c.travel_price}</p>
                            <button className="itemBuyButton">Details</button>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 image">
                        <img
                          src={'./travelimg/travelproductimg/' + c.travel_image}
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
    </>
  );

  return (
    <>
      <div className="container choosecontainer">
        <div className="position-relative">
          <div className="text-white px-3 pt-3 my-5">
            <div className="row align-items-center filters">
              <div className="sortButton col-12 col-sm-12 col-md-3 mb-3">
                <Link to="/travel-choose">
                  <button className="sortitemBuyButton">全部行程</button>
                </Link>
              </div>
              <div className="sortButton col-12 col-sm-12 col-md-3 mb-3">
                <Link to="/travelchoose-pricef">
                  <button className="sortitemBuyButton">價格:低到高</button>
                </Link>
                <Link to="/travelchoose-pricem">
                  <button className="sortitemBuyButton">價格:高到低</button>
                </Link>
              </div>
              <div className="sortButton col-12 col-sm-12 col-md-3 mb-3">
                <Link to="/travelchoose-dayf">
                  <button className="sortitemBuyButton">天數:少至多</button>
                </Link>
                <Link to="/travelchoose-daym">
                  <button className="sortitemBuyButtondm">天數:多至少</button>
                </Link>
              </div>
              <div className="choosesearch col-12 col-sm-12 col-md-3 mb-3">
                <section className="webdesigntuts-workshopchoose">
                  <form action="" method="">
                    <input
                      type="search"
                      placeholder="請輸入產品名/關鍵字/產品代碼"
                      name="search"
                    />
                    <button>Search</button>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      {loading ? spinner : display}
      <hr className="generalHr chr" />
    </>
  );
}

export default TravelChooseDM;
