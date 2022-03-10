import React from 'react';
import './TravelIndex.css';
import Carousel from 'react-bootstrap/Carousel';

function TravelIndex() {
  return (
    <>
      <section>
        <div className="main-img" id="home">
          {/* The img itself is a background image */}
          <div className="overlay">
            <h1>The Future is Here</h1>
            <h2>With U-APEXION you can teleport anywhere, any time.</h2>
          </div>

          <div className="search">
            <section className="webdesigntuts-workshop">
              <form action="" method="">
                <input type="search" placeholder="What are you looking for?" />
                <button>Search</button>
              </form>
            </section>
          </div>
        </div>
      </section>

      <section className="trivia" id="trivia">
        <h3 id="trivia">訓練活動花絮</h3>
        <hr className="generalHr" />
      </section>

      <Carousel fade>
        <Carousel.Item>
          <img
            className="travel_carousel d-block w-100"
            src="./travelimg/fun2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="travel_carousel d-block w-100"
            src="./travelimg/fun2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="travel_carousel d-block w-100"
            src="./travelimg/fun2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section id="tour">
        <div id="tour-img">
          <div className="tourOverlay">
            <h2>U-APEXION站內論壇</h2>
            <a href="#/" target="_blank">
              <button className="tourButton">let's go</button>
            </a>
          </div>
        </div>
      </section>

      <section id="shopSection">
        <div className="shopHeader">
          <h3>主打星座熱門行程</h3>
          <hr className="generalHr" />
        </div>
        <div id="shop">
          <div className="shopPackage" id="onePack">
            <img src="./travelimg/s1.png" alt="" />
            <div className="informationPackage">
              <h3>Taurus(一月啟程)</h3>
              <hr className="generalHrpart1" />
              <h2>$19,999,999.99</h2>
              <p>
                This Package is for the not so common travelers and vacation to
                Mercury or Mars. Your first 2 nights at any hotel is free up to
                5 people. Teleporting will cost your $30 per person
              </p>
              <a href="#/" target="_self">
                <button className="itemBuyButton">Details</button>
              </a>
            </div>
          </div>
          <div className="shopPackage" id="twoPack">
            {/* Unintentional pun */}
            <img src="./travelimg/s2.png" alt="" />
            <div className="informationPackage">
              <h3>Scorpio(三月啟程)</h3>
              <hr className="generalHrpart1" />
              <h2>$29,999,999.99</h2>
              <p>
                This Package is for the business travelers. This includes
                Lesuire Package but you can go to where in our solor system. You
                also get free instant shipping for up to 100 packagas
              </p>
              <a href="#/" target="_blank">
                <button className="itemBuyButton">Details</button>
              </a>
            </div>
          </div>
          <div className="shopPackage" id="threePack">
            <img src="./travelimg/s10.png" alt="" />
            <div className="informationPackage">
              <h3>Gemini(五月啟程)</h3>
              <hr className="generalHrpart1" />
              <h2>$39,999,999.99</h2>
              <p>
                This Package is for the elite Travelers. This includes all the
                packages but you can go anywhere in our Milky Way Galaxy.
                Teleporting will you $300 per person outside our solar system.{' '}
              </p>
              <a href="#/" target="_blank">
                <button className="itemBuyButton">Details</button>
              </a>
            </div>
          </div>
        </div>

        <div className="shopHeader">
          <h3>主打星球熱門行程</h3>
          <hr className="generalHr" />
        </div>

        <div id="shop">
          <div className="shopItem" id="smallItem">
            <img src="./travelimg/titan.png" alt="" />
            <div className="informationShopItem">
              <h3>Titan(二月啟程)</h3>
              <div className="row">
                <h2>$49,999,999.99</h2>
                <a href="#/" target="_blank">
                  <button className="itemBuyButton">Details</button>
                </a>
              </div>
              <hr className="generalHrpart2" />
              <p></p>
            </div>
          </div>
          <div className="shopItem" id="smallItem">
            <img src="./travelimg/xandar.jpg" alt="" />
            <div className="informationShopItem">
              <h3>Xandar(四月啟程)</h3>
              <div className="row">
                <h2>$59,999,999.99</h2>
                <a href="./page3.html" target="_self">
                  <button className="itemBuyButton">Details</button>
                </a>
              </div>
              <hr className="generalHrpart2" />
              <p>
                在柴達星上有一片彷彿熱帶雨林般的魔幻森林，熱帶氣候造就了園區獨特的植物相，各式各樣的榕屬植物，巨大鳳蝶飛舞白榕之間，少有的桃花心木、柚木等熱帶樹種的人工林，享受熱帶森林浴生態之旅，都可在知本體驗。
              </p>
            </div>
          </div>
          <div className="shopItem" id="smallItem">
            <img src="./travelimg/mann.png" alt="" />
            <div className="informationShopItem">
              <h3>Mann(六月啟程)</h3>
              <div className="row">
                <h2>$69,999,999.99</h2>
                <a href="#/" target="_blank">
                  <button className="itemBuyButton">Details</button>
                </a>
              </div>
              <hr className="generalHrpart2" />
              <p></p>
            </div>
          </div>
        </div>
      </section>

      <section id="projectSection">
        <h2 id="locations">Our Locations</h2>
        <hr className="generalHr" />
        <div className="projects">
          <div className="projectItem">
            <img src="./travelimg/Taiwan.jpg" alt="" />
            <a className="projectItemDesc" target="_blank" href="#/">
              <p>Taiwan (971花蓮縣新城鄉七星街79巷5號) </p>
            </a>
          </div>
          <div className="projectItem">
            <img src="./travelimg/USA.jpg" alt="" />
            <a className="projectItemDesc" target="_blank" href="#/">
              <p>USA (1601 U-PX Parkway Houston,TX,USA 77058)</p>
            </a>
          </div>
        </div>
      </section>

      <hr className="generalHr" />
    </>
  );
}

export default TravelIndex;
