import React from 'react';
import './TravelIndex.css';
import Carousel from 'react-bootstrap/Carousel';

function TravelIndex() {
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
                <input type="search" placeholder="What are you looking for?" />
                <button>Search</button>
              </form>
            </section>
          </div>
        </div>
      </section>

      <section className="trivia">
        <h2 className="triviah2">訓練活動花絮</h2>
        <hr className="generalHr" />
      </section>

      <Carousel fade>
        <Carousel.Item interval={2000}>
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

        <Carousel.Item interval={2000}>
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

        <Carousel.Item interval={2000}>
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

        <Carousel.Item interval={2000}>
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

        <Carousel.Item interval={2000}>
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
      </Carousel>

      <section className="tour">
        <div className="tour-img">
          <div className="tourOverlay">
            <h2 className="tourOverlayh2">U-APEXION站內論壇</h2>
            <a href="#/" target="_blank">
              <button className="tourButton">let's go</button>
            </a>
          </div>
        </div>
      </section>

      <section className="shopSection">
        <div className="shopHeader">
          <h2 className="shopHeaderh2">主打星球熱門行程</h2>
          <hr className="generalHr" />
        </div>

        <div className="shop">
          <div className="shopItem smallItem">
            <img src="./travelimg/travelproductimg/s12.png" alt="" />
            <div className="informationShopItem">
              <h2 className="informationShopItemh2">Titan(二月啟程)</h2>
              <div className="travelrow">
                <h2 className="informationShopItemprice">$499,999起</h2>
                <a href="#/" target="_blank">
                  <button className="travelitemBuyButton">Details</button>
                </a>
              </div>
              <hr className="generalHrpart1" />
              <p className="informationShopItemhp">
                在柴達星上有一片彷彿熱帶雨林般的魔幻森林，熱帶氣候造就了園區獨特的植物相，各式各樣的榕屬植物...
              </p>
            </div>
          </div>
          <div className="shopItem smallItem">
            <img src="./travelimg/travelproductimg/s1.png" alt="" />
            <div className="informationShopItem">
              <h2 className="informationShopItemh2">Xandar(四月啟程)</h2>
              <div className="travelrow">
                <h2 className="informationShopItemprice">$599,999起</h2>
                <a href="./page3.html" target="_self">
                  <button className="travelitemBuyButton">Details</button>
                </a>
              </div>
              <hr className="generalHrpart1" />
              <p className="informationShopItemhp">
                在柴達星上有一片彷彿熱帶雨林般的魔幻森林，熱帶氣候造就了園區獨特的植物相，各式各樣的榕屬植物...
              </p>
            </div>
          </div>
          <div className="shopItem smallItem">
            <img src="./travelimg/travelproductimg/s10.png" alt="" />
            <div className="informationShopItem">
              <h2 className="informationShopItemh2">Mann(六月啟程)</h2>
              <div className="travelrow d-flex ">
                <h2 className="informationShopItemprice">$699,999起</h2>
                <a href="#/" target="_blank">
                  <button className="travelitemBuyButton">Details</button>
                </a>
              </div>
              <hr className="generalHrpart1" />
              <p className="informationShopItemhp">
                在柴達星上有一片彷彿熱帶雨林般的魔幻森林，熱帶氣候造就了園區獨特的植物相，各式各樣的榕屬植物...
              </p>
            </div>
          </div>
        </div>

        <div className="shopHeader">
          <h2 className="shopHeaderh2">主打星座熱門行程</h2>
          <hr className="generalHr" />
        </div>

        <div className="shop">
          <div className="shopItem smallItem">
            <img src="./travelimg/travelproductimg/titan.png" alt="" />
            <div className="informationShopItem">
              <h2 className="informationShopItemh2">Titan(二月啟程)</h2>
              <div className="travelrow">
                <h2 className="informationShopItemprice">$499,999起</h2>
                <a href="#/" target="_blank">
                  <button className="travelitemBuyButton">Details</button>
                </a>
              </div>
              <hr className="generalHrpart1" />
              <p className="informationShopItemhp">
                在柴達星上有一片彷彿熱帶雨林般的魔幻森林，熱帶氣候造就了園區獨特的植物相，各式各樣的榕屬植物...
              </p>
            </div>
          </div>
          <div className="shopItem smallItem">
            <img src="./travelimg/travelproductimg/xandar.jpg" alt="" />
            <div className="informationShopItem">
              <h2 className="informationShopItemh2">Xandar(四月啟程)</h2>
              <div className="travelrow">
                <h2 className="informationShopItemprice">$599,999起</h2>
                <a href="./page3.html" target="_self">
                  <button className="travelitemBuyButton">Details</button>
                </a>
              </div>
              <hr className="generalHrpart1" />
              <p className="informationShopItemhp">
                在柴達星上有一片彷彿熱帶雨林般的魔幻森林，熱帶氣候造就了園區獨特的植物相，各式各樣的榕屬植物...
              </p>
            </div>
          </div>
          <div className="shopItem smallItem">
            <img src="./travelimg/travelproductimg/mann.png" alt="" />
            <div className="informationShopItem">
              <h2 className="informationShopItemh2">Mann(六月啟程)</h2>
              <div className="travelrow d-flex ">
                <h2 className="informationShopItemprice">$699,999起</h2>
                <a href="#/" target="_blank">
                  <button className="travelitemBuyButton">Details</button>
                </a>
              </div>
              <hr className="generalHrpart1" />
              <p className="informationShopItemhp">
                在柴達星上有一片彷彿熱帶雨林般的魔幻森林，熱帶氣候造就了園區獨特的植物相，各式各樣的榕屬植物...
              </p>
            </div>
          </div>
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
                Taiwan (971花蓮縣新城鄉七星街79巷5號){' '}
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
