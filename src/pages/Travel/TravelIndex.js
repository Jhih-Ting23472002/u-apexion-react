import React from 'react';
import './TravelIndex.css';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function TravelIndex() {
  const [TravelStarSign, setTravelStarSign] = useState([]);
  const [TravelPlanet, setTravelPlanet] = useState([]);
  const history = useHistory();

  useEffect(() => {
    (async function () {
      const response = await fetch(
        'http://localhost:3001/travel-index/api/travel-starsign'
      );
      const TravelStarSign = await response.json();
      setTravelStarSign(TravelStarSign);
      console.log(TravelStarSign);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        'http://localhost:3001/travel-index/api/travel-planet'
      );
      const TravelPlanet = await response.json();
      setTravelPlanet(TravelPlanet);
      console.log(TravelPlanet);
    })();
  }, []);

  function travelPage(e) {
    console.log(e);
    console.log(e.target.id);
    console.log('/travel-' + e.target.id);
    history.push('/travel-' + e.target.id);
  }

  return (
    <>
      <section>
        <div className="main-img">
          <div className="overlay">
            <h1>The Future is Here</h1>
            <h2>With U-APEXION you can teleport anywhere, any time.</h2>
          </div>

          <div className="search">
            <section className="webdesigntuts-workshop">
              <form action="" method="">
                <input
                  type="search"
                  placeholder="請輸入產品名/關鍵字/產品代碼 ex.巨蟹座 or 火星 or UAT-001"
                />
                <Link to="/travelchoose-UAS-004">
                  <button>Search</button>
                </Link>
              </form>
            </section>
          </div>
        </div>
      </section>

      <section className="trivia">
        <h2 className="triviah2">訓練活動花絮</h2>
        <hr className="generalHr" />
      </section>

      <Carousel slide={false} fade={false}>
        <Carousel.Item interval={2500}>
          <img
            className="travelindexcarousel d-block w-100 "
            src="./travelimg/indexcarouselimg/fun3.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h4 className="carouselh4">First slide label</h4>
            <p className="carouselp">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2500}>
          <img
            className="travelindexcarousel d-block w-100 "
            src="./travelimg/indexcarouselimg/fun2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h4 className="carouselh4">Second slide label</h4>
            <p className="carouselp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2500}>
          <img
            className="travelindexcarousel d-block w-100 "
            src="./travelimg/indexcarouselimg/fun1.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h4 className="carouselh4">Second slide label</h4>
            <p className="carouselp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2500}>
          <img
            className="travelindexcarousel d-block w-100 "
            src="./travelimg/indexcarouselimg/fun4.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h4 className="carouselh4">Second slide label</h4>
            <p className="carouselp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2500}>
          <img
            className="travelindexcarousel d-block w-100 "
            src="./travelimg/indexcarouselimg/fun5.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h4 className="carouselh4">Second slide label</h4>
            <p className="carouselp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2500}>
          <img
            className="travelindexcarousel d-block w-100 "
            src="./travelimg/indexcarouselimg/fun6.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h4 className="carouselh4">Second slide label</h4>
            <p className="carouselp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2500}>
          <img
            className="travelindexcarousel d-block w-100 "
            src="./travelimg/indexcarouselimg/fun7.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h4 className="carouselh4">Second slide label</h4>
            <p className="carouselp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="tour">
        <div className="tour-img">
          <div className="tourOverlay">
            <h2 className="tourOverlayh2">U-APEXION行程論壇區</h2>
            <div className="tourOverlayp">
              <p>快來看看關於行程旅程的文章感想吧</p>
            </div>
            <Link to="/posts-category/2">
              <button className="tourButton">Let's go</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="shopSection">
        <div className="shopHeader">
          <h2 className="shopHeaderh2">主打星座熱門行程</h2>
          <hr className="generalHr" />
        </div>

        <div className="shop">
          {TravelStarSign.map((t, i) => {
            return (
              <React.Fragment key={i}>
                <div className="shopItem smallItem">
                  <img
                    src={'./travelimg/travelproductimg/' + t.travel_image}
                    alt=""
                  />
                  <div className="informationShopItem">
                    <h2 className="informationShopItemh2">{t.travel_name}</h2>
                    <div className="travelrow">
                      <h2 className="informationShopItemprice">
                        ${t.travel_price}起
                      </h2>
                      <button className="travelitemBuyButton">Details</button>
                    </div>
                    <hr className="generalHrpart1" />
                    <p className="informationShopItemhp">
                      {t.travel_description}
                    </p>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        <div className="shopHeader">
          <h2 className="shopHeaderh2">主打星球熱門行程</h2>
          <hr className="generalHr" />
        </div>

        <div className="shop">
          {TravelPlanet.map((t, i) => {
            return (
              <React.Fragment key={i}>
                <div className="shopItem smallItem">
                  <img
                    src={'./travelimg/travelproductimg/' + t.travel_image}
                    alt=""
                  />
                  <div className="informationShopItem">
                    <h2 className="informationShopItemh2">{t.travel_name}</h2>
                    <div className="travelrow">
                      <h2 className="informationShopItemprice">
                        ${t.travel_price}起
                      </h2>
                      <button
                        onClick={e => {
                          travelPage(e);
                        }}
                        className="travelitemBuyButton"
                        id={t.travel_number}
                      >
                        Details
                      </button>
                    </div>
                    <hr className="generalHrpart1" />
                    <p className="informationShopItemhp">
                      {t.travel_description}
                    </p>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <div className="morechoose">
          <Link to="/travel-choose">
            <button className="tourButton">觀看更多行程</button>
          </Link>
        </div>
      </section>

      <section className="projectSection">
        <h2 className="projectSectionh2">Our Locations</h2>
        <hr className="generalHr" />
        <div className="projects">
          <div className="projectItem">
            <img src="./travelimg/taiwan.jpg" alt="" />
            <a className="projectItemDesc" target="_blank" href="#/">
              <p className="projectItemp">
                Taiwan (971花蓮縣新城鄉七星街79巷5號)
              </p>
            </a>
          </div>
          <div className="projectItem">
            <img src="./travelimg/usa.jpg" alt="" />
            <a className="projectItemDesc" target="_blank" href="#/">
              <p className="projectItemp">
                USA (1601 U-PX Parkway Houston,TX,USA 77058)
              </p>
            </a>
          </div>
        </div>
      </section>

      <hr className="generalHr" />
    </>
  );
}

export default TravelIndex;
