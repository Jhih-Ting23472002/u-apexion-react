import './ticket.css';
import stepCircle from './img/stepCircle.png';
import stepCircleMb from './img/stepCircle-mb.png';
import { useEffect, useState } from 'react';

function TicketTrip() {
  const [tripData, setTripData] = useState([]);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        'http://localhost:3001/ticket-trip/api/plant-list'
      );
      const tripDatas = await response.json();
      setTripData(tripDatas);
      console.log(tripDatas);
    })();
  }, []);

  const StarsingHandle = async function () {
    const response = await fetch(
      'http://localhost:3001/ticket-trip/api/starsing-list'
    );
    const tripDatas = await response.json();
    setTripData(tripDatas);
  };

  const PlantMovieHandle = async function () {
    const response = await fetch(
      'http://localhost:3001/ticket-trip/api/plant-list'
    );
    const tripDatas = await response.json();
    setTripData(tripDatas);
  };

  let moveDistance = 0;
  moveDistance = distance * -16;
  //距離怎麼設定?

  const toRight = function () {
    setDistance(distance + 1);
  };

  const toLeft = function () {
    setDistance(distance - 1);
  };

  console.log(moveDistance);
  console.log(distance);

  useEffect(() => {}, [tripData, distance]);

  console.log(tripData);

  return (
    <>
      <div className="ticket-container">
        <div className="step-circle">
          <img className="step-circle-img" src={stepCircle} alt="" />
          <img className="step-circle-mb" src={stepCircleMb} alt="" />
          <div className="ticket-steps">
            <p>STEP</p>
            <p>1</p>
          </div>
        </div>
        <div className="ticket-trip">
          <div className="ticket-trip-wrap">
            <div
              onClick={() => {
                toLeft();
              }}
              className="ticket-trip-prev-btn"
            >
              <i className="fas fa-angle-left"></i>
            </div>
            <div
              onClick={() => {
                toRight();
              }}
              className="ticket-trip-next-btn"
            >
              <i className="fa-solid fa-angle-right"></i>
            </div>
            <h2>請選擇 旅遊行程</h2>
            <p>Select a travel destionation,please</p>
            <div className="ticket-trip-list-btn">
              <button
                onClick={() => {
                  StarsingHandle();
                }}
                className="sign-list-btn"
              >
                星座旅遊
              </button>
              <button
                onClick={() => {
                  PlantMovieHandle();
                }}
                className="movie-list-btn"
              >
                電影主題旅遊
              </button>
            </div>
            <div className="ticket-trip-card-area">
              <div
                className="ticket-trip-card-wrap"
                style={{ transform: `translateX(${moveDistance}%)` }}
              >
                {tripData.map((v, i) => {
                  return (
                    <>
                      <div className="ticket-trip-card">
                        <div className="ticket-trip-days">{v.travel_day}日</div>
                        <div className="ticket-trip-card-head">
                          <img src={'./travelimg/' + v.travel_image} alt="" />
                        </div>
                        <div className="ticket-trip-card-body">
                          <div className="ticket-title">
                            <h3>{v.travel_name}</h3>
                            <h3>${v.travel_price}</h3>
                          </div>
                          <p>{v.travel_description}</p>
                        </div>
                        <div className="ticket-trip-card-footer">
                          <button className="tickit-choose-btn">
                            選擇行程
                          </button>
                          <button className="trip-detail-btn">
                            查看詳細行程
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}

                {/* <div className="ticket-trip-card">
                  <div className="ticket-trip-days">5日</div>
                  <div className="ticket-trip-card-head">
                    <img src={trip01} alt="" />
                  </div>
                  <div className="ticket-trip-card-body">
                    <div className="ticket-title">
                      <h3>泰坦星</h3>
                      <h3>$1,000</h3>
                    </div>
                    <p>
                      我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。謹慎地來說，我們我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。謹慎地來說，我們我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。謹慎地來說，我們...
                    </p>
                  </div>
                  <div className="ticket-trip-card-footer">
                    <button className="tickit-choose-btn">選擇行程</button>
                    <button className="trip-detail-btn">查看詳細行程</button>
                  </div>
                </div>
                <div className="ticket-trip-card">
                  <div className="ticket-trip-days">5日</div>
                  <div className="ticket-trip-card-head">
                    <img src={trip02} alt="" />
                  </div>
                  <div className="ticket-trip-card-body">
                    <div className="ticket-title">
                      <h3>潘朵拉星球</h3>
                      <h3>$1,000</h3>
                    </div>
                    <p>
                      我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。謹慎地來說，我們我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。謹慎地來說，我們我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。謹慎地來說，我們...
                    </p>
                  </div>
                  <div className="ticket-trip-card-footer">
                    <button className="tickit-choose-btn">選擇行程</button>
                    <button className="trip-detail-btn">查看詳細行程</button>
                  </div>
                </div>
                <div className="ticket-trip-card">
                  <div className="ticket-trip-days">5日</div>
                  <div className="ticket-trip-card-head">
                    <img src={trip03} alt="" />
                  </div>
                  <div className="ticket-trip-card-body">
                    <div className="ticket-title">
                      <h3>絕地救援</h3>
                      <h3>$1,000</h3>
                    </div>
                    <p>
                      我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。謹慎地來說，我們我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。謹慎地來說，我們我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。謹慎地來說，我們...
                    </p>
                  </div>
                  <div className="ticket-trip-card-footer">
                    <button className="tickit-choose-btn">選擇行程</button>
                    <button className="trip-detail-btn">查看詳細行程</button>
                  </div>
                </div> */}
              </div>
            </div>
            <a className="ticket-next" href="/">
              Next<i className="fa-solid fa-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default TicketTrip;
