import './ticket.css';
import stepCircle from './img/stepCircle.png';
import stepCircleMb from './img/stepCircle-mb.png';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function TicketTrip(props) {
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

  useEffect(() => {}, []);

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
  moveDistance = distance * -16.8;

  const toRight = function () {
    setDistance(distance + 1);
    if (distance >= tripData.length - 3) {
      setDistance(tripData.length - 3);
    }
  };

  const toLeft = function () {
    setDistance(distance - 1);
    if (distance <= 0) {
      setDistance(0);
    }
  };

  console.log(moveDistance);
  console.log(distance);
  console.log(tripData.length - 3);

  useEffect(() => {}, [
    tripData,
    distance,
    props.setTripSelected,
    props.setTripDays,
    props.setTripPrice,
  ]);

  console.log(tripData);

  function tripHandler(e) {
    console.log(e);
    console.log(e.target.parentNode.parentNode);
    console.log(
      e.target.parentNode.previousSibling.firstChild.firstChild.innerHTML
    );
    console.log(
      e.target.parentNode.previousSibling.firstChild.lastChild.innerHTML
    );
    console.log(
      e.target.parentNode.parentNode.firstChild.innerHTML.slice(0, 1)
    );
    props.setTripSelected(
      e.target.parentNode.previousSibling.firstChild.firstChild.innerHTML
    );

    props.setTripDays(
      e.target.parentNode.parentNode.firstChild.innerHTML.slice(0, 1)
    );

    props.setTripPrice(
      e.target.parentNode.previousSibling.firstChild.lastChild.innerHTML
    );
    document.querySelectorAll('.ticket-trip-card').forEach(v => {
      v.style.border = 'none';
    });

    e.target.parentNode.parentNode.style.border = '5px solid #05F2F2';
  }

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
              className={
                distance === 0
                  ? 'ticket-trip-prev-btn disabled'
                  : 'ticket-trip-prev-btn'
              }
            >
              <i className="fas fa-angle-left"></i>
            </div>
            <div
              onClick={() => {
                toRight();
              }}
              className={
                distance === tripData.length - 3
                  ? 'ticket-trip-next-btn disabled'
                  : 'ticket-trip-next-btn'
              }
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
                    <React.Fragment key={i}>
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
                          <button
                            onClick={e => {
                              tripHandler(e);
                            }}
                            className="tickit-choose-btn"
                          >
                            選擇行程
                          </button>
                          <button className="trip-detail-btn">
                            查看詳細行程
                          </button>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
            <Link to="/ticket-date-choose" className="ticket-next">
              Next<i className="fa-solid fa-right-long"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default TicketTrip;
